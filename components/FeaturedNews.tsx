'use client'

import { motion } from 'framer-motion'

const newsItems = [
  {
    category: 'Press',
    date: '4.16.25',
    title: 'FOUR NOMINATIONS FOR THE INTERNET\'S HIGHEST HONOR.',
  },
  {
    category: 'Press',
    date: '10.11.24',
    title: 'Tomorrow\'s shopper: Five ways brands can reach Gen Alpha today',
  },
  {
    category: 'Press',
    date: '7.22.24',
    title: 'Generation Alpha: Say hello to tomorrow\'s shopper',
  },
  {
    category: 'Press',
    date: '6.13.24',
    title: 'The Future of Fashion and AI at Glossy\'s Ecommerce Summit',
  },
  {
    category: 'Press',
    date: '6.3.24',
    title: 'Retail\'s new playground: where physical meets digital',
  },
  {
    category: 'Press',
    date: '5.28.24',
    title: 'Gen Alpha, the beta test for how brands can reach a new generation',
  },
]

export default function FeaturedNews() {
  return (
    <section className="py-32 bg-black">
      <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex justify-between items-center"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">Featured News</h2>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-lg font-medium hover:text-gray-300 transition-colors"
          >
            View All
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group"
              data-cursor-hover
            >
              <div className="bg-gray-900 h-64 mb-4 rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors overflow-hidden">
                {/* Replace this placeholder with your actual image */}
                {/* Example: <img src="/images/news-{index}.jpg" alt={item.title} className="w-full h-full object-cover" /> */}
                <span className="text-gray-600 text-sm">Image Placeholder</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="text-xs text-gray-500">•</span>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
              <h3 className="text-xl font-semibold group-hover:text-gray-300 transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

