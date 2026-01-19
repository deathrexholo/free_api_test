import { motion } from 'framer-motion';

export const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col">
      <div className="relative h-48 bg-gray-200 animate-pulse">
        {/* Image placeholder */}
      </div>
      
      <div className="p-6 flex-grow flex flex-col space-y-4">
        <div className="flex space-x-2">
          <div className="h-3 w-20 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-3 w-16 bg-gray-200 rounded animate-pulse"></div>
        </div>
        
        <div className="space-y-2">
          <div className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse"></div>
        </div>
        
        <div className="space-y-2 pt-2">
          <div className="h-3 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-3 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-3 w-2/3 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
      
      <div className="p-6 pt-0 mt-auto">
        <div className="h-4 w-24 bg-blue-100 rounded animate-pulse"></div>
      </div>
    </div>
  );
};
