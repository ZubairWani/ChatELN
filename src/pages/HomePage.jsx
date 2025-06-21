import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Brain, Users, Target, ChevronRight, ArrowRight, Code, PenTool, 
  GraduationCap, Building2, Lightbulb, Shield, BarChart3, FileText,
  MessageSquare, CheckCircle, Star, Download, Globe, 
  Smartphone, Monitor, Eye, Lock, Clock, Award,
  Github, Twitter, Linkedin, ExternalLink,
  Layers, Filter, Database, Sparkles, Quote
} from 'lucide-react';

const HomePage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('individual');

  // Stats data for Hero Section
  const stats = [
    { number: '10,000+', label: 'Active Users', icon: Users },
    { number: '50,000+', label: 'Sessions Completed', icon: MessageSquare },
    { number: '98%', label: 'User Satisfaction', icon: Star },
    { number: '24/7', label: 'AI Availability', icon: Clock }
  ];

  // Core Features data
  const coreFeatures = [
    {
      icon: Brain,
      title: 'Dynamic Socratic Engine',
      description: 'Context-aware AI that analyzes your input to ask the most relevant, thought-provoking questions in real-time.',
      color: 'blue'
    },
    {
      icon: Filter,
      title: 'Intelligent Mode-Switching',
      description: 'Tailored questioning styles for debugging, creative, strategic, and analytical tasks with automatic context adaptation.',
      color: 'indigo'
    },
    {
      icon: Target,
      title: 'Assumption Challenger',
      description: 'Detects and gently challenges implicit assumptions to explore overlooked possibilities and alternative solutions.',
      color: 'purple'
    },
    {
      icon: BarChart3,
      title: 'Path Visualization',
      description: 'Visual summaries showing your logical journey, key turning points, and insights discovered during sessions.',
      color: 'green'
    },
    {
      icon: Layers,
      title: 'Multi-Modal Input',
      description: 'Start sessions with text, code snippets, images, or whiteboard diagrams for comprehensive problem-solving.',
      color: 'orange'
    },
    {
      icon: FileText,
      title: 'Session Export',
      description: 'Export full transcripts as Markdown or PDF for documentation, reports, or personal knowledge base.',
      color: 'teal'
    }
  ];

  // Pricing tiers
  const pricingTiers = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for trying out ChatELN',
      features: [
        '20 sessions per month',
        'Standard AI model',
        'Basic session dashboard',
        'Community support',
        'Session export (PDF)'
      ],
      cta: 'Start Free',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$10',
      period: 'per month',
      description: 'For serious individual thinkers',
      features: [
        'Unlimited sessions',
        'Advanced AI model',
        'Path visualization',
        'Priority support',
        'All export formats',
        'Advanced analytics',
        'Custom session templates'
      ],
      cta: 'Go Pro',
      popular: true,
    },
    {
      name: 'Teams',
      price: '$25',
      period: 'per user/month',
      description: 'For collaborative problem-solving',
      features: [
        'Everything in Pro',
        'Team workspaces',
        'Shared session templates',
        'Admin dashboard',
        'Team analytics',
        'Role management',
        'Collaborative sessions'
      ],
      cta: 'Start Team Trial',
      popular: false,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations',
      features: [
        'Everything in Teams',
        'SSO integration',
        'Advanced security',
        'Dedicated support',
        'Custom integrations',
        'Volume discounts',
        'On-premise options'
      ],
      cta: 'Contact Sales',
      popular: false,
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Senior Developer at TechCorp',
      avatar: '👩‍💻',
      content: 'ChatELN helped me debug a complex issue that had been blocking me for days. Instead of giving me the answer, it guided me to discover the root cause myself.',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      role: 'Product Manager',
      avatar: '👨‍💼',
      content: 'Our team brainstorming sessions are now 10x more productive. The Socratic approach prevents groupthink and surfaces innovative solutions we never considered.',
      rating: 5
    },
    {
      name: 'Dr. Elena Rodriguez',
      role: 'Research Scientist',
      avatar: '👩‍🔬',
      content: 'As a researcher, I need to think critically about complex problems. ChatELN is like having a brilliant colleague available 24/7 to challenge my assumptions.',
      rating: 5
    }
  ];
  
  // FAQ Data
  const faqs = [
    {
      question: "How is ChatELN different from ChatGPT or other AI assistants?",
      answer: "While most AI tools provide direct answers, ChatELN uses the Socratic method to guide you to discoveries through intelligent questioning. It helps you think through problems rather than thinking for you, leading to deeper understanding and better retention."
    },
    {
      question: "What types of problems can ChatELN help with?",
      answer: "ChatELN is designed to help with any thinking challenge: debugging code, creative writing, strategic planning, learning new concepts, making decisions, brainstorming ideas, and more. It adapts its questioning style to match your specific needs."
    },
    {
      question: "Do I need any special training to use ChatELN?",
      answer: "No special training required! Simply describe your challenge or question, and ChatELN will guide you through the thinking process. The interface is intuitive and designed for immediate productivity."
    },
    {
      question: "How does the team collaboration feature work?",
      answer: "Teams can create shared workspaces where members can collaborate on thinking sessions, share templates, and view each other's problem-solving approaches. Admin controls allow for role management and usage analytics."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. All sessions are encrypted end-to-end, and we never use your data to train our models. Enterprise customers get additional security features like SSO, audit logs, and compliance certifications."
    },
    {
      question: "Can I export my sessions?",
      answer: "Yes! You can export your complete session transcripts as Markdown or PDF files. This makes it easy to document your thinking process, create reports, or build a personal knowledge base."
    }
  ];

  // Tailwind CSS class mappings to ensure JIT compiler includes them
  const featureColors = {
    blue: 'bg-blue-100 text-blue-600',
    indigo: 'bg-indigo-100 text-indigo-600',
    purple: 'bg-purple-100 text-purple-600',
    green: 'bg-green-100 text-green-600',
    orange: 'bg-orange-100 text-orange-600',
    teal: 'bg-teal-100 text-teal-600',
  };


const MenoLogo = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="rotate(8 50 50)">
      <path 
        d="M10 20C10 14.4772 14.4772 10 20 10H80C85.5228 10 90 14.4772 90 20V70C90 75.5228 85.5228 80 80 80H35L15 95V80H20C14.4772 80 10 75.5228 10 70V20Z"
        fill="#3B82F6"
      />

      {/* Left Eye */}
      <circle cx="38" cy="45" r="13" fill="white" />
      <circle cx="38" cy="52" r="7" fill="#1E3A8A" /> {/* Pupil moved down */}
      
      {/* Right Eye */}
      <circle cx="72" cy="45" r="13" fill="white" />
      <circle cx="72" cy="52" r="7" fill="#1E3A8A" /> {/* Pupil moved down */}
    </g>
  </svg>
);

  return (
    
    <div className=" text-slate-800">
      {/* Hero Section */}
      {/* <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-white/90 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-3 mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <MenoLogo className="h-6 w-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
            <span className="text-sm font-semibold text-blue-800 px-1">Elenchic Logic Navigator</span>
            <Sparkles className="w-4 h-4 text-yellow-500 ml-2" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Don't just find answers.
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Discover the path.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Welcome to <strong className="text-blue-600">ChatELN</strong> — a universal AI partner that helps you solve problems, brainstorm ideas, and deepen understanding through intelligent Socratic questioning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            {user ? (
              <Link
                to="/dashboard"
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-8 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                Go to Dashboard
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <>
                <Link
                  to="/register"
                  className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-8 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                >
                  Start Thinking for Free
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <button 
                  className="group bg-white text-slate-700 font-semibold py-4 px-8 rounded-full border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 text-lg shadow-sm hover:shadow-md flex items-center justify-center"
                  onClick={() => document.getElementById('problem-section').scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-slate-100">
                <stat.icon className="w-8 h-8 text-blue-600 mb-2" />
                <div className="text-2xl font-bold text-slate-900">{stat.number}</div>
                <div className="text-sm font-medium text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      
      
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-white/90 backdrop-blur-sm border border-blue-200 rounded-full px-3 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <MenoLogo className="h-4 w-4 sm:h-6 sm:w-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
            <span className="text-xs sm:text-sm font-semibold text-blue-800 px-1 sm:px-1">Elenchic Logic Navigator</span>
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 ml-1 sm:ml-2" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
            Don't just find answers.
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Discover the path.
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 mb-6 sm:mb-8 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
            Welcome to <strong className="text-blue-600">ChatELN</strong> — a universal AI partner that helps you solve problems, brainstorm ideas, and deepen understanding through intelligent Socratic questioning.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-2 sm:px-0">
            {user ? (
              <Link
                to="/dashboard"
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center min-h-[48px]"
              >
                Go to Dashboard
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <>
                <Link
                  to="/register"
                  className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center min-h-[48px]"
                >
                  Start Thinking for Free
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <button 
                  className="group bg-white text-slate-700 font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 text-base sm:text-lg shadow-sm hover:shadow-md flex items-center justify-center min-h-[48px]"
                  onClick={() => document.getElementById('problem-section').scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-0">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center p-3 sm:p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-slate-100">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mb-1 sm:mb-2" />
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">{stat.number}</div>
                <div className="text-xs sm:text-sm font-medium text-slate-600 text-center leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      {/* <section id="problem-section" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">The Universal Problem We Solve</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everyone faces unstructured thinking and creative blocks. ChatELN transforms chaos into clarity through intelligent questioning.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-white p-1 rounded-full shadow-lg border border-slate-200">
              <button
                onClick={() => setActiveTab('individual')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'individual' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                <Users className="w-4 h-4 inline mr-2" />
                Individual Users
              </button>
              <button
                onClick={() => setActiveTab('teams')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'teams' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600 hover:text-indigo-600'
                }`}
              >
                <Building2 className="w-4 h-4 inline mr-2" />
                Teams & Enterprise
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {activeTab === 'individual' ? (
              <>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-3 rounded-full mr-4"><Users className="w-8 h-8 inline mr-2" /></div>
                    <h3 className="text-2xl font-bold text-slate-900">For Individual Thinkers</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start"><Code className="w-7 h-7 text-blue-600 mt-1 mr-4 flex-shrink-0" /><div><h4 className="font-semibold text-slate-800 mb-1">Analysis Paralysis</h4><p className="text-slate-600">Staring at complex problems (buggy code, blank pages, tough decisions) without knowing where to start.</p></div></div>
                    <div className="flex items-start"><PenTool className="w-7 h-7 text-blue-600 mt-1 mr-4 flex-shrink-0" /><div><h4 className="font-semibold text-slate-800 mb-1">Creative Blocks</h4><p className="text-slate-600">Feeling stuck and unable to generate new ideas or move projects forward effectively.</p></div></div>
                    <div className="flex items-start"><GraduationCap className="w-7 h-7 text-blue-600 mt-1 mr-4 flex-shrink-0" /><div><h4 className="font-semibold text-slate-800 mb-1">Shallow Understanding</h4><p className="text-slate-600">Getting quick answers without grasping underlying principles, leading to fragile knowledge.</p></div></div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-indigo-100 p-3 rounded-full mr-4"><Building2 className="w-8 h-8 text-indigo-600" /></div>
                    <h3 className="text-2xl font-bold text-slate-900">For Teams & Enterprise</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start"><Lightbulb className="w-7 h-7 text-indigo-600 mt-1 mr-4 flex-shrink-0" /><div><h4 className="font-semibold text-slate-800 mb-1">Inefficient Brainstorming</h4><p className="text-slate-600">Unstructured sessions that lack focus and fail to produce actionable outcomes.</p></div></div>
                    <div className="flex items-start"><Target className="w-7 h-7 text-indigo-600 mt-1 mr-4 flex-shrink-0" /><div><h4 className="font-semibold text-slate-800 mb-1">Groupthink</h4><p className="text-slate-600">Converging on obvious solutions without exploring alternatives or questioning assumptions.</p></div></div>
                    <div className="flex items-start"><Users className="w-7 h-7 text-indigo-600 mt-1 mr-4 flex-shrink-0" /><div><h4 className="font-semibold text-slate-800 mb-1">Siloed Problem-Solving</h4><p className="text-slate-600">Missing cross-functional insights when individuals struggle with challenges alone.</p></div></div>
                  </div>
                </div>
              </>
            )}
            <div className={`p-8 rounded-2xl border ${activeTab === 'individual' ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100' : 'bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100'}`}>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{activeTab === 'individual' ? 'Who Benefits Most?' : 'Enterprise Benefits'}</h4>
              {activeTab === 'individual' ? (
                <div className="grid grid-cols-2 gap-4"><div className="flex items-center"><Code className="w-5 h-5 text-blue-600 mr-2" /><span className="text-slate-700">Developers</span></div><div className="flex items-center"><PenTool className="w-5 h-5 text-blue-600 mr-2" /><span className="text-slate-700">Writers</span></div><div className="flex items-center"><GraduationCap className="w-5 h-5 text-blue-600 mr-2" /><span className="text-slate-700">Students</span></div><div className="flex items-center"><Users className="w-5 h-5 text-blue-600 mr-2" /><span className="text-slate-700">Consultants</span></div></div>
              ) : (
                <div className="space-y-3"><div className="flex items-center"><CheckCircle className="w-5 h-5 text-indigo-600 mr-3" /><span className="text-slate-700">Faster onboarding & training</span></div><div className="flex items-center"><CheckCircle className="w-5 h-5 text-indigo-600 mr-3" /><span className="text-slate-700">Reduced senior staff dependency</span></div><div className="flex items-center"><CheckCircle className="w-5 h-5 text-indigo-600 mr-3" /><span className="text-slate-700">Improved decision quality</span></div><div className="flex items-center"><CheckCircle className="w-5 h-5 text-indigo-600 mr-3" /><span className="text-slate-700">Cross-functional collaboration</span></div></div>
              )}
            </div>
          </div>
        </div>
      </section> */}

      <section id="problem-section" className="py-12 sm:py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
        The Universal Problem We Solve
      </h2>
      <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-2">
        Everyone faces unstructured thinking and creative blocks. ChatELN transforms chaos into clarity through intelligent questioning.
      </p>
    </div>

    <div className="flex justify-center mb-6 sm:mb-8 lg:mb-12">
      <div className="bg-white p-1 rounded-full shadow-lg border border-slate-200 w-full max-w-md sm:max-w-lg">
        <div className="flex">
          <button
            onClick={() => setActiveTab('individual')}
            className={`flex-1 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm ${
              activeTab === 'individual' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:text-blue-600'
            }`}
          >
            <Users className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Individual Users</span>
            <span className="sm:hidden">Individual</span>
          </button>
          <button
            onClick={() => setActiveTab('teams')}
            className={`flex-1 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm ${
              activeTab === 'teams' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600 hover:text-indigo-600'
            }`}
          >
            <Building2 className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Teams & Enterprise</span>
            <span className="sm:hidden">Teams</span>
          </button>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
      {activeTab === 'individual' ? (
        <>
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
              <div className="bg-blue-100 p-2 sm:p-3 rounded-full mb-3 sm:mb-0 sm:mr-4 self-start">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">For Individual Thinkers</h3>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start">
                <Code className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 mt-1 mr-3 sm:mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">Analysis Paralysis</h4>
                  <p className="text-slate-600 text-sm sm:text-base">Staring at complex problems (buggy code, blank pages, tough decisions) without knowing where to start.</p>
                </div>
              </div>
              <div className="flex items-start">
                <PenTool className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 mt-1 mr-3 sm:mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">Creative Blocks</h4>
                  <p className="text-slate-600 text-sm sm:text-base">Feeling stuck and unable to generate new ideas or move projects forward effectively.</p>
                </div>
              </div>
              <div className="flex items-start">
                <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 mt-1 mr-3 sm:mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">Shallow Understanding</h4>
                  <p className="text-slate-600 text-sm sm:text-base">Getting quick answers without grasping underlying principles, leading to fragile knowledge.</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
              <div className="bg-indigo-100 p-2 sm:p-3 rounded-full mb-3 sm:mb-0 sm:mr-4 self-start">
                <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">For Teams & Enterprise</h3>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start">
                <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600 mt-1 mr-3 sm:mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">Inefficient Brainstorming</h4>
                  <p className="text-slate-600 text-sm sm:text-base">Unstructured sessions that lack focus and fail to produce actionable outcomes.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600 mt-1 mr-3 sm:mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">Groupthink</h4>
                  <p className="text-slate-600 text-sm sm:text-base">Converging on obvious solutions without exploring alternatives or questioning assumptions.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600 mt-1 mr-3 sm:mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">Siloed Problem-Solving</h4>
                  <p className="text-slate-600 text-sm sm:text-base">Missing cross-functional insights when individuals struggle with challenges alone.</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      
      <div className={`p-4 sm:p-6 lg:p-8 rounded-2xl border ${activeTab === 'individual' ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100' : 'bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100'}`}>
        <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">
          {activeTab === 'individual' ? 'Who Benefits Most?' : 'Enterprise Benefits'}
        </h4>
        {activeTab === 'individual' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="flex items-center">
              <Code className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 flex-shrink-0" />
              <span className="text-slate-700 text-sm sm:text-base">Developers</span>
            </div>
            <div className="flex items-center">
              <PenTool className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 flex-shrink-0" />
              <span className="text-slate-700 text-sm sm:text-base">Writers</span>
            </div>
            <div className="flex items-center">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 flex-shrink-0" />
              <span className="text-slate-700 text-sm sm:text-base">Students</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 flex-shrink-0" />
              <span className="text-slate-700 text-sm sm:text-base">Consultants</span>
            </div>
          </div>
        ) : (
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 mr-2 sm:mr-3 flex-shrink-0" />
              <span className="text-slate-700 text-sm sm:text-base">Faster onboarding & training</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 mr-2 sm:mr-3 flex-shrink-0" />
              <span className="text-slate-700 text-sm sm:text-base">Reduced senior staff dependency</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 mr-2 sm:mr-3 flex-shrink-0" />
              <span className="text-slate-700 text-sm sm:text-base">Improved decision quality</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 mr-2 sm:mr-3 flex-shrink-0" />
              <span className="text-slate-700 text-sm sm:text-base">Cross-functional collaboration</span>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
</section>
      
      
      {/* Key Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">The Socratic Difference</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Unlike tools that give answers, ChatELN guides you to discover insights through intelligent questioning and contextual analysis.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 hover:border-blue-200">
                <div className={`p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${featureColors[feature.color]}`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">How ChatELN Works</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the power of guided thinking through our intelligent Socratic method implementation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-blue-100 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"><MessageSquare className="w-10 h-10 text-blue-600" /></div>
              <div className="bg-blue-600 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Share Your Challenge</h3>
              <p className="text-slate-600">Start by describing your problem, question, or idea. Upload code snippets, images, or documents for context.</p>
            </div>
            <div>
              <div className="bg-indigo-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"> <MenoLogo className="h-10 w-10  text-blue-600 group-hover:text-blue-700 transition-colors" /></div>
              <div className="bg-indigo-600 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Asks Smart Questions</h3>
              <p className="text-slate-600">Our Socratic engine analyzes your input and asks targeted questions to guide your thinking process.</p>
            </div>
            <div>
              <div className="bg-purple-100 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"><Lightbulb className="w-10 h-10 text-purple-600" /></div>
              <div className="bg-purple-600 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Discover Insights</h3>
              <p className="text-slate-600">Through guided dialogue, you'll uncover solutions, challenge assumptions, and develop deeper understanding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">What Users Say</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join thousands of professionals who've transformed their thinking with ChatELN.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Choose the plan that fits your thinking needs. Start free and upgrade as you grow.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier) => (
              <div key={tier.name} className={`relative bg-white p-8 rounded-2xl shadow-lg border-2 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${tier.popular ? 'border-blue-500 ring-4 ring-blue-100' : 'border-slate-200 hover:border-blue-300'}`}>
                {tier.popular && (<div className="absolute -top-4 left-1/2 transform -translate-x-1/2"><div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</div></div>)}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                    {tier.price !== 'Custom' && <span className="text-slate-600">/{tier.period}</span>}
                  </div>
                  <p className="text-slate-600 mb-6">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${tier.popular ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg' : 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300'}`}>{tier.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform & Security Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Built for Modern Professionals</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Access ChatELN anywhere, anytime with our comprehensive and secure platform.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100"><div className="bg-blue-100 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6"><Monitor className="w-8 h-8 text-blue-600" /></div><h3 className="text-xl font-bold text-slate-900 mb-3">Web Application</h3><p className="text-slate-600 mb-4">Full-featured web app with advanced session management, team collaboration, and analytics dashboard.</p></div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-100"><div className="bg-indigo-100 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6"><Smartphone className="w-8 h-8 text-indigo-600" /></div><h3 className="text-xl font-bold text-slate-900 mb-3">Mobile App</h3><p className="text-slate-600 mb-4">Native iOS and Android apps for thinking on the go. Voice input and offline session storage.</p></div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100"><div className="bg-purple-100 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6"><Database className="w-8 h-8 text-purple-600" /></div><h3 className="text-xl font-bold text-slate-900 mb-3">API Access</h3><p className="text-slate-600 mb-4">Integrate ChatELN into your existing workflows with our powerful REST API and webhooks.</p></div>
          </div>
          <div className="mt-16 bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Enterprise Security & Compliance</h3>
                <div className="space-y-4">
                  <div className="flex items-center"><Shield className="w-6 h-6 text-green-600 mr-3" /><div><div className="font-semibold text-slate-800">End-to-End Encryption</div><div className="text-sm text-slate-600">All data encrypted in transit and at rest</div></div></div>
                  <div className="flex items-center"><Lock className="w-6 h-6 text-green-600 mr-3" /><div><div className="font-semibold text-slate-800">SSO Integration</div><div className="text-sm text-slate-600">SAML, OAuth, and Active Directory support</div></div></div>
                  <div className="flex items-center"><Eye className="w-6 h-6 text-green-600 mr-3" /><div><div className="font-semibold text-slate-800">Audit Logs</div><div className="text-sm text-slate-600">Comprehensive activity tracking and reporting</div></div></div>
                  <div className="flex items-center"><Award className="w-6 h-6 text-green-600 mr-3" /><div><div className="font-semibold text-slate-800">Compliance Ready</div><div className="text-sm text-slate-600">SOC 2, GDPR, and HIPAA compliant</div></div></div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100"><h4 className="text-lg font-bold text-slate-900 mb-4">Privacy First</h4><p className="text-slate-600 mb-4">Your conversations are private and secure. We never use your data to train our models or share it with third parties.</p><div className="flex items-center text-sm text-slate-500"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /><span>Zero data retention policy available</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Everything you need to know about ChatELN and how it works.</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Thinking?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Join thousands of professionals who use structured reasoning with ChatELN. Start your journey to deeper understanding today.</p>
          {!user && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="group bg-white text-blue-600 font-semibold py-4 px-8 rounded-full hover:bg-blue-50 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">Start Your Free Session<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></Link>
              <button onClick={() => window.open('mailto:zubairwani49@gmail.com', '_blank')} className="group bg-transparent text-white font-semibold py-4 px-8 rounded-full border-2 border-blue-300 hover:bg-white/10 hover:border-white transition-all duration-300 text-lg flex items-center justify-center">Contact Sales<ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4"> <MenoLogo className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors" /><span className=" px-2 text-2xl font-bold">ChatELN</span></div>
              <p className="text-slate-400 mb-4 max-w-md">Your Partner in Thought. Transform unstructured thinking into clear, actionable pathways with our AI-powered Socratic method.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="https://www.linkedin.com/company/kaarwaanconnect/" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="https://github.com/ZubairWani/" className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#api" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} ChatELN. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;