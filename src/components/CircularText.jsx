import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CircularText({
  text = 'REACT*BITS*COMPONENTS*',
  spinDuration = 20,
  onHover = 'speedUp',
  className = '',
}) {
  const letters = text.split('')
  const controls = useAnimationControls()
  const [currentDuration, setCurrentDuration] = useState(spinDuration)
motion
  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        duration: currentDuration,
        ease: 'linear',
        repeat: Infinity,
      },
    })
  }, [currentDuration, controls])

  const handleMouseEnter = () => {
    if (onHover === 'speedUp') {
      setCurrentDuration(spinDuration / 4)
    } else if (onHover === 'pause') {
      controls.stop()
    }
  }

  const handleMouseLeave = () => {
    setCurrentDuration(spinDuration)
  }

  return (
    <div
      className={`relative w-40 h-40 flex items-center justify-center ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={controls}
        className="absolute w-full h-full"
      >
        {letters.map((char, i) => (
          <span
            key={i}
            className="absolute left-1/2 top-0 origin-[0_80px] text-xs font-bold uppercase tracking-widest"
            style={{
              transform: `translateX(-50%) rotate(${i * (360 / letters.length)}deg)`,
              color: 'var(--text)',
            }}
          >
            {char}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
