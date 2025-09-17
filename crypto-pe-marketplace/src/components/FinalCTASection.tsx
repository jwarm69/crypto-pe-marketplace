import { Zap, TrendingUp, Shield, ArrowRight } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section className="section-padding bg-gradient-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 font-medium mb-8">
            <Zap className="w-5 h-5 mr-2" />
            The Future of Private Equity is Here
          </div>

          {/* Main Headline */}
          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight">
            Don&rsquo;t Just{' '}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Hold Crypto.
            </span>
            <br />
            Own Businesses.
          </h2>

          {/* Subtext */}
          <p className="text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Diversify beyond volatility. Back proven entrepreneurs who find and acquire
            cash-flowing businesses. It&rsquo;s like betting on the jockey - you invest in the searcher&rsquo;s expertise.
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center text-slate-200">
              <TrendingUp className="w-6 h-6 mr-3 text-emerald-400" />
              <span className="text-lg">Real business cash flow</span>
            </div>
            <div className="flex items-center text-slate-200">
              <Shield className="w-6 h-6 mr-3 text-teal-400" />
              <span className="text-lg">Bet on proven searchers</span>
            </div>
            <div className="flex items-center text-slate-200">
              <Zap className="w-6 h-6 mr-3 text-orange-400" />
              <span className="text-lg">They find the deals</span>
            </div>
          </div>

          {/* Main CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a href="/join-premium" className="group bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-bold text-lg px-12 py-5 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 hover:scale-105 flex items-center">
              🔒 Join Premium
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

            <a href="/apply-searcher" className="group bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-lg px-12 py-5 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 hover:scale-105 flex items-center">
              🚀 Apply as Searcher
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Free Deal Watchlist Link */}
          <div className="text-center mb-16">
            <a href="/join-watchlist" className="text-teal-300 hover:text-white transition-colors underline decoration-teal-300 hover:decoration-white text-lg">
              📩 Join Free Deal Watchlist
            </a>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-slate-300">
            <a href="/sample-deals" className="hover:text-white transition-colors flex items-center">
              <span className="border-b border-slate-400 hover:border-white">
                View Sample Deals
              </span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <span className="hidden sm:block">•</span>
            <a href="/download-deck" className="hover:text-white transition-colors flex items-center">
              <span className="border-b border-slate-400 hover:border-white">
                Download Fund Deck
              </span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <span className="hidden sm:block">•</span>
            <a href="/schedule-demo" className="hover:text-white transition-colors flex items-center">
              <span className="border-b border-slate-400 hover:border-white">
                Schedule Demo
              </span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-slate-400">Global Market Access</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">&lt;1%</div>
              <div className="text-slate-400">Platform Fees</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">$5K</div>
              <div className="text-slate-400">Minimum Investment</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm mb-4">
              Join 2,800+ investors already on the waitlist
            </p>
            <div className="flex justify-center items-center space-x-6 text-slate-500">
              <span className="text-xs">🔒 Bank-grade security</span>
              <span className="text-xs">✓ Regulatory compliant</span>
              <span className="text-xs">🛡️ Insured custody</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}