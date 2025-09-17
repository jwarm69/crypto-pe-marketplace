'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  Send,
  Users,
  Briefcase,
  HelpCircle
} from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us an email and we&rsquo;ll respond within 24 hours',
      contact: 'hello@acquifi.com',
      action: 'Send Email'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our team during business hours',
      contact: 'Available 9 AM - 6 PM EST',
      action: 'Start Chat'
    },
    {
      icon: Phone,
      title: 'Schedule Call',
      description: 'Book a 30-minute consultation with our team',
      contact: '+1 (555) 123-4567',
      action: 'Book Call'
    }
  ];

  const inquiryTypes = [
    {
      icon: Users,
      title: 'For Investors',
      description: 'Questions about investing, membership tiers, or platform features',
      email: 'investors@acquifi.com'
    },
    {
      icon: Briefcase,
      title: 'For Searchers',
      description: 'Applications, fundraising guidance, or searcher program questions',
      email: 'searchers@acquifi.com'
    },
    {
      icon: HelpCircle,
      title: 'General Support',
      description: 'Technical issues, account help, or general platform questions',
      email: 'support@acquifi.com'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We&rsquo;ll get back to you within 24 hours.');
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 backdrop-blur-sm border border-teal-400/30 text-teal-200 text-sm font-semibold mb-8">
              <MessageSquare className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              Contact{' '}
              <span className="bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
                AcquiFi
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light">
              Ready to start your crypto-native private equity journey? Our team is here to help
              with questions about investing, becoming a searcher, or using our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              How Can We Help?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the best way to reach us based on your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="bg-slate-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="bg-gradient-to-r from-teal-100 to-emerald-100 p-4 rounded-2xl mb-6 inline-block">
                    <Icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{method.title}</h3>
                  <p className="text-slate-600 mb-4">{method.description}</p>
                  <p className="text-teal-600 font-semibold mb-6">{method.contact}</p>
                  <button className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                    {method.action}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Send Us a Message
              </h2>
              <p className="text-xl text-slate-600">
                Fill out the form below and we&rsquo;ll get back to you within 24 hours
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-semibold text-slate-900 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="investor">Investor Questions</option>
                    <option value="searcher">Searcher Application</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="media">Media & Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="Tell us more about your question or how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Contact */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Specialized Contact
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              For specific inquiries, reach out directly to the right team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {inquiryTypes.map((inquiry, index) => {
              const Icon = inquiry.icon;
              return (
                <div key={index} className="bg-slate-50 rounded-3xl p-8 text-center">
                  <div className="bg-gradient-to-r from-teal-100 to-emerald-100 p-4 rounded-2xl mb-6 inline-block">
                    <Icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{inquiry.title}</h3>
                  <p className="text-slate-600 mb-6">{inquiry.description}</p>
                  <a
                    href={`mailto:${inquiry.email}`}
                    className="text-teal-600 font-semibold hover:text-teal-700 transition-colors inline-flex items-center"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    {inquiry.email}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-8 tracking-tight">
                Visit Our Office
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-teal-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Headquarters</h3>
                    <p className="text-slate-300">
                      123 Financial District<br />
                      New York, NY 10004<br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-teal-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Business Hours</h3>
                    <p className="text-slate-300">
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday: 10:00 AM - 2:00 PM EST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-teal-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-slate-300">
                      Main: +1 (555) 123-4567<br />
                      Investor Relations: +1 (555) 123-4568<br />
                      Support: +1 (555) 123-4569
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Response Times</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                  <span className="text-slate-300">General Inquiries</span>
                  <span className="text-emerald-400 font-semibold">&lt; 24 hours</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                  <span className="text-slate-300">Technical Support</span>
                  <span className="text-emerald-400 font-semibold">&lt; 4 hours</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                  <span className="text-slate-300">Investor Relations</span>
                  <span className="text-emerald-400 font-semibold">&lt; 12 hours</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-slate-300">Searcher Applications</span>
                  <span className="text-emerald-400 font-semibold">&lt; 48 hours</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-2xl border border-teal-400/30">
                <p className="text-teal-200 text-sm">
                  <strong>Emergency Support:</strong> For urgent technical issues or security concerns,
                  call our 24/7 emergency line at +1 (555) 911-HELP
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