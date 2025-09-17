import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { AlertTriangle, TrendingDown, DollarSign, Clock, Shield, Target } from 'lucide-react';

export default function RiskPage() {
  const riskCategories = [
    {
      icon: TrendingDown,
      title: 'Investment Risks',
      color: 'from-red-500 to-orange-500',
      risks: [
        {
          name: 'Total Loss of Capital',
          description: 'Private equity investments can result in complete loss of invested capital. Businesses may fail, be sold for less than invested amount, or become worthless.',
          severity: 'High'
        },
        {
          name: 'Illiquidity Risk',
          description: 'Private equity investments typically have 3-7 year lock-up periods with no guaranteed exit. You may not be able to access your capital when needed.',
          severity: 'High'
        },
        {
          name: 'Market Risk',
          description: 'Economic downturns, industry disruptions, or market changes can significantly impact business valuations and returns.',
          severity: 'Medium'
        },
        {
          name: 'Concentration Risk',
          description: 'Investing in individual companies or specific sectors may result in higher volatility compared to diversified portfolios.',
          severity: 'Medium'
        }
      ]
    },
    {
      icon: DollarSign,
      title: 'Cryptocurrency Risks',
      color: 'from-orange-500 to-amber-500',
      risks: [
        {
          name: 'Price Volatility',
          description: 'Cryptocurrency values can fluctuate dramatically, potentially reducing the USD value of your investments even if the underlying business performs well.',
          severity: 'High'
        },
        {
          name: 'Regulatory Changes',
          description: 'Government regulations on cryptocurrencies continue to evolve and may impact the ability to use crypto for investments or receive distributions.',
          severity: 'High'
        },
        {
          name: 'Technical Risks',
          description: 'Blockchain network failures, smart contract bugs, wallet malfunctions, or lost private keys could result in permanent loss of assets.',
          severity: 'Medium'
        },
        {
          name: 'Exchange Risk',
          description: 'Cryptocurrency exchanges and custody providers may be hacked, go bankrupt, or freeze assets, potentially resulting in loss of funds.',
          severity: 'Medium'
        }
      ]
    },
    {
      icon: Target,
      title: 'Business Specific Risks',
      color: 'from-purple-500 to-pink-500',
      risks: [
        {
          name: 'Operational Risk',
          description: 'Poor management decisions, operational failures, or inability to execute business plans can lead to business failure and investment losses.',
          severity: 'High'
        },
        {
          name: 'Competition Risk',
          description: 'Increased competition, market disruption, or loss of competitive advantages may reduce business profitability and valuation.',
          severity: 'Medium'
        },
        {
          name: 'Key Person Risk',
          description: 'Departure of key management or employees could significantly impact business operations and performance.',
          severity: 'Medium'
        },
        {
          name: 'Customer Concentration',
          description: 'Businesses heavily dependent on few customers face risk of significant revenue loss if key customers are lost.',
          severity: 'Medium'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Platform & Legal Risks',
      color: 'from-blue-500 to-cyan-500',
      risks: [
        {
          name: 'Platform Risk',
          description: 'AcquiFi could experience technical failures, security breaches, or business closure that may impact your ability to manage investments.',
          severity: 'Low'
        },
        {
          name: 'Regulatory Compliance',
          description: 'Changes in securities laws or regulations could affect the platform&rsquo;s operations or your ability to participate in investments.',
          severity: 'Medium'
        },
        {
          name: 'Due Diligence Limitations',
          description: 'Despite our efforts, due diligence may not identify all risks or problems with investment opportunities.',
          severity: 'Medium'
        },
        {
          name: 'Conflicts of Interest',
          description: 'Potential conflicts may arise between different parties involved in investments, which could impact your returns.',
          severity: 'Low'
        }
      ]
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 text-sm font-semibold mb-8">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Important Risk Information
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              Risk{' '}
              <span className="bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
                Disclosure
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light">
              Private equity investing involves significant risks. Please carefully consider these
              risks before making any investment decisions.
            </p>
            <p className="text-slate-400 mt-4">
              Last updated: January 15, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Risk Warning */}
      <section className="section-padding bg-red-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-100 border-2 border-red-200 rounded-3xl p-8">
              <div className="flex items-start">
                <AlertTriangle className="w-8 h-8 text-red-600 mr-6 mt-1" />
                <div>
                  <h2 className="text-3xl font-bold text-red-900 mb-6">⚠️ Important Risk Warning</h2>
                  <div className="space-y-4 text-red-800">
                    <p className="text-lg font-semibold">
                      YOU COULD LOSE ALL OF YOUR INVESTED CAPITAL
                    </p>
                    <p>
                      Private equity investments are speculative and involve substantial risk of loss.
                      These investments are suitable only for investors who can afford to lose their
                      entire investment and who understand the risks involved.
                    </p>
                    <p>
                      <strong>Key Points:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>No guarantee of returns or capital preservation</li>
                      <li>Investments are illiquid with long holding periods</li>
                      <li>Not suitable for funds needed for current income or liquidity</li>
                      <li>Past performance does not predict future results</li>
                      <li>Cryptocurrency involvement adds additional volatility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Understanding the Risks
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive overview of potential risks associated with crypto-native private equity investing
            </p>
          </div>

          <div className="space-y-16">
            {riskCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div key={categoryIndex} className="max-w-6xl mx-auto">
                  {/* Category Header */}
                  <div className="flex items-center mb-8">
                    <div className={`bg-gradient-to-r ${category.color} p-4 rounded-2xl mr-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900">{category.title}</h3>
                  </div>

                  {/* Risk Items */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.risks.map((risk, riskIndex) => (
                      <div key={riskIndex} className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="text-xl font-bold text-slate-900 flex-1">{risk.name}</h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getSeverityColor(risk.severity)}`}>
                            {risk.severity} Risk
                          </span>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{risk.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mitigation Strategies */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Risk Mitigation Strategies
              </h2>
              <p className="text-xl text-slate-600">
                While risks cannot be eliminated, these strategies may help manage them
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="bg-gradient-to-r from-teal-100 to-emerald-100 p-4 rounded-2xl mb-6 inline-block">
                  <Target className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Diversification</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Invest across multiple deals and searchers</li>
                  <li>• Spread investments across different industries</li>
                  <li>• Consider different business sizes and stages</li>
                  <li>• Limit exposure to any single investment</li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="bg-gradient-to-r from-teal-100 to-emerald-100 p-4 rounded-2xl mb-6 inline-block">
                  <Clock className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Time Horizon</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Only invest funds you won&rsquo;t need for 5-7+ years</li>
                  <li>• Maintain liquid emergency reserves separately</li>
                  <li>• Plan for extended holding periods</li>
                  <li>• Consider gradual investment over time</li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="bg-gradient-to-r from-teal-100 to-emerald-100 p-4 rounded-2xl mb-6 inline-block">
                  <Shield className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Due Diligence</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Review all investment materials thoroughly</li>
                  <li>• Understand searcher backgrounds and experience</li>
                  <li>• Analyze business financials and market position</li>
                  <li>• Ask questions and seek clarification</li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="bg-gradient-to-r from-teal-100 to-emerald-100 p-4 rounded-2xl mb-6 inline-block">
                  <DollarSign className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Position Sizing</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Limit private equity to appropriate portfolio percentage</li>
                  <li>• Start with smaller amounts to gain experience</li>
                  <li>• Never invest borrowed money</li>
                  <li>• Maintain balanced overall portfolio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suitability & Disclaimers */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-8 text-center tracking-tight">
              Investment Suitability
            </h2>

            <div className="space-y-8">
              <div className="bg-slate-800 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-teal-300">Who Should Consider These Investments</h3>
                <ul className="space-y-3 text-slate-300">
                  <li>✓ Accredited investors with substantial assets</li>
                  <li>✓ Investors with 5-7+ year investment horizons</li>
                  <li>✓ Those comfortable with high-risk, illiquid investments</li>
                  <li>✓ Investors seeking portfolio diversification</li>
                  <li>✓ Those with experience in private markets</li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-red-300">Who Should NOT Invest</h3>
                <ul className="space-y-3 text-slate-300">
                  <li>✗ Investors who cannot afford total loss</li>
                  <li>✗ Those needing liquidity or current income</li>
                  <li>✗ Investors uncomfortable with high volatility</li>
                  <li>✗ Those without emergency fund reserves</li>
                  <li>✗ Investors seeking guaranteed returns</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Legal Disclaimers</h3>
                <div className="text-sm space-y-4">
                  <p>
                    <strong>This is not investment advice.</strong> All information is for educational purposes only.
                    Consult with qualified financial advisors before making investment decisions.
                  </p>
                  <p>
                    <strong>Past performance does not guarantee future results.</strong> All investments involve
                    risk of loss and there can be no assurance that any investment will achieve its objectives.
                  </p>
                  <p>
                    <strong>Forward-looking statements are not guarantees.</strong> Projections, forecasts, and
                    target returns are estimates that may not be realized and should not be relied upon.
                  </p>
                  <p>
                    <strong>Regulatory compliance required.</strong> Investments are limited to accredited investors
                    and subject to securities regulations. AcquiFi is not a registered investment adviser.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Questions About Risks?
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              Our team can help explain investment risks and suitability considerations
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                Schedule Risk Discussion
              </button>
              <button className="bg-slate-100 text-slate-900 border-2 border-slate-200 hover:bg-slate-200 font-bold py-4 px-8 rounded-xl transition-all duration-300">
                Download Full Risk Disclosure
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}