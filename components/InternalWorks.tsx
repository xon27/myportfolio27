'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'

const works = [
  {
    title: 'B/D® JAMS©2022',
    subtitle: "It's a vibe",
    description:
      'A weekly-ish playlist curated by the employees @ BASIC/DEPT®',
    link: '#',
  },
  {
    title: 'Applied®©2020',
    subtitle: 'Thoughts & Perspectives',
    description:
      'Our panel series and thought-leadership platform where we share perspectives and tactics related to strategy, design, and technology.',
    link: '#',
  },
  {
    title: 'Moves®©2019',
    subtitle: 'Our New HQ',
    description:
      'When we moved into our new HQ, we put together a site experience providing an in-depth look into the two-year process imagining, designing, and developing our new office we call home.',
    link: '#',
  },
  {
    title: 'Crafted®©2019',
    subtitle: 'Creative Community',
    description:
      'A communal initiative we operate to celebrate diversity and creativity by bringing together people from different backgrounds and interests.',
    link: '#',
  },
  {
    title: 'Brandbeats®©2017',
    subtitle: 'Podcast Series',
    description:
      'Our podcast series garnering 45,000+ listens per episode providing candid conversations around various industry related topics.',
    link: '#',
  },
]

export default function InternalWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const x = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 30 })

  const handleDragEnd = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const contentWidth = containerRef.current.scrollWidth
      const maxDrag = -(contentWidth - containerWidth)
      const currentX = x.get()

      if (currentX > 0) {
        x.set(0)
      } else if (currentX < maxDrag) {
        x.set(maxDrag)
      }
    }
  }

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
            Internal Works
          </h2>
          <p className="text-gray-400 text-lg">
            A collection of internal project and initiatives under the
            BASIC/DEPT® brand.
          </p>
        </motion.div>

        <div className="overflow-hidden" data-draggable data-cursor-drag>
          <motion.div
            ref={containerRef}
            drag="x"
            dragConstraints={{ left: -2000, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => {
              setIsDragging(false)
              handleDragEnd()
            }}
            style={{ x: springX }}
            className="flex gap-8"
          >
            {works.map((work, index) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-96 bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="mb-4">
                  <span className="text-sm text-gray-500">
                    {index + 1} / {works.length}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-2">{work.title}</h3>
                <p className="text-xl text-gray-400 mb-4">{work.subtitle}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {work.description}
                </p>
                <motion.a
                  href={work.link}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-white font-medium"
                  data-cursor-hover
                >
                  Explore
                  <svg
                    className="w-5 h-5 ml-2"
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
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-gray-500"
        >
          <p className="text-sm">DragDragDrag</p>
        </motion.div>
      </div>
    </section>
  )
}

