import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getDummyResponse } from './dummyResponses'; // We still use our professional personality engine

// --- A MOCK DATABASE ---
// In a real app, this data would come from an API (e.g., fetch(`/api/sessions/${sessionId}`))
// We define it here to simulate loading different, more realistic past conversations.
const mockSessionData = {
  'session_1678886400000': {
    title: 'Brainstorming a new app idea',
    messages: [
      { id: 1, sender: 'user', text: 'Help me brainstorm ideas for a new mobile app.' },
      { id: 2, sender: 'bot', text: 'Of course! To start, let\'s think about a problem to solve. What\'s a common frustration you or people you know experience daily?' },
    ],
  },
  'session_1678886500000': {
    title: 'React component for a login form',
    messages: [
      { id: 1, sender: 'user', text: 'Can you show me some code for a basic React login form component?' },
      { id: 2, sender: 'bot', text: getDummyResponse('react code').text }, // Gets a relevant response
    ],
  },
};

export const useSocraticEngine = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [session, setSession] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();
  const { sessionId } = useParams();

  // Effect to handle loading sessions or starting a new chat
  useEffect(() => {
    // If there's no session ID in the URL, it's a new chat.
    if (!sessionId) {
      setSession(null);
      setMessages([]); // Start with a clean, empty message list.
      return;
    }

    // If there is a session ID, try to load it from our mock database.
    const loadedSession = mockSessionData[sessionId];
    if (loadedSession) {
      // Found a session, so we load its title and messages.
      setSession({ id: sessionId, title: loadedSession.title });
      setMessages(loadedSession.messages);
    } else {
      // This handles the case where a user sends a message in a new chat,
      // creating a new session ID that's not in our mock database yet.
      // We create a placeholder title and DON'T overwrite the messages.
      if (!session || session.id !== sessionId) {
        setSession({ id: sessionId, title: 'New Conversation' });
      }
    }
  }, [sessionId]); // This effect runs only when the sessionId changes.

  // Effect to scroll to the bottom of the message list
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  
  
   const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const isFirstMessage = messages.length === 0;
    const userMessage = { id: Date.now(), text: input.trim(), sender: 'user' };
    const currentInput = input;
    
    // Set loading state immediately for instant UI feedback (loader appears)
    setInput('');
    setIsLoading(true);

    if (isFirstMessage) {
      // --- WELCOME SCREEN DELAY LOGIC ---
      setTimeout(() => {
        // This code runs AFTER the 2-second delay
        
        // 1. Add the message to the state, which triggers the UI transition
        setMessages([userMessage]);

        // 2. Create the new session and navigate
        const newSessionId = 'session_' + Date.now();
        const newSessionTitle = currentInput.trim().substring(0, 40) + (currentInput.length > 40 ? '...' : '');
        setSession({ id: newSessionId, title: newSessionTitle });
        navigate(`/session/${newSessionId}`, { replace: true });

        // 3. Get the bot response
        const botResponse = getDummyResponse(userMessage.text);
        setTimeout(() => {
          const botMessage = { id: Date.now() + 1, text: botResponse.text, sender: 'bot' };
          setMessages(prev => [...prev, botMessage]);
          setIsLoading(false); // Only stop loading after bot responds
        }, botResponse.delay);

      }, 1000); // 2000 milliseconds = 2 seconds

    } else {
      // --- EXISTING LOGIC (no delay) ---
      setMessages(prev => [...prev, userMessage]);
      
      const botResponse = getDummyResponse(userMessage.text);
      setTimeout(() => {
        const botMessage = { id: Date.now() + 1, text: botResponse.text, sender: 'bot' };
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
      }, botResponse.delay);
    }
  };
  
  
  const handleNewChat = () => navigate('/dashboard');
  
  // --- Other handlers remain the same as they are solid ---

  const handlePromptClick = (prompt) => setInput(prompt);
  
  const handleCopy = (text) => navigator.clipboard.writeText(text);

  const handleRegenerate = () => {
    if (messages.length === 0 || isLoading) return;
    const lastUserMessage = [...messages].reverse().find(m => m.sender === 'user');
    if (!lastUserMessage) return;
    setIsLoading(true);
    setMessages(prev => prev.slice(0, -1)); // Remove the last bot response

    const botResponse = getDummyResponse(lastUserMessage.text);
    setTimeout(() => {
        const newBotMessage = { id: Date.now(), text: botResponse.text, sender: 'bot' };
        setMessages(prev => [...prev, newBotMessage]);
        setIsLoading(false);
    }, botResponse.delay);
  };

  const handleExport = () => {
    if (!session || messages.length === 0) return;
    const transcript = messages.map(msg => `${msg.sender === 'user' ? 'User' : 'ChatELN'}: ${msg.text}`).join('\n\n');
    const blob = new Blob([transcript], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${session.title}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return {
    messages, input, isLoading, session, isRecording,
    setInput, setIsRecording,
    messagesEndRef,
    handleSendMessage, handlePromptClick, handleNewChat, handleCopy, handleRegenerate, handleExport,
  };
};


