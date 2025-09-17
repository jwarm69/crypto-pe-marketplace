'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Rocket,
  Target,
  Users,
  TrendingUp,
  Shield,
  Star,
  CheckCircle,
  Upload,
  FileText,
  DollarSign,
  Clock,
  ArrowRight,
  AlertCircle,
  Briefcase
} from 'lucide-react';
import { useState } from 'react';

export default function ApplySearcherPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedinUrl: '',

    // Professional Background
    currentRole: '',
    yearsExperience: '',
    education: '',
    previousCompanies: '',

    // Search Fund Details
    industryFocus: '',
    businessSize: '',
    geographicFocus: '',
    searchTimeline: '',
    capitalNeeded: '',

    // Experience & Vision
    relevantExperience: '',
    acquisitionThesis: '',
    whySearchFund: '',
    valueCreation: '',

    // References & Documentation
    references: '',
    hasBusinessPlan: '',
    additionalInfo: ''
  });

  const searcherBenefits = [
    {
      icon: TrendingUp,
      title: 'Access to Capital',
      description: 'Raise $300K-$500K for search phase and $3M-$15M+ for acquisitions from our crypto-native investor network'
    },
    {
      icon: Users,
      title: 'Mentor Network',
      description: 'Connect with experienced operators, former searchers, and industry experts who provide ongoing guidance'
    },
    {
      icon: Shield,
      title: 'Due Diligence Support',
      description: 'Access our team of professionals for legal, financial, and operational due diligence assistance'
    },
    {
      icon: Target,
      title: 'Deal Sourcing',
      description: 'Leverage our network and tools to identify acquisition opportunities that match your thesis'
    },
    {
      icon: Star,
      title: 'Platform Tools',
      description: 'Use our proprietary platform for investor communication, fundraising, and portfolio management'
    },
    {
      icon: Rocket,
      title: 'Fast-Track Process',
      description: 'Expedited evaluation and faster access to capital compared to traditional search fund routes'
    }
  ];

  const searcherRequirements = [
    {
      category: 'Experience',
      items: [
        'Minimum 5 years professional experience',
        'Leadership or management background',
        'Industry expertise or transferable skills',
        'Track record of achievement and results'
      ]
    },
    {
      category: 'Education',
      items: [
        'Bachelor&rsquo;s degree required',
        'MBA or advanced degree preferred',
        'Strong academic performance',
        'Relevant coursework or certifications'
      ]
    },
    {
      category: 'Financial',
      items: [
        'Personal financial stability',
        'Ability to commit 18-24 months to search',
        'Understanding of business valuation',
        'Experience with financial analysis'
      ]
    },
    {
      category: 'Personal',
      items: [
        'Entrepreneurial mindset and drive',
        'Strong communication skills',
        'Network and relationship building',
        'Commitment to value creation'
      ]
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: 'Personal & Professional',
      description: 'Basic information and background'
    },
    {
      step: 2,
      title: 'Search Fund Details',
      description: 'Your acquisition thesis and strategy'
    },
    {
      step: 3,
      title: 'Experience & Vision',
      description: 'Detailed experience and value creation plan'
    },
    {
      step: 4,
      title: 'Final Details',
      description: 'References and supporting documentation'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searcher application submitted:', formData);
    alert('Thank you for your application! We&rsquo;ll review it and get back to you within 5-7 business days.');
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 text-sm font-semibold mb-8">
              <Rocket className="w-4 h-4 mr-2" />
              Searcher Program
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              Apply as a{' '}
              <span className="bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent">
                Searcher
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light mb-8">
              Join our network of ambitious entrepreneurs raising capital to acquire and operate
              profitable businesses through crypto-native funding.
            </p>
            <div className="flex items-center justify-center space-x-8 text-slate-300">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                <span>$300K-$500K Search Capital</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                <span>$3M-$15M+ Acquisition Funding</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                <span>Mentor Network Access</span>
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
              Why Become an AcquiFi Searcher?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Access capital, mentorship, and resources to find, acquire, and operate your ideal business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searcherBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-4 rounded-2xl mb-6 inline-block">
                    <Icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Searcher Requirements
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              What we look for in successful searcher candidates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {searcherRequirements.map((requirement, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">{requirement.category}</h3>
                <ul className="space-y-3">
                  {requirement.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Searcher Application
              </h2>
              <p className="text-xl text-slate-600">
                Tell us about your background, experience, and acquisition thesis
              </p>
            </div>

            {/* Progress Steps */}
            <div className="flex justify-between items-center mb-12">
              {applicationSteps.map((step) => (
                <div key={step.step} className="flex items-center">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-sm ${
                    currentStep >= step.step
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white'
                      : 'bg-slate-200 text-slate-500'
                  }`}>
                    {step.step}
                  </div>
                  <div className="ml-4 hidden sm:block">
                    <div className={`font-semibold ${currentStep >= step.step ? 'text-slate-900' : 'text-slate-500'}`}>
                      {step.title}
                    </div>
                    <div className="text-sm text-slate-500">{step.description}</div>
                  </div>
                  {step.step < 4 && (
                    <div className={`w-12 h-1 mx-4 ${
                      currentStep > step.step ? 'bg-orange-500' : 'bg-slate-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 lg:p-12">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal & Professional */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Personal & Professional Information</h3>

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
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
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
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
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
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                          placeholder="Enter your email address"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="linkedinUrl" className="block text-sm font-semibold text-slate-900 mb-2">
                        LinkedIn Profile URL *
                      </label>
                      <input
                        type="url"
                        id="linkedinUrl"
                        name="linkedinUrl"
                        required
                        value={formData.linkedinUrl}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>

                    <div>
                      <label htmlFor="currentRole" className="block text-sm font-semibold text-slate-900 mb-2">
                        Current Role & Company *
                      </label>
                      <input
                        type="text"
                        id="currentRole"
                        name="currentRole"
                        required
                        value={formData.currentRole}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                        placeholder="e.g., Senior Manager at McKinsey & Company"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="yearsExperience" className="block text-sm font-semibold text-slate-900 mb-2">
                          Years of Professional Experience *
                        </label>
                        <select
                          id="yearsExperience"
                          name="yearsExperience"
                          required
                          value={formData.yearsExperience}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                        >
                          <option value="">Select experience level</option>
                          <option value="5-7">5-7 years</option>
                          <option value="8-12">8-12 years</option>
                          <option value="13-20">13-20 years</option>
                          <option value="20+">20+ years</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="education" className="block text-sm font-semibold text-slate-900 mb-2">
                          Education *
                        </label>
                        <input
                          type="text"
                          id="education"
                          name="education"
                          required
                          value={formData.education}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                          placeholder="e.g., MBA - Harvard Business School"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="previousCompanies" className="block text-sm font-semibold text-slate-900 mb-2">
                        Previous Companies & Roles
                      </label>
                      <textarea
                        id="previousCompanies"
                        name="previousCompanies"
                        rows={4}
                        value={formData.previousCompanies}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                        placeholder="Brief overview of your career progression and key roles..."
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Search Fund Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Search Fund Details</h3>

                    <div>
                      <label htmlFor="industryFocus" className="block text-sm font-semibold text-slate-900 mb-2">
                        Industry Focus *
                      </label>
                      <select
                        id="industryFocus"
                        name="industryFocus"
                        required
                        value={formData.industryFocus}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select primary industry focus</option>
                        <option value="technology">Technology/Software</option>
                        <option value="healthcare">Healthcare Services</option>
                        <option value="business-services">Business Services</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="consumer">Consumer Products/Services</option>
                        <option value="education">Education</option>
                        <option value="financial-services">Financial Services</option>
                        <option value="other">Other/Multiple Industries</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="businessSize" className="block text-sm font-semibold text-slate-900 mb-2">
                          Target Business Size (Revenue) *
                        </label>
                        <select
                          id="businessSize"
                          name="businessSize"
                          required
                          value={formData.businessSize}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                        >
                          <option value="">Select revenue range</option>
                          <option value="1-3M">$1M - $3M</option>
                          <option value="3-10M">$3M - $10M</option>
                          <option value="10-25M">$10M - $25M</option>
                          <option value="25M+">$25M+</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="geographicFocus" className="block text-sm font-semibold text-slate-900 mb-2">
                          Geographic Focus *
                        </label>
                        <select
                          id="geographicFocus"
                          name="geographicFocus"
                          required
                          value={formData.geographicFocus}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                        >
                          <option value="">Select geographic focus</option>
                          <option value="northeast">Northeast US</option>
                          <option value="southeast">Southeast US</option>
                          <option value="midwest">Midwest US</option>
                          <option value="west">Western US</option>
                          <option value="national">National (US)</option>
                          <option value="international">International</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="searchTimeline" className="block text-sm font-semibold text-slate-900 mb-2">
                          Expected Search Timeline *
                        </label>
                        <select
                          id="searchTimeline"
                          name="searchTimeline"
                          required
                          value={formData.searchTimeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                        >
                          <option value="">Select timeline</option>
                          <option value="12-18 months">12-18 months</option>
                          <option value="18-24 months">18-24 months</option>
                          <option value="24+ months">24+ months</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="capitalNeeded" className="block text-sm font-semibold text-slate-900 mb-2">
                          Capital Needed for Search *
                        </label>
                        <select
                          id="capitalNeeded"
                          name="capitalNeeded"
                          required
                          value={formData.capitalNeeded}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                        >
                          <option value="">Select capital amount</option>
                          <option value="300-400K">$300K - $400K</option>
                          <option value="400-500K">$400K - $500K</option>
                          <option value="500K+">$500K+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Experience & Vision */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Experience & Vision</h3>

                    <div>
                      <label htmlFor="relevantExperience" className="block text-sm font-semibold text-slate-900 mb-2">
                        Relevant Experience for Search Fund *
                      </label>
                      <textarea
                        id="relevantExperience"
                        name="relevantExperience"
                        required
                        rows={4}
                        value={formData.relevantExperience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                        placeholder="Describe your relevant experience that prepares you for business ownership and operation..."
                      />
                    </div>

                    <div>
                      <label htmlFor="acquisitionThesis" className="block text-sm font-semibold text-slate-900 mb-2">
                        Acquisition Thesis *
                      </label>
                      <textarea
                        id="acquisitionThesis"
                        name="acquisitionThesis"
                        required
                        rows={4}
                        value={formData.acquisitionThesis}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                        placeholder="Describe your investment thesis, target business characteristics, and why this sector appeals to you..."
                      />
                    </div>

                    <div>
                      <label htmlFor="whySearchFund" className="block text-sm font-semibold text-slate-900 mb-2">
                        Why Search Fund Model? *
                      </label>
                      <textarea
                        id="whySearchFund"
                        name="whySearchFund"
                        required
                        rows={4}
                        value={formData.whySearchFund}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                        placeholder="Why is the search fund model appealing to you versus other entrepreneurial paths?"
                      />
                    </div>

                    <div>
                      <label htmlFor="valueCreation" className="block text-sm font-semibold text-slate-900 mb-2">
                        Value Creation Plan *
                      </label>
                      <textarea
                        id="valueCreation"
                        name="valueCreation"
                        required
                        rows={4}
                        value={formData.valueCreation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                        placeholder="How do you plan to create value in the businesses you acquire? What operational improvements or growth strategies will you implement?"
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Final Details */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">References & Final Details</h3>

                    <div>
                      <label htmlFor="references" className="block text-sm font-semibold text-slate-900 mb-2">
                        Professional References *
                      </label>
                      <textarea
                        id="references"
                        name="references"
                        required
                        rows={4}
                        value={formData.references}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                        placeholder="Please provide 3 professional references (name, title, company, relationship, contact info)..."
                      />
                    </div>

                    <div>
                      <label htmlFor="hasBusinessPlan" className="block text-sm font-semibold text-slate-900 mb-2">
                        Do you have a business plan or investment memo prepared? *
                      </label>
                      <select
                        id="hasBusinessPlan"
                        name="hasBusinessPlan"
                        required
                        value={formData.hasBusinessPlan}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select option</option>
                        <option value="yes-complete">Yes, I have a complete business plan</option>
                        <option value="yes-draft">Yes, I have a draft business plan</option>
                        <option value="no-need-help">No, but I would like help developing one</option>
                        <option value="no-will-create">No, but I plan to create one soon</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="additionalInfo" className="block text-sm font-semibold text-slate-900 mb-2">
                        Additional Information
                      </label>
                      <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        rows={4}
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                        placeholder="Anything else you&rsquo;d like us to know about your background, goals, or search fund plans?"
                      />
                    </div>

                    {/* File Upload Section */}
                    <div className="bg-slate-100 rounded-2xl p-6">
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                        <Upload className="w-5 h-5 mr-2" />
                        Supporting Documents (Optional)
                      </h4>
                      <div className="space-y-3 text-sm text-slate-600">
                        <div className="flex items-center">
                          <FileText className="w-4 h-4 mr-2" />
                          <span>Resume/CV</span>
                        </div>
                        <div className="flex items-center">
                          <FileText className="w-4 h-4 mr-2" />
                          <span>Investment memo or business plan</span>
                        </div>
                        <div className="flex items-center">
                          <FileText className="w-4 h-4 mr-2" />
                          <span>Academic transcripts</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-4">
                          You can upload documents after submitting your initial application
                        </p>
                      </div>
                    </div>

                    {/* Important Notice */}
                    <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                      <div className="flex items-start">
                        <AlertCircle className="w-6 h-6 text-orange-600 mr-4 mt-1" />
                        <div>
                          <h4 className="font-bold text-orange-900 mb-2">Application Review Process</h4>
                          <p className="text-orange-800 text-sm">
                            Applications are reviewed by our investment committee within 5-7 business days.
                            Selected candidates will be invited for interviews and due diligence. The full
                            process typically takes 2-4 weeks from application to final decision.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-12 pt-8 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-colors ${
                      currentStep === 1
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  >
                    Previous
                  </button>

                  <div className="text-sm text-slate-500">
                    Step {currentStep} of 4
                  </div>

                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex items-center bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex items-center bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <Briefcase className="w-5 h-5 mr-2" />
                      Submit Application
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}