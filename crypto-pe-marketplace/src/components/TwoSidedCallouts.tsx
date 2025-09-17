import {
  TrendingUp,
  Wallet,
  Users,
  Zap,
  Shield,
  Globe,
  DollarSign,
  Network,
  Clock,
  Search
} from 'lucide-react';

export default function TwoSidedCallouts() {
  const investorBenefits = [
    {
      icon: TrendingUp,
      title: "Diversify into Real-World Yield",
      description: "Move beyond volatile crypto markets into cash-flowing businesses with proven fundamentals."
    },
    {
      icon: Wallet,
      title: "Liquidity via Tokenized Shares",
      description: "Trade your ownership stakes on secondary markets, unlike traditional PE lock-ups."
    },
    {
      icon: Users,
      title: "Back Vetted Operators",
      description: "Invest alongside experienced searchers with track records in business acquisition and growth."
    }
  ];

  const searcherBenefits = [
    {
      icon: Globe,
      title: "Access Fast, Global Capital",
      description: "Raise funds from crypto investors worldwide, not just local banks and limited partners."
    },
    {
      icon: Network,
      title: "Connect with Service Providers",
      description: "Access our network of SBA lenders, quality of earnings firms, and legal advisors."
    },
    {
      icon: DollarSign,
      title: "Lower Costs than Brokers",
      description: "Skip expensive investment banking fees. Our platform reduces deal costs by 70-90%."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-teal-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
            Two-Sided Marketplace
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Built for Investors & Searchers
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our platform serves both sides of the private equity ecosystem
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* For Investors */}
          <div id="for-investors">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-teal-100 hover:shadow-2xl transition-all duration-300">
              {/* Header */}
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-3 rounded-2xl mr-4">
                  <Wallet className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
                    For Investors
                  </h3>
                  <p className="text-teal-600 font-medium">
                    Crypto holders seeking yield
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-6 mb-8">
                {investorBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="bg-teal-50 p-2 rounded-lg mr-4 flex-shrink-0">
                        <Icon className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-slate-600">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Stats */}
              <div className="bg-teal-50 rounded-2xl p-6 mb-8">
                <h4 className="font-semibold text-slate-900 mb-4">
                  Investor Highlights
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-teal-600">$100</div>
                    <div className="text-sm text-slate-600">Min investment</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-teal-600">15-25%</div>
                    <div className="text-sm text-slate-600">Target returns</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-teal-600">50+</div>
                    <div className="text-sm text-slate-600">Active deals</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-teal-600">24/7</div>
                    <div className="text-sm text-slate-600">Market access</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a href="/join-premium" className="btn-primary w-full block text-center">
                Start Investing
              </a>
            </div>
          </div>

          {/* For Searchers */}
          <div id="for-searchers">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-300">
              {/* Header */}
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-3 rounded-2xl mr-4">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
                    For Searchers
                  </h3>
                  <p className="text-orange-600 font-medium">
                    Entrepreneurs acquiring businesses
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-6 mb-8">
                {searcherBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="bg-orange-50 p-2 rounded-lg mr-4 flex-shrink-0">
                        <Icon className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-slate-600">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Stats */}
              <div className="bg-orange-50 rounded-2xl p-6 mb-8">
                <h4 className="font-semibold text-slate-900 mb-4">
                  Searcher Benefits
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-orange-600">7 days</div>
                    <div className="text-sm text-slate-600">Avg funding time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">90%</div>
                    <div className="text-sm text-slate-600">Lower costs</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">1000+</div>
                    <div className="text-sm text-slate-600">Investor network</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">24/7</div>
                    <div className="text-sm text-slate-600">Support</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a href="/apply-searcher" className="btn-accent w-full block text-center">
                Apply as Searcher
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-teal-600 mr-3" />
              <Shield className="w-8 h-8 text-emerald-600 mr-3" />
              <Zap className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Join Our Growing Community
            </h3>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Whether you&rsquo;re looking to invest or raise capital, our platform connects you with the right opportunities and people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Join as Investor
              </button>
              <button className="btn-accent">
                Apply as Searcher
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}