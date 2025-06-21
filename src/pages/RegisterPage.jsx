import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '@/components/AuthLayout'; // Adjust path if necessary
import {
  User,
  Mail,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
  Loader2
} from 'lucide-react';

// --- Helper Component ---
// MOVED OUTSIDE: By defining InputField here, it is not re-created on every
// render of RegisterPage. This fixes the input focus and icon issues.
const InputField = ({ icon: Icon, label, type, value, onChange, placeholder, id, autoComplete, children }) => (
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
        required
        value={value}
        onChange={onChange}
        className="appearance-none block w-full pl-12 pr-12 py-3 border border-slate-200 rounded-xl placeholder-slate-400 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-300 text-slate-900 group-hover:border-slate-300"
        placeholder={placeholder}
      />
      {/* This allows passing extra elements like the show/hide password button */}
      {children}
    </div>
  </div>
);

// --- Main Page Component ---
const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Password strength indicator logic
  const getPasswordStrength = (password) => {
    let strength = 0;
    if (password.length > 5) strength++;
    if (password.length > 9) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    switch (strength) {
      case 0:
      case 1:
        return { score: 1, text: 'Weak', color: 'bg-red-500', width: 'w-1/4' };
      case 2:
        return { score: 2, text: 'Fair', color: 'bg-yellow-500', width: 'w-2/4' };
      case 3:
      case 4:
        return { score: 3, text: 'Good', color: 'bg-blue-500', width: 'w-3/4' };
      case 5:
        return { score: 4, text: 'Strong', color: 'bg-green-500', width: 'w-full' };
      default:
        return { score: 0, text: '', color: '', width: 'w-0' };
    }
  };

  const passwordStrength = getPasswordStrength(password);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the browser's default form submission
    if (!acceptTerms) return; // Extra check

    setIsLoading(true);
    
    // Simulate an API call to register the user
    console.log("Registering with:", { name, email, password });
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    
    // On successful registration, navigate to the login page
    navigate('/login');
  };

  return (
    <AuthLayout type="register">
      {/* CHANGED to a <form> element with an onSubmit handler */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <InputField
          icon={User}
          label="Full Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
          id="name"
          autoComplete="name"
        />

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

        <div>
          <InputField
            icon={Lock}
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a strong password"
            id="password"
            autoComplete="new-password"
          >
            {/* Show/Hide password button is passed as a child */}
            <button
              type="button" // Use type="button" to prevent form submission
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </InputField>
          
          {/* Password Strength Indicator */}
          {password && (
            <div className="mt-2">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-slate-600">Password Strength</span>
                <span className={`font-semibold ${passwordStrength.color.replace('bg-', 'text-')}`}>
                  {passwordStrength.text}
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-1.5">
                <div 
                  className={`h-1.5 rounded-full transition-all duration-300 ${passwordStrength.color} ${passwordStrength.width}`}
                ></div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-start space-x-3 pt-2">
          <div className="flex items-center h-5 mt-1">
            <input 
              id="terms" 
              name="terms" 
              type="checkbox" 
              required 
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded transition-colors" 
            />
          </div>
          <div className="text-sm">
            <label htmlFor="terms" className="text-slate-600 leading-5">
              I agree to the{' '}
              <span className="font-semibold text-blue-600 hover:text-blue-500 hover:underline transition-colors cursor-pointer">
                Terms of Service
              </span>
              {' '}and{' '}
              <span className="font-semibold text-blue-600 hover:text-blue-500 hover:underline transition-colors cursor-pointer">
                Privacy Policy
              </span>
            </label>
          </div>
        </div>

        <button
          // CHANGED to type="submit" to trigger the form's onSubmit
          type="submit"
          disabled={isLoading || !acceptTerms}
          className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Creating Account...
            </>
          ) : (
            <>
              Create Account
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;