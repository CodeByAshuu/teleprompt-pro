import { forwardRef } from 'react'

const TeleprompterDisplay = forwardRef(function TeleprompterDisplay(
  { text, fontSize, textAlign, isFlipped, bgColor, textColor, margin, isPlaying },
  ref
) {
  const placeholderText = `Your script will appear here.\n\nGo back to the home page, paste your text, and click "Open in Teleprompter".`

  return (
    <div
      ref={ref}
      id="teleprompter-display"
      className={`w-full h-full overflow-y-auto overflow-x-hidden transition-all duration-300 ${isFlipped ? 'flipped' : ''}`}
      style={{ backgroundColor: bgColor }}
      tabIndex={-1}
      aria-label="Teleprompter display area"
    >
      {/* Reading Mask (top/bottom gradient fade) */}
      <div className="reading-mask" aria-hidden="true" />

      {/* Text Content */}
      <div
        className="teleprompter-text relative z-10 whitespace-pre-wrap select-none"
        style={{
          fontSize: `${fontSize}px`,
          textAlign,
          color: textColor,
          paddingLeft: `${margin}%`,
          paddingRight: `${margin}%`,
          paddingTop: '45vh',
          paddingBottom: '60vh',
          lineHeight: 1.8,
          letterSpacing: '0.01em',
          fontFamily: 'Georgia, "Times New Roman", serif',
          transition: 'font-size 0.2s ease, color 0.2s ease',
        }}
      >
        {text || placeholderText}
      </div>

      {/* Scrolling indicator */}
      {isPlaying && (
        <div
          className="fixed bottom-8 right-8 z-20 flex items-center gap-2 px-3 py-2 rounded-full glass"
          aria-live="polite"
        >
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-1 h-3 bg-brand-400 rounded-full opacity-80"
                style={{
                  animation: `bounce 0.6s ease infinite`,
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </div>
          <span className="text-xs text-brand-400 font-medium">Scrolling</span>
          <style>{`
            @keyframes bounce {
              0%, 100% { transform: scaleY(0.4); }
              50% { transform: scaleY(1); }
            }
          `}</style>
        </div>
      )}
    </div>
  )
})

export default TeleprompterDisplay
