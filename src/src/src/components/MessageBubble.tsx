// src/components/MessageBubble.tsx

import React from 'react';

// Define as propriedades (props) que o componente vai receber
interface MessageBubbleProps {
  text: string;
  isUser: boolean; // true para mensagem do usuário (verde-água), false para IA (cinza escuro)
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ text, isUser }) => {
  return (
    // Usa uma classe dinâmica para aplicar o estilo correto (user ou ai)
    <div className={`message-bubble ${isUser ? 'user' : 'ai'}`}>
      <p>{text}</p>
    </div>
  );
};

export default MessageBubble;
