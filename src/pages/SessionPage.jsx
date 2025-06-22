// // src/pages/ProfessionalSessionPage.js (Corrected Version)

// import React from 'react';
// import { useOutletContext } from 'react-router-dom';
// import { useSocraticEngine } from '../hooks/useSocraticEngine';
// import SessionPageHeader from '../components/session/SessionPageHeader';
// import MessageList from '../components/session/MessageList';
// import MessageInput from '../components/session/MessageInput';
// import WelcomeScreen from '../components/session/WelcomeScreen';

// const ProfessionalSessionPage = () => {
//   const { onMenuClick } = useOutletContext();

//   const {
//     messages, input, isLoading, session, setInput,
//     messagesEndRef, handleSendMessage, handleNewChat,
//     handleCopy, handleRegenerate, handlePromptClick,
//   } = useSocraticEngine();

//   const hasMessages = messages.length > 0;

//   return (
//     // 1. This is the main container. It's a flex column that takes up full height.
//     <div className="relative flex flex-col h-full w-full bg-[#1c1c1c] text-white overflow-hidden">

//       <SessionPageHeader
//         session={session}
//         onNewChat={handleNewChat}
//         onMenuClick={onMenuClick}
//         isWelcome={!hasMessages}
//       />

//       {hasMessages ? (
//         // --- CHAT VIEW ---
//         // This fragment holds the two parts of the chat: the list and the input.
//         <>
//           {/* 2. MessageList is now a direct child. It will be given the power to grow and scroll. */}
//           <MessageList
//             messages={messages}
//             isLoading={isLoading}
//             onCopy={handleCopy}
//             onRegenerate={handleRegenerate}
//             messagesEndRef={messagesEndRef}
//           />

//           {/* 3. The footer is also a direct child, preventing it from being scrolled. */}
//           <footer className="flex-shrink-0 flex justify-center py-4 px-4 bg-black/10">
//             <MessageInput
//               input={input}
//               setInput={setInput}
//               onSend={handleSendMessage}
//               isLoading={isLoading}
//             />
//           </footer>
//         </>
//       ) : (
//         // --- WELCOME VIEW ---
//         // 4. If there are no messages, this wrapper centers the WelcomeScreen.
//         // It uses flex-1 to take up all the space below the header.
//         <div className="flex-1 flex flex-col items-center justify-center p-4">
//           <WelcomeScreen
//             input={input}
//             setInput={setInput}
//             onSend={handleSendMessage}
//             isLoading={isLoading}
//             onSuggestionClick={handlePromptClick}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfessionalSessionPage;









// src/pages/ProfessionalSessionPage.js

import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { useSocraticEngine } from '../hooks/useSocraticEngine';
import SessionPageHeader from '../components/session/SessionPageHeader';
import ChatScreen from '../components/session/ChatScreen'; // Import the new component
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
      <SessionPageHeader
        session={session}
        onNewChat={handleNewChat}
        onMenuClick={onMenuClick}
        isWelcome={!hasMessages}
      />

      {hasMessages ? (
        <>
          {/* --- CHAT VIEW --- */}
          {/* Use the new, self-contained ChatScreen component */}
          <ChatScreen
            messages={messages}
            isLoading={isLoading}
            onCopy={handleCopy}
            onRegenerate={handleRegenerate}
            messagesEndRef={messagesEndRef}
          />

          <footer className="flex-shrink-0 flex justify-center py-4 px-4 bg-black/3">
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
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <WelcomeScreen
            input={input}
            setInput={setInput}
            onSend={handleSendMessage}
            isLoading={isLoading}
            onSuggestionClick={handlePromptClick}
          />
        </div>
      )}
    </div>
  );
};

export default ProfessionalSessionPage;