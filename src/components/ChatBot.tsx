import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

interface KnowledgeBase {
  responses: { [key: string]: string };
  defaultResponse: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [knowledgeBase, setKnowledgeBase] = useState<KnowledgeBase | null>(null);

  useEffect(() => {
    fetch('/data/knowledgeBase.json')
      .then(response => response.json())
      .then(data => setKnowledgeBase(data))
      .catch(error => console.error('Error loading knowledge base:', error));
  }, []);


  const handleSend = async () => {
    if (!input.trim() || !knowledgeBase) return;

    // 添加用户消息
    const userMessage: Message = {
      id: Date.now(),
      text: input,
      isBot: false
    };
    setMessages(prev => [...prev, userMessage]);

    // 模拟机器人回复
    const botResponse = await simulateBotResponse(input);
    const botMessage: Message = {
      id: Date.now() + 1,
      text: botResponse,
      isBot: true
    };
    setMessages(prev => [...prev, botMessage]);
    setInput('');
  };

  const simulateBotResponse = async (userInput: string): Promise<string> => {
    if (!knowledgeBase) return '系统正在初始化，请稍后再试...';

    await new Promise(resolve => setTimeout(resolve, 1000)); // 模拟延迟

    for (const [keyword, response] of Object.entries(knowledgeBase.responses)) {
      if (userInput.includes(keyword)) {
        return response;
      }
    }

    return knowledgeBase.defaultResponse;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary-600 hover:bg-primary-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-96 max-w-full">
          <div className="bg-primary-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">在线客服</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="h-96 p-4 overflow-y-auto">
            {messages.map(message => (
              <div
                key={message.id}
                className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${message.isBot
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-primary-600 text-white'}`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="请输入您的问题..."
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                onClick={handleSend}
                className="bg-primary-600 hover:bg-primary-700 text-white rounded-lg px-4 py-2 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;