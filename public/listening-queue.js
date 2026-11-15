export function chunkText(text) {
  const parts = [];
  while (text.length > 220) {
    let end = Math.max(text.lastIndexOf(' ', 219), text.lastIndexOf('\n', 219)) + 1 || 220;
    if (/[\uD800-\uDBFF]/.test(text[end - 1])) end--;
    parts.push(text.slice(0, end)); text = text.slice(end);
  }
  if (text) parts.push(text);
  return parts;
}
export function publicPath(path, origin) {
  const url = new URL(path, origin);
  if (!path.startsWith('/') || path.startsWith('//') || url.origin !== origin || url.search || url.hash) throw new Error('Not a same-site article path');
  return url.href;
}
export function articleText(doc, selector, title) {
  const source = doc.querySelector(selector);
  if (!source) throw new Error('Article content was not found');
  const copy = source.cloneNode(true);
  copy.querySelectorAll('script,style,noscript,nav,site-navbar,footer,button,select,input,textarea,form,iframe,video,audio,pre,[data-article-listener],[data-no-read],[aria-hidden="true"],[hidden],.top-header,.post-related,#bottomdiv').forEach(n => n.remove());
  copy.querySelectorAll('br').forEach(n => n.replaceWith('\n'));
  copy.querySelectorAll('p,div,section,article,h1,h2,h3,h4,li,tr,blockquote,figcaption').forEach(n => n.append('\n'));
  const body = copy.textContent.replace(/[\t ]+/g, ' ').replace(/\n\s*\n/g, '\n').replace(/[-_]{4,}/g, '').trim();
  if (body.length < 25) throw new Error('Article text is empty or incomplete');
  return body.startsWith(title) ? body : title + '\n' + body;
}
async function main() {
  const $ = id => document.getElementById(id);
  const status = $('status');
  let manifest;
  try {
    const response = await fetch('/listening-index.json', { credentials: 'omit', redirect: 'error' });
    if (!response.ok) throw new Error('Index unavailable');
    manifest = await response.json();
    if (!Array.isArray(manifest.articles) || !manifest.articles.length) throw new Error('Empty index');
    const seen = new Set();
    for (const a of manifest.articles) {
      publicPath(a.path, location.origin);
      if (!a.title || !Array.isArray(a.themes) || seen.has(a.path)) throw new Error('Invalid article index');
      seen.add(a.path);
    }
  } catch { status.textContent = 'The article index could not load. Reload this page to try again.'; $('play').disabled = true; return; }
  document.title = manifest.site + ' - Listen'; $('site').textContent = manifest.site + ': Listen';
  if (manifest.dark) document.body.classList.add('dark');
  let queue = manifest.articles, index = 0, parts = [], part = 0, token = 0, active = null, request = null, state = 'idle';
  const synth = window.speechSynthesis;
  const supported = !!synth && 'SpeechSynthesisUtterance' in window;
  function controls() {
    $('pause').disabled = !['playing','paused'].includes(state);
    $('pause').textContent = state === 'paused' ? 'Resume' : 'Pause';
    $('stop').disabled = state === 'idle';
    $('previous').disabled = !supported || index <= 0;
    $('next').disabled = !supported || index >= queue.length - 1;
    $('position').textContent = `Article ${index + 1} of ${queue.length} · ${$('theme').value || 'All articles'} · catalog order`;
  }
  function cancel() {
    token++; request?.abort(); request = null;
    if (active) synth.cancel();
    active = null;
  }
  function stop(message = 'Stopped. Play restarts the selected article.') {
    cancel(); state = 'idle'; parts = []; part = 0; controls(); status.textContent = message;
  }
  function speak() {
    if (part >= parts.length) {
      if (index < queue.length - 1) { index++; load(); }
      else stop('Queue finished.');
      return;
    }
    const generation = ++token;
    const u = new SpeechSynthesisUtterance(parts[part]); active = u;
    u.lang = document.documentElement.lang || 'en'; u.rate = Number($('speed').value);
    u.onend = () => { if (generation !== token) return; active = null; part++; speak(); };
    u.onerror = () => { if (generation !== token) return; stop('The browser voice could not play. Press Play to retry this article, choose another browser voice/device, or use Next article.'); };
    state = 'playing'; controls();
    status.textContent = `Reading article ${index + 1} of ${queue.length}, part ${part + 1} of ${parts.length} at ${$('speed').value}x.`;
    synth.resume(); synth.speak(u);
  }
  async function load() {
    cancel(); const generation = token; state = 'loading'; controls();
    const article = queue[index]; $('now').textContent = article.title;
    $('read').href = article.path; $('read').hidden = false;
    status.textContent = 'Loading article text...';
    request = new AbortController(); const controller = request;
    const timer = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(publicPath(article.path, location.origin), { credentials: 'omit', redirect: 'error', signal: controller.signal });
      if (!response.ok || !response.headers.get('content-type')?.includes('text/html')) throw new Error('Article unavailable');
      const html = await response.text();
      if (generation !== token) return;
      const doc = new DOMParser().parseFromString(html, 'text/html');
      parts = chunkText(articleText(doc, manifest.selector, article.title)); part = 0;
      request = null; speak();
    } catch {
      if (generation === token) stop('This article could not load. Press Play to retry or Next article to skip it.');
    } finally { clearTimeout(timer); }
  }
  function render() {
    const list = $('articles'); list.replaceChildren();
    queue.forEach((article, position) => {
      const li = document.createElement('li'), button = document.createElement('button'), a = document.createElement('a');
      button.type = 'button'; button.textContent = 'Play from here'; button.disabled = !supported;
      button.setAttribute('aria-label', 'Play from ' + article.title);
      button.onclick = () => { index = position; load(); };
      a.href = article.path; a.textContent = article.title; li.append(button, a); list.append(li);
    });
    controls();
  }
  for (const theme of [...new Set(manifest.articles.flatMap(a => a.themes))].sort()) {
    const option = document.createElement('option'); option.value = theme; option.textContent = theme; $('theme').append(option);
  }
  $('theme').onchange = () => { stop(); queue = manifest.articles.filter(a => !$('theme').value || a.themes.includes($('theme').value)); index = 0; render(); $('now').textContent = 'Choose Play all or a starting article.'; $('read').hidden = true; status.textContent = 'Theme selected. Press Play all to begin.'; };
  $('play').onclick = () => load();
  $('stop').onclick = () => stop();
  $('next').onclick = () => { if (index < queue.length - 1) { index++; load(); } };
  $('previous').onclick = () => { if (index > 0) { index--; load(); } };
  $('pause').onclick = () => {
    if (state === 'playing') { synth.pause(); state = 'paused'; status.textContent = 'Paused.'; }
    else if (state === 'paused') { if (!active) { speak(); return; } synth.resume(); state = 'playing'; status.textContent = `Reading at ${$('speed').value}x.`; }
    controls();
  };
  $('speed').onchange = () => {
    if (!['playing','paused'].includes(state)) return;
    const paused = state === 'paused'; cancel();
    if (paused) { state = 'paused'; controls(); status.textContent = 'Speed changed. Resume repeats the current short part.'; }
    else speak();
  };
  window.addEventListener('pagehide', () => stop('Stopped when you left this page. Press Play to begin again.'));
  window.addEventListener('pageshow', event => { if (event.persisted) stop('Restored page. Press Play to begin again.'); });
  render();
  if (!supported) { $('play').disabled = true; $('speed').disabled = true; $('previous').disabled = true; $('next').disabled = true; status.textContent = 'Speech is not available in this browser. You can still open and read the articles below.'; }
  else status.textContent = `${queue.length} articles ready. Press Play all to begin.`;
}
if (typeof document !== 'undefined') main();
