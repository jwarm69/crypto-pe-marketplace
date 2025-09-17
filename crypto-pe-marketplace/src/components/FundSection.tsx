import { PieChart, Shield, Clock, TrendingUp, Users, Star } from 'lucide-react';

export default function FundSection() {
  const fundFeatures = [
    {
      icon: PieChart,
      title: "Diversified Portfolio",
      description: "Spread risk across 20+ deals in different industries and geographies"
    },
    {
      icon: Shield,
      title: "Professional Management",
      description: "Our experienced team handles due diligence, legal structures, and ongoing oversight"
    },
    {
      icon: Clock,
      title: "Quarterly Distributions",
      description: "Receive regular cash flow distributions from the underlying business portfolio"
    },
    {
      icon: Users,
      title: "Lower Minimum",
      description: "Access institutional-quality deals with $5,000-$10,000 minimum investments"
    }
  ];

  const portfolioBreakdown = [
    { category: "SaaS Platforms", percentage: 30, color: "bg-teal-500" },
    { category: "E-commerce", percentage: 25, color: "bg-emerald-500" },
    { category: "Professional Services", percentage: 20, color: "bg-cyan-500" },
    { category: "Manufacturing", percentage: 15, color: "bg-blue-500" },
    { category: "Healthcare", percentage: 10, color: "bg-indigo-500" }
  ];

  return (
    <section id="fund" className="section-padding bg-slate-900">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Diversified Exposure
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Want Diversified Exposure?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join the General LP Fund — a professionally managed basket of deals across industries,
            perfect for investors who want broad exposure without picking individual deals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Fund Info */}
          <div>
            {/* Fund Card */}
            <div className="bg-slate-800 rounded-3xl p-8 lg:p-10 border border-slate-700 mb-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-3 rounded-2xl mr-4">
                  <PieChart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    AcquiFi Diversified Fund
                  </h3>
                  <p className="text-orange-400 font-medium">
                    Series A • Q1 2025 Launch
                  </p>
                </div>
              </div>

              {/* Fund Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">$50M</div>
                  <div className="text-slate-400">Target Fund Size</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">20+</div>
                  <div className="text-slate-400">Portfolio Companies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">$1K</div>
                  <div className="text-slate-400">Minimum Investment</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">5 years</div>
                  <div className="text-slate-400">Target Hold Period</div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {fundFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="bg-slate-700 p-2 rounded-lg mr-4 flex-shrink-0">
                        <Icon className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-slate-400 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <a href="/join-premium" className="btn-accent w-full text-lg block text-center">
              Request LP Info
            </a>
          </div>

          {/* Right Column - Portfolio Breakdown */}
          <div>
            {/* Portfolio Visualization */}
            <div className="bg-slate-800 rounded-3xl p-8 lg:p-10 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-8">
                Target Portfolio Allocation
              </h3>

              {/* Portfolio Chart */}
              <div className="space-y-4 mb-8">
                {portfolioBreakdown.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-white">
                      <span className="font-medium">{item.category}</span>
                      <span>{item.percentage}%</span>
                    </div>
                    <div className="bg-slate-700 rounded-full h-3">
                      <div
                        className={`${item.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Performance Targets */}
              <div className="bg-slate-700/50 rounded-2xl p-6">
                <h4 className="font-semibold text-white mb-4">
                  Performance Targets
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-orange-400">18-25%</div>
                    <div className="text-slate-400 text-sm">Target IRR</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-400">2-3x</div>
                    <div className="text-slate-400 text-sm">Return Multiple</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-400">15%</div>
                    <div className="text-slate-400 text-sm">Annual Yield</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-400">&lt;5%</div>
                    <div className="text-slate-400 text-sm">Annual Fees</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Props */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center text-slate-300">
                <TrendingUp className="w-5 h-5 mr-3 text-orange-400" />
                <span>Professional deal sourcing and due diligence</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Shield className="w-5 h-5 mr-3 text-orange-400" />
                <span>Risk mitigation through diversification</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Users className="w-5 h-5 mr-3 text-orange-400" />
                <span>Access to deals typically reserved for institutions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 lg:p-12 border border-slate-600">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Diversify Your Portfolio?
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join our waitlist to be the first to know when the fund opens for investment.
              Limited spots available for founding LPs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/join-watchlist" className="btn-accent text-lg">
                Join Fund Waitlist
              </a>
              <a href="/download-deck" className="btn-secondary text-lg bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/30">
                Download Fund Deck
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}