import React, { useState } from 'react';

const Chatbot3 = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/generate', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error('Fetch error:', error);
      setResponse({
        error: true,
        text: 'Failed to connect to the server',
        error_details: error.message
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt"
          style={{ width: '100%', height: '150px', margin: '10px 0' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>
          Send
        </button>
      </form>
      {response && (
        <div style={{ marginTop: '20px' }}>
          <h3>Response:</h3>
          <pre style={{
            background: '#f5f5f5',
            padding: '15px',
            borderRadius: '4px',
            whiteSpace: 'pre-wrap'
          }}>
            {JSON.stringify(response, null, 2)}
          </pre>
          {response.error && (
            <div style={{ color: 'red', marginTop: '10px' }}>
              Error: {response.error_details || 'Unknown error'}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot3;