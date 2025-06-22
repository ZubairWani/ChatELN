import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  Github, 
  Chrome, 
  Eye, 
  EyeOff,
  Check,
  AlertCircle,
  Loader2,
  Sparkles,
  Shield,
  Zap
} from 'lucide-react';

// Enhanced Logo Component with animations
const MenoLogo = ({ className }) => (
  <svg
    className={`${className} transition-all duration-300 hover:scale-110`}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="rotate(8 50 50)" className="animate-pulse">
      <path 
        d="M10 20C10 14.4772 14.4772 10 20 10H80C85.5228 10 90 14.4772 90 20V70C90 75.5228 85.5228 80 80 80H35L15 95V80H20C14.4772 80 10 75.5228 10 70V20Z"
        fill="url(#gradient1)"
      />
      <circle cx="40" cy="45" r="15" fill="white" />
      <circle cx="36" cy="48" r="8" fill="#1E3A8A" />
      <path 
        d="M65 42 C 70 48, 75 48, 80 42" 
        stroke="#1E3A8A"
        strokeWidth="6" 
        strokeLinecap="round" 
      />
    </g>
    <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
    </defs>
  </svg>
);

// Enhanced Auth Layout with better animations and effects
const AuthLayout = ({ children, type }) => {
  const isLogin = type === 'login';
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      {/* Left Panel - Enhanced */}
      <div className={`hidden lg:flex flex-1 items-center justify-center relative z-10 transition-all duration-1000 ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
        <div className="text-center space-y-8 max-w-lg px-8">
          <div className="relative">
            <div className="group flex justify-center items-center space-x-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <MenoLogo className="h-16 w-16 text-blue-600 group-hover:text-blue-700 transition-colors" />
              <span className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                ChatELN
              </span>
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-6 h-6 text-yellow-400 animate-bounce" />
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-xl text-slate-600 leading-relaxed">
              Start your journey to clarity with AI-powered insights.
            </p>
            <div className="flex justify-center space-x-8 text-slate-500">
              <div className="flex items-center space-x-2 group">
                <Shield className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
                <span className="text-sm">Secure</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <Zap className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition-transform" />
                <span className="text-sm">Fast</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <Sparkles className="w-5 h-5 text-purple-500 group-hover:scale-110 transition-transform" />
                <span className="text-sm">Smart</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Enhanced */}
      <div className={`flex-1 flex flex-col justify-center items-center px-6 lg:px-8 relative z-10 transition-all duration-1000 delay-300 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8 text-center">
            {/* <div className="group inline-flex items-center space-x-3 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <MenoLogo className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
              <span className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                ChatELN
              </span>
            </div> */}
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">
              {isLogin ? 'Welcome Back!' : 'Join ChatELN'}
            </h2>
            <p className="text-slate-600">
              {isLogin ? 'Enter your credentials to access your workspace' : 'Create your account and start exploring'}
            </p>
          </div>

          {/* Form Container with enhanced styling */}
          <div className="bg-white/70 backdrop-blur-xl py-8 px-6 shadow-2xl ring-1 ring-white/20 rounded-3xl border border-white/30 sm:px-10 relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              {children}
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-slate-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <Link to ={isLogin ? "/register" : "/login"} className="ml-2 font-semibold text-blue-600 hover:text-blue-500 hover:underline transition-colors duration-200 cursor-pointer">
              {isLogin ? "Sign Up Free" : "Sign In"}
             </Link>
          </p>
        </div>
      </div>
    </div>
  );
};


export default AuthLayout;