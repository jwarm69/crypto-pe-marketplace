'use client';

import { Mail, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    product: [
      { name: 'How it Works', href: '#how-it-works' },
      { name: 'For Investors', href: '#for-investors' },
      { name: 'For Searchers', href: '#for-searchers' },
      { name: 'The Fund', href: '#fund' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Risk Disclosure', href: '/risk' },
      { name: 'Compliance', href: '/compliance' },
    ],
    resources: [
      { name: 'Help Center', href: '/help' },
      { name: 'API Documentation', href: '/docs' },
      { name: 'Status', href: '/status' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/acquifi' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/acquifi' },
    { name: 'Github', icon: Github, href: 'https://github.com/acquifi' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@acquifi.com' },
  ];

  const scrollToSection = (id: string) => {
    if (typeof document !== 'undefined') {
      const element = document.getElementById(id.replace('#', ''));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="text-2xl font-bold text-gradient mb-4">
                AcquiFi
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed max-w-sm">
                The crypto-native private equity marketplace connecting investors with real-world cash-flowing businesses.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="bg-slate-800 hover:bg-slate-700 p-3 rounded-xl transition-colors group"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2025 AcquiFi. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>🔒 Bank-grade security</span>
              <span>•</span>
              <span>✓ Regulatory compliant</span>
              <span>•</span>
              <span>🛡️ Insured custody</span>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-6 pt-6 border-t border-slate-800">
            <p className="text-xs text-slate-500 leading-relaxed">
              <strong>Important Disclosure:</strong> Securities offered via Reg D exemptions to accredited investors only.
              This platform is not a broker-dealer; all transactions occur through approved entities. Distributions in crypto
              equivalent at manager&rsquo;s discretion. Investments in private companies are speculative and involve substantial
              risk of loss. Past performance does not guarantee future results. This platform is not available to residents of
              certain jurisdictions. All investments are subject to regulatory approval and compliance requirements. Please
              consult your financial advisor before making investment decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}