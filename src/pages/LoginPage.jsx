import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AuthLayout from '@/components/AuthLayout';
import { Mail, Lock, ArrowRight, Github, Chrome, Eye, EyeOff, Loader2 } from 'lucide-react';

// MOVED: InputField component is now defined outside LoginPage.
// This prevents it from being re-created on every render.
const InputField = ({ icon: Icon, label, type, value, onChange, placeholder, id, autoComplete, required = true, children }) => (
  <div className="group">
    <label htmlFor={id} className="block text-sm font-semibold text-slate-700 mb-2">
      {label}
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Icon className="w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
      </div>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required={required}
        value={value}
        onChange={onChange}
        className="appearance-none block w-full pl-12 pr-12 py-3 border border-slate-200 rounded-xl placeholder-slate-400 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-300 text-slate-900 group-hover:border-slate-300"
        placeholder={placeholder}
      />
      {children}
    </div>
  </div>
);

// MOVED: SocialButton is also moved outside.
const SocialButton = ({ icon: Icon, text, className = "" }) => (
    <button className={`group flex-1 inline-flex w-full items-center justify-center py-3 px-4 text-sm font-medium text-slate-700 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl hover:bg-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 hover:-translate-y-0.5 ${className}`}>
      <Icon className="w-5 h-5 mr-2 text-slate-500 group-hover:scale-110 transition-transform" />
      <span className="group-hover:text-slate-800 transition-colors">{text}</span>
    </button>
);


const LoginPage = () => {
  // ADDED: useAuth() hook is now correctly placed inside the component.
  const { login } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsLoading(true);
    
    try {
      // This will now work correctly and route you after login
      await login(email, password);
    } catch (error) {
      console.error("Login failed:", error);
      // In a real app, show an error message to the user here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout type="login">
      {/* CHANGED: Swapped the <div> for a <form> for semantic correctness */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          icon={Mail}
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          id="email"
          autoComplete="email"
        />

        <InputField
          icon={Lock}
          label="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          id="password"
          autoComplete="current-password"
        >
            {/* The show/hide password button is passed as a child */}
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center"
            >
                {showPassword ? (
                <EyeOff className="w-5 h-5 text-slate-400 hover:text-slate-600 transition-colors" />
                ) : (
                <Eye className="w-5 h-5 text-slate-400 hover:text-slate-600 transition-colors" />
                )}
            </button>
        </InputField>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded transition-colors"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-700">
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <span className="font-medium text-blue-600 hover:text-blue-500 hover:underline transition-colors cursor-pointer">
              Forgot password?
            </span>
          </div>
        </div>

        <button
          // CHANGED: type="submit" to work with the <form> element
          type="submit"
          disabled={isLoading}
          className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Signing In...
            </>
          ) : (
            <>
              Sign In
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
      
      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white/80 text-slate-500 font-medium">Or continue with</span>
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <SocialButton icon={Chrome} text="Google" />
          <SocialButton icon={Github} text="GitHub" />
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;