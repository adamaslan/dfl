// frontend/pages/index.js
import { useState, useEffect } from 'react';
import "../styles/globals.css";
export default function AstroChatbot() {
  const [step, setStep] = useState('sign');
  const [zodiacSign, setZodiacSign] = useState('');
  const [selectedVegetable, setSelectedVegetable] = useState('');
  const [vegetables, setVegetables] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/zodiac-vegetables')
      .then(response => response.json())
      .then(data => {
        setVegetables(data.zodiacSigns);
        setLoading(false);
      });
  }, []);

  const handleSignSelect = (sign) => {
    setZodiacSign(sign);
    setStep('vegetable');
  };

  const handleVegetableSelect = (veg) => {
    setSelectedVegetable(veg);
    setStep('result');
  };

  const resetChat = () => {
    setStep('sign');
    setZodiacSign('');
    setSelectedVegetable('');
  };

  if (loading) return <div className="loading">Consulting the stars...</div>;

  return (
    <div className="chatbot-container">
      <div className="chat-header">
        <h2>Astro Veggie Bot</h2>
        <p>Align your garden with the cosmos 🌌</p>
      </div>

      <div className="chat-messages">
        {step === 'sign' && (
          <div className="message">
            <p>Welcome, earth child! What's your zodiac sign?</p>
            <div className="options">
              {Object.keys(vegetables).map((sign) => (
                <button 
                  key={sign}
                  onClick={() => handleSignSelect(sign)}
                  className="option-button"
                >
                  {sign}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'vegetable' && (
          <div className="message">
            <p>Excellent choice, {zodiacSign}! Which vegetable calls to you?</p>
            <div className="options">
              {vegetables[zodiacSign].map((veg) => (
                <button
                  key={veg}
                  onClick={() => handleVegetableSelect(veg)}
                  className="option-button"
                >
                  {veg}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'result' && (
          <div className="message">
            <p>✨ Cosmic Recommendation ✨</p>
            <p>{zodiacSign}'s perfect match: <strong>{selectedVegetable}</strong></p>
            <p>This vegetable aligns with your celestial energies and will bring balance to your garden!</p>
            <button onClick={resetChat} className="reset-button">
              Start Over
            </button>
          </div>
        )}
      </div>
    </div>
  );
}