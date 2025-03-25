'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from '@/lib/i18n';
import { Languages } from '@/lib/i18n-config';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import ShinyText from '@/components/ui/ShineText';
import { motion } from 'framer-motion';

interface HomePageProps {
  params: {
    lang: Languages;
  };
}

export default function HomePage({ params: { lang } }: HomePageProps) {
  const { t } = useTranslation(lang, 'common');
  const [isLoaded, setIsLoaded] = useState(false);
  const [translatedData, setTranslatedData] = useState({
    skills: [] as string[],
    caseStudies: [] as any[],
    experiences: [] as any[]
  });

  useEffect(() => {
    if (typeof t === 'function') {
      setIsLoaded(true);
      setTranslatedData({
        skills: [
            t('home.skills.openToWork'),
            t('home.skills.experience'),
            t('home.skills.expertise'),
            t('home.skills.productStrategy'),
            t('home.skills.Multilingual'),
            t('home.skills.Form0to1')
        ],
        caseStudies: [
          // {
          //   title: t('caseStudies.bitoPro.title'),
          //   description: t('caseStudies.bitoPro.description'),
          //   image: '/images/BitoPro_Cover Page.png',
          //   tags: [
          //     t('caseStudies.tags.productStrategy'),
          //     t('caseStudies.tags.userResearch'),
          //     t('caseStudies.tags.trading')
          //   ],
          //   slug: 'bitopro-trading-platform',
          //   businessImpacts: t('caseStudies.bitoPro.businessImpacts'),
          //   projectDescriptions: t('caseStudies.bitoPro.projectDescriptions')
          // },
          {
            title: t('caseStudies.bitoDebt.title'),
            description: t('caseStudies.bitoDebt.description'),
            image: '/images/BitoDebt_Cover Page.png',
            tags: [
              t('caseStudies.tags.productStrategy'),
              t('caseStudies.tags.trust'),
              t('caseStudies.tags.platform'),
              t('caseStudies.tags.Growthdesign'),
              t('caseStudies.tags.Iteration'),
              t('caseStudies.tags.Designsystem'),
              t('caseStudies.tags.Form0to1'),
              t('caseStudies.tags.Multi-DeviceWebsite'),
              t('caseStudies.tags.HeatMap')
            ],
            slug: 'bitodebt-platform',
            liveUrl: 'https://www.bitopro.com/debts',
            businessImpacts: t('caseStudies.bitoDebt.businessImpacts', { returnObjects: true }),
            projectDescriptions: t('caseStudies.bitoDebt.projectDescriptions')
          },
          {
            title: t('caseStudies.ttWallet.title'),
            description: t('caseStudies.ttWallet.description'),
            role: t('caseStudies.ttWallet.role'),
            date: '2023',
            team: t('caseStudies.ttWallet.team'),
            image: '/images/TT Wallet Referral_Cover Page.png',
            tags: [
              t('caseStudies.tags.productStrategy'),
              t('caseStudies.tags.trust'),
              t('caseStudies.tags.referral'),
              t('caseStudies.tags.Cross-productcollaboration'),
              t('caseStudies.tags.Multilingual'),
              t('caseStudies.tags.Ecosystem'),
              t('caseStudies.tags.EVMfork'),
              t('caseStudies.tags.Appdesign')
            ],
            slug: 'tt-wallet-referral',
            liveUrl: 'https://apps.apple.com/tw/app/tt%E9%8C%A2%E5%8C%85/id1471222243',
            businessImpacts: t('caseStudies.ttWallet.businessImpacts', { returnObjects: true }),
            projectDescriptions: t('caseStudies.ttWallet.projectDescriptions')
          },
          // {
          //   title: t('caseStudies.thunderCore.title'),
          //   description: t('caseStudies.thunderCore.description'),
          //   role: t('caseStudies.thunderCore.role'),
          //   date: '2022',
          //   team: t('caseStudies.thunderCore.team'),
          //   image: '/images/ThunderCoreDesignThinking_Cover Page.png',
          //   tags: [
          //     t('caseStudies.tags.research'),
          //     t('caseStudies.tags.blockchain'),
          //     t('caseStudies.tags.userBehavior')
          //   ],
          //   slug: 'thundercore-research',
          //   liveUrl: 'https://www.thundercore.com/',
          //   businessImpacts: t('caseStudies.thunderCore.businessImpacts', { returnObjects: true }),
          //   projectDescriptions: t('caseStudies.thunderCore.projectDescriptions')
          // }
        ],
        experiences: [
          {
            company: t('workExperience.companies.nebula.name'),
            period: '03/2023 → 10/2024',
            location: 'New York, US • Remote',
            position: t('workExperience.companies.nebula.position'),
            description: t('workExperience.companies.nebula.description'),
            achievements: t('workExperience.companies.nebula.achievements', { returnObjects: true })
          },
          {
            company: t('workExperience.companies.zedge.name'),
            period: '05/2022 → 02/2023',
            location: 'Vilnius, Lithuania • Remote',
            position: t('workExperience.companies.zedge.position'),
            description: t('workExperience.companies.zedge.description'),
            achievements: t('workExperience.companies.zedge.achievements', { returnObjects: true })
          },
          {
            company: t('workExperience.companies.zedgeShortz.name'),
            period: '07/2020 → 11/2022',
            location: 'Vilnius, Lithuania • On-site, remote',
            position: t('workExperience.companies.zedgeShortz.position'),
            achievements: t('workExperience.companies.zedgeShortz.achievements', { returnObjects: true })
          }
        ]
      });
    }
  }, [t]);

  if (!isLoaded) {
    return <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
      <div className="text-gray-600 dark:text-gray-400">Loading...</div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with narrower width for better readability */}
      <div className="container max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-20 lg:py-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          {isLoaded ? t('home.intro') : ''}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-12"
        >
          {isLoaded ? t('home.role') : ''}
          <br />
          {isLoaded ? t('home.specializing') : ''}
        </motion.p>
        
        {/* Skills Tags with improved spacing */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {translatedData.skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-sm"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons with better spacing and responsive layout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-6 mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              <ShinyText text={isLoaded ? t('home.cta.reachOut') : ''} disabled={false} speed={3} className='' />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={`/${lang}/about`}
              className="inline-flex items-center px-8 py-3.5 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              {isLoaded ? t('home.cta.connect') : ''}
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center px-8 py-3.5 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              {isLoaded ? t('home.cta.downloadCV') : ''}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Showcase Section with full width for images and contained text */}
      <section className="py-16 border-t border-gray-200 dark:border-gray-800">
        <div className="container max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
            {isLoaded ? t('caseStudies.title') : ''}
          </h2>
          <div className="grid grid-cols-1 gap-16">
            {translatedData.caseStudies.map((study, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <motion.div 
                  className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-6 bg-gray-100 dark:bg-gray-800"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-colors duration-300 z-10" />
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 1000px"
                  />
                </motion.div>
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.2 }}
                >
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 dark:text-white transform-gpu"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {study.title}
                  </motion.h3>
                  <div className="flex flex-wrap items-center gap-x-6 text-sm text-gray-500 dark:text-gray-400">
                    {study.projectDescriptions?.map((des: string, i: number) => (
                        <span key={`des-${i}`}>{des}</span>
                      ))}
                  </div>
                  <div className='space-y-2'>
                    <div className='text-gray-500 dark:text-gray-400'>{isLoaded ? t('caseStudies.overview') : ''}</div>
                    <p className="text-xl text-gray-700 dark:text-gray-300">{study.description}</p>
                  </div>
                  <div className='space-y-2'>
                    <div className='text-gray-500 dark:text-gray-400'>{isLoaded ? t('caseStudies.businessImpact') : ''}</div>
                    <ul className="text-xl text-gray-700 dark:text-gray-300 list-disc list-inside">
                      {study.businessImpacts?.map((impact: string, i: number) => (
                        <li key={i}>{impact}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag: string) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-sm"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <div className="pt-8 flex gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href={`/${lang}/case-studies/${study.slug}`}
                        className="inline-flex items-center px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                      >
                        {isLoaded ? t('caseStudies.viewCaseStudy') : ''} <ArrowUpRightIcon className="w-4 h-4 ml-1.5" />
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <a
                        href={study.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-3.5 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        {isLoaded ? t('caseStudies.downloadApp') : ''} <ArrowUpRightIcon className="w-4 h-4 ml-1.5" />
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section with optimal reading width */}
      <section className="py-16 border-t border-gray-200 dark:border-gray-800">
        <div className="container max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {isLoaded ? t('workExperience.title') : ''}
            </h2>
            <div className="flex gap-4">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                {isLoaded ? t('workExperience.downloadCV') : ''}
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3.5 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                {isLoaded ? t('workExperience.seeLinkedIn') : ''} <ArrowUpRightIcon className="w-4 h-4 ml-1.5" />
              </a>
            </div>
          </div>

          <div className="space-y-16">
            {translatedData.experiences.map((exp, index) => (
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
                    {exp.achievements.map((achievement: string, i: number) => (
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
    </div>
  );
} 