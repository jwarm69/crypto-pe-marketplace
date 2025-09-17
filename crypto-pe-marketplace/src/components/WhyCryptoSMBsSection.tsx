import { BarChart3, Globe, Shield, Zap, Eye, DollarSign } from 'lucide-react';

export default function WhyCryptoSMBsSection() {
  const benefits = [
    {
      icon: BarChart3,
      title: "Diversification from Volatility",
      description: "Reduce portfolio risk by investing in cash-flowing businesses that aren't correlated with crypto markets.",
      stat: "90%",
      statLabel: "Lower correlation"
    },
    {
      icon: DollarSign,
      title: "Steady, Real-World Yield",
      description: "Earn consistent returns from business operations, typically 15-25% annually from profitable SMBs.",
      stat: "20%",
      statLabel: "Average returns"
    },
    {
      icon: Globe,
      title: "Global Participation",
      description: "Access deals worldwide without geographic restrictions or minimum investment barriers of traditional PE.",
      stat: "24/7",
      statLabel: "Market access"
    },
    {
      icon: Zap,
      title: "Lower Fees vs Wall Street",
      description: "Skip expensive investment banks and brokers. Our technology reduces costs from 5-10% to under 1%.",
      stat: "90%",
      statLabel: "Fee reduction"
    },
    {
      icon: Eye,
      title: "Privacy-Preserving Options",
      description: "Use zero-knowledge proofs to verify accreditation and investment capacity without revealing personal data.",
      stat: "100%",
      statLabel: "Privacy protected"
    },
    {
      icon: Shield,
      title: "Transparent & Programmable",
      description: "Smart contracts ensure automatic distributions and transparent governance with immutable transaction history.",
      stat: "100%",
      statLabel: "Transparency"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
            Why This Matters
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Why Crypto + SMBs?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The perfect combination of crypto innovation and real-world business fundamentals
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="group">
                <div className="bg-slate-50 rounded-2xl p-8 h-full hover:bg-slate-100 transition-all duration-300 hover:shadow-lg">
                  {/* Icon and Stat */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-gradient-to-r from-teal-100 to-emerald-100 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-teal-600" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gradient">
                        {benefit.stat}
                      </div>
                      <div className="text-sm text-slate-500">
                        {benefit.statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            How We Compare
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 text-slate-900 font-semibold"></th>
                  <th className="text-center py-4 text-slate-900 font-semibold">
                    <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-4 py-2 rounded-lg">
                      CryptoPE
                    </div>
                  </th>
                  <th className="text-center py-4 text-slate-600">Traditional PE</th>
                  <th className="text-center py-4 text-slate-600">Crypto Only</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-200">
                  <td className="py-4 font-medium text-slate-900">Minimum Investment</td>
                  <td className="py-4 text-center text-teal-600 font-semibold">$100</td>
                  <td className="py-4 text-center text-slate-600">$1M+</td>
                  <td className="py-4 text-center text-slate-600">N/A</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 font-medium text-slate-900">Global Access</td>
                  <td className="py-4 text-center text-teal-600 font-semibold">✓</td>
                  <td className="py-4 text-center text-slate-600">Limited</td>
                  <td className="py-4 text-center text-slate-600">✓</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 font-medium text-slate-900">Real-World Yield</td>
                  <td className="py-4 text-center text-teal-600 font-semibold">✓</td>
                  <td className="py-4 text-center text-slate-600">✓</td>
                  <td className="py-4 text-center text-slate-600">✗</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 font-medium text-slate-900">Fees</td>
                  <td className="py-4 text-center text-teal-600 font-semibold">&lt;1%</td>
                  <td className="py-4 text-center text-slate-600">5-10%</td>
                  <td className="py-4 text-center text-slate-600">0.1-3%</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 font-medium text-slate-900">Liquidity</td>
                  <td className="py-4 text-center text-teal-600 font-semibold">Secondary Markets</td>
                  <td className="py-4 text-center text-slate-600">Limited</td>
                  <td className="py-4 text-center text-slate-600">High</td>
                </tr>
                <tr>
                  <td className="py-4 font-medium text-slate-900">Volatility</td>
                  <td className="py-4 text-center text-teal-600 font-semibold">Low</td>
                  <td className="py-4 text-center text-slate-600">Low</td>
                  <td className="py-4 text-center text-slate-600">High</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto border border-teal-100">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Best of Both Worlds
            </h3>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Get the innovation and accessibility of crypto with the stability and cash flow of traditional business ownership.
            </p>
            <a href="/sample-deals" className="btn-primary text-lg">
              Explore Investment Opportunities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}