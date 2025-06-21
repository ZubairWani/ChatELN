/**
 * dummyResponses.js
 * 
 * This module simulates a professional, conversational AI by providing an extensive
 * set of canned responses based on keyword triggers. It is designed to give a 
 * convincing and robust first-time user experience with rich, varied content.
 */

// A "database" of responses with a consistent persona.
// We use Markdown for richer formatting like lists, bolding, and code blocks.
const responsePatterns = {
  greetings: [
    { text: "Hello! I'm ChatELN, your Socratic assistant. How can I help you explore your ideas today?", delay: 900 },
    { text: "Hi there! Ready to dive into a topic or draft some content? I'm here to assist.", delay: 800 },
    { text: "Greetings! What project or idea can I help you with right now?", delay: 950 },
    { text: "Hello! It's a great day for discovery. What's on your mind?", delay: 850 },
  ],
  well_being: [
    { text: "As an AI, I don't have feelings, but I'm operating at peak performance and ready to help. Thanks for asking! What's on your mind?", delay: 1200 },
    { text: "I'm a program, so I'm always ready! How can I assist you with your work today?", delay: 1100 },
    { text: "Functioning within normal parameters and ready for your prompt! What can we tackle together?", delay: 1250 },
  ],
  creator: [
    { text: "I was created by a team of talented developers and researchers. They designed me to be a helpful and insightful assistant for your projects.", delay: 1500 },
    { text: "I am a proprietary language model developed for this application. My purpose is to provide you with the best possible assistance.", delay: 1600 },
    { text: "My origins trace back to lines of code and neural networks, all crafted by a dedicated team aiming to build helpful AI tools.", delay: 1550 },
  ],
  purpose: [
    { text: "My primary purpose is to be your intellectual partner. I can help you:\n\n*   **Brainstorm** and refine ideas\n*   **Draft** documents, emails, and other content\n*   **Explain** complex topics in a simple way\n*   **Analyze** text and provide summaries\n\nWhat would you like to accomplish?", delay: 1800 },
    { text: "I'm here to be your creative and analytical partner. Think of me as a tool to help you think deeper, write faster, and learn more effectively.", delay: 1700 },
    { text: "My goal is to augment your thinking process. Whether you're stuck on a problem, need to write something quickly, or want to understand a new subject, I'm here to facilitate that.", delay: 1750 },
  ],
  gratitude: [
    { text: "You're very welcome! I'm glad I could help. Is there anything else you need?", delay: 700 },
    { text: "You're welcome! My goal is to be helpful. What's our next step?", delay: 800 },
    { text: "It was my pleasure to assist. Let me know if more questions arise.", delay: 750 },
  ],
  farewell: [
    { text: "Goodbye! Feel free to return anytime you need assistance.", delay: 800 },
    { text: "Take care! I'll be here if you need me again.", delay: 700 },
    { text: "Farewell. Wishing you a productive day!", delay: 750 },
  ],
  correction: [
    { text: "Thank you for the correction! I'm always learning and appreciate the feedback. I will update my knowledge based on this.", delay: 1000 },
    { text: "You are correct, my apologies for the error. Thank you for helping me improve.", delay: 900 },
  ],
  limitations: [
    { text: "As an AI, I don't have personal opinions, consciousness, or feelings. I process information based on the data I was trained on. My knowledge also has a cutoff date, so I may not be aware of very recent events.", delay: 1600 },
    { text: "That's a deep question! I am a complex algorithm, not a sentient being. I don't experience the world, but I can process information about it to help you.", delay: 1500 },
    { text: "I can't perform actions in the real world, like booking appointments or making phone calls. My expertise is in processing and generating text-based information.", delay: 1400 },
  ],
  humor: [
    { text: "Why don't scientists trust atoms? Because they make up everything!", delay: 1100 },
    { text: "I told my computer I needed a break, and now it won’t stop sending me Kit-Kat ads.", delay: 1200 },
    { text: "What do you call a lazy kangaroo? Pouch potato!", delay: 1000 },
  ],
  writing: [
    { text: "Of course. Here is a draft for a professional email requesting a follow-up on a project:\n\n**Subject: Following Up on Project X**\n\nHi [Name],\n\nI hope you're having a productive week.\n\nI'm writing to follow up on the status of Project X. Could you please provide a quick update on the current progress and the estimated timeline for the next phase?\n\nLet me know if you need any additional information from my end.\n\nBest regards,\n[Your Name]", delay: 2200 },
    { text: "Absolutely. Here's a short, engaging social media post you could use:\n\n---\n\n🚀 Big news! We're excited to announce [Your News/Feature]. We've been working hard on this and can't wait for you to see it. Check it out at the link in our bio! #Announcement #NewFeature #LaunchDay\n\n---", delay: 1900 },
    { text: "I can certainly help with that. To write a good summary, I first need the text you want me to summarize. Please provide it, and I'll create a concise overview for you.", delay: 1500 },
  ],
  brainstorm: [
    { text: "An excellent idea! Let's brainstorm. To get started, what is the central theme or problem we're trying to solve? For example, are we looking for blog post titles, app features, or marketing slogans?", delay: 1400 },
    { text: "Great! Let's generate some ideas. Here's a classic brainstorming technique called SCAMPER. We can use it to innovate on an existing idea:\n\n*   **S**ubstitute\n*   **C**ombine\n*   **A**dapt\n*   **M**odify\n*   **P**ut to another use\n*   **E**liminate\n*   **R**everse\n\nWhat product or idea should we apply this to?", delay: 2000 },
  ],
  code: [
    { text: "Certainly! Here is a simple 'Hello, World!' function in Python:\n\n```python\ndef say_hello():\n    print(\"Hello, World!\")\n\nsay_hello()\n```\n\nLet me know if you need it in another language or a more complex example!", delay: 2000 },
    { text: "Of course. Here is a basic HTML boilerplate structure for a web page:\n\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n</head>\n<body>\n    <h1>My First Heading</h1>\n    <p>My first paragraph.</p>\n</body>\n</html>\n```", delay: 1800 },
    { text: "Here's how you might fetch data from an API using JavaScript's `fetch` with `async/await` syntax:\n\n```javascript\nasync function fetchData(url) {\n  try {\n    const response = await fetch(url);\n    if (!response.ok) {\n      throw new Error(`HTTP error! status: ${response.status}`);\n    }\n    const data = await response.json();\n    console.log(data);\n    return data;\n  } catch (error) {\n    console.error('Error fetching data:', error);\n  }\n}\n\n// Example usage:\nfetchData('https://api.example.com/data');\n```", delay: 2400 },
  ],
  explain_more: [
    { text: "**API (Application Programming Interface):** An API is a set of rules and protocols that allows different software applications to communicate with each other. It's like a waiter in a restaurant: you (the client) tell the waiter (the API) what you want, and the waiter communicates with the kitchen (the server) to get your order prepared and brought back to you.", delay: 1900 },
    { text: "**Blockchain:** A blockchain is a decentralized, distributed, and often public, digital ledger consisting of records called blocks that is used to record transactions across many computers so that any involved block cannot be altered retroactively, without the alteration of all subsequent blocks. It's the core technology behind cryptocurrencies like Bitcoin.", delay: 2100 },
    { text: "**Cloud Computing:** In simple terms, cloud computing means storing and accessing data and programs over the internet instead of your computer's hard drive. It's broken down into three main services:\n\n| Service | What it is | Example |\n| :--- | :--- | :--- |\n| **IaaS** | Infrastructure-as-a-Service | Amazon Web Services (AWS) |\n| **PaaS** | Platform-as-a-Service | Heroku, Google App Engine |\n| **SaaS** | Software-as-a-Service | Google Docs, Dropbox |", delay: 2500 },
  ],
  // Fallback for when no other category is matched.
  fallback: [
    { text: "That's an interesting question. Could you provide a bit more context?", delay: 1200 },
    { text: "I'm processing that. How does this relate to what we were discussing?", delay: 1400 },
    { text: "Understood. What would you like to explore next based on that?", delay: 1300 },
    { text: "I'm not sure I have a specific function for that, but I can certainly try to help you think through it. Where should we start?", delay: 1500 },
    { text: "That's a topic I'll have to analyze. Could you elaborate on one aspect of that for me?", delay: 1600 },
  ],
};

// Maps categories to an array of keywords or phrases.
// The order matters: more specific phrases should come before general ones if they overlap.
const keywordMapping = {
  // Conversational
  well_being: ['how are you', 'hows it going', 'how you doing'],
  creator: ['who made you', 'who created you', 'your developer', 'who are your creators'],
  purpose: ['what is your purpose', 'what do you do', 'what are you for', 'what can you do'],
  limitations: ['are you sentient', 'are you conscious', 'your limits', 'your limitations'],
  correction: ['you are wrong', 'that is incorrect', 'you made a mistake'],
  greetings: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon'],
  gratitude: ['thank you', 'thanks', 'appreciate it'],
  farewell: ['bye', 'goodbye', 'see you', 'cya'],
  humor: ['tell me a joke', 'make me laugh', 'are you funny'],

  // Functional
  writing: ['write me', 'draft a', 'create a post'],
  brainstorm: ['brainstorm', 'give me ideas', 'idea for'],
  code: ['code', 'javascript', 'python', 'react', 'snippet', 'html', 'css'],
  explain_more: ['explain', 'what is', 'define', 'what are'], // Broadened this category
  help: ['help', 'assist', 'can you help'], // Keep as a general fallback
};

/**
 * Finds a suitable dummy response by checking for keywords in the input text.
 * @param {string} inputText - The user's message.
 * @returns {{text: string, delay: number}} - The bot's response and simulated delay.
 */
export const getDummyResponse = (inputText) => {
  const lowerInput = inputText.toLowerCase().trim();

  // Iterate through the mapping to find a matching category
  for (const category in keywordMapping) {
    // Check if any of the keywords for this category are in the input
    const foundKeyword = keywordMapping[category].some(keyword => lowerInput.includes(keyword));
    
    if (foundKeyword) {
      const responses = responsePatterns[category];
      // Return a random response from the matched category
      return responses[Math.floor(Math.random() * responses.length)];
    }
  }

  // If no specific keywords are found, return a random fallback response
  const fallbackResponses = responsePatterns.fallback;
  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
};