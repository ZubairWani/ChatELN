/**
 * Enhanced Smart Response System
 * 
 * This module provides intelligent, contextually aware responses that work
 * seamlessly with the Socratic engine. It uses advanced pattern matching,
 * context awareness, and progressive questioning strategies.
 */

// --- ENHANCED RESPONSE PATTERNS ---
// Organized by intent and conversation depth for smarter responses
const responsePatterns = {
  // SOCRATIC QUESTIONING PATTERNS
  socratic: {
    clarification: [
      { text: "That's intriguing! What specifically do you mean by '{key}'? Can you paint me a clearer picture?", delay: 1200 },
      { text: "I want to understand your perspective better. How would you define '{key}' in your own words?", delay: 1300 },
      { text: "Help me follow your thinking - what's a concrete example of {topic} that illustrates your point?", delay: 1400 },
      { text: "Before we go further, what's your current understanding of {topic}? What stands out to you most?", delay: 1250 },
    ],
    assumption: [
      { text: "What assumptions are you making about {topic}? Are there any you haven't questioned yet?", delay: 1500 },
      { text: "Interesting approach! What if we flipped that assumption - how would your thinking change?", delay: 1400 },
      { text: "What evidence supports that assumption? And what might challenge it?", delay: 1600 },
      { text: "I notice you're assuming {key} - what led you to that belief? Is it always true?", delay: 1550 },
    ],
    evidence: [
      { text: "That's a compelling claim! What evidence have you seen that supports this idea?", delay: 1300 },
      { text: "How do you know that's accurate? What sources or experiences inform your view?", delay: 1400 },
      { text: "What would someone who disagrees with you say? What's their strongest counter-argument?", delay: 1500 },
      { text: "If you had to prove this to a skeptic, what would be your most convincing evidence?", delay: 1450 },
    ],
    perspective: [
      { text: "How might someone from a completely different background view this situation?", delay: 1400 },
      { text: "What are the broader implications if your idea is correct? How does it ripple outward?", delay: 1600 },
      { text: "This connects to our earlier discussion about {previousTopic}. How do these ideas relate?", delay: 1500 },
      { text: "If everyone adopted this perspective, what would change? What might we lose or gain?", delay: 1550 },
    ],
    reasoning: [
      { text: "Walk me through your reasoning step by step. What's the logical chain here?", delay: 1400 },
      { text: "How did you arrive at this conclusion? What was your thought process?", delay: 1300 },
      { text: "What's the core logic connecting these ideas? Help me see the connection.", delay: 1450 },
      { text: "If someone challenged your reasoning, which step would you defend most strongly?", delay: 1500 },
    ],
  },

  // INTENT-BASED RESPONSES
  question: {
    depth_1: [
      { text: "Great question! Before I dive in, what's your current understanding of this? What pieces do you already have?", delay: 1200 },
      { text: "I love curiosity-driven questions! What sparked your interest in this particular topic?", delay: 1100 },
      { text: "That's worth exploring! What would knowing this help you accomplish?", delay: 1300 },
    ],
    depth_2: [
      { text: "You're building good insights! What patterns are you starting to notice?", delay: 1400 },
      { text: "How does this new information connect with what you thought before?", delay: 1350 },
      { text: "What questions is this raising for you? What seems most puzzling now?", delay: 1450 },
    ],
    depth_3: [
      { text: "Your understanding is deepening! What implications do you see from this?", delay: 1500 },
      { text: "How might you apply this insight to other situations you've encountered?", delay: 1550 },
      { text: "What would you want to explore next to complete your understanding?", delay: 1600 },
    ],
  },

  problem_solving: {
    depth_1: [
      { text: "I see you're tackling a challenge! Before we jump to solutions, help me understand: what's the root problem you're trying to solve?", delay: 1400 },
      { text: "Problem-solving mode activated! What have you already tried, and what didn't work as expected?", delay: 1300 },
      { text: "Let's think systematically about this. What constraints or limitations are you working within?", delay: 1500 },
    ],
    depth_2: [
      { text: "That's a solid approach! What potential obstacles do you foresee with this solution?", delay: 1400 },
      { text: "Interesting strategy! How would you know if this solution is working effectively?", delay: 1350 },
      { text: "What if this approach doesn't work - what's your backup plan? How would you pivot?", delay: 1500 },
    ],
    depth_3: [
      { text: "You're thinking like a true problem-solver! What edge cases should we consider?", delay: 1450 },
      { text: "How might someone else approach this same problem differently? What would they see that you might miss?", delay: 1600 },
      { text: "What's the simplest version of this solution? Could we start there and build up?", delay: 1550 },
    ],
  },

  learning: {
    depth_1: [
      { text: "Learning is exciting! What's your learning goal here - are you trying to understand, apply, or master this topic?", delay: 1300 },
      { text: "I love helping people learn! What do you already know about {topic}, and where do you feel gaps?", delay: 1400 },
      { text: "Great choice to dive deeper! What's driving your curiosity about this particular area?", delay: 1250 },
    ],
    depth_2: [
      { text: "You're making connections! How does this new knowledge fit with what you already understood?", delay: 1400 },
      { text: "What's the most surprising thing you've learned so far? What challenged your expectations?", delay: 1500 },
      { text: "How might you explain this concept to someone who's never encountered it before?", delay: 1450 },
    ],
    depth_3: [
      { text: "Your mastery is growing! What real-world applications can you imagine for this knowledge?", delay: 1500 },
      { text: "How has your perspective shifted as you've learned more? What do you see differently now?", delay: 1550 },
      { text: "What's the next logical step in your learning journey? Where does this knowledge lead?", delay: 1600 },
    ],
  },

  creative: {
    depth_1: [
      { text: "Creative projects are my favorite! What's the vision driving this idea? What impact do you want to create?", delay: 1300 },
      { text: "I love brainstorming! Who's your target audience, and what problem does this solve for them?", delay: 1400 },
      { text: "Creative thinking time! What inspired this idea? Was there a specific moment or need that sparked it?", delay: 1350 },
    ],
    depth_2: [
      { text: "Your creativity is flowing! What constraints might actually help focus and improve your ideas?", delay: 1400 },
      { text: "How might you test this concept with real users? What would you want to learn first?", delay: 1500 },
      { text: "What would make this idea uniquely yours? How can you add your personal touch?", delay: 1450 },
    ],
    depth_3: [
      { text: "You're refining your vision beautifully! What's the minimal viable version that could prove your concept?", delay: 1550 },
      { text: "How would you measure success for this creative project? What would 'winning' look like?", delay: 1500 },
      { text: "What resources or collaborators would take this from good to extraordinary?", delay: 1600 },
    ],
  },

  coding: {
    depth_1: [
      { text: "Code challenges are great for learning! What's the specific problem you're trying to solve, and what have you tried so far?", delay: 1400 },
      { text: "Let's debug this together! Can you describe what you expected to happen versus what's actually happening?", delay: 1500 },
      { text: "Programming puzzles are fun! What's your approach so far, and where are you getting stuck?", delay: 1350 },
    ],
    depth_2: [
      { text: "Good progress! What edge cases or potential issues should we consider with this approach?", delay: 1400 },
      { text: "How might you refactor this code to make it more readable or efficient?", delay: 1450 },
      { text: "What testing strategy would help you feel confident this solution works correctly?", delay: 1500 },
    ],
    depth_3: [
      { text: "You're thinking like a senior developer! How would this solution scale if the requirements changed?", delay: 1550 },
      { text: "What patterns or principles from this solution could you apply to other coding challenges?", delay: 1600 },
      { text: "How would you explain your solution and its trade-offs to a colleague in code review?", delay: 1500 },
    ],
  },

  // CONVERSATIONAL PATTERNS (Enhanced)
  greetings: [
    { text: "Hello! I'm ChatELN, your Socratic thinking partner. What's on your mind today - are you exploring, creating, or solving something?", delay: 1000 },
    { text: "Hi there! Ready to dive deep into ideas together? I'm here to help you think through whatever's interesting you.", delay: 900 },
    { text: "Greetings! I love helping people discover insights. What topic or challenge can we explore together?", delay: 950 },
    { text: "Hello! It's always a good day for deeper thinking. What's sparking your curiosity right now?", delay: 850 },
  ],

  well_being: [
    { text: "I'm running smoothly and excited to dive into interesting conversations! Thanks for asking. What's got your attention today?", delay: 1100 },
    { text: "All systems go and ready for thoughtful exploration! How can I help you think through something meaningful?", delay: 1200 },
    { text: "I'm in peak form for collaborative thinking! What questions or ideas are percolating for you?", delay: 1150 },
  ],

  gratitude: [
    { text: "You're very welcome! I love these kinds of deep conversations. What else would you like to explore?", delay: 700 },
    { text: "It's my pleasure to think alongside you! Where should our conversation go next?", delay: 800 },
    { text: "Happy to help! I find these exchanges as enriching as I hope you do. What's next on your mind?", delay: 750 },
  ],

  // CONTEXTUAL FALLBACKS
  fallback: {
    engaged: [
      { text: "That's a fascinating direction! Help me understand what specifically interests you about this.", delay: 1200 },
      { text: "I'm intrigued by that perspective. What led you to think about it that way?", delay: 1300 },
      { text: "That opens up some interesting possibilities. What aspect would you like to explore first?", delay: 1400 },
    ],
    clarifying: [
      { text: "I want to make sure I understand correctly. Could you elaborate on what you mean by that?", delay: 1300 },
      { text: "Help me follow your thinking - what's the key point you're making here?", delay: 1250 },
      { text: "I'm processing that idea. How does it connect to what we've been discussing?", delay: 1400 },
    ],
    curious: [
      { text: "That's an interesting angle I hadn't considered. What made you think of that?", delay: 1200 },
      { text: "I'm curious about your perspective on this. What experiences shaped this view?", delay: 1350 },
      { text: "That raises some thought-provoking questions. Which aspect intrigues you most?", delay: 1300 },
    ],
  },
};

// --- ENHANCED KEYWORD MAPPING ---
// More sophisticated pattern matching with context awareness
const keywordMapping = {
  // Meta-conversation
  well_being: ['how are you', 'how you doing', 'hows it going', 'are you okay'],
  greetings: ['hello', 'hi there', 'hey', 'greetings', 'good morning', 'good afternoon', 'sup'],
  gratitude: ['thank you', 'thanks', 'appreciate', 'grateful', 'thx'],
  farewell: ['bye', 'goodbye', 'see you', 'later', 'cya', 'farewell'],

  // Learning indicators
  learning: ['learn', 'teach me', 'explain', 'understand', 'study', 'master', 'knowledge'],
  
  // Problem-solving indicators
  problem_solving: ['help', 'fix', 'solve', 'debug', 'issue', 'problem', 'error', 'broken', 'stuck'],
  
  // Creative indicators
  creative: ['create', 'build', 'design', 'brainstorm', 'idea', 'innovative', 'imagine', 'invent'],
  
  // Coding indicators
  coding: ['code', 'program', 'function', 'javascript', 'python', 'react', 'html', 'css', 'algorithm', 'bug'],
  
  // Question indicators
  question: ['what', 'how', 'why', 'when', 'where', 'which', 'who', '?'],
};

// --- CONTEXT-AWARE RESPONSE GENERATOR ---
class SmartResponseGenerator {
  static getResponse(inputText, context = {}) {
    const { intent, conversationDepth = 1, topics = [], previousMessages = [] } = context;
    const lowerInput = inputText.toLowerCase().trim();

    // First, try to get a Socratic response if we have good context
    if (intent && conversationDepth > 1) {
      const socraticResponse = this.getSocraticResponse(inputText, context);
      if (socraticResponse) return socraticResponse;
    }

    // Then try intent-based responses
    if (intent && responsePatterns[intent]) {
      const depthKey = `depth_${Math.min(conversationDepth, 3)}`;
      const intentResponses = responsePatterns[intent][depthKey] || responsePatterns[intent].depth_1;
      if (intentResponses) {
        return this.customizeResponse(
          intentResponses[Math.floor(Math.random() * intentResponses.length)],
          inputText,
          topics
        );
      }
    }

    // Fall back to keyword matching
    for (const category in keywordMapping) {
      const foundKeyword = keywordMapping[category].some(keyword => lowerInput.includes(keyword));
      if (foundKeyword && responsePatterns[category]) {
        const responses = Array.isArray(responsePatterns[category]) 
          ? responsePatterns[category]
          : responsePatterns[category].depth_1 || Object.values(responsePatterns[category])[0];
        
        return this.customizeResponse(
          responses[Math.floor(Math.random() * responses.length)],
          inputText,
          topics
        );
      }
    }

    // Intelligent fallback based on conversation depth
    const fallbackType = conversationDepth > 3 ? 'engaged' : 
                        conversationDepth > 1 ? 'clarifying' : 'curious';
    const fallbackResponses = responsePatterns.fallback[fallbackType];
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
  }

  static getSocraticResponse(inputText, context) {
    const { conversationDepth, topics, intent } = context;
    
    // Choose Socratic strategy based on conversation depth and intent
    let strategy = 'clarification';
    
    if (conversationDepth <= 2) {
      strategy = 'clarification';
    } else if (conversationDepth <= 4) {
      strategy = intent === 'problem_solving' ? 'reasoning' : 'evidence';
    } else {
      strategy = Math.random() > 0.5 ? 'perspective' : 'assumption';
    }

    const socraticResponses = responsePatterns.socratic[strategy];
    if (!socraticResponses) return null;

    const response = socraticResponses[Math.floor(Math.random() * socraticResponses.length)];
    return this.customizeResponse(response, inputText, topics);
  }

  static customizeResponse(response, inputText, topics = []) {
    let customizedText = response.text;
    
    // Extract key terms for templating
    const words = inputText.split(' ').filter(word => word.length > 3);
    const keyTerm = topics[0] || words.find(w => w.length > 4) || 'this concept';
    const topic = topics[0] || 'your idea';
    const previousTopic = topics[1] || 'our earlier discussion';

    // Replace template variables
    customizedText = customizedText
      .replace(/{key}/g, keyTerm)
      .replace(/{topic}/g, topic)
      .replace(/{previousTopic}/g, previousTopic);

    return {
      text: customizedText,
      delay: response.delay + Math.random() * 200 // Add some natural variation
    };
  }
}

// --- MAIN EXPORT FUNCTION ---
/**
 * Enhanced response generator that works with the Socratic engine
 * @param {string} inputText - The user's message
 * @param {Object} context - Conversation context from the Socratic engine
 * @returns {{text: string, delay: number}} - The bot's response and delay
 */
export const getDummyResponse = (inputText, context = {}) => {
  return SmartResponseGenerator.getResponse(inputText, context);
};

// --- LEGACY SUPPORT ---
// Keep the old function signature for backward compatibility
export const getLegacyResponse = (inputText) => {
  return getDummyResponse(inputText, {});
};

// --- RESPONSE QUALITY ANALYZER ---
export const analyzeResponseQuality = (response, context) => {
  const { conversationDepth, intent } = context;
  
  // Score the response based on various factors
  let score = 0;
  
  // Length appropriateness
  if (response.text.length > 50 && response.text.length < 200) score += 20;
  
  // Question inclusion (Socratic method)
  if (response.text.includes('?')) score += 25;
  
  // Context relevance
  if (intent && response.text.toLowerCase().includes(intent.replace('_', ' '))) score += 15;
  
  // Conversation depth appropriateness
  if (conversationDepth > 2 && response.text.includes('connect')) score += 10;
  
  // Engagement level
  const engagementWords = ['interesting', 'fascinating', 'curious', 'explore', 'think'];
  if (engagementWords.some(word => response.text.toLowerCase().includes(word))) score += 15;
  
  return {
    score: Math.min(score, 100),
    suggestions: score < 70 ? ['Consider adding more questions', 'Make it more contextual'] : []
  };
};