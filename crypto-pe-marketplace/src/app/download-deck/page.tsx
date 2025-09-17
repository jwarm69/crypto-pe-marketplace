'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Download,
  FileText,
  TrendingUp,
  Shield,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Eye,
  Lock,
  Star,
  Target,
  DollarSign,
  Clock
} from 'lucide-react';
import { useState } from 'react';

export default function DownloadDeckPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    title: '',
    investmentExperience: '',
    interestedIn: '',
    phone: '',
    referralSource: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const deckHighlights = [
    {
      icon: TrendingUp,
      title: 'Market Opportunity',
      description: 'Deep dive into the $8.1T global private equity market and crypto adoption trends'
    },
    {
      icon: Shield,
      title: 'Investment Thesis',
      description: 'Our unique approach to bridging crypto wealth and real-world cash-flowing businesses'
    },
    {
      icon: BarChart3,
      title: 'Performance Data',
      description: 'Track record, portfolio metrics, and comparative returns across asset classes'
    },
    {
      icon: Users,
      title: 'Team & Network',
      description: 'Experienced team backgrounds and our extensive searcher and investor network'
    },
    {
      icon: Target,
      title: 'Deal Pipeline',
      description: 'Current opportunities, deal sourcing process, and investment criteria'
    },
    {
      icon: DollarSign,
      title: 'Financial Projections',
      description: 'Revenue model, fee structure, and growth projections for the platform'
    }
  ];

  const deckContents = [
    { section: 'Executive Summary', pages: '3 pages', description: 'Key investment highlights and opportunity overview' },
    { section: 'Market Analysis', pages: '8 pages', description: 'Private equity market size, trends, and crypto integration' },
    { section: 'Business Model', pages: '6 pages', description: 'Platform mechanics, revenue streams, and value proposition' },
    { section: 'Competitive Landscape', pages: '4 pages', description: 'Market positioning and competitive advantages' },
    { section: 'Financial Model', pages: '7 pages', description: 'Revenue projections, unit economics, and growth scenarios' },
    { section: 'Team & Advisors', pages: '3 pages', description: 'Leadership backgrounds and strategic advisors' },
    { section: 'Investment Terms', pages: '4 pages', description: 'Funding requirements, use of proceeds, and terms' },
    { section: 'Risk Factors', pages: '3 pages', description: 'Key risks and mitigation strategies' },
    { section: 'Appendix', pages: '12 pages', description: 'Supporting data, case studies, and detailed metrics' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Fund deck download request:', formData);
    setIsSubmitted(true);
    // In a real app, this would trigger the download
    setTimeout(() => {
      alert('Download started! Check your email for the secure download link.');
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navigation />

        <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container-custom">
            <div className="text-center text-white max-w-4xl mx-auto">
              <div className="bg-emerald-100 rounded-full p-8 w-24 h-24 mx-auto mb-8 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-emerald-600" />
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
                Download{' '}
                <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                  Started!
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light mb-8">
                Thank you for your interest in AcquiFi. We&rsquo;ve sent a secure download link to your email address.
              </p>

              <div className="bg-slate-800 rounded-3xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">What happens next?</h3>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="flex items-start">
                    <div className="bg-emerald-500 rounded-full p-2 mr-4 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Check Your Email</h4>
                      <p className="text-slate-300 text-sm">Download link sent to {formData.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-emerald-500 rounded-full p-2 mr-4 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Review the Deck</h4>
                      <p className="text-slate-300 text-sm">50-page comprehensive fund overview</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-emerald-500 rounded-full p-2 mr-4 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Schedule Follow-up</h4>
                      <p className="text-slate-300 text-sm">Our team will reach out within 48 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Schedule Demo Call
                </button>
                <button className="bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 font-bold py-4 px-8 rounded-xl transition-all duration-300">
                  Join Watchlist
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-400/30 text-purple-200 text-sm font-semibold mb-8">
              <FileText className="w-4 h-4 mr-2" />
              Fund Deck Download
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              Download Our{' '}
              <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                Fund Deck
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light mb-8">
              Get an in-depth look at AcquiFi&rsquo;s investment thesis, market opportunity, financial model,
              and how we&rsquo;re transforming private equity through crypto innovation.
            </p>
            <div className="flex items-center justify-center space-x-8 text-slate-300">
              <div className="flex items-center">
                <FileText className="w-5 h-5 text-purple-400 mr-2" />
                <span>50 Pages</span>
              </div>
              <div className="flex items-center">
                <BarChart3 className="w-5 h-5 text-purple-400 mr-2" />
                <span>Financial Models</span>
              </div>
              <div className="flex items-center">
                <Eye className="w-5 h-5 text-purple-400 mr-2" />
                <span>Market Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deck Highlights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              What&rsquo;s Inside the Deck
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive insights into our business model, market opportunity, and investment strategy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deckHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-2xl mb-6 inline-block">
                    <Icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{highlight.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deck Contents */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Deck Contents
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Detailed breakdown of the 50-page investor presentation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {deckContents.map((content, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-900 mb-1">{content.section}</h3>
                        <p className="text-slate-600 text-sm">{content.description}</p>
                      </div>
                    </div>
                    <div className="text-purple-600 font-semibold text-sm">
                      {content.pages}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Request Fund Deck Access
              </h2>
              <p className="text-xl text-slate-600">
                Tell us about yourself to receive the complete investor presentation
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

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
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="title" className="block text-sm font-semibold text-slate-900 mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="Enter your job title"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select your experience level</option>
                      <option value="institutional">Institutional Investor</option>
                      <option value="family-office">Family Office</option>
                      <option value="accredited">Accredited Individual</option>
                      <option value="advisor">Financial Advisor</option>
                      <option value="entrepreneur">Entrepreneur/Searcher</option>
                      <option value="academic">Academic/Researcher</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="interestedIn" className="block text-sm font-semibold text-slate-900 mb-2">
                      Primary Interest *
                    </label>
                    <select
                      id="interestedIn"
                      name="interestedIn"
                      required
                      value={formData.interestedIn}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select primary interest</option>
                      <option value="investing">Investing in deals</option>
                      <option value="searcher">Becoming a searcher</option>
                      <option value="partnership">Partnership opportunities</option>
                      <option value="research">Market research</option>
                      <option value="media">Media/Press inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="referralSource" className="block text-sm font-semibold text-slate-900 mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      id="referralSource"
                      name="referralSource"
                      value={formData.referralSource}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select source</option>
                      <option value="google">Google Search</option>
                      <option value="social-media">Social Media</option>
                      <option value="referral">Referral</option>
                      <option value="newsletter">Newsletter/Blog</option>
                      <option value="event">Industry Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Privacy Notice */}
                <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
                  <div className="flex items-start">
                    <Lock className="w-6 h-6 text-purple-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-bold text-purple-900 mb-2">Confidential Information</h4>
                      <p className="text-purple-800 text-sm">
                        This fund deck contains confidential and proprietary information. By downloading,
                        you agree to keep all information confidential and not distribute without written consent.
                        The document is password-protected and tracked for security purposes.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Fund Deck
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </form>

              <div className="mt-8 text-center text-slate-500 text-sm">
                <p>
                  Secure download • Our team will follow up within 48 hours • No spam, ever
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-2xl mb-6 inline-block">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Secure Access</h3>
                <p className="text-slate-600">
                  Password-protected PDF with tracking and watermarking for security
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-2xl mb-6 inline-block">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Instant Delivery</h3>
                <p className="text-slate-600">
                  Receive your download link within minutes of form submission
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-2xl mb-6 inline-block">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Expert Follow-up</h3>
                <p className="text-slate-600">
                  Optional consultation call with our team to discuss opportunities
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