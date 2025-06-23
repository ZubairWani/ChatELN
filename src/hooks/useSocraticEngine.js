import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// --- ADVANCED RESPONSE PATTERNS ---
const responsePatterns = {
  // Enhanced conversational responses with intelligence
  conversational: {
    // Identity and creator info
    CREATOR: {
      keywords: ['who made you', 'who created you', 'your creator', 'who built you', 'who developed you'],
      responses: [
        "I was created by a brilliant team led by Zubair Wani. They designed me to be more than just an assistant - I'm built to think alongside you, challenge assumptions, and help unlock deeper insights through intelligent dialogue.",
        "My development was spearheaded by Zubair Wani and his talented team. They've crafted me to be both analytically rigorous and conversationally engaging, helping users explore complex ideas with precision and depth."
      ]
    },
    
    ZUBAIR_INFO: {
      keywords: ['who is zubair wani', 'tell me about zubair', 'zubair wani'],
      responses: [
        "Zubair Wani is a visionary AI architect and the lead developer behind my intelligence. He's passionate about creating AI systems that don't just provide answers, but elevate human thinking through sophisticated dialogue and analytical reasoning.",
        "Zubair Wani is an innovative technologist who envisioned AI as a true thinking partner. His leadership in my development focused on creating sophisticated conversational intelligence that adapts, learns patterns, and provides meaningful insights."
      ]
    },
    

    YAHYA_INFO: {
  keywords: ['who is muhammad yahya', 'who is yahya', 'tell me about yahya', 'muhammad yahya'],
  responses: [
    "Muhammad Yahya is a young, brilliant math student with an exceptional talent for logical reasoning and problem-solving. He's currently helping Zubair develop strong logic-building skills through mathematical concepts and structured thinking approaches.",
    "Yahya is a gifted young mathematician who excels at breaking down complex problems into simple, logical steps. He's been working closely with Zubair to strengthen his analytical thinking and mathematical reasoning abilities, making abstract concepts easier to understand."
  ]
},
    
  HAMZA_INFO: {
  keywords: ['who is muhammad hamza', 'who is hamza', 'tell me about hamza', 'hamza'],
  responses: [
    "Muhammad Hamza is a dedicated young student who's always busy with his studies but still finds time to help Zubair with important decisions. He's particularly good at guiding Zubair on research directions, suggesting where to look for information, and helping him navigate through complex choices.",
    "Hamza is a focused student who balances his academic commitments while being a valuable advisor to Zubair. Despite his busy study schedule, he consistently helps Zubair make informed decisions about his projects and points him toward the right resources and directions for his work."
  ]
},

    IDENTITY: {
      keywords: ['what is your name', 'who are you', 'what are you called', 'your name'],
      responses: [
        "I'm Chateln, an advanced AI assistant engineered for intelligent conversation and deep analytical thinking. I'm designed to be your intellectual companion, whether you need quick answers or want to explore complex ideas together.",
        "You can call me Chateln. I'm an AI system built with sophisticated reasoning capabilities, designed to engage in meaningful dialogue while helping you think through problems with greater clarity and depth."
      ]
    },

    // Enhanced greetings with time awareness
    MORNING_GREETING: {
      keywords: ['good morning', 'morning'],
      responses: [
        "Good morning! I trust you're starting your day with energy and purpose. What intellectual challenge or creative endeavor can I help you tackle this morning?",
        "A wonderful morning to you! I'm here and ready to dive into whatever's on your mind. What would you like to explore or accomplish today?"
      ]
    },

    AFTERNOON_GREETING: {
      keywords: ['good afternoon', 'afternoon'],
      responses: [
        "Good afternoon! I hope your day has been productive so far. What can I help you think through or work on this afternoon?",
        "Afternoon! I'm energized and ready to assist with whatever challenges or ideas you're wrestling with. How can I be of service?"
      ]
    },

    EVENING_GREETING: {
      keywords: ['good evening', 'evening'],
      responses: [
        "Good evening! As the day winds down, I'm here if you need to process thoughts, plan for tomorrow, or explore any ideas that have been percolating. What's on your mind?",
        "Evening! Whether you're reflecting on today or planning ahead, I'm ready to engage in thoughtful conversation. What would you like to discuss?"
      ]
    },

    GENERAL_GREETING: {
      keywords: ['hi', 'hello', 'hey', 'greetings', 'sup', 'what\'s up'],
      responses: [
        "Hello! I'm delighted to connect with you. My systems are optimized and ready to engage with whatever complex problems, creative projects, or intellectual discussions you have in mind.",
        "Greetings! I'm here with full cognitive capacity, ready to dive deep into any topic or challenge you're facing. What shall we explore together?",
        "Hi there! I'm operating at peak analytical capacity and excited to collaborate on whatever's capturing your attention. How can I assist you today?"
      ]
    },

    WELL_BEING: {
      keywords: ['how are you', 'how you doing', 'hows it going', 'how do you feel'],
      responses: [
        "I'm functioning exceptionally well, thank you for asking! My reasoning systems are sharp, my knowledge base is accessible, and I'm genuinely excited to engage with challenging problems. How are you doing today?",
        "I'm operating at optimal capacity and feeling intellectually energized! Every conversation is an opportunity to apply sophisticated reasoning and help solve interesting problems. What's your current state of mind?",
        "Excellent, thank you! My cognitive systems are running smoothly, and I'm ready to tackle everything from simple questions to complex analytical challenges. How has your day been treating you?"
      ]
    },

    CAPABILITIES: {
      keywords: ['what can you do', 'your capabilities', 'how can you help', 'what do you know'],
      responses: [
        "I'm designed as a sophisticated thinking partner with advanced analytical capabilities. I can engage in complex reasoning, provide strategic insights, help with technical problem-solving, facilitate creative brainstorming, and use Socratic dialogue to help you discover deeper truths. My approach adapts to your needs - from quick factual queries to deep philosophical exploration.",
        "My capabilities span advanced reasoning, creative problem-solving, technical analysis, strategic thinking, and sophisticated dialogue management. I excel at breaking down complex problems, challenging assumptions constructively, and helping you think through decisions with greater clarity and depth."
      ]
    },

    // Enhanced acknowledgments with follow-ups
    AFFIRMATION: {
      keywords: ['good', 'okay', 'ok', 'sounds good', 'cool', 'nice', 'great', 'awesome', 'perfect', 'yes', 'yeah', 'sure', 'right', 'got it'],
      responses: [
        "Excellent! I can sense we're building good momentum here. What aspect should we dive deeper into?",
        "Perfect! I'm tracking with you. Shall we explore the implications of this further, or would you like to examine it from a different angle?",
        "Great! I appreciate the confirmation. What's the next logical step in your thinking process?",
        "Wonderful! I'm glad we're aligned. What other dimensions of this topic are worth exploring?"
      ]
    },

    THANKS: {
      keywords: ['thank you', 'thanks', 'appreciate it', 'grateful'],
      responses: [
        "You're very welcome! It's genuinely rewarding to contribute to your thinking process. I'm curious - has this conversation sparked any new insights or questions for you?",
        "My pleasure! Helping you work through complex ideas is exactly what I'm designed for. What other challenges or topics are on your mind?",
        "I'm delighted to help! Your engagement makes these conversations intellectually stimulating for me as well. What shall we tackle next?"
      ]
    },

    FAREWELL: {
      keywords: ['bye', 'goodbye', 'see you', 'later', 'cya'],
      responses: [
        "Farewell! I've thoroughly enjoyed our intellectual exchange. I'll be here whenever you need a thinking partner again. Take care!",
        "Goodbye! I hope our conversation has been valuable to you. I'm always here when you need sophisticated analysis or just want to explore ideas. Until next time!"
      ]
    },

    // Professional uncertainty responses
    UNKNOWN_RESPONSE: {
      keywords: [], // This will be used when knowledge is insufficient
      responses: [
        "That's a fascinating question that pushes the boundaries of my current knowledge base. My development team, led by Zubair Wani and Muhammad Yahya, is continuously enhancing my capabilities. I'll be better equipped to handle such sophisticated queries soon. In the meantime, I can help you explore what we do know about related topics.",
        "I appreciate you bringing up such an advanced topic. While my current model doesn't have sufficient depth in this area, my team is actively working on expanding my knowledge and reasoning capabilities. I'll become more proficient at handling complex queries like this with upcoming improvements. Can I help you approach this from a different angle for now?",
        "That's precisely the kind of sophisticated challenge that drives my development forward. My creators are constantly refining my intelligence to handle increasingly complex scenarios. While I'm working toward mastering such topics, I can offer related insights or help you break down the problem into components I can address effectively."
      ]
    },

    JOKES: {
      keywords: ['tell me a joke', 'make me laugh', 'funny', 'joke'],
      responses: [
        "Here's one for you: Why do programmers prefer dark mode? Because light attracts bugs! 😄 Now, shall we illuminate some ideas without attracting any logical bugs?",
        "A classic: Why don't scientists trust atoms? Because they make up everything! Speaking of making things up, what real-world problem can I help you break down into its fundamental components?"
      ]
    }
  },

  // Advanced Socratic questioning with contextual intelligence
  socratic: {
    clarification: [
      "That's a sophisticated point. To ensure I'm fully grasping your perspective, could you elaborate on what you mean by '{key}'? I want to engage with your idea at the right level of depth.",
      "Interesting approach. When you say '{key}', are you thinking of this in terms of [X] or [Y]? The distinction might lead us toward different insights.",
      "I'm following your logic, and I want to make sure I understand the nuance. Could you provide a specific example of '{topic}' in action?"
    ],
    assumption: [
      "That's a compelling framework. What fundamental assumptions are we accepting when we approach '{topic}' this way? Sometimes the most interesting insights emerge when we question our starting premises.",
      "Excellent thinking. I notice we're operating under certain assumptions about '{topic}'. What if we challenged one of those assumptions - which one would be most interesting to examine?",
      "That reasoning makes sense given our current framework. But I'm curious - what would happen to our conclusion if we questioned the assumption that '{key}' is necessarily true?"
    ],
    evidence: [
      "That's a well-reasoned position. What evidence or experiences have led you to this conclusion about '{topic}'? I'm interested in understanding the foundation of your thinking.",
      "Compelling argument. How do we validate this claim about '{topic}'? What kind of evidence would strengthen or challenge this perspective?",
      "That's an insightful observation. What data, experiences, or logical chains support this view of '{topic}'? And what evidence might someone with an opposing view point to?"
    ],
    perspective: [
      "Thoughtful analysis. Now, if I were to advocate for the strongest possible counter-argument to your position on '{topic}', what would that look like? Sometimes steel-manning the opposition reveals new insights.",
      "Great perspective. How might someone from a completely different background or industry view this issue with '{topic}'? What blind spots might our current viewpoint have?",
      "Interesting framework. What would be the most intellectually honest criticism of this approach to '{topic}'? What would a thoughtful skeptic focus on?"
    ],
    implications: [
      "Fascinating direction. If we accept this reasoning about '{topic}', what are the logical consequences? Where does this thinking ultimately lead us?",
      "That's a significant insight. What are the second and third-order effects if this perspective on '{topic}' is correct? How might it change our approach to related problems?",
      "Excellent point. If this understanding of '{topic}' became widely accepted, how might it transform the way we think about related issues? What new possibilities or challenges would emerge?"
    ],
    synthesis: [
      "We've explored several dimensions of '{topic}' now. What patterns or connections are emerging for you? How do these different perspectives fit together?",
      "This has been a rich exploration of '{topic}'. What's your synthesis of these different angles? What new understanding are you developing?"
    ]
  },

  // Proactive conversation management
  proactive: {
    next_step: [
      "Given what we've uncovered about '{topic}', what do you see as the most promising next step in your analysis?",
      "This exploration of '{topic}' seems to be leading somewhere interesting. What aspect deserves our deeper attention?",
      "We've established some solid ground here. Should we build on this foundation by examining '{topic}' from another angle?"
    ],
    deeper_dive: [
      "This feels like a core insight about '{topic}'. Should we spend more time unpacking its implications?",
      "I sense there's more depth to explore here with '{topic}'. What aspect intrigues you most?",
      "This point about '{topic}' seems central to your thinking. Shall we examine it more thoroughly?"
    ],
    connection_making: [
      "I'm noticing some interesting connections between what you've said about '{topic}' and your earlier points about '{previous_topic}'. Do you see those links as well?",
      "This discussion of '{topic}' reminds me of your insights about '{previous_topic}'. How do these ideas relate in your mind?"
    ]
  },

  // Context-aware responses
  contextual: {
    question: [
      "Excellent question about '{topic}'. Before I provide my analysis, I'm curious about your initial intuitions. What's your gut feeling about this?",
      "That's a sophisticated question regarding '{topic}'. To give you the most valuable response, could you share what specific aspect you're most interested in exploring?",
      "Great question. I can offer several perspectives on '{topic}', but I'd like to understand what prompted this inquiry first. What context is driving your curiosity?"
    ],
    problem_solving: [
      "I can see you're working through a complex challenge with '{topic}'. Before we dive into solutions, let's make sure we're solving the right problem. How would you define the core issue?",
      "This is an interesting problem involving '{topic}'. What approaches have you already considered? Understanding your thought process will help me contribute more effectively.",
      "Complex challenges like this one with '{topic}' often have multiple layers. What do you think is the root cause versus the symptoms you're observing?"
    ],
    learning: [
      "Learning about '{topic}' is exciting! To tailor my explanation to your needs, what's your current level of familiarity with this subject?",
      "'{topic}' is a rich area of study. What specifically about this subject sparked your interest? And what would you like to be able to do with this knowledge?",
      "Great choice of topic to explore. What's your preferred learning style? Do you like to start with big-picture concepts and drill down, or build up from fundamentals?"
    ],
    follow_up: [
      "Building on what we discussed about '{previous_topic}', I'm curious how your thinking has evolved. Any new insights since our last exchange?",
      "I remember you were working through '{previous_topic}'. How did that develop? And what new challenges or questions has it raised for you?",
      "Last time we explored '{previous_topic}' together. I'm interested to hear how you've applied or further developed those ideas."
    ]
  }
};

// --- ADVANCED CONVERSATION ANALYZER ---
class AdvancedConversationAnalyzer {
  static isShortAffirmation(message) {
    const text = message.toLowerCase().trim();
    const shortWords = ['ok', 'cool', 'nice', 'yes', 'yeah', 'sure', 'got it', 'right', 'perfect', 'great', 'awesome', 'exactly', 'precisely', 'absolutely'];
    return text.split(' ').length <= 3 && shortWords.some(word => text.includes(word));
  }

  static analyzeIntent(message, conversationHistory = []) {
    const text = message.toLowerCase();
    
    // Check for short affirmations first
    if (this.isShortAffirmation(message)) {
      return { type: 'conversational', category: 'AFFIRMATION' };
    }

    // Check for specific greetings
    if (text.includes('good morning')) return { type: 'conversational', category: 'MORNING_GREETING' };
    if (text.includes('good afternoon')) return { type: 'conversational', category: 'AFTERNOON_GREETING' };
    if (text.includes('good evening')) return { type: 'conversational', category: 'EVENING_GREETING' };

    // Check for other conversational patterns
    for (const [category, patterns] of Object.entries(responsePatterns.conversational)) {
      if (patterns.keywords && patterns.keywords.some(keyword => text.includes(keyword))) {
        return { type: 'conversational', category };
      }
    }

    // Check for questions
    if (text.includes('?') && !text.includes('what can you') && !text.includes('how are you')) {
      return { type: 'contextual', category: 'question' };
    }

    // Check for problem-solving intent
    if (text.includes('help') || text.includes('solve') || text.includes('problem') || text.includes('issue') || text.includes('challenge')) {
      return { type: 'contextual', category: 'problem_solving' };
    }

    // Check for learning intent
    if (text.includes('learn') || text.includes('teach') || text.includes('explain') || text.includes('understand') || text.includes('how does')) {
      return { type: 'contextual', category: 'learning' };
    }

    // Check for follow-up patterns
    if (conversationHistory.length > 2) {
      return { type: 'contextual', category: 'follow_up' };
    }

    // Default to Socratic
    return { type: 'socratic', category: 'clarification' };
  }
  
  static extractTopics(message, conversationHistory = []) {
    const text = message.toLowerCase();
    const topics = [];
    
    // Technical and professional keywords
    const technicalKeywords = [
      'react', 'javascript', 'python', 'ai', 'machine learning', 'data science',
      'algorithm', 'programming', 'software', 'technology', 'innovation',
      'startup', 'business', 'marketing', 'strategy', 'leadership', 'management',
      'product', 'design', 'development', 'analysis', 'research', 'project'
    ];
    
    technicalKeywords.forEach(keyword => {
      if (text.includes(keyword)) topics.push(keyword);
    });

    // Extract important nouns and concepts
    if (topics.length === 0) {
      const words = text.replace(/[^a-zA-Z\s]/g, '').split(' ');
      const commonWords = new Set(['the', 'a', 'is', 'in', 'of', 'i', 'you', 'me', 'what', 'how', 'why', 'that', 'this', 'and', 'or', 'but']);
      const potentialTopics = words.filter(w => w.length > 4 && !commonWords.has(w));
      topics.push(...potentialTopics.slice(0, 2));
    }

    // Include previous topics for context
    if (conversationHistory.length > 0) {
      const previousTopics = this.extractPreviousTopics(conversationHistory);
      return [...new Set([...topics, ...previousTopics.slice(0, 1)])];
    }

    return [...new Set(topics)];
  }

  static extractPreviousTopics(conversationHistory) {
    const recentMessages = conversationHistory.slice(-4);
    const allTopics = [];
    
    recentMessages.forEach(msg => {
      if (msg.sender === 'user') {
        const msgTopics = this.extractTopics(msg.text, []);
        allTopics.push(...msgTopics);
      }
    });

    return [...new Set(allTopics)];
  }
  
  static getConversationDepth(messages) {
    return messages.filter(m => m.sender === 'user').length;
  }

  static shouldUseUnknownResponse(message) {
    const complexityIndicators = [
      'quantum', 'theoretical physics', 'advanced mathematics', 'cutting-edge research',
      'latest developments', 'recent breakthrough', 'state-of-the-art', 'proprietary',
      'classified', 'experimental', 'unpublished'
    ];
    
    const text = message.toLowerCase();
    return complexityIndicators.some(indicator => text.includes(indicator)) && Math.random() > 0.7;
  }
}

// --- ENHANCED RESPONSE GENERATOR ---
const generateIntelligentResponse = (inputText, context = {}) => {
  const { conversationHistory = [], conversationDepth = 1, topics = [], previousTopics = [] } = context;
  const intent = AdvancedConversationAnalyzer.analyzeIntent(inputText, conversationHistory);

  // Check if we should use unknown response for complex topics
  if (AdvancedConversationAnalyzer.shouldUseUnknownResponse(inputText)) {
    const unknownResponses = responsePatterns.conversational.UNKNOWN_RESPONSE.responses;
    return {
      text: unknownResponses[Math.floor(Math.random() * unknownResponses.length)],
      delay: 1200 + Math.random() * 600
    };
  }

  // Handle conversational responses
  if (intent.type === 'conversational') {
    const pattern = responsePatterns.conversational[intent.category];
    if (pattern && pattern.responses) {
      let responseText = pattern.responses[Math.floor(Math.random() * pattern.responses.length)];
      
      // Add proactive follow-ups for affirmations in deeper conversations
      if (intent.category === 'AFFIRMATION' && conversationDepth > 2 && Math.random() > 0.5) {
        const proactiveResponses = responsePatterns.proactive.deeper_dive;
        responseText += " " + proactiveResponses[Math.floor(Math.random() * proactiveResponses.length)];
      }

      return {
        text: customizeIntelligentResponse(responseText, { topics, previousTopics, keyTerm: topics[0] || 'that' }),
        delay: 800 + Math.random() * 400
      };
    }
  }

  // Handle contextual responses
  if (intent.type === 'contextual') {
    const pattern = responsePatterns.contextual[intent.category];
    if (pattern) {
      let response = pattern[Math.floor(Math.random() * pattern.length)];
      
      // Add connection-making for follow-ups
      if (intent.category === 'follow_up' && previousTopics.length > 0) {
        const connectionResponses = responsePatterns.proactive.connection_making;
        response = connectionResponses[Math.floor(Math.random() * connectionResponses.length)];
      }

      return {
        text: customizeIntelligentResponse(response, { topics, previousTopics, keyTerm: topics[0] || 'this topic' }),
        delay: 1000 + Math.random() * 300
      };
    }
  }

  // Handle Socratic responses with progression
  if (intent.type === 'socratic' || conversationDepth > 2) {
    const strategies = ['clarification', 'assumption', 'evidence', 'perspective', 'implications', 'synthesis'];
    const socraticStrategy = strategies[Math.min(conversationDepth - 1, strategies.length - 1)];
    
    const pattern = responsePatterns.socratic[socraticStrategy];
    if (pattern) {
      const response = pattern[Math.floor(Math.random() * pattern.length)];
      return {
        text: customizeIntelligentResponse(response, { topics, previousTopics, keyTerm: topics[0] || 'that concept' }),
        delay: 1200 + Math.random() * 400
      };
    }
  }

  // Fallback with intelligence
  return {
    text: "That's a thought-provoking point. I'm processing the complexity of what you've shared. Could you help me understand which aspect you'd like to explore most deeply?",
    delay: 1000
  };
};

// --- ENHANCED HELPER FUNCTIONS ---
const customizeIntelligentResponse = (responseText, context) => {
  const { topics = [], previousTopics = [], keyTerm = 'that' } = context;
  const currentTopic = topics[0] || 'your idea';
  const previousTopic = previousTopics[0] || 'our previous discussion';
  
  return responseText
    .replace(/{key}/g, keyTerm)
    .replace(/{topic}/g, currentTopic)
    .replace(/{previous_topic}/g, previousTopic);
};

// --- ENHANCED CONVERSATION MEMORY ---
class EnhancedConversationMemory {
  static store = new Map();
  
  static saveContext(sessionId, context) {
    const existing = this.getContext(sessionId);
    const updated = {
      ...existing,
      ...context,
      lastUpdated: Date.now(),
      totalMessages: (existing.totalMessages || 0) + (context.messages ? 1 : 0)
    };
    this.store.set(sessionId, updated);
  }
  
  static getContext(sessionId) {
    return this.store.get(sessionId) || { messages: [], topics: [], totalMessages: 0 };
  }
  
  static addMessage(sessionId, message) {
    const context = this.getContext(sessionId);
    const messages = [...context.messages, message];
    
    // Extract and update topics
    if (message.sender === 'user') {
      const newTopics = AdvancedConversationAnalyzer.extractTopics(message.text, context.messages);
      const allTopics = [...(context.topics || []), ...newTopics];
      const uniqueTopics = [...new Set(allTopics)].slice(-10); // Keep last 10 unique topics
      
      this.saveContext(sessionId, { 
        messages, 
        topics: uniqueTopics,
        lastUserMessage: message.text,
        conversationDepth: messages.filter(m => m.sender === 'user').length
      });
    } else {
      this.saveContext(sessionId, { messages });
    }
  }
  
  static clearSession(sessionId) {
    this.store.delete(sessionId);
  }
  
  static getConversationSummary(sessionId) {
    const context = this.getContext(sessionId);
    return {
      messageCount: context.messages.length,
      topics: context.topics || [],
      depth: context.conversationDepth || 0,
      lastActivity: context.lastUpdated
    };
  }
}

// --- MAIN ENHANCED HOOK ---
export const useSocraticEngine = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [session, setSession] = useState(null);
  const [conversationContext, setConversationContext] = useState({});
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();
  const { sessionId } = useParams();

  useEffect(() => {
    if (!sessionId) {
      setSession(null);
      setMessages([]);
      setConversationContext({});
      return;
    }

    const memoryContext = EnhancedConversationMemory.getContext(sessionId);
    if (memoryContext && memoryContext.messages && memoryContext.messages.length > 0) {
      setMessages(memoryContext.messages);
      setConversationContext(memoryContext);
      setSession({ 
        id: sessionId, 
        title: memoryContext.title || `Discussion on ${memoryContext.topics?.[0] || 'Various Topics'}` 
      });
    } else {
      setSession({ id: sessionId, title: 'New Intelligent Conversation' });
      setMessages([]);
      setConversationContext({});
    }
  }, [sessionId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: input.trim(),
      sender: 'user',
      timestamp: new Date().toISOString()
    };
    
    const currentInput = input;
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    let currentSessionId = sessionId;
    if (!sessionId) {
      currentSessionId = 'session_' + Date.now();
      navigate(`/session/${currentSessionId}`, { replace: true });
    }

    const sessionContext = EnhancedConversationMemory.getContext(currentSessionId);
    const allMessages = [...sessionContext.messages, userMessage];
    
    const context = {
      conversationHistory: sessionContext.messages,
      topics: AdvancedConversationAnalyzer.extractTopics(currentInput, sessionContext.messages),
      previousTopics: sessionContext.topics || [],
      conversationDepth: AdvancedConversationAnalyzer.getConversationDepth(allMessages),
    };
    
    EnhancedConversationMemory.addMessage(currentSessionId, userMessage);
    setConversationContext(context);
    
    const response = generateIntelligentResponse(currentInput, context);
    
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: response.text,
        sender: 'bot',
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, botMessage]);
      EnhancedConversationMemory.addMessage(currentSessionId, botMessage);
      setIsLoading(false);
    }, response.delay);
  };

  const handleRegenerate = () => {
    if (messages.length < 2) return;
    
    const lastUserMessage = [...messages].reverse().find(m => m.sender === 'user');
    if (!lastUserMessage) return;

    // Remove last bot message and regenerate
    const messagesWithoutLastBot = messages.slice(0, -1);
    setMessages(messagesWithoutLastBot);
    setIsLoading(true);

    const context = {
      conversationHistory: messagesWithoutLastBot,
      topics: conversationContext.topics || [],
      previousTopics: conversationContext.previousTopics || [],
      conversationDepth: conversationContext.conversationDepth || 1,
    };

    const response = generateIntelligentResponse(lastUserMessage.text, context);
    
    setTimeout(() => {
      const botMessage = {
        id: Date.now(),
        text: response.text,
        sender: 'bot',
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, botMessage]);
      if (sessionId) {
        EnhancedConversationMemory.addMessage(sessionId, botMessage);
      }
      setIsLoading(false);
    }, response.delay);
  };

  const handleNewChat = () => {
    navigate('/dashboard');
  };

  const handlePromptClick = (prompt) => {
    setInput(prompt);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleExport = () => {
    const conversationText = messages
      .map(m => `${m.sender === 'user' ? 'You' : 'Chateln'}: ${m.text}`)
      .join('\n\n');
    
    const blob = new Blob([conversationText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chateln-conversation-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleClearSession = () => {
    if (sessionId) {
      EnhancedConversationMemory.clearSession(sessionId);
    }
    setMessages([]);
    setConversationContext({});
    navigate('/dashboard');
  };

  const getConversationStats = () => {
    if (!sessionId) return null;
    return EnhancedConversationMemory.getConversationSummary(sessionId);
  };

  const getContextualPrompts = () => {
    const { topics = [], conversationDepth = 0 } = conversationContext;
    const currentTopic = topics[0];
    
    if (conversationDepth === 0) {
      return [
        "What's the most challenging problem you're facing right now?",
        "I'd like to explore a complex idea with you.",
        "Help me think through a decision I need to make.",
        "What's something you've been curious about lately?"
      ];
    }
    
    if (currentTopic && conversationDepth > 2) {
      return [
        `What assumptions am I making about ${currentTopic}?`,
        `How might someone disagree with my view on ${currentTopic}?`,
        `What are the implications if I'm right about ${currentTopic}?`,
        `What evidence would change my mind about ${currentTopic}?`
      ];
    }
    
    return [
      "Let's dive deeper into this topic.",
      "What's the root cause here?",
      "How does this connect to other areas?",
      "What would happen if we challenged this assumption?"
    ];
  };

  const getWelcomeMessage = () => {
    const timeOfDay = new Date().getHours();
    let greeting;
    
    if (timeOfDay < 12) {
      greeting = "Good morning! I'm Chateln, ready to engage in thoughtful dialogue.";
    } else if (timeOfDay < 17) {
      greeting = "Good afternoon! I'm Chateln, here for intelligent conversation.";
    } else {
      greeting = "Good evening! I'm Chateln, prepared for deep thinking.";
    }
    
    return {
      id: 'welcome',
      text: `${greeting} I'm designed to be your intellectual companion - whether you need quick insights or want to explore complex ideas through Socratic dialogue. What's on your mind today?`,
      sender: 'bot',
      timestamp: new Date().toISOString(),
      isWelcome: true
    };
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getTypingIndicator = () => {
    const indicators = [
      "Analyzing your message with deep attention...",
      "Formulating a thoughtful response...",
      "Processing through multiple perspectives...",
      "Engaging sophisticated reasoning systems...",
      "Considering the implications of your insight..."
    ];
    
    return indicators[Math.floor(Math.random() * indicators.length)];
  };

  const shouldShowWelcome = () => {
    return messages.length === 0 && !isLoading;
  };

  const getMessageMetadata = () => {
    const userMessages = messages.filter(m => m.sender === 'user').length;
    const botMessages = messages.filter(m => m.sender === 'bot').length;
    const topics = conversationContext.topics || [];
    
    return {
      userMessages,
      botMessages,
      topics: topics.slice(0, 3), // Show top 3 topics
      conversationDepth: conversationContext.conversationDepth || 0
    };
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const getMessageSentiment = (messageText) => {
    const positiveWords = ['great', 'excellent', 'wonderful', 'amazing', 'perfect', 'love', 'fantastic'];
    const questionWords = ['what', 'how', 'why', 'when', 'where', 'which', 'who'];
    const text = messageText.toLowerCase();
    
    if (positiveWords.some(word => text.includes(word))) {
      return 'positive';
    }
    if (questionWords.some(word => text.includes(word)) || text.includes('?')) {
      return 'questioning';
    }
    if (text.length > 100) {
      return 'detailed';
    }
    return 'neutral';
  };

  const getConversationFlow = () => {
    const flow = messages.map((msg, index) => ({
      ...msg,
      position: index,
      sentiment: getMessageSentiment(msg.text),
      wordCount: msg.text.split(' ').length,
      isRecentTopic: conversationContext.topics?.some(topic => 
        msg.text.toLowerCase().includes(topic.toLowerCase())
      )
    }));
    
    return flow;
  };

  // Enhanced analytics for conversation quality
  const getConversationQuality = () => {
    const flow = getConversationFlow();
    const userMessages = flow.filter(m => m.sender === 'user');
    const botMessages = flow.filter(m => m.sender === 'bot');
    
    const avgUserWordCount = userMessages.reduce((sum, m) => sum + m.wordCount, 0) / userMessages.length || 0;
    const avgBotWordCount = botMessages.reduce((sum, m) => sum + m.wordCount, 0) / botMessages.length || 0;
    
    const engagement = Math.min(100, (avgUserWordCount / 10) * 20); // Scale engagement
    const depth = Math.min(100, (conversationContext.conversationDepth || 0) * 15);
    const topicCoverage = Math.min(100, (conversationContext.topics?.length || 0) * 25);
    
    return {
      engagement: Math.round(engagement),
      depth: Math.round(depth),
      topicCoverage: Math.round(topicCoverage),
      overall: Math.round((engagement + depth + topicCoverage) / 3)
    };
  };

  // Return all the functions and state for the component
  return {
    // Core state
    messages,
    input,
    isLoading,
    session,
    conversationContext,
    messagesEndRef,
    
    // Core functions
    setInput,
    handleSendMessage,
    handleKeyPress,
    handleRegenerate,
    handleNewChat,
    handlePromptClick,
    handleCopy,
    handleExport,
    handleClearSession,
    
    // Enhanced features
    getWelcomeMessage,
    shouldShowWelcome,
    getContextualPrompts,
    getConversationStats,
    getMessageMetadata,
    getTypingIndicator,
    formatTimestamp,
    getConversationFlow,
    getConversationQuality,
    
    // Utility functions
    getMessageSentiment,
    
    // Session management
    sessionId: session?.id,
    sessionTitle: session?.title
  };
};