import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL + '/sessions';

// In a real app, you would have an axios instance with auth headers
const apiClient = axios.create({
    baseURL: API_URL,
});

// --- MOCK DATA ---
// A simple array to simulate a database for our mock functions
const mockSessions = [
    { id: 'sess_1', title: 'Debugging a tricky bug', mode: 'Debugging', createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString() }, // 1 day ago
    { id: 'sess_2', title: 'Brainstorming new feature', mode: 'Creative', createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString() }, // 30 mins ago
];


// Create a new session
export const createSession = async (title, mode) => {
    // const response = await apiClient.post('/', { title, mode });
    // return response.data;
    console.log(`API CALL (mock): Create session with title: ${title}, mode: ${mode}`);
    const newSession = { 
        id: `sess_${Date.now()}`, 
        title, 
        mode, 
        createdAt: new Date().toISOString() 
    };
    mockSessions.unshift(newSession); // Add to the start of our mock array
    return newSession;
};

// Get all sessions for a user
export const getAllSessions = async () => {
    // const response = await apiClient.get('/');
    // return response.data;
     console.log('API CALL (mock): Get all sessions');
     return [...mockSessions]; // Return a copy of the mock data
};

// **ADDED THIS FUNCTION TO FIX THE ERROR**
// Get a single session by its ID
export const getSessionById = async (sessionId) => {
    // const response = await apiClient.get(`/${sessionId}`);
    // return response.data;
    console.log(`API CALL (mock): Get session by ID: ${sessionId}`);
    const session = mockSessions.find(s => s.id === sessionId);

    if (session) {
        return session;
    }
    // Return a fallback object if not found, to prevent crashes
    return { id: sessionId, title: 'Session Not Found', mode: 'Default', createdAt: new Date().toISOString() };
};


// Export session as Markdown
export const exportSession = (sessionId, transcript) => {
    console.log(`Exporting session ${sessionId}`);
    const blob = new Blob([transcript], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `LogicPath-Session-${sessionId}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url); // Clean up the object URL
};