'use client'

import { motion } from 'framer-motion'

const awards = [
  'Design and Branding Agency of the Year',
  'Agency of the Year',
  'Digital Innovation Agency of the Year Finalist',
]

export default function Awards() {
  return (
    <section className="py-20 bg-black border-t border-b border-gray-800">
      <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
        <div className="flex flex-wrap gap-8 justify-center items-center">
          {awards.map((award, index) => (
            <motion.div
              key={award}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold mb-2">•</div>
              <p className="text-sm md:text-base text-gray-400 max-w-xs">
                {award}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

