import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Menu, X, ChevronDown, User, Settings, 
  LogOut, LayoutDashboard, FileText, BarChart3, Users,
  Globe, Smartphone, Code, ExternalLink, ArrowUpRight, ArrowRight
} from 'lucide-react';

// Enhanced MenoLogo with better mobile scaling
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
      <circle cx="40" cy="45" r="15" fill="white" />
      <circle cx="36" cy="48" r="8" fill="#1E3A8A" />
      <path 
        d="M65 42 C 70 48, 75 48, 80 42" 
        stroke="#1E3A8A"
        strokeWidth="6" 
        strokeLinecap="round" 
      />
    </g>
  </svg>
);

const Header = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);
  
  const userMenuRef = useRef(null);
  const productMenuRef = useRef(null);

  // Handle scroll effect with throttling for better performance
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
      if (productMenuRef.current && !productMenuRef.current.contains(event.target)) {
        setIsProductMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false);
    setIsProductMenuOpen(false);
    setIsMobileProductOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isHomePage = location.pathname === '/';

  const navigationLinks = [
    { name: 'Features', href: '#features', external: false },
    { name: 'Pricing', href: '#pricing-section', external: false },
    { name: 'API', href: '/api-docs', external: false },
    { name: 'Blog', href: '/blog', external: false }
  ];

  const productMenuItems = [
    { name: 'Web App', href: '/dashboard', icon: Globe, description: 'Full-featured web application' },
    { name: 'Mobile App', href: '/mobile', icon: Smartphone, description: 'iOS and Android apps' },
    { name: 'API', href: '/api-docs', icon: Code, description: 'Developer resources' },
    { name: 'Enterprise', href: '/enterprise', icon: Users, description: 'Team collaboration tools' }
  ];

  const userMenuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings }
  ];

  const handleNavClick = (href) => {
    if (href.startsWith('#') && isHomePage) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50' 
          : 'bg-white/90 backdrop-blur-sm shadow-sm'
      }`}>
        <nav className="w-full px-4 sm:px-6 mx-auto max-w-7xl">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="relative">
                <MenoLogo className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
                <div className="absolute inset-0 bg-blue-600/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
              </div>
              <span className="text-lg sm:text-xl font-bold text-slate-700 group-hover:text-blue-600 transition-colors" style={{fontFamily: 'JetBrains Mono, Consolas, monospace'}}>
                ChatELN
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {/* Product Dropdown */}
              <div className="relative" ref={productMenuRef}>
                <button
                  onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
                  className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 font-medium transition-colors py-2"
                >
                  <span>Product</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isProductMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isProductMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="text-sm font-semibold text-slate-900">ChatELN Platform</p>
                      <p className="text-xs text-slate-600">Access AI-powered thinking tools anywhere</p>
                    </div>
                    {productMenuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="flex items-center px-4 py-3 hover:bg-slate-50 transition-colors group"
                        onClick={() => setIsProductMenuOpen(false)}
                      >
                        <div className="bg-blue-100 p-2 rounded-lg mr-3 group-hover:bg-blue-200 transition-colors">
                          <item.icon className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900 group-hover:text-blue-600">{item.name}</p>
                          <p className="text-sm text-slate-600">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Regular Navigation Links */}
              {navigationLinks.slice(1).map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={({ isActive }) => 
                    `font-medium transition-colors py-2 relative ${
                      isActive 
                        ? 'text-blue-600' 
                        : 'text-slate-700 hover:text-blue-600'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <a 
                href="#" 
                className="flex items-center text-slate-700 hover:text-blue-600 font-medium transition-colors"
              >
                Docs <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>

            {/* Desktop User Menu / Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
              {user ? (
                <div className="relative" ref={userMenuRef}>
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 rounded-full py-2 px-3 xl:px-4 transition-colors"
                  >
                    <div className="w-7 h-7 xl:w-8 xl:h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {user.name?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <span className="text-slate-700 font-medium text-sm xl:text-base max-w-24 xl:max-w-none truncate">{user.name}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isUserMenuOpen && (
                    <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                      <div className="px-4 py-3 border-b border-slate-100">
                        <p className="font-semibold text-slate-900 truncate">{user.name}</p>
                        <p className="text-sm text-slate-600 truncate">{user.email}</p>
                      </div>
                      {userMenuItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-center px-4 py-2 hover:bg-slate-50 transition-colors text-slate-700 hover:text-blue-600"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <item.icon className="w-4 h-4 mr-3" />
                          {item.name}
                        </Link>
                      ))}
                      <hr className="my-2 border-slate-100" />
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 hover:bg-slate-50 transition-colors text-slate-700 hover:text-red-600"
                      >
                        <LogOut className="w-4 h-4 mr-3" />
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-2 xl:space-x-3">
                  <NavLink
                    to="/login"
                    className="text-slate-700 hover:text-blue-600 font-medium transition-colors py-2 text-sm xl:text-base"
                  >
                    Sign In
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="group flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-2 px-4 xl:py-2.5 xl:px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm xl:text-base"
                  >
                    <span>Try ChatELN</span>
                    <ArrowUpRight className="w-3 h-3 xl:w-4 xl:h-4 ml-1 xl:ml-2 transition-transform group-hover:translate-x-1" />
                  </NavLink>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-slate-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Enhanced Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-in fade-in duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile Menu Panel */}
          <div className="lg:hidden fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 animate-in slide-in-from-right duration-300">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-200">
                <Link 
                  to="/" 
                  className="flex items-center space-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MenoLogo className="h-6 w-6 text-blue-600" />
                  <span className="text-lg font-bold text-slate-700"style={{fontFamily: 'JetBrains Mono, Consolas, monospace'}}>ChatELN</span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-slate-700" />
                </button>
              </div>

              {/* Menu Content */}
              <div className="flex-1 overflow-y-auto py-4">
                {/* User Section */}
                {user && (
                  <div className="px-4 pb-4 mb-4 border-b border-slate-200">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {user.name?.charAt(0).toUpperCase() || 'U'}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-900 truncate">{user.name}</p>
                        <p className="text-sm text-slate-600 truncate">{user.email}</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {userMenuItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-center px-3 py-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <item.icon className="w-5 h-5 mr-3" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Product Section */}
                <div className="px-4 mb-6">
                  <button
                    onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
                    className="flex items-center justify-between w-full text-left font-semibold text-slate-900 mb-3"
                  >
                    <span>Product</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isMobileProductOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isMobileProductOpen && (
                    <div className="space-y-2 animate-in slide-in-from-top-2 duration-200">
                      {productMenuItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-center px-3 py-3 rounded-lg hover:bg-slate-50 transition-colors group"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="bg-blue-100 p-2 rounded-lg mr-3 group-hover:bg-blue-200 transition-colors">
                            <item.icon className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-slate-900 group-hover:text-blue-600">{item.name}</p>
                            <p className="text-sm text-slate-600">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Navigation Links */}
                <div className="px-4 mb-6">
                  <p className="font-semibold text-slate-900 mb-3">Navigation</p>
                  <div className="space-y-2">
                    {navigationLinks.slice(1).map((link) => (
                      <NavLink
                        key={link.name}
                        to={link.href}
                        onClick={() => {
                          handleNavClick(link.href);
                          setIsMobileMenuOpen(false);
                        }}
                        className={({ isActive }) => 
                          `block px-3 py-2 rounded-lg font-medium transition-colors ${
                            isActive 
                              ? 'text-blue-600 bg-blue-50' 
                              : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                          }`
                        }
                      >
                        {link.name}
                      </NavLink>
                    ))}
                    <a 
                      href="#" 
                      className="flex items-center px-3 py-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 font-medium transition-colors"
                    >
                      Documentation <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-slate-200 bg-slate-50">
                {user ? (
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-center w-full px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors font-medium"
                  >
                    <LogOut className="w-5 h-5 mr-2" />
                    Sign Out
                  </button>
                ) : (
                  <div className="space-y-3">
                    <NavLink
                      to="/login"
                      className="block text-center py-3 px-4 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-white font-medium transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign In
                    </NavLink>
                    <NavLink
                      to="/register"
                      className="group flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>Try ChatELN</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;


