import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
//like chatbot4 but maybe optimized
export default function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isThinking]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    setIsThinking(false);

    try {
      const response = await fetch("http://127.0.0.1:11434/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "deepseek-r1:1.5b",
          messages: [...messages, userMessage],
          stream: true,
        }),
      });

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let done = false;
      let messageContent = "";
      let reasoningContent = "";
      let buffer = ""; // Accumulate text chunks here

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        // Decode the incoming chunk
        const chunkContent = decoder.decode(value, { stream: true });
        buffer += chunkContent;
        
        // Process complete lines (NDJSON: one JSON object per line)
        const lines = buffer.split("\n");
        // Process every complete line except the last (which may be incomplete)
        for (let i = 0; i < lines.length - 1; i++) {
          const line = lines[i].trim();
          if (line) {
            try {
              const json = JSON.parse(line);
              // Append the assistant message (if available)
              messageContent += json.message?.content || "";
            } catch (err) {
              console.error("Error parsing JSON line:", err, "Line:", line);
            }
          }
        }
        // Save the last (possibly incomplete) line back into the buffer
        buffer = lines[lines.length - 1];

        // Handle special markers for thinking/reasoning
        if (chunkContent.startsWith("<think>")) {
          setIsThinking(true);
          reasoningContent += chunkContent.replace("<think>", "");
        } else if (chunkContent.startsWith("</think>")) {
          setIsThinking(false);
          reasoningContent += chunkContent.replace("</think>", "");
        } else if (isThinking) {
          reasoningContent += chunkContent;
        }
      }
      // After stream ends, try to parse any remaining buffer
      if (buffer.trim() !== "") {
        try {
          const json = JSON.parse(buffer);
          messageContent += json.message?.content || "";
        } catch (err) {
          console.error("Error parsing final JSON from buffer:", err, "Buffer:", buffer);
        }
      }

      setMessages((prev) => {
        const assistantMessage = {
          role: "assistant",
          content: messageContent.replace(/<think>.*?<\/think>/gs, ""),
          reasoning: reasoningContent,
        };
        return [...prev, assistantMessage];
      });
    } catch (error) {
      console.error("Error streaming response:", error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-2xl font-bold mb-4 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        Chat with your Custom agent 🤖
      </h1>

      <div className="bg-white rounded-lg shadow-md mb-4 overflow-y-auto min-h-[40vh] max-h-[40vh]">
        <div className="p-4">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              className={`flex mb-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`p-3 rounded-lg shadow-sm max-w-[70%] ${
                  msg.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                }`}
              >
                <p>{msg.content}</p>
                {msg.reasoning && (
                  <p className="text-gray-500 mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                    {msg.reasoning}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              className="flex justify-start mb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-3 rounded-lg bg-gray-100 shadow-sm text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline animate-pulse"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
                &nbsp;Typing...
              </div>
            </motion.div>
          )}
          {isThinking && (
            <motion.div
              className="flex justify-start mb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-3 rounded-lg bg-gray-100 shadow-sm text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                &nbsp;Thinking...
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="flex">
        <input
          type="text"
          className="flex-grow rounded-l-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className={`bg-blue-600 text-white px-4 py-2 rounded-r-lg ${
            !input.trim() ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
          onClick={sendMessage}
          disabled={!input.trim()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
