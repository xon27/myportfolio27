'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

/**
 * Example component showing how to use images from the public folder
 * 
 * To use:
 * 1. Place your image in: public/images/your-image.jpg
 * 2. Use the path: /images/your-image.jpg
 */
export default function ImageExample() {
  return (
    <div className="relative w-full h-96">
      {/* Using Next.js Image component (recommended) */}
      <Image
        src="/images/your-image.jpg"  // Path from public folder
        alt="Description of image"
        fill
        className="object-cover"
        priority // Use for above-the-fold images
      />
      
      {/* Or using regular img tag */}
      {/* <img 
        src="/images/your-image.jpg" 
        alt="Description" 
        className="w-full h-full object-cover"
      /> */}
    </div>
  )
}

/**
 * Example for video:
 * 
 * <video
 *   src="/videos/your-video.mp4"
 *   autoPlay
 *   loop
 *   muted
 *   playsInline
 *   className="w-full h-auto"
 * />
 */

