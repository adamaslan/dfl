import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const code=await readFile(new URL('../public/listening-queue.js',import.meta.url),'utf8');
const {chunkText,publicPath}=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
const manifest=JSON.parse(await readFile(new URL('../public/listening-index.json',import.meta.url),'utf8'));
test('public catalog has unique same-origin paths, titles and nonempty theme membership',()=>{
 const seen=new Set();
 for(const a of manifest.articles){assert(a.title.trim());assert(a.themes.length);assert(!seen.has(a.path));seen.add(a.path);publicPath(a.path,'https://example.test');}
});
test('remote/protocol-relative URLs, queries and fragments are rejected',()=>{
 for(const p of ['//evil.test/x','https://evil.test/x','/x?q=1','/x#part'])assert.throws(()=>publicPath(p,'https://example.test'));
});
test('chunking keeps all text and whole Unicode characters',()=>{
 for(const text of ['','A short article','Text 👋 日本語. '.repeat(500),'x'.repeat(219)+'👋'+'y'.repeat(500)]){
  const parts=chunkText(text);assert.equal(parts.join(''),text);assert(parts.every(p=>p.length<=220));assert(parts.every(p=>!/[\uD800-\uDBFF]$/.test(p)&&!/^[\uDC00-\uDFFF]/.test(p)));
 }
});

test('every registered public article appears in the listening catalog',async()=>{
 const source=await readFile(new URL('../src/components/ArticleAudio.tsx',import.meta.url),'utf8');
 const paths=JSON.parse(source.match(/new Set\((\[[^;]+\])\)/)[1]);
 const indexed=new Set(manifest.articles.map(a=>a.path));
 for(const path of paths)assert(indexed.has('/'+path),path);
});
