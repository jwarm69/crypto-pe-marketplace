import { TrendingUp, Shield, Globe } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-teal-500/30 to-emerald-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-20">
          {/* Left Column - Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 backdrop-blur-sm border border-teal-400/30 text-teal-200 text-sm font-semibold mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <TrendingUp className="w-4 h-4 mr-2" />
              Crypto-Native Private Equity
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
              Turn Crypto Into{' '}
              <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent animate-pulse">
                Real-World
              </span>{' '}
              Cash Flow
            </h1>

            {/* Subtext */}
            <p className="text-xl lg:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
              Back proven entrepreneurs who will find, acquire, and operate profitable businesses.
              It&rsquo;s like betting on the jockey - invest in the searcher, they choose the horse.
            </p>

            {/* Value Props */}
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center text-slate-200">
                <Shield className="w-5 h-5 mr-2 text-teal-400" />
                <span>Bet on proven searchers</span>
              </div>
              <div className="flex items-center text-slate-200">
                <Globe className="w-5 h-5 mr-2 text-teal-400" />
                <span>Real business cash flow</span>
              </div>
              <div className="flex items-center text-slate-200">
                <TrendingUp className="w-5 h-5 mr-2 text-teal-400" />
                <span>Lower fees than PE</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a href="/join-premium" className="btn-primary text-lg flex items-center justify-center">
                🔒 Join Premium
              </a>
              <a href="/apply-searcher" className="btn-secondary text-lg bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/30 flex items-center justify-center">
                🚀 Apply as Searcher
              </a>
            </div>

            {/* Free Deal Watchlist Link */}
            <div className="text-center">
              <a href="/join-watchlist" className="text-teal-300 hover:text-white transition-colors underline decoration-teal-300 hover:decoration-white text-lg">
                📩 Join Free Deal Watchlist
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-white mb-2">$2T+</div>
                <div className="text-slate-400 text-sm">Crypto Market Cap</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">$8.1T</div>
                <div className="text-slate-400 text-sm">Global PE Market</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">10K+</div>
                <div className="text-slate-400 text-sm">Annual SMB Deals</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative lg:block">
            <div className="relative">
              {/* Main Card */}
              <div className="glass-card rounded-3xl p-10 border border-white/30 professional-shadow hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-white font-bold text-xl tracking-tight">Deal Overview</div>
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs px-4 py-2 rounded-full font-semibold shadow-lg">
                    ✓ VERIFIED
                  </div>
                </div>

                <div className="space-y-6 text-white">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-300 font-medium">Business Type:</span>
                    <span className="font-semibold">SaaS Platform</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-300 font-medium">Revenue:</span>
                    <span className="font-semibold text-emerald-300">$2.4M ARR</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-300 font-medium">Purchase Price:</span>
                    <span className="font-semibold">$8.5M</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-300 font-medium">Min Investment:</span>
                    <span className="font-semibold text-orange-300">$5,000</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/30">
                  <div className="text-slate-300 font-medium mb-4">Funding Progress</div>
                  <div className="bg-slate-700/30 rounded-full h-3 mb-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-teal-400 to-emerald-400 h-3 rounded-full shadow-inner animate-pulse" style={{ width: '68%' }}></div>
                  </div>
                  <div className="flex justify-between text-sm text-slate-300 font-medium">
                    <span className="text-emerald-300">$5.8M raised</span>
                    <span>68% complete</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl p-4 shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce [animation-delay:1s]">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl p-4 shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce [animation-delay:3s]">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}