import React, { useState } from 'react'; // 1. Import useState

import { Pencil, GraduationCap, Code2, Coffee, Lightbulb } from 'lucide-react';
import MessageInput from './MessageInput';

// 2. Create an array of possible welcome messages
const welcomeMessages = [
    "How can I help today?",
    "What's on your mind?",
    "Ready for another session?",
    "Let's create something amazing.",
    "Ask me anything.",
    "Your creative partner is ready.",
    "What can I assist you with?",
    "Let's get started, shall we?",
];

const WelcomeScreen = ({ input, setInput, onSend, isLoading, onSuggestionClick }) => {
    
    // 3. Use useState with a lazy initializer to pick a random message on mount.
    // This function only runs once when the component is first created.
    const [greeting] = useState(() => {
        const randomIndex = Math.floor(Math.random() * welcomeMessages.length);
        return welcomeMessages[randomIndex];
    });

    const suggestions = [
        { icon: Pencil, text: 'Write', prompt: "Help me write a blog post about..." },
        { icon: GraduationCap, text: 'Learn', prompt: "Explain the concept of..." },
        { icon: Code2, text: 'Code', prompt: "Write a Python script to..." },
        { icon: Coffee, text: 'Life stuff', prompt: "Give me ideas for a healthy breakfast." },
        { icon: Lightbulb, text: 'Claude\'s choice', prompt: "Surprise me with an interesting fact." },
    ];
    
    // No changes needed for the rest of the logic
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (!isLoading && input.trim()) {
                onSend();
            }
        }
    };
    const canSend = !isLoading && input.trim();

    return (
        <div className="p-4 w-full h-full flex items-center justify-center">
             <div className="w-full max-w-2xl flex flex-col items-center">
                
                <div className="text-center mb-8">
                    <h1 className="text-4xl sm:text-5xl text-gray-400 font-serif">
                        <span className="text-blue-400 text-5xl sm:text-6xl align-middle mr-3">*</span>
                        {/* 4. Display the randomly selected greeting */}
                        {greeting}
                    </h1>
                </div>

                <div className="mt-8 w-full">
                    <MessageInput
                        input={input}
                        setInput={setInput}
                        onSend={onSend}
                        isLoading={isLoading}
                    />
                </div>

                <div className="flex flex-wrap justify-center gap-3 mt-6">
                    {suggestions.map((s, index) => (
                        <button 
                            key={index}
                            onClick={() => onSuggestionClick(s.prompt)}
                            className="flex items-center gap-2 bg-[#2a2a2a] border border-gray-700/60 rounded-lg px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/80 transition-colors"
                        >
                            <s.icon className="w-4 h-4" />
                            {s.text}
                        </button>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default WelcomeScreen;