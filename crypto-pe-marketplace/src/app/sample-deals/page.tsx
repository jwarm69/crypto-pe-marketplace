import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Eye,
  TrendingUp,
  MapPin,
  Calendar,
  DollarSign,
  Users,
  CheckCircle,
  Clock,
  ArrowRight,
  Shield,
  BarChart3,
  Target,
  Star,
  Building,
  Briefcase
} from 'lucide-react';

export default function SampleDealsPage() {
  const sampleDeals = [
    {
      id: 1,
      title: 'CloudSync SaaS Platform',
      industry: 'Technology',
      location: 'Austin, TX',
      searcher: 'Sarah Chen, Former VP at Salesforce',
      status: 'Completed',
      statusColor: 'bg-emerald-100 text-emerald-700',

      // Financial Metrics
      revenue: '$2.4M ARR',
      purchasePrice: '$8.5M',
      ebitdaMultiple: '3.5x',
      minInvestment: '$5,000',
      fundingGoal: '$8.5M',
      fundingProgress: 100,

      // Business Details
      description: 'Sarah Chen identified and acquired this B2B marketing automation platform serving 400+ SMB customers. As CEO, she has driven 95% retention and strong recurring revenue growth.',
      keyMetrics: [
        { label: 'Revenue Growth', value: '45% YoY' },
        { label: 'Gross Margin', value: '78%' },
        { label: 'Customer Count', value: '400+' },
        { label: 'Churn Rate', value: '5% Annual' }
      ],
      highlights: [
        'Sticky product with high switching costs',
        'Experienced management team staying on',
        'Clear expansion into adjacent markets',
        'Strong competitive moat with IP'
      ],

      // Investment Terms
      irr: '22% Target IRR',
      holdPeriod: '5-7 years',
      distributionFreq: 'Quarterly',
      exitStrategy: 'Strategic sale or private equity recap'
    },
    {
      id: 2,
      title: 'MedStaff Solutions',
      industry: 'Healthcare',
      location: 'Atlanta, GA',
      searcher: 'Michael Rodriguez, Former McKinsey Principal',
      status: 'Active Funding',
      statusColor: 'bg-amber-100 text-amber-700',

      // Financial Metrics
      revenue: '$5.2M Annual',
      purchasePrice: '$12.8M',
      ebitdaMultiple: '4.2x',
      minInvestment: '$7,500',
      fundingGoal: '$12.8M',
      fundingProgress: 68,

      // Business Details
      description: 'Michael Rodriguez sourced and is acquiring this healthcare staffing agency. With his McKinsey background, he plans to expand the business&rsquo;s reach across the Southeast region.',
      keyMetrics: [
        { label: 'Revenue Growth', value: '32% YoY' },
        { label: 'Gross Margin', value: '25%' },
        { label: 'Active Contracts', value: '85' },
        { label: 'Staff Retention', value: '89%' }
      ],
      highlights: [
        'Critical service with growing demand',
        'Long-term contracts with hospitals',
        'Opportunity to expand geographically',
        'Recession-resistant business model'
      ],

      // Investment Terms
      irr: '18% Target IRR',
      holdPeriod: '4-6 years',
      distributionFreq: 'Semi-annually',
      exitStrategy: 'Strategic acquisition by larger staffing firm'
    },
    {
      id: 3,
      title: 'LogiFlow Fulfillment',
      industry: 'Logistics',
      location: 'Phoenix, AZ',
      searcher: 'Jennifer Park, Former Amazon Operations',
      status: 'Due Diligence',
      statusColor: 'bg-blue-100 text-blue-700',

      // Financial Metrics
      revenue: '$3.8M Annual',
      purchasePrice: '$9.2M',
      ebitdaMultiple: '3.8x',
      minInvestment: '$10,000',
      fundingGoal: '$9.2M',
      fundingProgress: 0,

      // Business Details
      description: 'Third-party logistics provider specializing in e-commerce fulfillment. Serves 200+ online retailers with same-day and next-day delivery capabilities.',
      keyMetrics: [
        { label: 'Revenue Growth', value: '28% YoY' },
        { label: 'Gross Margin', value: '22%' },
        { label: 'Client Retention', value: '92%' },
        { label: 'Warehouse Capacity', value: '150K sq ft' }
      ],
      highlights: [
        'Growing e-commerce tailwinds',
        'Modern warehouse automation',
        'Blue-chip client relationships',
        'Expansion into new markets planned'
      ],

      // Investment Terms
      irr: '20% Target IRR',
      holdPeriod: '5-7 years',
      distributionFreq: 'Quarterly',
      exitStrategy: 'Strategic sale to logistics conglomerate'
    },
    {
      id: 4,
      title: 'EduTech Learning Solutions',
      industry: 'Education',
      location: 'Denver, CO',
      searcher: 'David Kim, Former Kaplan Executive',
      status: 'Upcoming',
      statusColor: 'bg-purple-100 text-purple-700',

      // Financial Metrics
      revenue: '$4.6M Annual',
      purchasePrice: '$11.5M',
      ebitdaMultiple: '4.0x',
      minInvestment: '$8,000',
      fundingGoal: '$11.5M',
      fundingProgress: 0,

      // Business Details
      description: 'Corporate training and professional development platform serving Fortune 500 companies. Blended learning approach with strong completion rates.',
      keyMetrics: [
        { label: 'Revenue Growth', value: '38% YoY' },
        { label: 'Gross Margin', value: '65%' },
        { label: 'Enterprise Clients', value: '45' },
        { label: 'Course Completion', value: '87%' }
      ],
      highlights: [
        'Recurring revenue from enterprise contracts',
        'Scalable digital platform',
        'High barriers to switching',
        'Clear path to national expansion'
      ],

      // Investment Terms
      irr: '25% Target IRR',
      holdPeriod: '4-6 years',
      distributionFreq: 'Quarterly',
      exitStrategy: 'Strategic acquisition by ed-tech platform'
    }
  ];

  const dealFilters = [
    { label: 'All Industries', value: 'all', active: true },
    { label: 'Technology', value: 'technology', active: false },
    { label: 'Healthcare', value: 'healthcare', active: false },
    { label: 'Business Services', value: 'business-services', active: false },
    { label: 'Education', value: 'education', active: false }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed': return <CheckCircle className="w-4 h-4" />;
      case 'Active Funding': return <TrendingUp className="w-4 h-4" />;
      case 'Due Diligence': return <Eye className="w-4 h-4" />;
      case 'Upcoming': return <Clock className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 text-sm font-semibold mb-8">
              <Eye className="w-4 h-4 mr-2" />
              Deal Showcase
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              Sample{' '}
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Deals
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light">
              Explore real examples of crypto-native private equity opportunities from our platform.
              See the types of businesses and returns our community has access to.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-3xl mb-4">
                <BarChart3 className="w-10 h-10 text-blue-600 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">45+</div>
              <div className="text-slate-600">Deals Completed</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-6 rounded-3xl mb-4">
                <TrendingUp className="w-10 h-10 text-emerald-600 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">18%</div>
              <div className="text-slate-600">Average IRR</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-3xl mb-4">
                <DollarSign className="w-10 h-10 text-amber-600 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">$127M</div>
              <div className="text-slate-600">Capital Deployed</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-3xl mb-4">
                <Users className="w-10 h-10 text-purple-600 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">2,800+</div>
              <div className="text-slate-600">Active Investors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deal Filters */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Investment Opportunities
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Examples of real deals available to AcquiFi members across various industries and business models
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {dealFilters.map((filter) => (
                <button
                  key={filter.value}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    filter.active
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Deal Cards */}
          <div className="space-y-8">
            {sampleDeals.map((deal) => (
              <div key={deal.id} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Deal Overview */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <h3 className="text-2xl font-bold text-slate-900">{deal.title}</h3>
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 ${deal.statusColor}`}>
                            {getStatusIcon(deal.status)}
                            {deal.status}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-4">
                          <span className="flex items-center">
                            <Building className="w-4 h-4 mr-1" />
                            {deal.industry}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {deal.location}
                          </span>
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {deal.searcher}
                          </span>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-6">{deal.description}</p>

                        {/* Key Metrics Grid */}
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                          {deal.keyMetrics.map((metric, index) => (
                            <div key={index} className="bg-slate-50 rounded-xl p-4">
                              <div className="text-sm text-slate-600">{metric.label}</div>
                              <div className="text-lg font-bold text-slate-900">{metric.value}</div>
                            </div>
                          ))}
                        </div>

                        {/* Highlights */}
                        <div>
                          <h4 className="font-bold text-slate-900 mb-3">Investment Highlights</h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {deal.highlights.map((highlight, index) => (
                              <div key={index} className="flex items-start">
                                <Star className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-slate-600">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Financial Summary */}
                  <div className="bg-slate-50 rounded-2xl p-6">
                    <h4 className="font-bold text-slate-900 mb-6 flex items-center">
                      <DollarSign className="w-5 h-5 mr-2" />
                      Deal Financials
                    </h4>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Annual Revenue</span>
                        <span className="font-semibold text-slate-900">{deal.revenue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Purchase Price</span>
                        <span className="font-semibold text-slate-900">{deal.purchasePrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">EBITDA Multiple</span>
                        <span className="font-semibold text-slate-900">{deal.ebitdaMultiple}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Min Investment</span>
                        <span className="font-semibold text-emerald-600">{deal.minInvestment}</span>
                      </div>
                    </div>

                    {/* Funding Progress */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm text-slate-600 mb-2">
                        <span>Funding Progress</span>
                        <span>{deal.fundingProgress}%</span>
                      </div>
                      <div className="bg-slate-200 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-300"
                          style={{ width: `${deal.fundingProgress}%` }}
                        />
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        Target: {deal.fundingGoal}
                      </div>
                    </div>

                    {/* Investment Terms */}
                    <div className="border-t border-slate-200 pt-4">
                      <h5 className="font-semibold text-slate-900 mb-3">Investment Terms</h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Target IRR</span>
                          <span className="font-semibold text-emerald-600">{deal.irr}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Hold Period</span>
                          <span className="text-slate-900">{deal.holdPeriod}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Distributions</span>
                          <span className="text-slate-900">{deal.distributionFreq}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      className={`w-full mt-6 py-3 px-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center ${
                        deal.status === 'Completed'
                          ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                          : deal.status === 'Active Funding'
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-lg hover:scale-105'
                          : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:scale-105'
                      }`}
                      disabled={deal.status === 'Completed'}
                    >
                      {deal.status === 'Completed' ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Funding Complete
                        </>
                      ) : deal.status === 'Active Funding' ? (
                        <>
                          <Target className="w-4 h-4 mr-2" />
                          Invest Now
                        </>
                      ) : deal.status === 'Due Diligence' ? (
                        <>
                          <Eye className="w-4 h-4 mr-2" />
                          Request Access
                        </>
                      ) : (
                        <>
                          <Clock className="w-4 h-4 mr-2" />
                          Join Watchlist
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto text-white">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-10 h-10 mr-4" />
              <h2 className="text-4xl font-bold">Access Real Deals</h2>
            </div>
            <p className="text-xl text-blue-100 mb-10">
              These are real searchers and their acquisition targets available to our members. Join AcquiFi to
              back proven entrepreneurs and get notified about new searcher opportunities as they become available.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center">
                <Briefcase className="w-5 h-5 mr-2" />
                Join Premium Membership
              </button>
              <button className="bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center">
                <Eye className="w-5 h-5 mr-2" />
                Join Free Watchlist
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-slate-300">
            <h3 className="text-xl font-bold text-white mb-4">Important Disclaimer</h3>
            <p className="text-sm leading-relaxed">
              The deals shown above are examples for illustrative purposes only. Past performance does not
              guarantee future results. All investments involve substantial risk of loss and are suitable only
              for accredited investors who can afford to lose their entire investment. Target returns are
              estimates and may not be achieved. Securities are offered through licensed broker-dealers and
              are subject to regulatory approval and compliance requirements.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}