import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText, Shield, AlertTriangle } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 backdrop-blur-sm border border-teal-400/30 text-teal-200 text-sm font-semibold mb-8">
              <FileText className="w-4 h-4 mr-2" />
              Legal Documentation
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              Terms of{' '}
              <span className="bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light">
              Please read these terms carefully before using the AcquiFi platform
            </p>
            <p className="text-slate-400 mt-4">
              Last updated: January 15, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Important Notice */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-12">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-orange-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-orange-900 mb-2">Important Notice</h3>
                  <p className="text-orange-800">
                    These Terms of Service constitute a legally binding agreement. By accessing or using AcquiFi,
                    you agree to be bound by these terms. If you do not agree to these terms, you may not use our platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              {/* Section 1 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">1. Acceptance of Terms</h2>
                <p className="text-slate-600 mb-4">
                  By accessing or using AcquiFi (&ldquo;the Platform&rdquo;, &ldquo;our Service&rdquo;), operated by AcquiFi, Inc.
                  (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), you agree to be bound by these
                  Terms of Service (&ldquo;Terms&rdquo;) and our Privacy Policy.
                </p>
                <p className="text-slate-600">
                  These Terms apply to all users of the Platform, including investors, searchers, and visitors.
                  We reserve the right to modify these Terms at any time, and such modifications will be effective
                  immediately upon posting.
                </p>
              </section>

              {/* Section 2 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">2. Platform Description</h2>
                <p className="text-slate-600 mb-4">
                  AcquiFi is a technology platform that facilitates connections between investors and entrepreneurs
                  (&ldquo;Searchers&rdquo;) for private equity investments in small and medium-sized businesses.
                  The Platform enables:
                </p>
                <ul className="list-disc pl-8 text-slate-600 mb-4 space-y-2">
                  <li>Investment opportunities in search funds and direct business acquisitions</li>
                  <li>Cryptocurrency-based investment transactions</li>
                  <li>Due diligence materials and investment documentation</li>
                  <li>Portfolio management and reporting tools</li>
                  <li>Communication between investors and searchers</li>
                </ul>
                <p className="text-slate-600">
                  AcquiFi is not a broker-dealer, investment adviser, or bank. All securities transactions
                  are conducted through licensed third-party entities.
                </p>
              </section>

              {/* Section 3 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">3. Eligibility and Account Registration</h2>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">3.1 User Eligibility</h3>
                <p className="text-slate-600 mb-4">
                  To use AcquiFi, you must:
                </p>
                <ul className="list-disc pl-8 text-slate-600 mb-4 space-y-2">
                  <li>Be at least 18 years of age</li>
                  <li>Have legal capacity to enter into binding agreements</li>
                  <li>Not be prohibited from using our services under applicable laws</li>
                  <li>For investment activities, qualify as an &ldquo;accredited investor&rdquo; under applicable securities laws</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">3.2 Account Security</h3>
                <p className="text-slate-600 mb-4">
                  You are responsible for maintaining the confidentiality of your account credentials and for all
                  activities that occur under your account. You must immediately notify us of any unauthorized
                  use of your account.
                </p>
              </section>

              {/* Section 4 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">4. Investment Terms and Risks</h2>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">4.1 Investment Nature</h3>
                <p className="text-slate-600 mb-4">
                  All investments facilitated through AcquiFi are:
                </p>
                <ul className="list-disc pl-8 text-slate-600 mb-4 space-y-2">
                  <li>Speculative and involve substantial risk of loss</li>
                  <li>Illiquid with no guarantee of liquidity or exit opportunities</li>
                  <li>Subject to complete loss of invested capital</li>
                  <li>Not guaranteed, insured, or protected by government agencies</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">4.2 Accredited Investor Requirements</h3>
                <p className="text-slate-600 mb-4">
                  Most investment opportunities are limited to accredited investors as defined by securities
                  regulations. You represent and warrant that you meet applicable accreditation requirements
                  and will provide documentation as required.
                </p>
              </section>

              {/* Section 5 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">5. Cryptocurrency Terms</h2>
                <p className="text-slate-600 mb-4">
                  AcquiFi facilitates cryptocurrency-based investments subject to additional terms:
                </p>
                <ul className="list-disc pl-8 text-slate-600 mb-4 space-y-2">
                  <li>Cryptocurrency values are highly volatile and may result in significant losses</li>
                  <li>Transactions on blockchain networks are generally irreversible</li>
                  <li>Regulatory treatment of cryptocurrencies continues to evolve</li>
                  <li>Technical risks including network failures, security breaches, and wallet malfunctions</li>
                  <li>Tax implications that may vary by jurisdiction</li>
                </ul>
              </section>

              {/* Section 6 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">6. Platform Usage Rules</h2>
                <p className="text-slate-600 mb-4">
                  When using AcquiFi, you agree not to:
                </p>
                <ul className="list-disc pl-8 text-slate-600 mb-4 space-y-2">
                  <li>Provide false, misleading, or incomplete information</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Engage in market manipulation or fraudulent activities</li>
                  <li>Attempt to gain unauthorized access to the Platform or other user accounts</li>
                  <li>Use automated systems to access the Platform without permission</li>
                  <li>Share confidential investment information without authorization</li>
                </ul>
              </section>

              {/* Section 7 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">7. Fees and Payments</h2>
                <p className="text-slate-600 mb-4">
                  AcquiFi charges fees for various services as disclosed on our Platform. Fees may include:
                </p>
                <ul className="list-disc pl-8 text-slate-600 mb-4 space-y-2">
                  <li>Annual membership fees</li>
                  <li>Platform usage fees</li>
                  <li>Transaction processing fees</li>
                  <li>Carried interest on investment returns</li>
                </ul>
                <p className="text-slate-600">
                  All fees are non-refundable unless otherwise specified. We reserve the right to modify
                  our fee structure with appropriate notice.
                </p>
              </section>

              {/* Section 8 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">8. Disclaimers and Limitations</h2>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">8.1 No Investment Advice</h3>
                <p className="text-slate-600 mb-4">
                  AcquiFi does not provide investment advice, recommendations, or endorsements. All investment
                  decisions are made solely by investors based on their own analysis and due diligence.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">8.2 Platform Availability</h3>
                <p className="text-slate-600 mb-4">
                  While we strive for continuous availability, the Platform may experience downtime for
                  maintenance, updates, or technical issues. We do not guarantee uninterrupted access.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">8.3 Third-Party Services</h3>
                <p className="text-slate-600 mb-4">
                  The Platform integrates with third-party services including payment processors, custody
                  providers, and broker-dealers. We are not responsible for the performance or security
                  of these third-party services.
                </p>
              </section>

              {/* Section 9 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">9. Limitation of Liability</h2>
                <p className="text-slate-600 mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, ACQUIFI SHALL NOT BE LIABLE FOR ANY INDIRECT,
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION,
                  LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR
                  USE OF THE PLATFORM.
                </p>
                <p className="text-slate-600">
                  Our total liability for any claims related to the Platform shall not exceed the fees
                  paid by you to AcquiFi in the twelve months preceding the claim.
                </p>
              </section>

              {/* Section 10 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">10. Termination</h2>
                <p className="text-slate-600 mb-4">
                  Either party may terminate your account at any time. Upon termination:
                </p>
                <ul className="list-disc pl-8 text-slate-600 mb-4 space-y-2">
                  <li>Your access to the Platform will be suspended</li>
                  <li>Existing investments will continue under their respective terms</li>
                  <li>Outstanding obligations will survive termination</li>
                  <li>We may retain your data as required by law or regulation</li>
                </ul>
              </section>

              {/* Section 11 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">11. Dispute Resolution</h2>
                <p className="text-slate-600 mb-4">
                  Any disputes arising from these Terms or your use of the Platform shall be resolved
                  through binding arbitration in accordance with the rules of the American Arbitration
                  Association. The arbitration shall be conducted in New York, New York.
                </p>
                <p className="text-slate-600">
                  You waive any right to participate in class action lawsuits or class-wide arbitrations.
                </p>
              </section>

              {/* Section 12 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">12. Governing Law</h2>
                <p className="text-slate-600">
                  These Terms shall be governed by and construed in accordance with the laws of the
                  State of Delaware, without regard to its conflict of law provisions.
                </p>
              </section>

              {/* Contact Information */}
              <section className="bg-slate-50 rounded-2xl p-8">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-teal-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Questions About These Terms?</h3>
                    <p className="text-slate-600 mb-4">
                      If you have questions about these Terms of Service, please contact our legal team:
                    </p>
                    <div className="space-y-2 text-slate-600">
                      <p><strong>Email:</strong> legal@acquifi.com</p>
                      <p><strong>Address:</strong> AcquiFi, Inc., 123 Financial District, New York, NY 10004</p>
                      <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}