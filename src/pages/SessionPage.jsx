import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { useSocraticEngine } from '../hooks/useSocraticEngine';

// Import all the necessary components
import SessionPageHeader from '../components/session/SessionPageHeader';
import MessageList from '../components/session/MessageList';
import MessageInput from '../components/session/MessageInput';
import WelcomeScreen from '../components/session/WelcomeScreen';

const ProfessionalSessionPage = () => {
  const { onMenuClick } = useOutletContext();

  const {
    messages, input, isLoading, session, setInput,
    messagesEndRef, handleSendMessage, handleNewChat,
    handleCopy, handleRegenerate, handlePromptClick,
  } = useSocraticEngine();

  const hasMessages = messages.length > 0;

  return (
    <div className="relative flex flex-col h-full w-full bg-[#1c1c1c] text-white overflow-hidden">
      {/* Free plan button (no changes) */}
       {!hasMessages && (
        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-[#2a2a2a] border border-gray-700/60 rounded-md px-3 py-1 text-sm">
            <span className="text-gray-400">Free plan</span>
            <span className="text-white font-medium"> · </span>
            <button className="text-blue-400 hover:text-blue-300 font-medium">Upgrade</button>
          </div>
        </div>
      )}

      {/* Header (no changes) */}
      <SessionPageHeader
        session={session}
        onNewChat={handleNewChat}
        onMenuClick={onMenuClick}
        isWelcome={!hasMessages}
      />

      {/* 
        THIS WRAPPER DIV IS THE MISSING PIECE IN YOUR CODE.
        It stays on the page and its `justify-content` property is animated.
      */}
      
      <div 
        className={`
          flex-1 flex flex-col
          transition-all duration-2000 ease-out  // <-- SMOOTHNESS: These classes animate the change.
          ${hasMessages ? 'justify-start' : 'justify-center'} // <-- THE CHANGE: from centered to top-aligned.
        `}
      >
        {hasMessages ? (
          // --- CHAT VIEW ---
          <>
            <main className="flex-1 overflow-y-auto">
              <MessageList
                messages={messages}
                isLoading={isLoading}
                onCopy={handleCopy}
                onRegenerate={handleRegenerate}
                messagesEndRef={messagesEndRef}
              />
            </main>
            <footer className="flex-shrink-0 flex justify-center py-3 bg-black/5">
              <MessageInput
                input={input}
                setInput={setInput}
                onSend={handleSendMessage}
                isLoading={isLoading}
              />
            </footer>
          </>
        ) : (
          // --- WELCOME VIEW ---
          <WelcomeScreen
            input={input}
            setInput={setInput}
            onSend={handleSendMessage}
            isLoading={isLoading}
            onSuggestionClick={handlePromptClick}
          />
        )}
      </div>
    </div>
  );
};

export default ProfessionalSessionPage;
