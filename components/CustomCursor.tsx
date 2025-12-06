'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isDraggable, setIsDraggable] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(true)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)
  
  // Separate springs for DRAG cursor (centered)
  const dragCursorX = useMotionValue(-100)
  const dragCursorY = useMotionValue(-100)
  const dragCursorXSpring = useSpring(dragCursorX, springConfig)
  const dragCursorYSpring = useSpring(dragCursorY, springConfig)

  useEffect(() => {
    // Check if device supports touch
    const checkTouchDevice = () => {
      const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      setIsTouchDevice(touch)
      return touch
    }

    const isTouch = checkTouchDevice()
    if (isTouch) return

    const moveCursor = (e: MouseEvent) => {
      // Regular cursor offset (center of 8px dot)
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
      
      // DRAG cursor offset (center of 80px circle)
      dragCursorX.set(e.clientX - 40)
      dragCursorY.set(e.clientY - 40)
      
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    // Check for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      // Check for draggable elements first
      if (
        target.closest('[data-draggable]') ||
        target.closest('.cursor-grab') ||
        target.closest('[data-cursor-drag]')
      ) {
        setIsDraggable(true)
        setIsHovering(false)
        return
      }
      
      // Check for regular interactive elements
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor-hover]')
      ) {
        setIsHovering(true)
        setIsDraggable(false)
      } else {
        setIsHovering(false)
        setIsDraggable(false)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      // Reset draggable state
      if (
        target.closest('[data-draggable]') ||
        target.closest('.cursor-grab') ||
        target.closest('[data-cursor-drag]')
      ) {
        setIsDraggable(false)
      }
      
      // Reset hover state
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor-hover]')
      ) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [cursorX, cursorY, dragCursorX, dragCursorY, isVisible, isDraggable])

  // Don't render on touch devices
  if (isTouchDevice) {
    return null
  }

  return (
    <>
      {/* Draggable Cursor - Circle with DRAG text */}
      {isDraggable && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center"
          style={{
            x: dragCursorXSpring,
            y: dragCursorYSpring,
            opacity: isVisible ? 1 : 0,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{ 
              backgroundColor: '#F5E6E8',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
            animate={{
              scale: isClicking ? 0.95 : 1,
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 28 }}
          >
            <span 
              className="text-xs font-semibold tracking-wider uppercase"
              style={{ 
                color: '#4A4A4A',
                letterSpacing: '0.1em'
              }}
            >
              DRAG
            </span>
          </motion.div>
        </motion.div>
      )}

      {/* Regular Cursor - Only show when not draggable */}
      {!isDraggable && (
        <>
          {/* Main cursor dot */}
          <motion.div
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              opacity: isVisible ? 1 : 0,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-full h-full rounded-full bg-white"
              animate={{
                scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
              }}
              transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            />
          </motion.div>

          {/* Outer ring */}
          <motion.div
            className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9998] mix-blend-difference hidden md:block"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              opacity: isVisible ? 1 : 0,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-full h-full rounded-full border-2 border-white"
              animate={{
                scale: isClicking ? 0.6 : isHovering ? 1.2 : 1,
                opacity: isClicking ? 0.5 : 0.3,
              }}
              transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            />
          </motion.div>
        </>
      )}
    </>
  )
}

