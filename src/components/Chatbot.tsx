import React, { useState } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! How can I help you today?", isUser: false }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { text: input, isUser: true }]);
    setInput('');
    
    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "I'll help you with that right away!",
        "Thanks for your message. Let me check that for you.",
        "I understand what you need. Here's what we can do...",
        "That's a great question! Here's what you need to know..."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, {
        text: randomResponse,
        isUser: false
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col animate-slide-up">
          <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center bg-blue-600 text-white rounded-t-lg">
            <h3 className="font-semibold flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Chat Support
            </h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-700 p-1 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.isUser
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700'
                  } shadow-md`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-b-lg">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}