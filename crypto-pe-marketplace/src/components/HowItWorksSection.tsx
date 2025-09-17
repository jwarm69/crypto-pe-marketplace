import { Users, Search, Target, TrendingUp, ArrowRight } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Users,
      title: "Back a Proven Searcher",
      description: "Choose from our vetted entrepreneurs who will find and acquire businesses. Like betting on a jockey - you invest in their track record, not a specific horse.",
      features: ["Experienced operators", "Proven track records", "Full-time commitment"]
    },
    {
      icon: Search,
      title: "Searcher Finds the Deal",
      description: "Your chosen searcher uses the capital to identify, evaluate, and negotiate profitable business acquisitions over 18-24 months.",
      features: ["Professional deal sourcing", "Expert due diligence", "Market analysis"]
    },
    {
      icon: Target,
      title: "Acquire & Operate Business",
      description: "Once the right business is found, additional capital is raised for acquisition and the searcher becomes CEO to drive growth.",
      features: ["Business acquisition", "Operational improvements", "Growth strategies"]
    },
    {
      icon: TrendingUp,
      title: "Generate Real Returns",
      description: "Receive distributions from actual business cash flow and participate in the eventual exit after 3-7 years of value creation.",
      features: ["Quarterly distributions", "Real business cash flow", "15-25% target IRR"]
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-br from-slate-50 via-white to-slate-50/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 text-sm font-semibold mb-8 shadow-lg">
            Simple Process
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
            The Search Fund Model: <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">Bet on the Jockey</span>
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            Instead of picking businesses yourself, you back proven entrepreneurs who find, acquire, and operate the right opportunities.
            It&rsquo;s like horse racing - you bet on the jockey&rsquo;s skill, not a specific horse.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-3xl p-10 depth-shadow hover:shadow-2xl transition-all duration-500 h-full group hover:-translate-y-2 border border-slate-100">
                  {/* Step Number */}
                  <div className="flex items-center mb-8">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-2xl font-bold text-xl mr-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-4 rounded-2xl shadow-inner">
                      <Icon className="w-7 h-7 text-teal-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
                    {step.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-600 font-medium">
                        <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mr-4 shadow-sm"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="bg-gradient-to-r from-white to-slate-50 rounded-full p-4 shadow-xl border border-slate-200 hover:scale-110 transition-transform duration-300">
                      <ArrowRight className="w-6 h-6 text-teal-600" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-white to-slate-50 rounded-3xl p-12 professional-shadow max-w-5xl mx-auto border border-slate-100">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Ready to get started?
            </h3>
            <p className="text-xl text-slate-600 mb-10 font-light max-w-2xl mx-auto">
              Join thousands of crypto investors already backing proven searchers for real-world returns
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/join-premium" className="btn-primary text-lg">
                Start Investing
              </a>
              <a href="/sample-deals" className="btn-secondary text-lg">
                View Sample Deals
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}