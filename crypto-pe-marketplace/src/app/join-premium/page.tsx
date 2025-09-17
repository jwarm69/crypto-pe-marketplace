'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Crown,
  Check,
  Star,
  TrendingUp,
  Shield,
  Users,
  Zap,
  CreditCard,
  Lock,
  ArrowRight,
  Gift,
  AlertCircle
} from 'lucide-react';
import { useState } from 'react';

export default function JoinPremiumPage() {
  const [selectedPlan, setSelectedPlan] = useState('annual');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    investmentExperience: '',
    investmentAmount: '',
    accreditationStatus: '',
    referralSource: ''
  });

  const premiumBenefits = [
    {
      icon: TrendingUp,
      title: 'Priority Deal Access',
      description: 'Get first access to new investment opportunities before they&rsquo;re available to free members'
    },
    {
      icon: Users,
      title: 'Searcher Network',
      description: 'Direct access to our vetted network of experienced searchers and entrepreneurs'
    },
    {
      icon: Shield,
      title: 'Enhanced Due Diligence',
      description: 'Access detailed financial models, market analysis, and risk assessments for each deal'
    },
    {
      icon: Star,
      title: 'Lower Investment Minimums',
      description: 'Invest with minimums as low as $5,000 compared to $10,000+ for standard access'
    },
    {
      icon: Zap,
      title: 'Platform Analytics',
      description: 'Advanced portfolio tracking, performance analytics, and market insights dashboard'
    },
    {
      icon: Lock,
      title: 'Exclusive Events',
      description: 'Quarterly investor calls, searcher presentations, and private networking events'
    }
  ];

  const pricingPlans = [
    {
      id: 'annual',
      name: 'Annual Premium',
      price: '$199',
      period: 'per year',
      savings: 'Save $39',
      popular: true,
      features: [
        'All Premium benefits',
        '12 months access',
        'Priority support',
        'Quarterly investor events',
        'Advanced analytics',
        'Lower investment minimums'
      ]
    },
    {
      id: 'monthly',
      name: 'Monthly Premium',
      price: '$19.99',
      period: 'per month',
      savings: null,
      popular: false,
      features: [
        'All Premium benefits',
        'Month-to-month flexibility',
        'Cancel anytime',
        'Priority support',
        'Advanced analytics',
        'Lower investment minimums'
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Premium membership form submitted:', formData);
    alert('Thank you for your interest! We&rsquo;ll be in touch within 24 hours to complete your Premium membership setup.');
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-400/30 text-amber-200 text-sm font-semibold mb-8">
              <Crown className="w-4 h-4 mr-2" />
              Premium Membership
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              Join{' '}
              <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
                Premium
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light mb-8">
              Unlock exclusive access to premium deals, advanced analytics, and priority support
              for serious crypto-native private equity investors.
            </p>
            <div className="flex items-center justify-center space-x-8 text-slate-300">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-emerald-400 mr-2" />
                <span>Priority Deal Access</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-emerald-400 mr-2" />
                <span>Lower Minimums</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-emerald-400 mr-2" />
                <span>Exclusive Events</span>
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
              Premium Member Benefits
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to succeed in crypto-native private equity investing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-2xl mb-6 inline-block">
                    <Icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Choose Your Premium Plan
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Flexible options to fit your investment timeline and preferences
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-amber-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-600 ml-2">{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <div className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold inline-block">
                      {plan.savings}
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-emerald-500 mr-3" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Selected Plan' : 'Select Plan'}
                </button>
              </div>
            ))}
          </div>

          {/* Special Offer */}
          <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 text-white text-center">
            <div className="flex items-center justify-center mb-4">
              <Gift className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">Limited Time Offer</h3>
            </div>
            <p className="text-xl mb-6">
              Join Premium in the next 7 days and get your first investment fee waived (up to $50 value)
            </p>
            <div className="text-emerald-200 text-sm">
              Offer expires January 31, 2025 • New Premium members only
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Complete Your Premium Membership
              </h2>
              <p className="text-xl text-slate-600">
                Tell us about yourself so we can personalize your investment experience
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="investmentExperience" className="block text-sm font-semibold text-slate-900 mb-2">
                    Investment Experience *
                  </label>
                  <select
                    id="investmentExperience"
                    name="investmentExperience"
                    required
                    value={formData.investmentExperience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select your experience level</option>
                    <option value="beginner">New to investing (0-2 years)</option>
                    <option value="intermediate">Some experience (2-5 years)</option>
                    <option value="experienced">Experienced investor (5+ years)</option>
                    <option value="professional">Professional investor/advisor</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="investmentAmount" className="block text-sm font-semibold text-slate-900 mb-2">
                      Expected Investment Amount *
                    </label>
                    <select
                      id="investmentAmount"
                      name="investmentAmount"
                      required
                      value={formData.investmentAmount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select amount range</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000-25000">$10,000 - $25,000</option>
                      <option value="10000-50000">$10,000 - $50,000</option>
                      <option value="50000-250000">$50,000 - $250,000</option>
                      <option value="250000+">$250,000+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="accreditationStatus" className="block text-sm font-semibold text-slate-900 mb-2">
                      Accredited Investor Status *
                    </label>
                    <select
                      id="accreditationStatus"
                      name="accreditationStatus"
                      required
                      value={formData.accreditationStatus}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select status</option>
                      <option value="accredited">Yes, I am accredited</option>
                      <option value="not-accredited">No, I am not accredited</option>
                      <option value="unsure">I&rsquo;m not sure</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="referralSource" className="block text-sm font-semibold text-slate-900 mb-2">
                    How did you hear about AcquiFi?
                  </label>
                  <select
                    id="referralSource"
                    name="referralSource"
                    value={formData.referralSource}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select source</option>
                    <option value="google">Google Search</option>
                    <option value="social-media">Social Media</option>
                    <option value="referral">Friend/Colleague Referral</option>
                    <option value="newsletter">Newsletter/Blog</option>
                    <option value="event">Industry Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Important Notice */}
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                  <div className="flex items-start">
                    <AlertCircle className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-bold text-amber-900 mb-2">Important Information</h4>
                      <p className="text-amber-800 text-sm">
                        By submitting this form, you acknowledge that private equity investments involve significant
                        risk and may not be suitable for all investors. Your Premium membership includes access to
                        investment opportunities that are typically limited to accredited investors.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Complete Premium Membership - {pricingPlans.find(p => p.id === selectedPlan)?.price}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </form>

              <div className="mt-8 text-center text-slate-500 text-sm">
                <p>
                  Secure checkout powered by Stripe • 30-day money-back guarantee • Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}