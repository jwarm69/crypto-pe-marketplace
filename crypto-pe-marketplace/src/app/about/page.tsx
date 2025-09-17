import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Target,
  Users,
  Shield,
  TrendingUp,
  Globe,
  Award,
  Linkedin,
  Twitter
} from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former Goldman Sachs VP with 12+ years in private equity. Led $2B+ in SMB acquisitions before founding AcquiFi.",
      linkedin: "https://linkedin.com/in/sarahchen",
      twitter: "https://twitter.com/sarahchen",
      image: "/team/sarah-chen.jpg" // Placeholder
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Coinbase infrastructure lead. Built crypto trading systems handling $50B+ in volume. Stanford CS alumnus.",
      linkedin: "https://linkedin.com/in/mrodriguez",
      twitter: "https://twitter.com/mrodriguez",
      image: "/team/michael-rodriguez.jpg" // Placeholder
    },
    {
      name: "Jennifer Park",
      role: "Head of Investments",
      bio: "15 years at KKR and Blackstone. Specialized in lower middle market deals. Wharton MBA, CFA charterholder.",
      linkedin: "https://linkedin.com/in/jenniferpark",
      image: "/team/jennifer-park.jpg" // Placeholder
    },
    {
      name: "David Kim",
      role: "Head of Legal & Compliance",
      bio: "Former SEC attorney and private funds lawyer at Skadden. Expert in securities law and crypto regulations.",
      linkedin: "https://linkedin.com/in/davidkim",
      image: "/team/david-kim.jpg" // Placeholder
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We believe in complete transparency in all our dealings, from deal terms to platform operations."
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Breaking down geographical barriers to give everyone access to quality investment opportunities."
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description: "Focusing on long-term value creation rather than short-term gains for all stakeholders."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a community of aligned investors and entrepreneurs working toward shared success."
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Company Founded",
      description: "AcquiFi was founded with the vision to democratize private equity investing through crypto innovation."
    },
    {
      year: "2024",
      title: "Platform Development",
      description: "Built and tested our proprietary platform with select alpha users and early deals."
    },
    {
      year: "2024",
      title: "Regulatory Approval",
      description: "Secured necessary regulatory approvals and compliance frameworks for operations."
    },
    {
      year: "2025",
      title: "Public Launch",
      description: "Official platform launch with full membership tiers and deal marketplace."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              About{' '}
              <span className="bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
                AcquiFi
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light">
              We&rsquo;re bridging the gap between crypto innovation and traditional private equity,
              making real-world business ownership accessible to a global community of investors.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 text-sm font-semibold mb-8">
                <Target className="w-4 h-4 mr-2" />
                Our Mission
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                Democratizing Private Equity Through Crypto Innovation
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                For too long, private equity has been the exclusive domain of institutional investors and ultra-high-net-worth individuals.
                Meanwhile, crypto holders have been limited to speculative investments with extreme volatility.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                AcquiFi changes this by creating a bridge between these two worlds, allowing crypto investors to deploy capital
                into cash-flowing businesses while giving entrepreneurs access to a global pool of digital capital.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-12 border border-teal-100">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-teal-500 rounded-xl p-3 mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Global Accessibility</h3>
                    <p className="text-slate-600">Breaking down geographical and financial barriers to quality investments.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-500 rounded-xl p-3 mr-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Real-World Returns</h3>
                    <p className="text-slate-600">Generating sustainable yield from actual business operations and cash flow.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan-500 rounded-xl p-3 mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Regulatory Compliance</h3>
                    <p className="text-slate-600">Operating within established legal frameworks for investor protection.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Our Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide everything we do at AcquiFi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-teal-100 to-emerald-100 p-4 rounded-2xl mb-6 inline-block">
                    <Icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experienced professionals from traditional finance and crypto bringing together the best of both worlds
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-slate-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-2xl mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-teal-600 font-semibold mb-4">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{member.bio}</p>

                <div className="flex space-x-3">
                  <a
                    href={member.linkedin}
                    className="bg-white p-2 rounded-lg hover:bg-slate-100 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 text-slate-600" />
                  </a>
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      className="bg-white p-2 rounded-lg hover:bg-slate-100 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-5 h-5 text-slate-600" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Our Journey
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Key milestones in building the future of private equity investing
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-24 text-center mr-8">
                  <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold py-2 px-4 rounded-xl">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 bg-slate-800 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{milestone.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Be part of the revolution that&rsquo;s making private equity accessible to everyone through crypto innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-teal-600 font-bold py-4 px-10 rounded-2xl hover:bg-teal-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
              🔒 Join Premium
            </button>
            <button className="bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 font-bold py-4 px-10 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
              📩 Join Free Watchlist
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}