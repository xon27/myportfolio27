'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-32 bg-black">
      <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter">About Us</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              BASIC/DEPT® helps brands connect with culture. We collaborate
              with ambitious brands and people to build products, services,
              and eCommerce experiences that turn cultural values into company
              value.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="mailto:biz@basicagency.com"
                className="inline-block px-8 py-4 bg-white text-black font-semibold text-lg rounded-none hover:bg-gray-200 transition-colors"
                data-cursor-hover
              >
                Let's build. biz@basicagency.com
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

