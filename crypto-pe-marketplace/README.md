# AcquiFi - Crypto-Native Private Equity Marketplace

A comprehensive platform connecting crypto investors with real-world cash-flowing businesses through the search fund model.

## Overview

AcquiFi bridges the gap between crypto innovation and traditional private equity, allowing crypto holders to invest in proven entrepreneurs who find, acquire, and operate profitable businesses. It's like "betting on the jockey" - you invest in the searcher's expertise, and they choose the business.

## Features

### 🏠 **Landing Page Experience**
- Hero section with deal showcase
- "How It Works" section explaining the search fund model
- Value propositions for both investors and searchers
- Community credibility with testimonials
- Fund diversification options

### 💰 **Investment Opportunities**
- **Premium Membership**: $199/year - Full deal access, $5K minimum investment
- **Platinum Membership**: $499-999/year - Priority access, $5K minimum investment
- **Free Watchlist**: Deal alerts and market updates
- **Sample Deals**: Real search fund opportunities with detailed metrics

### 🚀 **Searcher Program**
- Application process for entrepreneurs
- Fundraising support ($300K-$500K search phase, $3M-$15M+ acquisitions)
- Access to crypto-native investor network
- Professional support and resources

### 📊 **Platform Features**
- Comprehensive FAQ section
- Risk disclosure and compliance
- Privacy policy and terms of service
- Demo scheduling and fund deck downloads
- Contact and support system

## Technology Stack

- **Frontend**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jwarm69/crypto-pe-marketplace.git
cd crypto-pe-marketplace

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── apply-searcher/    # Searcher application
│   ├── contact/           # Contact page
│   ├── download-deck/     # Fund deck download
│   ├── faq/               # FAQ page
│   ├── join-premium/      # Premium membership signup
│   ├── join-watchlist/    # Free watchlist signup
│   ├── privacy/           # Privacy policy
│   ├── risk/              # Risk disclosures
│   ├── sample-deals/      # Deal showcase
│   ├── schedule-demo/     # Demo booking
│   ├── terms/             # Terms of service
│   └── page.tsx           # Landing page
└── components/            # Reusable components
    ├── HeroSection.tsx
    ├── HowItWorksSection.tsx
    ├── Navigation.tsx
    ├── Footer.tsx
    └── ...
```

## Key Features

### Search Fund Model
- **Step 1**: Back a proven searcher with track record
- **Step 2**: Searcher finds and evaluates businesses
- **Step 3**: Acquire cash-flowing business with investor capital
- **Step 4**: Generate returns through business operations

### Investment Details
- **Minimum Investment**: $5,000 - $10,000
- **Supported Cryptocurrencies**: BTC, ETH, USDC, USDT
- **Target Returns**: 18-25% IRR, 2-3x multiple
- **Hold Period**: 3-7 years typical
- **Distribution**: Quarterly based on cash flow

### Compliance & Security
- Regulatory compliant (Reg D exemptions)
- Bank-grade security for crypto holdings
- Institutional custody with multi-sig wallets
- KYC/AML procedures for accredited investors

## Deploy on Vercel

This project is optimized for Vercel deployment:

1. Connect your GitHub repository to Vercel
2. Configure build settings (auto-detected for Next.js)
3. Deploy with zero configuration

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jwarm69/crypto-pe-marketplace)

---

**AcquiFi** - Transforming private equity through crypto innovation.
