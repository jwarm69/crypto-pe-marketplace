'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Mail,
  Bell,
  Eye,
  TrendingUp,
  Shield,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Gift,
  Users,
  BarChart3
} from 'lucide-react';
import { useState } from 'react';

export default function JoinWatchlistPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    investmentInterests: [],
    investmentExperience: '',
    investmentAmount: '',
    referralSource: '',
    notifications: {
      newDeals: true,
      weeklyDigest: true,
      marketUpdates: false,
      events: true
    }
  });

  const watchlistBenefits = [
    {
      icon: Bell,
      title: 'Deal Alerts',
      description: 'Get notified when new investment opportunities match your interests and criteria'
    },
    {
      icon: Eye,
      title: 'Market Insights',
      description: 'Access weekly market analysis, trends, and insights from our investment team'
    },
    {
      icon: BarChart3,
      title: 'Performance Data',
      description: 'See anonymized performance data and metrics from our portfolio companies'
    },
    {
      icon: Users,
      title: 'Investor Community',
      description: 'Connect with other investors and join our quarterly community calls'
    },
    {
      icon: Clock,
      title: 'Early Access',
      description: 'Get a 24-hour head start before deals are announced to the general public'
    },
    {
      icon: Star,
      title: 'Exclusive Content',
      description: 'Access to searcher interviews, case studies, and educational webinars'
    }
  ];

  const sampleDeals = [
    {
      title: 'SaaS Marketing Platform',
      industry: 'Technology',
      revenue: '$2.4M ARR',
      location: 'Austin, TX',
      status: 'Funding Complete',
      description: 'B2B marketing automation platform serving SMBs'
    },
    {
      title: 'Healthcare Staffing Agency',
      industry: 'Healthcare',
      revenue: '$5.2M Annual',
      location: 'Atlanta, GA',
      status: 'Active Funding',
      description: 'Specialized staffing for hospitals and clinics'
    },
    {
      title: 'E-commerce Fulfillment',
      industry: 'Logistics',
      revenue: '$3.8M Annual',
      location: 'Phoenix, AZ',
      status: 'Due Diligence',
      description: 'Third-party logistics for online retailers'
    }
  ];

  const industryOptions = [
    'Technology/Software',
    'Healthcare Services',
    'Business Services',
    'Manufacturing',
    'Consumer Products',
    'Financial Services',
    'Education',
    'Real Estate',
    'Energy',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      investmentInterests: prev.investmentInterests.includes(interest)
        ? prev.investmentInterests.filter(i => i !== interest)
        : [...prev.investmentInterests, interest]
    }));
  };

  const handleNotificationChange = (type: string) => {
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type as keyof typeof prev.notifications]
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Watchlist signup:', formData);
    alert('Welcome to the AcquiFi Deal Watchlist! You&rsquo;ll receive your first deal alert within 24 hours.');
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-200 text-sm font-semibold mb-8">
              <Mail className="w-4 h-4 mr-2" />
              Free Deal Watchlist
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              Join Our{' '}
              <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                Deal Watchlist
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light mb-8">
              Stay informed about the latest private equity investment opportunities in crypto-native
              business acquisitions. Get deal alerts, market insights, and exclusive content - completely free.
            </p>
            <div className="flex items-center justify-center space-x-8 text-slate-300">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                <span>Weekly Insights</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                <span>Early Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              What You&rsquo;ll Receive
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive deal flow and market intelligence to keep you informed and ready to invest
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {watchlistBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-4 rounded-2xl mb-6 inline-block">
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sample Deals Preview */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Recent Deal Examples
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See the types of opportunities our watchlist members receive alerts about
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-8">
            {sampleDeals.map((deal, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{deal.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                          <span className="flex items-center">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            {deal.industry}
                          </span>
                          <span>{deal.revenue}</span>
                          <span>{deal.location}</span>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        deal.status === 'Funding Complete' ? 'bg-emerald-100 text-emerald-700' :
                        deal.status === 'Active Funding' ? 'bg-amber-100 text-amber-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {deal.status}
                      </div>
                    </div>
                    <p className="text-slate-600">{deal.description}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors flex items-center">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              <strong>Join the watchlist to see 3-5 new deals like these every month</strong>
            </p>
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
              Join Free Watchlist Below
            </button>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Join the Deal Watchlist
              </h2>
              <p className="text-xl text-slate-600">
                Customize your deal alerts and preferences to get the most relevant opportunities
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-slate-900 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-slate-900 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Investment Interests */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Investment Interests</h3>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-slate-900 mb-3">
                      Which industries interest you? (Select all that apply)
                    </label>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {industryOptions.map((industry) => (
                        <label key={industry} className="flex items-center p-3 border border-slate-200 rounded-xl hover:bg-emerald-50 hover:border-emerald-200 transition-colors cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.investmentInterests.includes(industry)}
                            onChange={() => handleInterestChange(industry)}
                            className="w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500"
                          />
                          <span className="ml-3 text-sm text-slate-700">{industry}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="investmentExperience" className="block text-sm font-semibold text-slate-900 mb-2">
                        Investment Experience
                      </label>
                      <select
                        id="investmentExperience"
                        name="investmentExperience"
                        value={formData.investmentExperience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select your experience level</option>
                        <option value="beginner">New to investing</option>
                        <option value="intermediate">Some experience</option>
                        <option value="experienced">Experienced investor</option>
                        <option value="professional">Professional investor</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="investmentAmount" className="block text-sm font-semibold text-slate-900 mb-2">
                        Potential Investment Amount
                      </label>
                      <select
                        id="investmentAmount"
                        name="investmentAmount"
                        value={formData.investmentAmount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select amount range</option>
                        <option value="just-browsing">Just browsing for now</option>
                        <option value="1k-5k">$1K - $5K</option>
                        <option value="5k-25k">$5K - $25K</option>
                        <option value="25k-100k">$25K - $100K</option>
                        <option value="100k+">$100K+</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Notification Preferences */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Notification Preferences</h3>
                  <div className="space-y-4">
                    <label className="flex items-center p-4 border border-slate-200 rounded-xl hover:bg-emerald-50 hover:border-emerald-200 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.notifications.newDeals}
                        onChange={() => handleNotificationChange('newDeals')}
                        className="w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500"
                      />
                      <div className="ml-4">
                        <div className="font-semibold text-slate-900">New Deal Alerts</div>
                        <div className="text-sm text-slate-600">Get notified immediately when new deals match your interests</div>
                      </div>
                    </label>

                    <label className="flex items-center p-4 border border-slate-200 rounded-xl hover:bg-emerald-50 hover:border-emerald-200 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.notifications.weeklyDigest}
                        onChange={() => handleNotificationChange('weeklyDigest')}
                        className="w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500"
                      />
                      <div className="ml-4">
                        <div className="font-semibold text-slate-900">Weekly Digest</div>
                        <div className="text-sm text-slate-600">Weekly summary of market trends, performance data, and insights</div>
                      </div>
                    </label>

                    <label className="flex items-center p-4 border border-slate-200 rounded-xl hover:bg-emerald-50 hover:border-emerald-200 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.notifications.marketUpdates}
                        onChange={() => handleNotificationChange('marketUpdates')}
                        className="w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500"
                      />
                      <div className="ml-4">
                        <div className="font-semibold text-slate-900">Market Updates</div>
                        <div className="text-sm text-slate-600">Important market news and regulatory updates</div>
                      </div>
                    </label>

                    <label className="flex items-center p-4 border border-slate-200 rounded-xl hover:bg-emerald-50 hover:border-emerald-200 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.notifications.events}
                        onChange={() => handleNotificationChange('events')}
                        className="w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500"
                      />
                      <div className="ml-4">
                        <div className="font-semibold text-slate-900">Event Invitations</div>
                        <div className="text-sm text-slate-600">Webinars, community calls, and networking events</div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Referral Source */}
                <div>
                  <label htmlFor="referralSource" className="block text-sm font-semibold text-slate-900 mb-2">
                    How did you hear about AcquiFi?
                  </label>
                  <select
                    id="referralSource"
                    name="referralSource"
                    value={formData.referralSource}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select source</option>
                    <option value="google">Google Search</option>
                    <option value="social-media">Social Media</option>
                    <option value="referral">Friend/Colleague Referral</option>
                    <option value="newsletter">Newsletter/Blog</option>
                    <option value="event">Industry Event</option>
                    <option value="crypto-community">Crypto Community</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Join Free Deal Watchlist
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </form>

              <div className="mt-8 text-center text-slate-500 text-sm">
                <p>
                  Free forever • Unsubscribe anytime • No spam, we promise
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="section-padding bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto text-white">
            <div className="flex items-center justify-center mb-6">
              <Gift className="w-10 h-10 mr-4" />
              <h2 className="text-3xl font-bold">Join 2,800+ Investors</h2>
            </div>
            <p className="text-xl text-emerald-100 mb-8">
              Our watchlist members have early access to deals that have generated an average of
              <strong className="text-white"> 18% IRR</strong> across completed investments.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">45+</div>
                <div className="text-emerald-200">Deals Shared</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">$127M</div>
                <div className="text-emerald-200">Capital Deployed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">2,800+</div>
                <div className="text-emerald-200">Active Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}