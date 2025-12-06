'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

const engagements = [
  {
    title: 'Google',
    description:
      "Our embedded partnership with Google is as deep as it gets. We're the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions.",
    link: '#',
  },
  {
    title: 'KFC',
    description:
      "An award-winning global, digital transformation engagement spanning eCommerce, mobile app, and new drive thru experiences. Bringing KFC's brand story to life while making it easier for customers to buy chicken.",
    link: '#',
  },
  {
    title: 'Wilson',
    description:
      "A reimagining of Wilson's brand visual identity, and brand campaign, to support a new product drop and the launch of the first brick and mortar retail location in the brand's 108-year history.",
    link: '#',
  },
  {
    title: 'AT&T',
    description:
      'Redesigning the digital flagship for the largest telecommunications company in the world. Creating frictionless paths to purchase for a wide range of consumers across a vast portfolio of products and services.',
    link: '#',
  },
  {
    title: 'Patagonia',
    description:
      'Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand-led programs and platforms.',
    link: '#',
  },
]

export default function FeaturedEngagements() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-32 bg-black">
      <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tighter">
            Featured Engagements
          </h2>
        </motion.div>

        <div ref={containerRef} className="space-y-8">
          {engagements.map((engagement, index) => (
            <motion.div
              key={engagement.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ x: 20 }}
              className="group"
              data-cursor-hover
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-8 border-b border-gray-800 hover:border-white transition-colors">
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-gray-300 transition-colors">
                    {engagement.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {engagement.description}
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0"
                >
                  <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

