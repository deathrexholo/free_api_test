import { Mail } from 'lucide-react';

export const Newsletter = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 p-8 md:p-16 text-center md:text-left shadow-2xl mb-20">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-500 opacity-20 blur-3xl"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-2xl">
          <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
            <div className="bg-blue-700/50 p-3 rounded-full backdrop-blur-sm">
                <Mail className="text-yellow-400" size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Stay in the game</h2>
          </div>
          <p className="text-blue-100 text-lg mb-8 md:mb-0 leading-relaxed">
            Get the latest scores, breaking news, and exclusive interviews delivered straight to your inbox every morning.
          </p>
        </div>
        
        <div className="w-full md:w-auto flex-shrink-0">
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/20 transition-all w-full sm:w-80 backdrop-blur-sm"
            />
            <button className="px-8 py-4 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold shadow-lg shadow-yellow-400/20 transition-all transform hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto whitespace-nowrap">
              Subscribe Now
            </button>
          </form>
          <p className="text-blue-300 text-xs mt-4 text-center sm:text-left">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};
