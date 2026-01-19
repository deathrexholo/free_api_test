import { useState } from 'react';
import { Newspaper, Search, Bell, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = ({ onRefresh, loading }: { onRefresh: () => void; loading: boolean }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer" onClick={onRefresh}>
            <div className="bg-white p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
              <Newspaper size={24} className="text-blue-800" />
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight">
              SPORTS<span className="text-yellow-400">NEWS</span>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6 font-medium text-sm">
              {['Football', 'Basketball', 'Tennis', 'Motorsport', 'Esports'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="relative group overflow-hidden py-1"
                >
                  <span className="relative z-10 group-hover:text-yellow-400 transition-colors duration-300">{item}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300 ease-out"></span>
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-4 border-l border-blue-700 pl-6">
              <button className="hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Search size={20} className="text-blue-100 group-hover:text-white" />
              </button>
              <button className="hover:bg-blue-700 p-2 rounded-full transition-colors relative">
                <Bell size={20} className="text-blue-100 group-hover:text-white" />
                <span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>
              <button 
                onClick={onRefresh}
                disabled={loading}
                className={`bg-blue-700 hover:bg-blue-600 text-xs font-bold px-4 py-2 rounded-lg transition-all border border-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? 'UPDATING...' : 'REFRESH'}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-blue-700 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-blue-900 border-t border-blue-800 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {['Football', 'Basketball', 'Tennis', 'Motorsport', 'Esports'].map((item) => (
                <a key={item} href="#" className="text-blue-100 hover:text-yellow-400 font-medium py-2 border-b border-blue-800 last:border-0">
                  {item}
                </a>
              ))}
              <div className="flex space-x-4 pt-4">
                <button onClick={onRefresh} className="flex-1 bg-blue-700 py-3 rounded-lg font-bold text-center">Refresh News</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
