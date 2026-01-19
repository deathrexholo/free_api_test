import { useState, useEffect } from 'react';
import { Trophy, ArrowUpRight } from 'lucide-react';
import axios from 'axios';
import { motion } from 'framer-motion';

import type { NewsItem } from './types';
import { Navbar } from './components/Navbar';
import { FeaturedCard } from './components/FeaturedCard';
import { NewsCard } from './components/NewsCard';
import { SkeletonCard } from './components/SkeletonCard';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

function App() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);
      // Simulate network delay for better UX demonstration
      // await new Promise(resolve => setTimeout(resolve, 1500)); 
      
      const response = await axios.get('http://localhost:3001/api/news');
      setNews(response.data);
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('Failed to load news. Please make sure the backend server is running.');
      
      // Fallback data
      setNews([
        {
          id: '1',
          title: 'Real Madrid wins another Champions League title',
          summary: 'In a thrilling final, Real Madrid managed to secure their 16th title with a late goal from Vinícius Júnior. The match was intense from start to finish, with both teams displaying incredible skill and determination.',
          url: '#',
          source: 'Sports Daily',
          imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
          publishedAt: '2 hours ago',
          category: 'Football'
        },
        {
          id: '2',
          title: 'LeBron James announces retirement date',
          summary: 'The NBA legend has finally spoken about when he plans to hang up his sneakers, sending shockwaves through the basketball world. Fans around the globe are reacting to the news.',
          url: '#',
          source: 'Hoops Network',
          imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop',
          publishedAt: '4 hours ago',
          category: 'Basketball'
        },
        {
          id: '3',
          title: 'Wimbledon 2026: Alcaraz vs Sinner in the Final',
          summary: 'The two young stars are set to face off in what is being called the most anticipated final in recent years. Analysts are predicting a five-set thriller.',
          url: '#',
          source: 'Tennis Insider',
          imageUrl: 'https://images.unsplash.com/photo-1592656094267-764a45160876?q=80&w=800&auto=format&fit=crop',
          publishedAt: '6 hours ago',
          category: 'Tennis'
        },
        {
          id: '4',
          title: 'F1 Season Finale: A Race for History',
          summary: 'The final race of the season is here, and everything is on the line. Can the underdog team pull off a miracle victory?',
          url: '#',
          source: 'Motorsport Mag',
          imageUrl: 'https://images.unsplash.com/photo-1504299949788-b7156535560b?q=80&w=800&auto=format&fit=crop',
          publishedAt: '1 day ago',
          category: 'Motorsport'
        },
        {
            id: '5',
            title: 'Global Esports Tournament breaks viewership records',
            summary: 'The finals of the World Championship were watched by over 100 million people worldwide, proving that esports is here to stay.',
            url: '#',
            source: 'Esports Central',
            imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
            publishedAt: '12 hours ago',
            category: 'Other'
          }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900">
      <Navbar onRefresh={fetchNews} loading={loading} />

      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Error Message */}
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-r-lg shadow-sm"
          >
            <p className="text-red-700 font-medium">{error}</p>
          </motion.div>
        )}

        {/* Headlines Section */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-400 p-2 rounded-lg">
                <Trophy className="text-blue-900" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">Top Headlines</h2>
            </div>
            <a href="#" className="hidden md:flex items-center text-blue-700 font-bold hover:text-blue-900 transition-colors group">
              View All News <ArrowUpRight size={18} className="ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              // Skeleton Loading State
              Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className={i === 0 ? "col-span-1 md:col-span-2 lg:col-span-3 h-[500px]" : "h-full"}>
                   <SkeletonCard />
                </div>
              ))
            ) : (
              <>
                {/* Featured Item (First item) */}
                {news.length > 0 && <FeaturedCard item={news[0]} />}

                {/* Remaining Items */}
                {news.slice(1).map((item, index) => (
                  <NewsCard key={item.id} item={item} index={index} />
                ))}
              </>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <Newsletter />
        
      </main>

      <Footer />
    </div>
  );
}

export default App;
