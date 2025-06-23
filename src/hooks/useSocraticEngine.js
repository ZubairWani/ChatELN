import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getDummyResponse } from './dummyResponses';

// --- ENHANCED CONTEXT ANALYZER ---
class ConversationAnalyzer {
  static analyzeIntent(message, conversationHistory = []) {
    const text = message.toLowerCase();
    
    // Question patterns
    if (text.includes('how') || text.includes('what') || text.includes('why') || 
        text.includes('when') || text.includes('where') || text.includes('?')) {
      return 'question';
    }
    
    // Problem-solving patterns
    if (text.includes('help') || text.includes('solve') || text.includes('fix') || 
        text.includes('debug') || text.includes('error')) {
      return 'problem_solving';
    }
    
    // Learning patterns
    if (text.includes('learn') || text.includes('teach') || text.includes('explain') || 
        text.includes('understand')) {
      return 'learning';
    }
    
    // Creative patterns
    if (text.includes('create') || text.includes('build') || text.includes('design') || 
        text.includes('brainstorm') || text.includes('idea')) {
      return 'creative';
    }
    
    // Code patterns
    if (text.includes('code') || text.includes('function') || text.includes('react') || 
        text.includes('javascript') || text.includes('python') || text.includes('algorithm')) {
      return 'coding';
    }
    
    return 'general';
  }
  
  static extractTopics(message) {
    const text = message.toLowerCase();
    const topics = [];
    
    // Tech topics
    const techKeywords = ['react', 'javascript', 'python', 'ai', 'machine learning', 'database', 'api', 'frontend', 'backend'];
    techKeywords.forEach(keyword => {
      if (text.includes(keyword)) topics.push(keyword);
    });
    
    // Business topics
    const businessKeywords = ['startup', 'business', 'marketing', 'product', 'strategy', 'growth'];
    businessKeywords.forEach(keyword => {
      if (text.includes(keyword)) topics.push(keyword);
    });
    
    return topics;
  }
  
  static getConversationDepth(messages) {
    return messages.filter(m => m.sender === 'user').length;
  }
  
  static detectFollowUp(message, previousMessages) {
    const indicators = ['also', 'and', 'but', 'however', 'what if', 'can you also', 'additionally'];
    return indicators.some(indicator => message.toLowerCase().includes(indicator));
  }
}

// --- ENHANCED MOCK DATABASE ---
const mockSessionData = {
  'session_1678886400000': {
    title: 'Brainstorming a new app idea',
    messages: [
      { id: 1, sender: 'user', text: 'Help me brainstorm ideas for a new mobile app.' },
      { id: 2, sender: 'bot', text: `Creative projects are wonderful! What's driving this idea, and who do you imagine would benefit from it?` },
      { id: 3, sender: 'user', text: 'I want to help people manage their daily tasks better.' },
      { id: 4, sender: 'bot', text: `That's a valuable goal! What specific pain points do you experience with current task management solutions?` },
    ],
  },
  'session_1678886500000': {
    title: 'React component optimization',
    messages: [
      { id: 1, sender: 'user', text: 'Can you help me optimize my React component performance?' },
      { id: 2, sender: 'bot', text: 'Performance optimization is crucial! Before we dive in, what specific performance issues are you noticing, and have you measured where the bottlenecks are?' },
    ],
  },
};

// --- CONVERSATION MEMORY ---
class ConversationMemory {
  static store = new Map();
  
  static saveContext(sessionId, context) {
    this.store.set(sessionId, {
      ...this.store.get(sessionId),
      ...context,
      lastUpdated: Date.now()
    });
  }
  
  static getContext(sessionId) {
    return this.store.get(sessionId) || {};
  }
  
  static updateTopics(sessionId, newTopics) {
    const existing = this.getContext(sessionId);
    const allTopics = [...(existing.topics || []), ...newTopics];
    const uniqueTopics = [...new Set(allTopics)];
    this.saveContext(sessionId, { topics: uniqueTopics });
  }
  
  static addMessage(sessionId, message) {
    const existing = this.getContext(sessionId);
    const messages = existing.messages || [];
    this.saveContext(sessionId, { 
      messages: [...messages, message],
      lastMessageTime: Date.now()
    });
  }
}

// --- MAIN HOOK ---
export const useSocraticEngine = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [session, setSession] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [conversationContext, setConversationContext] = useState({});
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();
  const { sessionId } = useParams();

  // Effect to handle loading sessions or starting a new chat
  useEffect(() => {
    if (!sessionId) {
      setSession(null);
      setMessages([]);
      setConversationContext({});
      return;
    }

    const loadedSession = mockSessionData[sessionId];
    if (loadedSession) {
      setSession({ id: sessionId, title: loadedSession.title });
      setMessages(loadedSession.messages);
      
      // Rebuild context from loaded messages
      const context = ConversationMemory.getContext(sessionId);
      setConversationContext(context);
    } else {
      if (!session || session.id !== sessionId) {
        setSession({ id: sessionId, title: 'New Conversation' });
        setConversationContext({});
      }
    }
  }, [sessionId]);

  // Effect to scroll to the bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Enhanced message handler using getDummyResponse
  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const isFirstMessage = messages.length === 0;
    const userMessage = { id: Date.now(), text: input.trim(), sender: 'user' };
    const currentInput = input;
    
    setInput('');
    setIsLoading(true);

    // Analyze the user's message
    const intent = ConversationAnalyzer.analyzeIntent(currentInput, messages);
    const topics = ConversationAnalyzer.extractTopics(currentInput);
    const conversationDepth = ConversationAnalyzer.getConversationDepth(messages) + 1;
    const isFollowUp = ConversationAnalyzer.detectFollowUp(currentInput, messages);
    
    const context = {
      intent,
      topics,
      conversationDepth,
      isFollowUp,
      previousMessages: messages
    };

    if (isFirstMessage) {
      setTimeout(() => {
        setMessages([userMessage]);

        const newSessionId = 'session_' + Date.now();
        const newSessionTitle = currentInput.trim().substring(0, 40) + (currentInput.length > 40 ? '...' : '');
        setSession({ id: newSessionId, title: newSessionTitle });
        navigate(`/session/${newSessionId}`, { replace: true });

        // Use getDummyResponse with context
        const response = getDummyResponse(currentInput, context);
        const responseText = typeof response === 'string' ? response : response.text;
        const responseDelay = typeof response === 'object' && response.delay ? response.delay : 1000;
        
        // Save context
        ConversationMemory.saveContext(newSessionId, context);
        ConversationMemory.updateTopics(newSessionId, topics);
        ConversationMemory.addMessage(newSessionId, userMessage);
        setConversationContext(context);

        setTimeout(() => {
          const botMessage = { 
            id: Date.now() + 1, 
            text: responseText, 
            sender: 'bot' 
          };
          setMessages(prev => [...prev, botMessage]);
          ConversationMemory.addMessage(newSessionId, botMessage);
          setIsLoading(false);
        }, responseDelay);

      }, 500);

    } else {
      setMessages(prev => [...prev, userMessage]);
      
      // Update context with session info
      const sessionContext = ConversationMemory.getContext(sessionId);
      const mergedContext = { 
        ...sessionContext, 
        ...context,
        // Include previous messages from memory for better context
        previousMessages: [...(sessionContext.messages || []), ...messages]
      };
      
      // Use getDummyResponse with enhanced context
      const response = getDummyResponse(currentInput, mergedContext);
      const responseText = typeof response === 'string' ? response : response.text;
      const responseDelay = typeof response === 'object' && response.delay ? response.delay : 800;
      
      // Update stored context
      ConversationMemory.saveContext(sessionId, mergedContext);
      ConversationMemory.updateTopics(sessionId, topics);
      ConversationMemory.addMessage(sessionId, userMessage);
      setConversationContext(mergedContext);

      setTimeout(() => {
        const botMessage = { 
          id: Date.now() + 1, 
          text: responseText, 
          sender: 'bot' 
        };
        setMessages(prev => [...prev, botMessage]);
        ConversationMemory.addMessage(sessionId, botMessage);
        setIsLoading(false);
      }, responseDelay + Math.random() * 200);
    }
  };

  // Enhanced regenerate using getDummyResponse
  const handleRegenerate = () => {
    if (messages.length === 0 || isLoading) return;
    const lastUserMessage = [...messages].reverse().find(m => m.sender === 'user');
    if (!lastUserMessage) return;
    
    setIsLoading(true);
    setMessages(prev => prev.slice(0, -1));

    // Use existing context for regeneration with getDummyResponse
    const currentContext = ConversationMemory.getContext(sessionId);
    const response = getDummyResponse(lastUserMessage.text, currentContext);
    const responseText = typeof response === 'string' ? response : response.text;
    const responseDelay = typeof response === 'object' && response.delay ? response.delay : 800;

    setTimeout(() => {
      const newBotMessage = { 
        id: Date.now(), 
        text: responseText, 
        sender: 'bot' 
      };
      setMessages(prev => [...prev, newBotMessage]);
      ConversationMemory.addMessage(sessionId, newBotMessage);
      setIsLoading(false);
    }, responseDelay + Math.random() * 200);
  };

  // Rest of the handlers remain the same
  const handleNewChat = () => navigate('/dashboard');
  const handlePromptClick = (prompt) => setInput(prompt);
  const handleCopy = (text) => navigator.clipboard.writeText(text);

  const handleExport = () => {
    if (!session || messages.length === 0) return;
    const transcript = messages.map(msg => 
      `${msg.sender === 'user' ? 'User' : 'ChatELN'}: ${msg.text}`
    ).join('\n\n');
    
    // Add context information to export
    const contextInfo = `\n\n--- Conversation Context ---\nTopics: ${conversationContext.topics?.join(', ') || 'None'}\nDepth: ${conversationContext.conversationDepth || 0} exchanges\nIntent: ${conversationContext.intent || 'Unknown'}\n`;
    
    const blob = new Blob([transcript + contextInfo], { type: 'text/plain;charset=utf-8' });
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
    messages, 
    input, 
    isLoading, 
    session, 
    isRecording,
    conversationContext, // Expose context for UI components
    setInput, 
    setIsRecording,
    messagesEndRef,
    handleSendMessage, 
    handlePromptClick, 
    handleNewChat, 
    handleCopy, 
    handleRegenerate, 
    handleExport,
  };
};