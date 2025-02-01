'use client';
import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    setMessages(prev => [...prev, { text: input, isUser: true }]);
    
    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: input })
      });
      
      if (!response.ok) throw new Error('API response error');
      
      const data = await response.json();
      setMessages(prev => [
        ...prev,
        { 
          text: data.response || "No response received", 
          isUser: false, 
          context: data.context || []
        }
      ]);
    } catch (error) {
      console.error('Fetch error:', error);
      setMessages(prev => [...prev, { 
        text: "Error: Could not get response from server", 
        isUser: false, 
        context: [] 
      }]);
    } finally {
      setInput('');
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="mb-4 h-96 overflow-y-auto border border-gray-200 rounded-lg p-4 bg-gray-50">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-4 ${msg.isUser ? 'text-right' : ''}`}>
            <div className={`inline-block p-3 rounded-lg max-w-[80%] ${
              msg.isUser 
                ? 'bg-blue-600 text-white' 
                : 'bg-white border border-gray-200 text-black'
            }`}>
              <div className={`text-sm ${msg.isUser ? 'text-white' : 'text-gray-800'}`}>
                {msg.text}
              </div>
              {!msg.isUser && (msg.context?.length > 0) && (
                <div className="mt-2 text-xs text-gray-500 border-t border-gray-100 pt-1">
                  Sources: {msg.context.join(', ')}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          placeholder="Type your question..."
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}



// import React, { useState, useEffect } from 'react';
// // import { X, MessageCircle } from 'lucide-react';

// const ArticleChatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [userInput, setUserInput] = useState('');
//   const [articleResult, setArticleResult] = useState(null);
//   const [articles, setArticles] = useState({});

//   useEffect(() => {
//     const loadArticles = async () => {
//       try {
//         const response = await fetch('/article1.json');
//         const data = await response.json();
//         setArticles(data);
//       } catch (error) {
//         console.error('Error loading articles:', error);
//       }
//     };

//     loadArticles();
//   }, []);

//   const findArticle = () => {
//     const normalizedInput = userInput.toLowerCase();
    
//     // Find best match using more flexible matching
//     const matchedArticles = Object.entries(articles).filter(([topic]) => 
//       topic.toLowerCase().includes(normalizedInput)
//     );

//     if (matchedArticles.length > 0) {
//       // If multiple matches, return the first one
//       const [topic, link] = matchedArticles[0];
//       setArticleResult({ 
//         type: 'success', 
//         topic: topic, 
//         link: link 
//       });
//     } else {
//       // No match found
//       setArticleResult({ 
//         type: 'error', 
//         message: 'No articles found. Try different keywords.' 
//       });
//     }
//   };

//   const toggleChatbot = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       {!isOpen && (
//         <button 
//           onClick={toggleChatbot} 
//           className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
//         >
//           {/* <MessageCircle /> */}
//         </button>
//       )}

//       {isOpen && (
//         <div className="bg-white rounded-lg shadow-xl border w-80">
//           <div className="bg-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center">
//             <h2 className="text-lg font-semibold">Article Finder</h2>
//             <button onClick={toggleChatbot}>
//              <X className="text-white" />
//             </button>
//           </div>

//           <div className="p-4">
//             <p className="mb-2 text-gray-600">What would you like to read about?</p>
            
//             <input 
//               type="text"
//               value={userInput}
//               onChange={(e) => {
//                 setUserInput(e.target.value);
//                 setArticleResult(null);
//               }}
//               placeholder="Enter topic..."
//               className="w-full p-2 border rounded mb-2"
//             />
            
//             <button 
//               onClick={findArticle}
//               className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
//             >
//               Find Article
//             </button>

//             {articleResult && articleResult.type === 'success' && (
//               <div className="mt-2 p-2 bg-green-50 rounded">
//                 <p className="text-green-700">Suggested Article on "{articleResult.topic}":</p>
//                 <a 
//                   href={articleResult.link} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="text-blue-600 underline"
//                 >
//                   Read Full Article
//                 </a>
//               </div>
//             )}

//             {articleResult && articleResult.type === 'error' && (
//               <p className="mt-2 text-red-500">{articleResult.message}</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ArticleChatbot;






// const Footer = () => {
//   return (
//     <div >
    
//         Check out our instagram{"=> "}
//         <a
//           href="https://www.instagram.com/drinksfoodlife"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <u>HERE</u>
//         </a>
//         !
//       </div>
   
//   );
// };

// export default Footer;



