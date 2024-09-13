'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  ApiOutlined,
  LockOutlined,
  RocketOutlined,
  DollarOutlined,
  ThunderboltOutlined,
  TeamOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: 'Instant API Generation',
      description:
        'Transform any tabular data into a secure API endpoint in seconds.',
      icon: <ApiOutlined />,
    },
    {
      heading: 'Bank-Level Security',
      description:
        'Your data is protected with enterprise-grade encryption and access controls.',
      icon: <LockOutlined />,
    },
    {
      heading: 'Lightning-Fast Integration',
      description:
        'Seamlessly connect your data to any application or platform.',
      icon: <ThunderboltOutlined />,
    },
    {
      heading: 'Monetization Ready',
      description:
        'Turn your data into a revenue stream with built-in paywall features.',
      icon: <DollarOutlined />,
    },
    {
      heading: 'Scalable Infrastructure',
      description: 'Handle millions of requests without breaking a sweat.',
      icon: <RocketOutlined />,
    },
    {
      heading: 'Collaborative Workspace',
      description:
        'Foster teamwork with shared projects and granular permissions.',
      icon: <TeamOutlined />,
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      designation: 'Data Analyst at TechCorp',
      content:
        'DataEndpoint has revolutionized our data workflow. What used to take days now takes minutes!',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Michael Chen',
      designation: 'CTO of StartupX',
      content:
        'The ease of use and powerful features of DataEndpoint have given us a competitive edge in the market.',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: 'Emily Rodriguez',
      designation: 'Business Intelligence Manager',
      content:
        "DataEndpoint has transformed how we share data across departments. It's a game-changer!",
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: 'David Patel',
      designation: 'Software Engineer',
      content:
        "I've never seen a tool that makes API creation this simple. It's saved us countless development hours.",
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: 'Lisa Thompson',
      designation: 'Product Manager',
      content:
        'The monetization features have opened up new revenue streams we never thought possible.',
      avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    },
    {
      name: 'John Doe',
      designation: 'Data Scientist',
      content:
        "DataEndpoint's security features give me peace of mind when working with sensitive data.",
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
  ]

  const navItems = [
    {
      title: 'Features',
      link: '#features',
    },
    {
      title: 'Pricing',
      link: '#pricing',
    },
    {
      title: 'FAQ',
      link: '#faq',
    },
  ]

  const packages = [
    {
      title: 'Starter',
      description: 'Perfect for small teams and projects',
      monthly: 49,
      yearly: 490,
      features: [
        'Up to 5 API endpoints',
        '100,000 requests/month',
        'Basic support',
      ],
    },
    {
      title: 'Pro',
      description: 'Ideal for growing businesses',
      monthly: 99,
      yearly: 990,
      features: [
        'Unlimited API endpoints',
        '1,000,000 requests/month',
        'Priority support',
        'Advanced analytics',
      ],
      highlight: true,
    },
    {
      title: 'Enterprise',
      description: 'For large-scale operations',
      monthly: 299,
      yearly: 2990,
      features: [
        'Custom request limits',
        'Dedicated account manager',
        'SLA guarantee',
        'On-premise deployment option',
      ],
    },
  ]

  const questionAnswers = [
    {
      question: 'How secure is my data with DataEndpoint?',
      answer:
        'We take security seriously. All data is encrypted at rest and in transit using bank-level encryption. We also offer granular access controls and comply with major data protection regulations.',
    },
    {
      question: 'Can I integrate DataEndpoint with my existing tools?',
      answer:
        'Absolutely! DataEndpoint is designed to work seamlessly with a wide range of tools and platforms. Our RESTful APIs can be easily integrated into most modern software ecosystems.',
    },
    {
      question: 'How does the paywall feature work?',
      answer:
        'Our paywall feature allows you to monetize your data by setting up paid access to your API endpoints. You can define pricing tiers, usage limits, and even offer free trials.',
    },
    {
      question: 'Is there a limit to how much data I can process?',
      answer:
        'Our scalable infrastructure can handle large volumes of data. While we have different tiers based on request volume, we can accommodate custom plans for high-volume users.',
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: 'Upload Your Data',
      description:
        'Simply drag and drop your CSV, Excel, or database file into DataEndpoint.',
    },
    {
      heading: 'Configure Your API',
      description:
        'Set access controls, define endpoints, and customize your API structure.',
    },
    {
      heading: 'Generate API',
      description:
        'With one click, your secure API endpoint is created and ready to use.',
    },
    {
      heading: 'Integrate and Scale',
      description:
        'Connect your new API to your applications and watch your data come to life.',
    },
  ]

  const painPoints = [
    {
      emoji: '🕒',
      title: 'Hours spent on data integration',
    },
    {
      emoji: '💸',
      title: 'Costly custom API development',
    },
    {
      emoji: '🔒',
      title: 'Data security concerns',
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title="Unlock the Power of Your Data in Minutes"
        subtitle="Transform static data into dynamic APIs instantly. No coding required."
        buttonText="Start for Free"
        pictureUrl="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/2T6sas-endpoint-OMNN"
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText="from happy data professionals"
          />
        }
      />
      <LandingSocialProof logos={logos} title="Trusted by Industry Leaders" />
      <LandingPainPoints
        title="Data Integration Shouldn't Be a $3.1 Trillion Problem"
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title="From Static to Dynamic in 4 Simple Steps"
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title="Empower Your Data Strategy with DataEndpoint"
        subtitle="Discover how our features can transform your data workflow"
        features={features}
      />
      <LandingTestimonials
        title="Success Stories from Data-Driven Teams"
        subtitle="See how DataEndpoint is revolutionizing data accessibility across industries"
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title="Flexible Plans for Every Data Need"
        subtitle="Choose the perfect plan to unlock your data's potential"
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title="Got Questions? We've Got Answers"
        subtitle="Learn more about how DataEndpoint can work for you"
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title="Ready to Revolutionize Your Data Strategy?"
        subtitle="Join thousands of data professionals who are already benefiting from DataEndpoint"
        buttonText="Get Started Now"
        buttonLink="/register"
      />
    </LandingContainer>
  )
}
