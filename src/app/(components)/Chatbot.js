import React, { useState, useEffect } from 'react';
// import { X, MessageCircle } from 'lucide-react';

const ArticleChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [articleResult, setArticleResult] = useState(null);
  const [articles, setArticles] = useState({});

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const response = await fetch('/article1.json');
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Error loading articles:', error);
      }
    };

    loadArticles();
  }, []);

  const findArticle = () => {
    const normalizedInput = userInput.toLowerCase();
    
    // Find best match using more flexible matching
    const matchedArticles = Object.entries(articles).filter(([topic]) => 
      topic.toLowerCase().includes(normalizedInput)
    );

    if (matchedArticles.length > 0) {
      // If multiple matches, return the first one
      const [topic, link] = matchedArticles[0];
      setArticleResult({ 
        type: 'success', 
        topic: topic, 
        link: link 
      });
    } else {
      // No match found
      setArticleResult({ 
        type: 'error', 
        message: 'No articles found. Try different keywords.' 
      });
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button 
          onClick={toggleChatbot} 
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        >
          {/* <MessageCircle /> */}
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl border w-80">
          <div className="bg-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h2 className="text-lg font-semibold">Article Finder</h2>
            <button onClick={toggleChatbot}>
              <X className="text-white" />
            </button>
          </div>

          <div className="p-4">
            <p className="mb-2 text-gray-600">What would you like to read about?</p>
            
            <input 
              type="text"
              value={userInput}
              onChange={(e) => {
                setUserInput(e.target.value);
                setArticleResult(null);
              }}
              placeholder="Enter topic..."
              className="w-full p-2 border rounded mb-2"
            />
            
            <button 
              onClick={findArticle}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
            >
              Find Article
            </button>

            {articleResult && articleResult.type === 'success' && (
              <div className="mt-2 p-2 bg-green-50 rounded">
                <p className="text-green-700">Suggested Article on "{articleResult.topic}":</p>
                <a 
                  href={articleResult.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Read Full Article
                </a>
              </div>
            )}

            {articleResult && articleResult.type === 'error' && (
              <p className="mt-2 text-red-500">{articleResult.message}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleChatbot;