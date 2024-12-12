import React, { useState } from 'react';
import { Send } from 'lucide-react';
import type { ProjectMessage } from '@/types/dashboard';

interface ChatSectionProps {
  messages: ProjectMessage[];
  onSendMessage: (message: string) => Promise<void>;
}

export function ChatSection({ messages, onSendMessage }: ChatSectionProps) {
  const [newMessage, setNewMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || isSending) return;

    setIsSending(true);
    try {
      await onSendMessage(newMessage);
      setNewMessage('');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-white mb-6">
          Project Communication
        </h2>

        {/* Messages */}
        <div className="space-y-4 max-h-96 overflow-y-auto mb-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-4 rounded-lg ${
                message.isClient
                  ? 'bg-indigo-900/50 ml-8'
                  : 'bg-gray-700/50 mr-8'
              }`}
            >
              <p className="text-white mb-2">{message.content}</p>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>{message.sender}</span>
                <span>{message.timestamp}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <form onSubmit={handleSubmit} className="relative">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="w-full p-4 pr-12 bg-gray-700 rounded-lg text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={3}
          />
          <button
            type="submit"
            disabled={isSending}
            className="absolute right-4 bottom-4 p-2 text-white hover:text-indigo-400 transition-colors disabled:opacity-50"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}