import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Eye, Lock, Database, Users, Globe } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 backdrop-blur-sm border border-teal-400/30 text-teal-200 text-sm font-semibold mb-8">
              <Shield className="w-4 h-4 mr-2" />
              Data Protection & Privacy
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              Privacy{' '}
              <span className="bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light">
              Your privacy is fundamental to our mission. Learn how we protect and handle your data.
            </p>
            <p className="text-slate-400 mt-4">
              Last updated: January 15, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Highlights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Privacy at a Glance
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Key principles that guide how we handle your personal information
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-50 rounded-3xl p-8 text-center">
              <div className="bg-gradient-to-r from-teal-100 to-emerald-100 p-4 rounded-2xl mb-6 inline-block">
                <Eye className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Transparency</h3>
              <p className="text-slate-600">
                We clearly explain what data we collect, why we collect it, and how we use it.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 text-center">
              <div className="bg-gradient-to-r from-teal-100 to-emerald-100 p-4 rounded-2xl mb-6 inline-block">
                <Lock className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Security</h3>
              <p className="text-slate-600">
                Bank-grade encryption and security measures protect your personal and financial data.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 text-center">
              <div className="bg-gradient-to-r from-teal-100 to-emerald-100 p-4 rounded-2xl mb-6 inline-block">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Control</h3>
              <p className="text-slate-600">
                You have control over your data with options to access, correct, or delete information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Section 1 */}
              <section className="mb-12 bg-white rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">1. Information We Collect</h2>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">1.1 Information You Provide</h3>
                <p className="text-slate-600 mb-4">
                  We collect information you voluntarily provide when using AcquiFi:
                </p>
                <ul className="list-disc pl-8 text-slate-600 mb-6 space-y-2">
                  <li><strong>Account Information:</strong> Name, email address, phone number, address</li>
                  <li><strong>Identity Verification:</strong> Government-issued ID, Social Security Number, date of birth</li>
                  <li><strong>Financial Information:</strong> Bank account details, cryptocurrency wallet addresses, investment experience</li>
                  <li><strong>Accreditation Documentation:</strong> Income statements, net worth documentation, professional certifications</li>
                  <li><strong>Investment Data:</strong> Investment preferences, risk tolerance, investment history</li>
                  <li><strong>Communication Data:</strong> Messages, support requests, feedback</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">1.2 Automatically Collected Information</h3>
                <p className="text-slate-600 mb-4">
                  We automatically collect certain information when you use our platform:
                </p>
                <ul className="list-disc pl-8 text-slate-600 mb-6 space-y-2">
                  <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                  <li><strong>Usage Data:</strong> Pages visited, time spent, clicks, navigation patterns</li>
                  <li><strong>Transaction Data:</strong> Cryptocurrency transactions, payment information, trading activity</li>
                  <li><strong>Location Data:</strong> General geographic location based on IP address</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">1.3 Third-Party Information</h3>
                <p className="text-slate-600 mb-4">
                  We may receive information from third parties including:
                </p>
                <ul className="list-disc pl-8 text-slate-600 space-y-2">
                  <li>Identity verification services</li>
                  <li>Credit bureaus and financial data providers</li>
                  <li>Blockchain networks and cryptocurrency exchanges</li>
                  <li>Marketing and analytics providers</li>
                </ul>
              </section>

              {/* Section 2 */}
              <section className="mb-12 bg-white rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">2. How We Use Your Information</h2>
                <p className="text-slate-600 mb-4">
                  We use your information for the following purposes:
                </p>
                <ul className="list-disc pl-8 text-slate-600 mb-6 space-y-2">
                  <li><strong>Platform Operations:</strong> Account creation, authentication, customer support</li>
                  <li><strong>Compliance:</strong> KYC/AML verification, accredited investor verification, regulatory reporting</li>
                  <li><strong>Investment Services:</strong> Processing investments, portfolio management, distribution payments</li>
                  <li><strong>Communication:</strong> Account updates, investment opportunities, platform notifications</li>
                  <li><strong>Security:</strong> Fraud prevention, security monitoring, risk assessment</li>
                  <li><strong>Analytics:</strong> Platform improvement, usage analysis, product development</li>
                  <li><strong>Marketing:</strong> Promotional communications (with your consent)</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section className="mb-12 bg-white rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">3. Information Sharing and Disclosure</h2>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">3.1 Service Providers</h3>
                <p className="text-slate-600 mb-4">
                  We share information with trusted service providers who help us operate our platform:
                </p>
                <ul className="list-disc pl-8 text-slate-600 mb-6 space-y-2">
                  <li>Identity verification and compliance providers</li>
                  <li>Payment processors and cryptocurrency custodians</li>
                  <li>Cloud infrastructure and security providers</li>
                  <li>Customer support and communication tools</li>
                  <li>Analytics and marketing platforms</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">3.2 Legal Requirements</h3>
                <p className="text-slate-600 mb-4">
                  We may disclose information when required by law or to:
                </p>
                <ul className="list-disc pl-8 text-slate-600 mb-6 space-y-2">
                  <li>Comply with legal processes, court orders, or government requests</li>
                  <li>Enforce our Terms of Service or other agreements</li>
                  <li>Protect the rights, property, or safety of AcquiFi, our users, or others</li>
                  <li>Prevent fraud, security threats, or illegal activities</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">3.3 Business Transfers</h3>
                <p className="text-slate-600 mb-4">
                  If AcquiFi is involved in a merger, acquisition, or sale of assets, your information may be
                  transferred as part of that transaction. We will notify you of any such transfer.
                </p>
              </section>

              {/* Section 4 */}
              <section className="mb-12 bg-white rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">4. Data Security</h2>
                <p className="text-slate-600 mb-4">
                  We implement comprehensive security measures to protect your information:
                </p>
                <ul className="list-disc pl-8 text-slate-600 mb-6 space-y-2">
                  <li><strong>Encryption:</strong> End-to-end encryption for sensitive data transmission and storage</li>
                  <li><strong>Access Controls:</strong> Multi-factor authentication and role-based access controls</li>
                  <li><strong>Monitoring:</strong> 24/7 security monitoring and intrusion detection systems</li>
                  <li><strong>Infrastructure:</strong> SOC 2 compliant cloud infrastructure with regular security audits</li>
                  <li><strong>Training:</strong> Regular security training for all employees</li>
                  <li><strong>Incident Response:</strong> Documented procedures for security incident response</li>
                </ul>
                <p className="text-slate-600">
                  While we implement industry-standard security measures, no system is completely secure.
                  We cannot guarantee absolute security of your information.
                </p>
              </section>

              {/* Section 5 */}
              <section className="mb-12 bg-white rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">5. Your Privacy Rights</h2>
                <p className="text-slate-600 mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-8 text-slate-600 mb-6 space-y-2">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                  <li><strong>Portability:</strong> Request a copy of your data in a machine-readable format</li>
                  <li><strong>Restriction:</strong> Request limitation of processing in certain circumstances</li>
                  <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for processing where applicable</li>
                </ul>
                <p className="text-slate-600">
                  To exercise these rights, contact us at privacy@acquifi.com. We will respond within 30 days.
                </p>
              </section>

              {/* Section 6 */}
              <section className="mb-12 bg-white rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">6. Data Retention</h2>
                <p className="text-slate-600 mb-4">
                  We retain your information for as long as necessary to:
                </p>
                <ul className="list-disc pl-8 text-slate-600 mb-6 space-y-2">
                  <li>Provide our services and support your account</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Resolve disputes and enforce our agreements</li>
                  <li>Prevent fraud and ensure platform security</li>
                </ul>
                <p className="text-slate-600">
                  Financial and compliance records are typically retained for 7 years after account closure.
                  Marketing data is deleted within 3 years of your last interaction unless you opt out sooner.
                </p>
              </section>

              {/* Section 7 */}
              <section className="mb-12 bg-white rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">7. International Data Transfers</h2>
                <p className="text-slate-600 mb-4">
                  AcquiFi operates globally and may transfer your information to countries outside your residence.
                  We ensure appropriate safeguards are in place for international transfers, including:
                </p>
                <ul className="list-disc pl-8 text-slate-600 mb-6 space-y-2">
                  <li>Standard contractual clauses approved by regulatory authorities</li>
                  <li>Adequacy decisions for transfers to approved countries</li>
                  <li>Privacy certifications and frameworks</li>
                </ul>
              </section>

              {/* Section 8 */}
              <section className="mb-12 bg-white rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">8. Cookies and Tracking</h2>
                <p className="text-slate-600 mb-4">
                  We use cookies and similar technologies to:
                </p>
                <ul className="list-disc pl-8 text-slate-600 mb-6 space-y-2">
                  <li>Maintain your login session and preferences</li>
                  <li>Analyze platform usage and performance</li>
                  <li>Provide personalized content and recommendations</li>
                  <li>Prevent fraud and enhance security</li>
                </ul>
                <p className="text-slate-600">
                  You can control cookie preferences through your browser settings. Some platform
                  features may not function properly if you disable certain cookies.
                </p>
              </section>

              {/* Contact Information */}
              <section className="bg-slate-50 rounded-2xl p-8">
                <div className="flex items-start">
                  <Database className="w-6 h-6 text-teal-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Privacy Questions?</h3>
                    <p className="text-slate-600 mb-4">
                      If you have questions about this Privacy Policy or how we handle your data, contact our privacy team:
                    </p>
                    <div className="space-y-2 text-slate-600">
                      <p><strong>Email:</strong> privacy@acquifi.com</p>
                      <p><strong>Address:</strong> AcquiFi, Inc., 123 Financial District, New York, NY 10004</p>
                      <p><strong>Data Protection Officer:</strong> dpo@acquifi.com</p>
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