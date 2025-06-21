import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { useSocraticEngine } from '../hooks/useSocraticEngine';
import SessionPageHeader from '../components/session/SessionPageHeader';
import WelcomeContent from '../components/session/WelcomeContent';
import MessageList from '../components/session/MessageList';
import MessageInput from '../components/session/MessageInput';

const ProfessionalSessionPage = () => {
  // This hook receives the 'context' prop passed to the <Outlet /> in DashboardLayout.
  const { onMenuClick } = useOutletContext();

  // The custom hook that manages all chat logic and state.
  const {
    messages,
    input,
    isLoading,
    session,
    setInput,
    messagesEndRef,
    handleSendMessage,
    handleNewChat,
    handleCopy,
    handleRegenerate,
  } = useSocraticEngine();

  const hasMessages = messages.length > 0;

  return (
    <div className="flex flex-col h-full w-full bg-black text-white">
      <SessionPageHeader
        session={session}
        onNewChat={handleNewChat}
        onMenuClick={onMenuClick} // Pass the toggle function to the header
      />
      
      <main className="flex-1 flex flex-col overflow-hidden">
        {!hasMessages && !isLoading ? (
          <WelcomeContent />
        ) : (
          <MessageList
            messages={messages}
            isLoading={isLoading}
            onCopy={handleCopy}
            onRegenerate={handleRegenerate}
            messagesEndRef={messagesEndRef}
          />
        )}
      </main>
      
      <MessageInput
        input={input}
        setInput={setInput}
        onSend={handleSendMessage}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ProfessionalSessionPage;






