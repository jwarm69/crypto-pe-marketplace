'use client';

import { useState } from 'react';
import { Check, Star, Quote, Users, Briefcase, Award } from 'lucide-react';

export default function CommunityCredibilitySection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  const integrationLogos = [
    { name: "Circle", description: "USDC Infrastructure" },
    { name: "Fireblocks", description: "Institutional Custody" },
    { name: "Stripe", description: "Payment Processing" },
    { name: "SBA", description: "Lending Network" },
    { name: "DocuSign", description: "Digital Signatures" },
    { name: "Supabase", description: "Secure Database" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Crypto Fund Manager",
      company: "Blockchain Capital",
      content: "Finally, a way to get real-world yield from our crypto holdings. The tokenized ownership model is revolutionary.",
      rating: 5
    },
    {
      name: "Michael Torres",
      role: "Serial Entrepreneur",
      company: "3 Successful Exits",
      content: "Raised $2.5M in 5 days through AcquiFi. The global investor base and lower fees make this a game-changer.",
      rating: 5
    },
    {
      name: "Jennifer Wang",
      role: "Investment Advisor",
      company: "Digital Asset Group",
      content: "Our clients love the diversification this provides. It's crypto innovation meets proven business fundamentals.",
      rating: 5
    }
  ];

  const stats = [
    {
      icon: Users,
      value: "5,000+",
      label: "Registered Users",
      sublabel: "Across 40+ countries"
    },
    {
      icon: Briefcase,
      value: "$250M+",
      label: "Deal Volume",
      sublabel: "Since platform launch"
    },
    {
      icon: Award,
      value: "98%",
      label: "Success Rate",
      sublabel: "Completed transactions"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Trusted by Thousands
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Built on enterprise-grade infrastructure and trusted by investors and searchers worldwide
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-slate-700 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-slate-500 text-sm">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integration Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Powered by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrationLogos.map((logo, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors h-20 flex items-center justify-center mb-3 group-hover:shadow-md">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-400 to-slate-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{logo.name.charAt(0)}</span>
                  </div>
                </div>
                <div className="font-semibold text-slate-700 text-sm mb-1">{logo.name}</div>
                <div className="text-slate-500 text-xs">{logo.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">
            What Our Community Says
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-teal-500 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-slate-500 text-sm">{testimonial.role}</div>
                  <div className="text-slate-400 text-xs">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Email Capture */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-3xl p-8 lg:p-12 text-center border border-teal-100">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Join the Waitlist
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              Be the first to access new deals and fund opportunities. Get priority access to our platform launch.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                  />
                  <button
                    type="submit"
                    className="btn-primary whitespace-nowrap"
                  >
                    Join Waitlist
                  </button>
                </div>
                <p className="text-sm text-slate-500">
                  No spam. Updates on platform launch and new opportunities only.
                </p>
              </form>
            ) : (
              <div className="flex items-center justify-center text-teal-600">
                <Check className="w-6 h-6 mr-2" />
                <span className="font-semibold">Thanks! You&rsquo;ll hear from us soon.</span>
              </div>
            )}

            {/* Social Proof */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <div className="flex items-center justify-center text-slate-500 text-sm">
                <Users className="w-4 h-4 mr-2" />
                <span>Join 2,847 investors and searchers already on the waitlist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}