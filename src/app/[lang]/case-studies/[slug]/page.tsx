import React from 'react';
import { Languages } from '@/lib/i18n-config';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { notFound } from 'next/navigation';

interface CaseStudyPageProps {
  params: {
    lang: Languages;
    slug: string;
  };
}

// This would typically come from a CMS or API
const caseStudies = [
  {
    slug: 'bitodebt-platform',
    title: 'BitoDebt Platform',
    description: 'From concept to exit: scaling chat fiction to +69% retention, +681% engagement, +136% conversion',
    role: 'Senior product designer, UX researcher',
    date: '2024 +2022',
    team: 'From 2 to 15+ members at various stages',
    image: '/images/test.png',
    tags: ['Product strategy', 'User research', 'Growth design'],
    fullDescription: `
      A comprehensive case study of the BitoDebt Platform, showcasing the journey from initial concept to successful exit.
      This project demonstrated significant improvements in key metrics through strategic design decisions and iterative development.
    `,
    challenges: [
      'Scaling the platform while maintaining user engagement',
      'Optimizing the onboarding process for new users',
      'Implementing effective monetization strategies'
    ],
    solutions: [
      'Redesigned the user journey to improve retention',
      'Implemented data-driven design decisions',
      'Created a seamless cross-platform experience'
    ]
  },
  {
    slug: 'tt-wallet-referral',
    title: 'TT Wallet Referral',
    description: 'Creating a secure and engaging referral program with enhanced user trust and engagement',
    role: 'Lead UX Designer',
    date: '2023',
    team: 'Cross-functional team of 8',
    image: '/images/test.png',
    tags: ['Security UX', 'Trust design', 'Platform design'],
    fullDescription: `
      An in-depth look at the development of TT Wallet's referral program, focusing on building user trust
      while maintaining high security standards and encouraging viral growth.
    `,
    challenges: [
      'Balancing security with user experience',
      'Creating a trustworthy referral system',
      'Measuring and optimizing program effectiveness'
    ],
    solutions: [
      'Implemented robust security measures without compromising UX',
      'Designed clear and transparent referral mechanics',
      'Created an engaging reward system'
    ]
  },
  {
    slug: 'bitopro-trading-platform',
    title: 'BitoPro Trading Platform',
    description: 'Redesigning the trading experience to improve user confidence and trading efficiency',
    role: 'Senior UX Designer',
    date: '2023',
    team: 'Core team of 6 with extended stakeholders',
    image: '/images/test.png',
    tags: ['Trading UX', 'Data visualization', 'Complex systems'],
    fullDescription: `
      A detailed exploration of the BitoPro trading platform redesign, focusing on improving user confidence
      and trading efficiency through enhanced UX and data visualization.
    `,
    challenges: [
      'Simplifying complex trading interfaces',
      'Improving data visualization for better decision making',
      'Maintaining performance with real-time updates'
    ],
    solutions: [
      'Streamlined the trading interface',
      'Enhanced data visualization components',
      'Optimized real-time performance'
    ]
  },
  {
    slug: 'crypto-education-hub',
    title: 'Crypto Education Hub',
    description: 'Building an educational platform that increased new user activation by 45%',
    role: 'Product Designer',
    date: '2022',
    team: 'Cross-functional team of 5',
    image: '/images/test.png',
    tags: ['Educational design', 'Content strategy', 'User onboarding'],
    fullDescription: `
      A comprehensive look at the development of an educational platform designed to improve
      user understanding and engagement with cryptocurrency concepts.
    `,
    challenges: [
      'Making complex crypto concepts accessible',
      'Creating engaging educational content',
      'Measuring learning effectiveness'
    ],
    solutions: [
      'Developed interactive learning modules',
      'Implemented progressive disclosure',
      'Created personalized learning paths'
    ]
  }
];

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = caseStudies.find(s => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Back button */}
        <Link
          href={`/${params.lang}`}
          className="inline-flex items-center px-6 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors mb-8"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-1.5" /> Back to home
        </Link>

        {/* Hero section */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {study.title}
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
            {study.description}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
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
        </div>

        {/* Main image */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden mb-12 bg-gray-100 dark:bg-gray-800">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1000px"
          />
        </div>

        {/* Content with side menu */}
        <div className="relative flex gap-12">
          {/* Side menu */}
          <div className="hidden lg:block w-48 shrink-0">
            <div className="sticky top-8 space-y-2">
              <a
                href="#background"
                className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                Background
              </a>
              <a
                href="#objective"
                className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                Objective
              </a>
              <a
                href="#action"
                className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                Action
              </a>
              <a
                href="#takeaway"
                className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                Take a way
              </a>
              <a
                href="#result"
                className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                Result
              </a>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 space-y-12">
            <section id="background">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Background</h2>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {study.fullDescription}
              </p>
            </section>

            <section id="objective">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Objective</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Define the primary target audience</h3>
                  <p className="text-gray-700 dark:text-gray-300">Search for incentives</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">How to design a reward mechanism for converting users</h3>
                  <p className="text-gray-700 dark:text-gray-300">Create incentives and a good user experience</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Invite User to share</h3>
                  <p className="text-gray-700 dark:text-gray-300">Facilitate expansion and increase brand influence</p>
                </div>
              </div>
            </section>

            <section id="action">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Action</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Research/Definition</h3>
                  <ul className="space-y-3">
                    {study.challenges.map((challenge, index) => (
                      <li key={index} className="text-gray-700 dark:text-gray-300">
                        • {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Collaboration Issues</h3>
                  <p className="text-gray-700 dark:text-gray-300">Working with cross-functional teams to identify and resolve collaboration challenges.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Develop</h3>
                  <ul className="space-y-3">
                    {study.solutions.map((solution, index) => (
                      <li key={index} className="text-gray-700 dark:text-gray-300">
                        • {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section id="takeaway">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Take a way</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Key learnings and insights from the project implementation and results.
              </p>
            </section>

            <section id="result">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Result</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Quantitative and qualitative outcomes of the implemented solutions.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 