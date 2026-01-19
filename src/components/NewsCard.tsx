import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import type { NewsItem } from '../types';

interface NewsCardProps {
  item: NewsItem;
  index: number;
}

export const NewsCard = ({ item, index }: NewsCardProps) => {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col h-full transform hover:-translate-y-1"
    >
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
            {item.category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 z-20 text-white flex items-center space-x-2 text-xs font-medium">
            <span className="bg-black/30 backdrop-blur-md px-2 py-1 rounded-md flex items-center">
                <Calendar size={12} className="mr-1.5" />
                {item.publishedAt}
            </span>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">{item.source}</span>
          <ExternalLink size={14} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        
        <h3 className="text-lg font-bold mb-3 leading-tight group-hover:text-blue-700 transition-colors line-clamp-2">
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
        </h3>
        
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
          {item.summary}
        </p>
      </div>
      
      <div className="p-6 pt-0 border-t border-slate-50 mt-auto">
        <a 
          href={item.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-700 font-bold text-xs uppercase tracking-wider group/btn pt-4"
        >
          Read Full Story 
          <ArrowRight size={14} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.article>
  );
};
