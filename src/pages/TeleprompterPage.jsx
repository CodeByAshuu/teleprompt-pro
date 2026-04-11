import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import NavbarControls from '../components/NavbarControls'
import TeleprompterDisplay from '../components/TeleprompterDisplay'

const SAMPLE_TEXT = `Welcome to TelePrompter Pro — your free, browser-based professional teleprompter.

Whether you're a content creator, public speaker, journalist, podcast host, or corporate presenter, our tool gives you everything you need to deliver your message with confidence.

You can control the scroll speed, font size, text alignment, colors, and much more — all from the intuitive control bar at the top of the screen.

Press Space to start or pause scrolling. Use the Up and Down arrow keys to adjust the speed on the fly. Press F to toggle fullscreen for the most immersive reading experience.

No sign-up required. No ads. No distractions. Just you and your words — flowing beautifully.

The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vividly you exhibit your quirky jazz! Sixty zephyrs blew over my farm, keeping jolly.

Welcome to TelePrompter Pro — your free, browser-based professional teleprompter.

Whether you're a content creator, public speaker, journalist, podcast host, or corporate presenter, our tool gives you everything you need to deliver your message with confidence.`

const COUNTDOWN_SECONDS = 3
const LOCALSTORAGE_KEY = 'teleprompterpro_settings'

function loadSettings() {
  try {
    const s = localStorage.getItem(LOCALSTORAGE_KEY)
    return s ? JSON.parse(s) : null
  } catch { return null }
}

function saveSettings(settings) {
  try {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(settings))
  } catch {}
}

export default function TeleprompterPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const displayRef = useRef(null)
  const scrollIntervalRef = useRef(null)
  const countdownTimerRef = useRef(null)

  // ── Load persisted settings ──────────────────────────
  const saved = loadSettings()

  const incomingText = location.state?.text

  const [text] = useState(() => {
    if (incomingText !== undefined) return incomingText || SAMPLE_TEXT
    return SAMPLE_TEXT
  })

  const [isPlaying, setIsPlaying] = useState(false)
  const [scrollSpeed, setScrollSpeed] = useState(saved?.scrollSpeed ?? 5)
  const [fontSize, setFontSize] = useState(saved?.fontSize ?? 36)
  const [textAlign, setTextAlign] = useState(saved?.textAlign ?? 'center')
  const [isFlipped, setIsFlipped] = useState(saved?.isFlipped ?? false)
  const [bgColor, setBgColor] = useState(saved?.bgColor ?? '#0a0b14')
  const [textColor, setTextColor] = useState(saved?.textColor ?? '#f8f8f8')
  const [margin, setMargin] = useState(saved?.margin ?? 8)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(true)
  const [countdown, setCountdown] = useState(null)
  const [toast, setToast] = useState(null)
  const [wordCount] = useState(() => text.trim().split(/\s+/).length)

  // ── Persist settings on change ───────────────────────
  useEffect(() => {
    saveSettings({ scrollSpeed, fontSize, textAlign, isFlipped, bgColor, textColor, margin })
  }, [scrollSpeed, fontSize, textAlign, isFlipped, bgColor, textColor, margin])

  // ── Auto-scroll loop ──────────────────────────────────
  const startScroll = useCallback(() => {
    if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current)
    scrollIntervalRef.current = setInterval(() => {
      const el = displayRef.current
      if (!el) return
      el.scrollTop += scrollSpeed * 0.5
    }, 16) // ~60fps
  }, [scrollSpeed])

  const stopScroll = useCallback(() => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current)
      scrollIntervalRef.current = null
    }
  }, [])

  useEffect(() => {
    if (isPlaying) {
      startScroll()
    } else {
      stopScroll()
    }
    return stopScroll
  }, [isPlaying, startScroll, stopScroll])

  // Update speed without stopping
  useEffect(() => {
    if (isPlaying) {
      startScroll()
    }
  }, [scrollSpeed])

  // ── Fullscreen API ────────────────────────────────────
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().then(() => setIsFullscreen(true)).catch(() => {})
    } else {
      document.exitFullscreen?.().then(() => setIsFullscreen(false)).catch(() => {})
    }
  }, [])

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', handler)
    return () => document.removeEventListener('fullscreenchange', handler)
  }, [])

  // ── Countdown then play ───────────────────────────────
  const startWithCountdown = useCallback(() => {
    let count = COUNTDOWN_SECONDS
    setCountdown(count)
    countdownTimerRef.current = setInterval(() => {
      count -= 1
      if (count <= 0) {
        clearInterval(countdownTimerRef.current)
        setCountdown(null)
        setIsPlaying(true)
      } else {
        setCountdown(count)
      }
    }, 1000)
  }, [])

  const handleTogglePlay = useCallback(() => {
    if (countdown !== null) {
      // Cancel countdown
      clearInterval(countdownTimerRef.current)
      setCountdown(null)
      return
    }
    if (!isPlaying) {
      startWithCountdown()
    } else {
      setIsPlaying(false)
    }
  }, [isPlaying, countdown, startWithCountdown])

  const handleReset = useCallback(() => {
    setIsPlaying(false)
    if (countdown !== null) {
      clearInterval(countdownTimerRef.current)
      setCountdown(null)
    }
    if (displayRef.current) {
      displayRef.current.scrollTop = 0
    }
    showToast('Reset to top')
  }, [countdown])

  // ── Toast ──────────────────────────────────────────────
  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(null), 2000)
  }

  // ── Keyboard Shortcuts ────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      // Don't capture when typing in an input
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return

      switch (e.code) {
        case 'Space':
          e.preventDefault()
          handleTogglePlay()
          break
        case 'ArrowUp':
          e.preventDefault()
          setScrollSpeed((s) => Math.min(20, s + 1))
          showToast(`Speed: ${Math.min(20, scrollSpeed + 1)}`)
          break
        case 'ArrowDown':
          e.preventDefault()
          setScrollSpeed((s) => Math.max(1, s - 1))
          showToast(`Speed: ${Math.max(1, scrollSpeed - 1)}`)
          break
        case 'KeyF':
          e.preventDefault()
          toggleFullscreen()
          break
        case 'KeyR':
          e.preventDefault()
          handleReset()
          break
        case 'Escape':
          if (!document.fullscreenElement) navigate('/')
          break
        default:
          break
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [handleTogglePlay, handleReset, toggleFullscreen, scrollSpeed, navigate])

  // ── Cleanup on unmount ────────────────────────────────
  useEffect(() => {
    return () => {
      stopScroll()
      if (countdownTimerRef.current) clearInterval(countdownTimerRef.current)
    }
  }, [stopScroll])

  // ── Navbar height for offset ──────────────────────────
  const navbarHeight = isExpanded ? 116 : 56

  return (
    <div className="fixed inset-0 flex flex-col" style={{ backgroundColor: bgColor }}>
      {/* Navbar */}
      <NavbarControls
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
        onReset={handleReset}
        textAlign={textAlign}
        onAlignChange={setTextAlign}
        isFlipped={isFlipped}
        onFlipToggle={() => setIsFlipped((v) => !v)}
        bgColor={bgColor}
        onBgColorChange={setBgColor}
        textColor={textColor}
        onTextColorChange={setTextColor}
        fontSize={fontSize}
        onFontSizeChange={setFontSize}
        margin={margin}
        onMarginChange={setMargin}
        scrollSpeed={scrollSpeed}
        onSpeedChange={setScrollSpeed}
        isFullscreen={isFullscreen}
        onFullscreenToggle={toggleFullscreen}
        onBack={() => navigate('/')}
        isExpanded={isExpanded}
        onExpandToggle={() => setIsExpanded((v) => !v)}
      />

      {/* Teleprompter Display */}
      <div
        style={{ paddingTop: `${navbarHeight}px`, height: '100%', overflow: 'hidden' }}
      >
        <TeleprompterDisplay
          ref={displayRef}
          text={text}
          fontSize={fontSize}
          textAlign={textAlign}
          isFlipped={isFlipped}
          bgColor={bgColor}
          textColor={textColor}
          margin={margin}
          isPlaying={isPlaying}
        />
      </div>

      {/* ── Countdown Overlay ─────────────────────────── */}
      {countdown !== null && (
        <div className="fixed inset-0 z-30 flex items-center justify-center pointer-events-none">
          <div className="flex flex-col items-center gap-4">
            <div key={countdown} className="countdown-digit text-9xl font-black gradient-text select-none" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {countdown}
            </div>
            <p className="text-gray-400 text-lg">Starting in {countdown}…</p>
            <button
              className="pointer-events-auto glass px-4 py-2 rounded-full text-sm text-gray-400 hover:text-white transition-colors"
              onClick={() => { clearInterval(countdownTimerRef.current); setCountdown(null) }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* ── Toast Notification ────────────────────────── */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 toast-enter">
          <div className="glass px-5 py-2.5 rounded-full text-sm text-white border border-white/10 shadow-xl">
            {toast}
          </div>
        </div>
      )}

      {/* ── Word Count Badge ──────────────────────────── */}
      <div className="fixed bottom-4 left-4 z-20 glass px-3 py-1.5 rounded-full flex items-center gap-2 text-xs text-gray-500">
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        <span>{wordCount.toLocaleString()} words</span>
      </div>

      {/* ── Keyboard hint (dismisses on first interaction) */}
      <div className="fixed bottom-4 right-4 z-20 glass px-3 py-1.5 rounded-full flex items-center gap-2 text-xs text-gray-600">
        <kbd className="text-gray-500">Space</kbd>
        <span>to play</span>
        <span>·</span>
        <kbd className="text-gray-500">↑↓</kbd>
        <span>speed</span>
        <span>·</span>
        <kbd className="text-gray-500">F</kbd>
        <span>fullscreen</span>
      </div>
    </div>
  )
}
