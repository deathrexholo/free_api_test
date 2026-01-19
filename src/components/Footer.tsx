import { Newspaper, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Newspaper size={32} className="text-blue-500" />
              <h1 className="text-2xl font-bold tracking-tight text-white">SPORTS<span className="text-yellow-400">NEWS</span></h1>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Your definitive source for real-time sports coverage, in-depth analysis, and expert commentary from around the globe.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-8 h-1 bg-blue-500 rounded-full mr-3"></span>
              Quick Links
            </h4>
            <ul className="space-y-4">
              {['Home', 'Latest News', 'Live Scores', 'Videos', 'Podcasts'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-yellow-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3 hover:bg-yellow-400"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-8 h-1 bg-blue-500 rounded-full mr-3"></span>
              Categories
            </h4>
            <ul className="space-y-4">
              {['Football', 'Basketball', 'Tennis', 'Formula 1', 'Cricket', 'Rugby'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-yellow-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-8 h-1 bg-blue-500 rounded-full mr-3"></span>
              Contact Us
            </h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                <span>123 Sports Avenue, Stadium District, NY 10001, USA</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-blue-500 flex-shrink-0" size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-blue-500 flex-shrink-0" size={18} />
                <span>contact@sportsnews.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2026 Sports News Network. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
