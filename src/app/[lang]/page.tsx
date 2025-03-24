'use client';

import React from 'react';
import { useTranslation } from '@/lib/i18n';
import { Languages } from '@/lib/i18n-config';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

interface HomePageProps {
  params: {
    lang: Languages;
  };
}

export default function HomePage({ params: { lang } }: HomePageProps) {
  const { t } = useTranslation(lang, 'common');

  const skills = [
    'Open to work',
    '18+ YoE',
    'Hands-on expertise',
    'Design leadership',
    'Mixed-method research'
  ];

  const experiences = [
    {
      company: 'Nebula (Standard)',
      period: '03/2023 → 10/2024',
      location: 'New York, US • Remote',
      position: 'Design team lead, Staff product designer at Nebula',
      description: 'Premier independent streaming service offering exclusive content from top creators. Focused on empowering creators and providing an ad-free, subscription-based viewing experience across multiple platforms.',
      achievements: [
        'Led design strategy and bridged product and design, strengthened cross-functional alignment, communication, and design handoffs, as frequently praised by developers in retrospectives.',
        'Scaled the design team 1→4, multiplying feature delivery speed, number of projects in progress, and team satisfaction.',
        'Directed core product features, led major consistency initiatives, and served as the lead hands-on designer.'
      ]
    },
    {
      company: 'Zedge, Inc.',
      period: '05/2022 → 02/2023',
      location: 'Vilnius, Lithuania • Remote',
      position: 'Senior product designer at GuruShots',
      description: 'Leading B2B2C SaaS platform in the mobile personalization space, powering content from top-tier creators to 30M+ monthly active users worldwide through Android and iOS apps.',
      achievements: [
        'Boosted engagement, retention, and ratings through optimized UX, gamification, custom animations, and community features.'
      ]
    },
    {
      company: '',
      period: '07/2020 → 11/2022',
      location: 'Vilnius, Lithuania • On-site, remote',
      position: 'Product lead, Senior product designer at Zedge (Shortz, New initiatives team)',
      achievements: [
        'Co-developed an agile framework and co-led an R&D team, delivering and iterating on four products simultaneously, boosted Play Store rating from 2.1 to 4.5 stars within six months through UX optimization based on focus metrics.'
      ]
    }
  ];

  const caseStudies = [
    {
      title: 'BitoDebt Platform',
      description: 'From concept to exit: scaling chat fiction to +69% retention, +681% engagement, +136% conversion',
      role: 'Senior product designer, UX researcher',
      date: '2024 +2022',
      team: 'From 2 to 15+ members at various stages',
      image: '/images/test.png',
      tags: ['Product strategy', 'User research', 'Growth design'],
      slug: 'bitodebt-platform'
    },
    {
      title: 'TT Wallet Referral',
      description: 'Creating a secure and engaging referral program with enhanced user trust and engagement',
      role: 'Lead UX Designer',
      date: '2023',
      team: 'Cross-functional team of 8',
      image: '/images/test.png',
      tags: ['Security UX', 'Trust design', 'Platform design'],
      slug: 'tt-wallet-referral'
    },
    {
      title: 'BitoPro Trading Platform',
      description: 'Redesigning the trading experience to improve user confidence and trading efficiency',
      role: 'Senior UX Designer',
      date: '2023',
      team: 'Core team of 6 with extended stakeholders',
      image: '/images/test.png',
      tags: ['Trading UX', 'Data visualization', 'Complex systems'],
      slug: 'bitopro-trading-platform'
    },
    {
      title: 'Crypto Education Hub',
      description: 'Building an educational platform that increased new user activation by 45%',
      role: 'Product Designer',
      date: '2022',
      team: 'Cross-functional team of 5',
      image: '/images/test.png',
      tags: ['Educational design', 'Content strategy', 'User onboarding'],
      slug: 'crypto-education-hub'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with narrower width for better readability */}
      <div className="container max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-20 lg:py-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Hey, I'm Evelyn Wu, a product design lead,
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-12">
          driving growth and market fit through discovery & optimization, and enabling teams with data, empathy, and craft.
        </p>
        
        {/* Skills Tags with improved spacing */}
        <div className="flex flex-wrap gap-3 mb-10">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA Buttons with better spacing and responsive layout */}
        <div className="flex flex-wrap gap-4">
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Reach out
          </Link>
          <Link
            href={`/${lang}/about`}
            className="inline-flex items-center px-6 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Connect
          </Link>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center px-6 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Showcase Section with full width for images and contained text */}
      <section className="py-16 border-t border-gray-200 dark:border-gray-800">
        <div className="container max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">Case Studies</h2>
          <div className="grid grid-cols-1 gap-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="group">
                <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-6 bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 1000px"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{study.title}</h3>
                  <p className="text-xl text-gray-700 dark:text-gray-300">{study.description}</p>
                  <div className="flex flex-wrap items-center gap-x-6 text-sm text-gray-500 dark:text-gray-400">
                    <span>{study.role}</span>
                    <span>{study.date}</span>
                    <span>{study.team}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Link
                      href={`/${lang}/case-studies/${study.slug}`}
                      className="inline-flex items-center px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                    >
                      View case study <ArrowUpRightIcon className="w-4 h-4 ml-1.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-24 border-t border-gray-200 dark:border-gray-800">
        <div className="container max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left column: Profile Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <Image
                src="/images/profile.jpg"
                alt="Evelyn Wu"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
            
            {/* Right column: Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  About Me
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  I'm a product designer with 18+ years of experience, specializing in blockchain and security experience design. My passion lies in creating intuitive and secure digital experiences that help users navigate the complex world of cryptocurrency and blockchain technology.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Currently, I'm focused on designing user-centric solutions that bridge the gap between advanced technology and everyday users, making blockchain applications more accessible and trustworthy.
                </p>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Core Skills
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">Design</h4>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• User Experience Design</li>
                      <li>• Product Strategy</li>
                      <li>• Design Systems</li>
                      <li>• Interaction Design</li>
                      <li>• Visual Design</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">Research</h4>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• User Research</li>
                      <li>• Usability Testing</li>
                      <li>• Data Analysis</li>
                      <li>• A/B Testing</li>
                      <li>• Market Research</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tools & Technologies */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Figma',
                    'Sketch',
                    'Adobe XD',
                    'Protopie',
                    'Principle',
                    'Miro',
                    'Notion',
                    'Jira',
                    'Git',
                    'HTML/CSS',
                    'JavaScript',
                    'React'
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section with optimal reading width */}
      <section className="py-16 border-t border-gray-200 dark:border-gray-800">
        <div className="container max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Work experience</h2>
            <div className="flex gap-4">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                Download full CV
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                See on LinkedIn <ArrowUpRightIcon className="w-4 h-4 ml-1.5" />
              </a>
            </div>
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Company Info */}
                <div className="md:col-span-4">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{exp.company}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{exp.period}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>
                </div>

                {/* Role & Achievements */}
                <div className="md:col-span-8">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{exp.position}</h4>
                  {exp.description && (
                    <p className="text-gray-600 dark:text-gray-300 italic mb-4">{exp.description}</p>
                  )}
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 