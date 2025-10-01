import { NextResponse } from 'next/server';

// Server-side Gemini proxy for Chatbot6
// Reads GEMINI_API_KEY and GEMINI_API_URL from environment.
// GEMINI_API_URL should point to the provider's REST endpoint that accepts a JSON body and returns a generative response.

export async function POST(request) {
  try {
    const body = await request.json();
    const prompt = body.prompt || body.input || '';
    const history = body.history || [];

    const apiKey = process.env.GEMINI_API_KEY;
    const apiUrl = process.env.GEMINI_API_URL || '';

    if (!apiKey) {
      return NextResponse.json({ error: 'GEMINI_API_KEY must be set in environment' }, { status: 500 });
    }

    // Build a generic request payload. Many Gemini-style APIs expect a top-level "input" or "prompt" field.
    const proxyPayload = {
      prompt,
      history,
    };

    let resp;
    if (apiUrl) {
      // If a custom URL is provided, forward with Bearer auth by default
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      };

      resp = await fetch(apiUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(proxyPayload),
      });
    } else {
      // No API URL provided: attempt Google Generative Language REST API using the API key.
      // This uses the public REST endpoint for text generation (text-bison). If you prefer a different model,
      // set GEMINI_API_URL in env to override.
      const googleUrl = `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${encodeURIComponent(apiKey)}`;
      const googlePayload = {
        prompt: {
          text: prompt,
        },
      };

      resp = await fetch(googleUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(googlePayload),
      });
    }
    const respText = await resp.text();
    // If provider returned non-OK, return status and body to client for debugging
    if (!resp.ok) {
      console.error('Provider responded with non-OK:', resp.status, respText);
      return NextResponse.json({ error: 'Provider error', status: resp.status, body: respText }, { status: 502 });
    }
    let parsed;
    try {
      parsed = JSON.parse(respText);
    } catch (e) {
      // If provider returned plain text, pass it back as reply
      return NextResponse.json({ reply: respText, raw: respText }, { status: resp.status });
    }

    // Try to normalize some common shapes into { reply, sources? }
    let reply = '';
    let sources = undefined;

    // Candidate shapes (not exhaustive):
    // - { reply: string }
    // - { output: [{ content: '...' }] }
    // - { candidates: [{ content: '...' }] }
    // - provider-specific (return whole JSON under raw)
    if (typeof parsed.reply === 'string') {
      reply = parsed.reply;
      sources = parsed.sources;
    } else if (parsed.output && Array.isArray(parsed.output) && parsed.output[0]) {
      // e.g. { output: [ { content: "..." } ] }
      const o = parsed.output[0];
      if (typeof o.content === 'string') reply = o.content;
      else if (o.content && o.content[0] && typeof o.content[0].text === 'string') reply = o.content[0].text;
    } else if (parsed.candidates && Array.isArray(parsed.candidates) && parsed.candidates[0]) {
      reply = parsed.candidates[0].content || parsed.candidates[0].text || '';
    } else if (parsed.outputText) {
      reply = parsed.outputText;
    } else if (parsed.result && typeof parsed.result === 'string') {
      reply = parsed.result;
    } else {
      // Fallback: stringify the whole response (useful for debugging)
      reply = parsed?.text || JSON.stringify(parsed);
    }

  return NextResponse.json({ reply, sources, raw: parsed });
  } catch (err) {
    console.error('Error in /api/gemini:', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
