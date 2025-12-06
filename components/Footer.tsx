'use client'

import { motion } from 'framer-motion'

const footerLinks = {
  social: ['Instagram', 'Twitter', 'LinkedIn', 'Facebook'],
  initiatives: ['Applied', 'Brandbeats', 'Moves', 'B®/Good'],
  offices: [
    'San Diego – CA',
    'New York – NY',
    'Bay Area – CA',
    'St. Louis – MO',
    'Amsterdam – NL',
    'London – EN',
    'Berlin – GE',
    'Argentina – AR',
  ],
}

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Stay in the know */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4">Stay in the know</h3>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border-b border-gray-700 py-2 px-0 focus:outline-none focus:border-white transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-none hover:bg-gray-200 transition-colors w-fit"
                data-cursor-hover
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Initiatives */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4">Initiatives</h3>
            <ul className="space-y-2">
              {footerLinks.initiatives.map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Offices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4">Offices</h3>
            <ul className="space-y-2">
              {footerLinks.offices.map((office) => (
                <li key={office}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {office}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              <p>BASIC/DEPT®, Inc 10 - 25©</p>
              <p className="mt-2">Easy to understand, impossible to ignore.™</p>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="hover:text-white transition-colors"
              >
                Terms
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

