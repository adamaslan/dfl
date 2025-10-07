"use client";
import React, { useState, useRef, useEffect } from "react";

// Chatbot6
// Simplified chat UI that posts a single request to a server-side Gemini proxy.
// Expectations (server):
// - POST /api/gemini
// - Request JSON: { prompt: string, history?: Array<{ role, content }> }
// - Response JSON: { reply: string, sources?: string[] }
// NOTE: Keep credentials and API keys server-side. This component only talks to /api/gemini.

export default function Chatbot6() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const send = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg = { role: "user", content: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: trimmed /*, history: messages */ }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Server error: ${res.status} ${text}`);
      }

      const data = await res.json();
      const reply = data?.reply || data?.response || "(no reply)";
      const assistantMsg = { role: "assistant", content: reply, sources: data?.sources || [] };
      setMessages((m) => [...m, assistantMsg]);
    } catch (err) {
      console.error("Chatbot6 error:", err);
      setMessages((m) => [...m, { role: "assistant", content: `Error: ${err.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-3">Gemini Chat (simple)</h2>

      <div className="mb-4 h-72 overflow-y-auto border border-gray-200 rounded-lg p-3 bg-gray-50">
        {messages.length === 0 && (
          <div className="text-sm text-gray-500">Ask anything using the Gemini proxy.</div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={`mb-3 ${m.role === "user" ? "text-right" : "text-left"}`}>
            <div className={`inline-block p-3 rounded-lg max-w-[80%] ${m.role === "user" ? "bg-blue-600 text-white" : "bg-white border border-gray-200 text-black"}`}>
              <div className="text-sm">{m.content}</div>
              {m.sources && m.sources.length > 0 && (
                <div className="mt-2 text-xs text-gray-500 border-t border-gray-100 pt-1">Sources: {m.sources.join(', ')}</div>
              )}
            </div>
          </div>
        ))}

        <div ref={endRef} />
      </div>

      <div className="flex gap-2">
        <textarea
          rows={2}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Type your question and press Enter to send"
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          disabled={isLoading}
        />

        <button
          onClick={send}
          disabled={isLoading || !input.trim()}
          className={`px-4 py-2 rounded-lg text-white ${isLoading || !input.trim() ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
}
