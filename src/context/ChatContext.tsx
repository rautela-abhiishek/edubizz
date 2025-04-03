import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Message {
  id: number;
  senderId: number;
  receiverId: number;
  content: string;
  timestamp: Date;
}

interface Chat {
  messages: Message[];
  addMessage: (senderId: number, receiverId: number, content: string) => void;
  getMessages: (senderId: number, receiverId: number) => Message[];
}

const ChatContext = createContext<Chat | undefined>(undefined);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (senderId: number, receiverId: number, content: string) => {
    const newMessage = {
      id: messages.length + 1,
      senderId,
      receiverId,
      content,
      timestamp: new Date()
    };
    setMessages([...messages, newMessage]);
  };

  const getMessages = (senderId: number, receiverId: number) => {
    return messages.filter(
      msg => 
        (msg.senderId === senderId && msg.receiverId === receiverId) ||
        (msg.senderId === receiverId && msg.receiverId === senderId)
    ).sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage, getMessages }}>
      {children}
    </ChatContext.Provider>
  );
};