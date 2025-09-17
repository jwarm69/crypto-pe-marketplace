'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Calendar,
  Clock,
  Video,
  CheckCircle,
  Users,
  TrendingUp,
  Shield,
  Star,
  ArrowRight,
  Phone,
  MessageSquare,
  Target,
  Briefcase,
  BarChart3
} from 'lucide-react';
import { useState } from 'react';

export default function ScheduleDemoPage() {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [selectedDemo, setSelectedDemo] = useState('platform');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    title: '',
    phone: '',
    investmentExperience: '',
    interests: [],
    questions: '',
    meetingType: 'video',
    timezone: 'EST'
  });

  const [isBooked, setIsBooked] = useState(false);

  const demoTypes = [
    {
      id: 'platform',
      title: 'Platform Demo',
      duration: '30 minutes',
      description: 'Walkthrough of the AcquiFi platform, deal flow, and investment process',
      includes: [
        'Platform navigation and features',
        'Current investment opportunities',
        'Portfolio management tools',
        'Due diligence resources',
        'Q&A session'
      ],
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'investor',
      title: 'Investor Consultation',
      duration: '45 minutes',
      description: 'Personalized consultation for potential investors and portfolio strategy',
      includes: [
        'Investment strategy discussion',
        'Portfolio allocation guidance',
        'Risk assessment and mitigation',
        'Membership tier recommendations',
        'Deal-specific opportunities'
      ],
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'searcher',
      title: 'Searcher Guidance',
      duration: '60 minutes',
      description: 'Consultation for entrepreneurs interested in the searcher program',
      includes: [
        'Searcher program overview',
        'Application process guidance',
        'Fundraising strategy',
        'Deal sourcing resources',
        'Mentor network introduction'
      ],
      icon: Target,
      color: 'from-orange-500 to-amber-500'
    }
  ];

  const timeSlots = [
    { day: 'Today', date: 'Jan 17', slots: ['2:00 PM', '3:30 PM', '4:00 PM'] },
    { day: 'Tomorrow', date: 'Jan 18', slots: ['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM', '4:00 PM'] },
    { day: 'Friday', date: 'Jan 19', slots: ['9:00 AM', '11:00 AM', '1:00 PM', '2:30 PM', '4:00 PM'] },
    { day: 'Monday', date: 'Jan 22', slots: ['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM', '4:00 PM'] }
  ];

  const teamMembers = [
    {
      name: 'Sarah Chen',
      title: 'CEO & Co-Founder',
      specialty: 'Private Equity Strategy',
      experience: 'Former Goldman Sachs VP, 12+ years PE experience',
      image: '/team/sarah-chen.jpg'
    },
    {
      name: 'Michael Rodriguez',
      title: 'CTO & Co-Founder',
      specialty: 'Platform Technology',
      experience: 'Ex-Coinbase, Built $50B+ trading systems',
      image: '/team/michael-rodriguez.jpg'
    },
    {
      name: 'Jennifer Park',
      title: 'Head of Investments',
      specialty: 'Deal Sourcing & Analysis',
      experience: '15 years at KKR and Blackstone',
      image: '/team/jennifer-park.jpg'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo scheduled:', { ...formData, demoType: selectedDemo, timeSlot: selectedTimeSlot });
    setIsBooked(true);
  };

  if (isBooked) {
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
                Demo{' '}
                <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                  Scheduled!
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light mb-8">
                Thank you for booking a demo with AcquiFi. We&rsquo;ve sent a calendar invitation to your email.
              </p>

              <div className="bg-slate-800 rounded-3xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">Your Demo Details</h3>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h4 className="font-semibold text-emerald-300 mb-4">Meeting Information</h4>
                    <div className="space-y-2 text-slate-300">
                      <p><strong>Type:</strong> {demoTypes.find(d => d.id === selectedDemo)?.title}</p>
                      <p><strong>Duration:</strong> {demoTypes.find(d => d.id === selectedDemo)?.duration}</p>
                      <p><strong>Time:</strong> {selectedTimeSlot}</p>
                      <p><strong>Format:</strong> {formData.meetingType === 'video' ? 'Video Call' : 'Phone Call'}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-300 mb-4">What to Expect</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      {demoTypes.find(d => d.id === selectedDemo)?.includes.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 mb-8">
                <div className="text-amber-900">
                  <h4 className="font-bold mb-2">Before Your Demo</h4>
                  <p className="text-sm">
                    Check your email for the calendar invitation with video call details.
                    Our team will also send you a brief questionnaire to personalize your demo experience.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Add to Calendar
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
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-400/30 text-indigo-200 text-sm font-semibold mb-8">
              <Calendar className="w-4 h-4 mr-2" />
              Live Demo & Consultation
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              Schedule a{' '}
              <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                Demo
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light mb-8">
              Get a personalized walkthrough of AcquiFi&rsquo;s platform, see live deals, and discuss how
              crypto-native private equity can fit into your investment strategy.
            </p>
            <div className="flex items-center justify-center space-x-8 text-slate-300">
              <div className="flex items-center">
                <Video className="w-5 h-5 text-indigo-400 mr-2" />
                <span>Video or Phone</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-indigo-400 mr-2" />
                <span>30-60 Minutes</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-indigo-400 mr-2" />
                <span>Expert Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Choose Your Demo Type
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Select the consultation that best matches your interests and goals
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {demoTypes.map((demo) => {
              const Icon = demo.icon;
              const isSelected = selectedDemo === demo.id;
              return (
                <div
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`rounded-3xl p-8 border-2 cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'border-indigo-500 bg-indigo-50 shadow-xl scale-105'
                      : 'border-slate-200 bg-white hover:border-indigo-300 hover:shadow-lg'
                  }`}
                >
                  <div className={`bg-gradient-to-r ${demo.color} p-4 rounded-2xl mb-6 inline-block`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{demo.title}</h3>
                    <span className="text-sm font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                      {demo.duration}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">{demo.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900 text-sm">What&rsquo;s Included:</h4>
                    {demo.includes.map((item, index) => (
                      <div key={index} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>

                  {isSelected && (
                    <div className="mt-6 p-4 bg-indigo-100 rounded-2xl">
                      <div className="flex items-center text-indigo-700">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Selected</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scheduling Form */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Book Your {demoTypes.find(d => d.id === selectedDemo)?.title}
              </h2>
              <p className="text-xl text-slate-600">
                Choose a time that works for you and tell us about your interests
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Time Selection */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Select Date & Time</h3>
                <div className="space-y-6">
                  {timeSlots.map((daySlot, dayIndex) => (
                    <div key={dayIndex} className="bg-white rounded-2xl p-6 shadow-lg">
                      <h4 className="font-bold text-slate-900 mb-4">
                        {daySlot.day}, {daySlot.date}
                      </h4>
                      <div className="grid grid-cols-3 gap-3">
                        {daySlot.slots.map((slot, slotIndex) => (
                          <button
                            key={slotIndex}
                            onClick={() => setSelectedTimeSlot(`${daySlot.day} ${slot}`)}
                            className={`py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                              selectedTimeSlot === `${daySlot.day} ${slot}`
                                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                                : 'bg-slate-100 text-slate-700 hover:bg-indigo-100 hover:text-indigo-700'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Your Information</h3>
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
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
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
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                        placeholder="Your company name"
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
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                        placeholder="Your job title"
                      />
                    </div>
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                      placeholder="Your phone number"
                    />
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select your experience level</option>
                      <option value="beginner">New to investing</option>
                      <option value="intermediate">Some experience (2-5 years)</option>
                      <option value="experienced">Experienced investor (5+ years)</option>
                      <option value="professional">Professional investor/advisor</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-3">
                      Primary Interests (Select all that apply)
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {['Deal Flow Access', 'Platform Features', 'Investment Strategy', 'Searcher Program', 'Portfolio Management', 'Risk Assessment'].map((interest) => (
                        <label key={interest} className="flex items-center p-3 border border-slate-200 rounded-xl hover:bg-indigo-50 hover:border-indigo-200 transition-colors cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(interest)}
                            onChange={() => handleInterestChange(interest)}
                            className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
                          />
                          <span className="ml-3 text-sm text-slate-700">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="meetingType" className="block text-sm font-semibold text-slate-900 mb-2">
                        Meeting Type *
                      </label>
                      <select
                        id="meetingType"
                        name="meetingType"
                        required
                        value={formData.meetingType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                      >
                        <option value="video">Video Call (Zoom)</option>
                        <option value="phone">Phone Call</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timezone" className="block text-sm font-semibold text-slate-900 mb-2">
                        Timezone *
                      </label>
                      <select
                        id="timezone"
                        name="timezone"
                        required
                        value={formData.timezone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                      >
                        <option value="EST">Eastern (EST)</option>
                        <option value="CST">Central (CST)</option>
                        <option value="MST">Mountain (MST)</option>
                        <option value="PST">Pacific (PST)</option>
                        <option value="GMT">GMT/UTC</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="questions" className="block text-sm font-semibold text-slate-900 mb-2">
                      Questions or Topics to Discuss
                    </label>
                    <textarea
                      id="questions"
                      name="questions"
                      rows={4}
                      value={formData.questions}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                      placeholder="Tell us what you'd like to focus on during the demo..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!selectedTimeSlot}
                    className={`w-full py-4 px-8 rounded-xl font-bold transition-all duration-300 flex items-center justify-center ${
                      selectedTimeSlot
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-105'
                        : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    {selectedTimeSlot ? (
                      <>
                        <Calendar className="w-5 h-5 mr-2" />
                        Schedule Demo - {selectedTimeSlot}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    ) : (
                      <>
                        <Calendar className="w-5 h-5 mr-2" />
                        Select a Time Slot Above
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Meet Your Demo Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our experienced team will guide you through the platform and answer your questions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-slate-50 rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl mb-6 flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-indigo-600 font-semibold mb-2">{member.title}</p>
                <p className="text-slate-600 text-sm mb-4">{member.specialty}</p>
                <p className="text-slate-500 text-xs">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}