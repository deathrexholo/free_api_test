import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import type { NewsItem } from '../types';

export const FeaturedCard = ({ item }: { item: NewsItem }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="col-span-1 md:col-span-2 lg:col-span-3 relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer h-[500px]"
    >
      <img 
        src={item.imageUrl} 
        alt={item.title} 
        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
      
      <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3">
        <div className="flex items-center space-x-3 mb-4">
          <span className="bg-yellow-400 text-blue-900 text-xs font-extrabold px-3 py-1 rounded uppercase tracking-wider">
            Featured
          </span>
          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
            {item.category}
          </span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:text-yellow-400 transition-colors">
            {item.title}
        </h2>
        
        <p className="text-gray-300 text-lg mb-6 line-clamp-2 md:line-clamp-3">
            {item.summary}
        </p>
        
        <div className="flex items-center space-x-6">
            <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={16} className="mr-2" />
                {item.publishedAt}
            </div>
            <a 
                href={item.url}
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-blue-900 hover:bg-yellow-400 font-bold px-6 py-3 rounded-lg transition-colors flex items-center"
            >
                Read Article <ArrowRight size={18} className="ml-2" />
            </a>
        </div>
      </div>
    </motion.div>
  );
};
