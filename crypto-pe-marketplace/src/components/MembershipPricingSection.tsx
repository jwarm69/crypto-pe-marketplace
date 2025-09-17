import {
  Eye,
  Briefcase,
  Crown,
  Rocket,
  Check,
  Star,
  ArrowRight,
  Clock,
  Users,
  MessageCircle,
  FileText,
  TrendingUp,
  Shield
} from 'lucide-react';

export default function MembershipPricingSection() {
  const membershipTiers = [
    {
      id: 'observer',
      name: 'Free / Observer',
      price: 'Always Free',
      icon: Eye,
      tagline: 'Perfect for curious browsers and future investors',
      color: 'slate',
      borderColor: 'border-slate-200',
      bgColor: 'bg-slate-50',
      features: [
        'Browse basic deal teasers',
        'Receive our weekly newsletter',
        'Follow industry insights and community updates',
        'Access to educational content'
      ],
      ctaText: 'Start Free',
      ctaStyle: 'btn-secondary',
      ctaHref: '/join-watchlist',
      popular: false,
      upgrade: true
    },
    {
      id: 'premium',
      name: 'Premium Investor',
      price: '$199',
      period: '/ year',
      icon: Briefcase,
      tagline: 'For accredited investors ready to deploy capital',
      color: 'teal',
      borderColor: 'border-teal-200',
      bgColor: 'bg-teal-50',
      features: [
        'Unlock full deal rooms (financials, documents, terms)',
        'Make investments directly in vetted acquisition deals',
        'Direct messaging with searchers and platform support',
        'Join live investor webinars and deal Q&A sessions',
        'Quarterly performance updates via investor dashboard',
        'Standard email support (48–72 hrs)'
      ],
      ctaText: 'Unlock Full Deal Access',
      ctaStyle: 'btn-primary',
      ctaHref: '/join-premium',
      popular: true
    },
    {
      id: 'platinum',
      name: 'Platinum Investor',
      price: '$499–$999',
      period: '/ year',
      icon: Crown,
      tagline: 'For serious investors who want priority service',
      color: 'purple',
      borderColor: 'border-purple-200',
      bgColor: 'bg-purple-50',
      features: [
        'Early access to deals (1 week before public investors)',
        'Priority allocations in oversubscribed deals',
        'Concierge support with 24-hour response times',
        '1:1 calls with our investor team for deeper diligence',
        'Enhanced dashboards and consolidated reporting',
        'Premium vendor introductions (SBA lenders, diligence providers)'
      ],
      ctaText: 'Become a Platinum Member',
      ctaStyle: 'btn-accent',
      ctaHref: '/join-premium',
      popular: false
    },
    {
      id: 'searcher',
      name: 'Searcher Membership',
      price: '$499–$1,000',
      period: '/ year',
      icon: Rocket,
      tagline: 'For entrepreneurs acquiring businesses through the platform',
      color: 'orange',
      borderColor: 'border-orange-200',
      bgColor: 'bg-orange-50',
      features: [
        'Post your acquisition deal and raise capital',
        'Dedicated support with document templates & coaching calls',
        'Featured listing placement for more investor visibility',
        'Vendor referrals and negotiated partner discounts',
        'Direct messaging with interested investors',
        'Present in live investor webinars/Q&A sessions'
      ],
      ctaText: 'Apply as a Searcher',
      ctaStyle: 'btn-accent',
      ctaHref: '/apply-searcher',
      popular: false
    }
  ];

  const getIconColorClass = (color: string) => {
    switch(color) {
      case 'slate': return 'text-slate-600';
      case 'teal': return 'text-teal-600';
      case 'purple': return 'text-purple-600';
      case 'orange': return 'text-orange-600';
      default: return 'text-slate-600';
    }
  };

  const getGradientClass = (color: string) => {
    switch(color) {
      case 'slate': return 'from-slate-100 to-slate-200';
      case 'teal': return 'from-teal-100 to-emerald-100';
      case 'purple': return 'from-purple-100 to-violet-100';
      case 'orange': return 'from-orange-100 to-amber-100';
      default: return 'from-slate-100 to-slate-200';
    }
  };

  return (
    <section id="pricing" className="section-padding bg-gradient-to-br from-white via-slate-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 text-sm font-semibold mb-8 shadow-lg">
            <Shield className="w-4 h-4 mr-2" />
            Membership Tiers
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
            Choose Your Access Level
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            From free browsing to premium deal access — find the membership that matches your investment goals and commitment level
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {membershipTiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div key={tier.id} className="relative">
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                      <Star className="w-4 h-4 inline mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`
                  ${tier.popular ? 'scale-105 ring-2 ring-teal-200 shadow-2xl' : 'shadow-xl hover:shadow-2xl'}
                  bg-white rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 border ${tier.borderColor} h-full flex flex-col
                `}>
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${getGradientClass(tier.color)} rounded-2xl mb-6 shadow-inner`}>
                      <Icon className={`w-8 h-8 ${getIconColorClass(tier.color)}`} />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">
                      {tier.name}
                    </h3>

                    <div className="mb-4">
                      <span className="text-4xl font-bold text-slate-900">
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-slate-500 text-lg ml-1">
                          {tier.period}
                        </span>
                      )}
                    </div>

                    <p className="text-slate-600 font-medium leading-relaxed">
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex-1 mb-8">
                    <ul className="space-y-4">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-slate-600 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Upgrade Notice for Free Tier */}
                    {tier.upgrade && (
                      <div className="mt-6 p-4 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl border border-teal-100">
                        <div className="flex items-center text-teal-700 font-medium">
                          <ArrowRight className="w-4 h-4 mr-2" />
                          Upgrade to invest and unlock full deal access
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <a href={tier.ctaHref} className={`${tier.ctaStyle} w-full text-lg group block text-center`}>
                    {tier.ctaText}
                    <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Matrix Comparison Table */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Feature Comparison
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See exactly what you get with each membership tier
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-slate-50 to-slate-100">
                  <tr>
                    <th className="text-left py-6 px-8 text-slate-900 font-bold text-lg">Features</th>
                    <th className="text-center py-6 px-6 text-slate-600 font-semibold">
                      <div className="flex flex-col items-center">
                        <Eye className="w-6 h-6 mb-2 text-slate-500" />
                        <span>Free</span>
                      </div>
                    </th>
                    <th className="text-center py-6 px-6 text-white font-semibold bg-gradient-to-r from-teal-500 to-emerald-500">
                      <div className="flex flex-col items-center">
                        <Briefcase className="w-6 h-6 mb-2" />
                        <span>Premium</span>
                        <div className="text-xs mt-1 opacity-90">Most Popular</div>
                      </div>
                    </th>
                    <th className="text-center py-6 px-6 text-purple-700 font-semibold">
                      <div className="flex flex-col items-center">
                        <Crown className="w-6 h-6 mb-2" />
                        <span>Platinum</span>
                      </div>
                    </th>
                    <th className="text-center py-6 px-6 text-orange-700 font-semibold">
                      <div className="flex flex-col items-center">
                        <Rocket className="w-6 h-6 mb-2" />
                        <span>Searcher</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    {
                      feature: "Deal Teasers & Newsletter",
                      free: true,
                      premium: true,
                      platinum: true,
                      searcher: true
                    },
                    {
                      feature: "Full Deal Rooms & Documents",
                      free: false,
                      premium: true,
                      platinum: true,
                      searcher: true
                    },
                    {
                      feature: "Direct Investment Capability",
                      free: false,
                      premium: true,
                      platinum: true,
                      searcher: false
                    },
                    {
                      feature: "Direct Messaging & Support",
                      free: false,
                      premium: true,
                      platinum: true,
                      searcher: true
                    },
                    {
                      feature: "Live Webinars & Q&A Sessions",
                      free: false,
                      premium: true,
                      platinum: true,
                      searcher: true
                    },
                    {
                      feature: "Early Deal Access (1 week)",
                      free: false,
                      premium: false,
                      platinum: true,
                      searcher: false
                    },
                    {
                      feature: "Priority Allocations",
                      free: false,
                      premium: false,
                      platinum: true,
                      searcher: false
                    },
                    {
                      feature: "24-Hour Concierge Support",
                      free: false,
                      premium: false,
                      platinum: true,
                      searcher: true
                    },
                    {
                      feature: "1:1 Calls with Team",
                      free: false,
                      premium: false,
                      platinum: true,
                      searcher: true
                    },
                    {
                      feature: "Post Acquisition Deals",
                      free: false,
                      premium: false,
                      platinum: false,
                      searcher: true
                    },
                    {
                      feature: "Featured Deal Placement",
                      free: false,
                      premium: false,
                      platinum: false,
                      searcher: true
                    },
                    {
                      feature: "Vendor Referrals & Discounts",
                      free: false,
                      premium: false,
                      platinum: true,
                      searcher: true
                    }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-8 font-medium text-slate-900">{row.feature}</td>
                      <td className="py-4 px-6 text-center">
                        {row.free ? (
                          <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                        ) : (
                          <span className="text-slate-300 font-bold text-lg">×</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center bg-teal-50">
                        {row.premium ? (
                          <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                        ) : (
                          <span className="text-slate-300 font-bold text-lg">×</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.platinum ? (
                          <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                        ) : (
                          <span className="text-slate-300 font-bold text-lg">×</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.searcher ? (
                          <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                        ) : (
                          <span className="text-slate-300 font-bold text-lg">×</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Value Props Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-100 to-emerald-100 rounded-2xl mb-4">
              <Users className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Quality Over Quantity</h3>
            <p className="text-slate-600 leading-relaxed">
              Our membership model ensures serious investors and reduces noise from tire kickers
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-100 to-violet-100 rounded-2xl mb-4">
              <MessageCircle className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Direct Access</h3>
            <p className="text-slate-600 leading-relaxed">
              Connect directly with searchers and deal sponsors without intermediaries
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl mb-4">
              <TrendingUp className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Proven Results</h3>
            <p className="text-slate-600 leading-relaxed">
              Track record of successful deals with transparent performance reporting
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white professional-shadow">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
              Ready to Join Our Community?
            </h3>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
              Start with our free tier to explore deals, then upgrade when you&rsquo;re ready to invest.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/join-watchlist" className="btn-primary text-lg">
                Start Free Account
              </a>
              <a href="/join-premium" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/30 font-semibold py-4 px-10 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-lg">
                Compare All Plans
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}