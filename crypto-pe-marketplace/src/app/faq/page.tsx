import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  ChevronDown,
  HelpCircle,
  Users,
  Shield,
  Briefcase,
  CreditCard,
  Settings,
  TrendingUp
} from 'lucide-react';

export default function FAQPage() {
  const faqCategories = [
    {
      icon: Users,
      title: "For Investors",
      description: "Common questions about investing in private equity through crypto",
      questions: [
        {
          question: "How do I start investing on AcquiFi?",
          answer: "First, sign up for a free account and complete KYC verification. Then choose your membership tier - Premium ($199/year) gives you access to deal flow, while Platinum ($499-999/year) provides priority access and lower minimums. Minimum investments typically range from $5,000-$10,000 depending on the specific searcher and deal."
        },
        {
          question: "What cryptocurrencies can I use to invest?",
          answer: "We accept Bitcoin (BTC), Ethereum (ETH), USDC, USDT, and other major cryptocurrencies. All investments are converted to USD equivalents for the actual business acquisitions, but you can receive distributions back in crypto if you prefer."
        },
        {
          question: "What&rsquo;s the minimum investment amount?",
          answer: "Minimum investments vary by membership tier and deal type. Free members can join watchlists, Premium members can invest from $10,000, and Platinum members can invest from $5,000. This reflects the professional nature of search fund investments."
        },
        {
          question: "How do I receive returns on my investments?",
          answer: "Returns are distributed quarterly based on business cash flow. You can choose to receive distributions in USD (bank transfer) or crypto equivalent. We also provide detailed quarterly reports on portfolio performance."
        },
        {
          question: "Are my investments insured or protected?",
          answer: "We use bank-grade security and insured custody for all crypto holdings. However, private equity investments are inherently risky and not FDIC insured. All investments are made through regulated entities and comply with securities laws."
        },
        {
          question: "Can I sell my investment positions?",
          answer: "Private equity investments are typically illiquid with 3-7 year hold periods. However, we&rsquo;re developing a secondary marketplace where members can potentially trade positions, though liquidity is not guaranteed."
        }
      ]
    },
    {
      icon: Briefcase,
      title: "For Searchers",
      description: "Information for entrepreneurs seeking capital and partnership",
      questions: [
        {
          question: "What is a searcher and how do I qualify?",
          answer: "A searcher is an entrepreneur who raises capital to acquire and operate a business. To qualify, you typically need relevant business experience, a clear acquisition thesis, and the ability to lead a company. We evaluate each application individually."
        },
        {
          question: "How much capital can I raise through AcquiFi?",
          answer: "Search funds typically raise $300K-$500K for the search phase, then $3M-$15M+ for acquisitions. The amount depends on your experience, target business size, and investor interest in your specific thesis."
        },
        {
          question: "What&rsquo;s the typical deal structure?",
          answer: "Standard search fund economics: searchers typically receive 25-30% equity post-acquisition, with step-ups based on performance. Search phase funding covers 18-24 months of operating expenses and deal sourcing costs."
        },
        {
          question: "What businesses can I acquire?",
          answer: "We focus on profitable, cash-flowing businesses with $1M-$10M revenue, typically in services, software, manufacturing, or distribution. Businesses should have defensible market positions and growth potential."
        },
        {
          question: "How long does the fundraising process take?",
          answer: "Search fund fundraising typically takes 3-6 months. Our platform can accelerate this by connecting you with pre-qualified crypto investors interested in private equity exposure."
        },
        {
          question: "What support do searchers receive?",
          answer: "Beyond capital, searchers get access to our mentor network, deal sourcing resources, due diligence support, and ongoing operational guidance. Premium members also provide industry expertise."
        }
      ]
    },
    {
      icon: Shield,
      title: "Platform & Security",
      description: "Technical and security questions about using AcquiFi",
      questions: [
        {
          question: "How does AcquiFi ensure regulatory compliance?",
          answer: "We operate under Reg D exemptions for accredited investors. All securities transactions go through licensed broker-dealers. We maintain strict KYC/AML procedures and work with regulatory counsel to ensure full compliance."
        },
        {
          question: "How is my crypto secured on the platform?",
          answer: "We use institutional-grade custody with multi-signature wallets, cold storage, and bank-level security protocols. Crypto assets are held with insured custodians and never used for platform operations."
        },
        {
          question: "What are the platform fees?",
          answer: "Our platform fee is less than 1% annually, significantly lower than traditional private equity. Searchers pay placement fees, and we earn carried interest on successful exits. No hidden fees or management charges."
        },
        {
          question: "Can international investors participate?",
          answer: "Currently we serve US accredited investors and investors from select international jurisdictions. We&rsquo;re expanding globally but must comply with local securities laws in each region."
        },
        {
          question: "How do you verify accredited investor status?",
          answer: "We use third-party verification services to confirm accredited status through income verification, net worth documentation, or professional certifications. This is required for most investment opportunities."
        },
        {
          question: "What happens if a business fails?",
          answer: "Private equity investing involves risk of total loss. We conduct thorough due diligence, but business failure is possible. Diversification across multiple deals and searchers helps mitigate risk, though losses can occur."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 backdrop-blur-sm border border-teal-400/30 text-teal-200 text-sm font-semibold mb-8">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              Got{' '}
              <span className="bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
                Questions?
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light">
              Find answers to common questions about crypto-native private equity investing,
              becoming a searcher, and using the AcquiFi platform.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {faqCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div key={categoryIndex} className="mb-16 last:mb-0">
                  {/* Category Header */}
                  <div className="flex items-center mb-8">
                    <div className="bg-gradient-to-r from-teal-100 to-emerald-100 p-4 rounded-2xl mr-6">
                      <Icon className="w-8 h-8 text-teal-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-2">{category.title}</h2>
                      <p className="text-lg text-slate-600">{category.description}</p>
                    </div>
                  </div>

                  {/* Questions */}
                  <div className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <details key={index} className="group bg-slate-50 rounded-2xl overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                          <h3 className="text-lg font-semibold text-slate-900 pr-4">
                            {faq.question}
                          </h3>
                          <ChevronDown className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                        </summary>
                        <div className="px-6 pb-6">
                          <p className="text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Still Have Questions?
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              Our team is here to help you understand crypto-native private equity investing
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-gradient-to-r from-teal-100 to-emerald-100 p-4 rounded-2xl mb-6 inline-block">
                  <CreditCard className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Investment Guidance</h3>
                <p className="text-slate-600 mb-4">
                  Get personalized help with investment decisions and portfolio allocation
                </p>
                <a href="/schedule-demo" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                  Schedule Call →
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-gradient-to-r from-teal-100 to-emerald-100 p-4 rounded-2xl mb-6 inline-block">
                  <Settings className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Technical Support</h3>
                <p className="text-slate-600 mb-4">
                  Help with platform navigation, crypto deposits, and account management
                </p>
                <a href="/contact" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                  Contact Support →
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-gradient-to-r from-teal-100 to-emerald-100 p-4 rounded-2xl mb-6 inline-block">
                  <TrendingUp className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Searcher Program</h3>
                <p className="text-slate-600 mb-4">
                  Learn about becoming a searcher and raising capital for acquisitions
                </p>
                <a href="/apply-searcher" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                  Apply Now →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Can&rsquo;t Find Your Answer?</h3>
              <p className="text-teal-100 mb-6">
                Contact our team directly and we&rsquo;ll get back to you within 24 hours
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-teal-600 font-bold py-3 px-8 rounded-xl hover:bg-teal-50 transition-colors">
                  📧 Send Email
                </button>
                <button className="bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 font-bold py-3 px-8 rounded-xl transition-colors">
                  💬 Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}