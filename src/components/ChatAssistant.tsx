import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, User, Bot, Loader2 } from 'lucide-react';
import Markdown from 'react-markdown';
import { geminiService } from '../services/geminiService';
import { cn } from '../lib/utils';

interface Message {
  role: 'user' | 'model';
  content: string;
}

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = "Bem-vindo ao ALPHA HUB. Aqui você vai aprender a maximizar sua testosterona e se tornar mais atraente — com método, ciência e consistência. Me diz: qual é o seu maior desafio hoje? [Treino] [Alimentação] [Sono] [Estresse] [Aparência] [Comportamento] [Suplementação]";
      setMessages([{ role: 'model', content: welcomeMessage }]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.content }]
    }));

    const response = await geminiService.chat(userMessage, history);
    setMessages(prev => [...prev, { role: 'model', content: response }]);
    setIsLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-alpha-red rounded-full flex items-center justify-center shadow-lg shadow-alpha-red/20 hover:scale-110 transition-transform z-50"
      >
        <MessageSquare className="text-white w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[400px] h-[600px] glass-card flex flex-col z-50 overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="p-4 border-bottom border-white/10 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-alpha-red flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">ALPHA ASSISTANT</h3>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest">Especialista em Performance</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex gap-3 max-w-[85%]",
                    msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center",
                    msg.role === 'user' ? "bg-white/10" : "bg-alpha-red/20"
                  )}>
                    {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4 text-alpha-red" />}
                  </div>
                  <div className={cn(
                    "p-3 rounded-2xl text-sm leading-relaxed",
                    msg.role === 'user' ? "bg-white/10 text-white" : "bg-white/5 text-white/90"
                  )}>
                    <div className="markdown-body prose prose-invert prose-sm">
                      <Markdown>{msg.content}</Markdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 mr-auto">
                  <div className="w-8 h-8 rounded-full bg-alpha-red/20 flex items-center justify-center">
                    <Loader2 className="w-4 h-4 text-alpha-red animate-spin" />
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 text-white/50 text-sm">
                    Analisando dados...
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-black/20">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Qual seu desafio hoje?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-alpha-red/50 transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-alpha-red rounded-lg flex items-center justify-center hover:bg-alpha-red/80 transition-colors disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
