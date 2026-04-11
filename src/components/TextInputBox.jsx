import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SAMPLE_TEXT = `Welcome to TelePrompter Pro — your free, browser-based professional teleprompter.

Whether you're a content creator, public speaker, journalist, podcast host, or corporate presenter, our tool gives you everything you need to deliver your message with confidence.

Simply type or paste your script in the text box below, then click "Open in Teleprompter" to launch the full reading experience.

You can control the scroll speed, font size, text alignment, colors, and much more — all from the control bar at the top of the teleprompter screen.

Press Space to start or pause. Use the arrow keys to adjust speed on the fly. Go fullscreen for the most immersive reading experience.

No sign-up required. No ads. No distractions. Just you and your words — flowing beautifully.`

export default function TextInputBox() {
  const [text, setText] = useState('')
  const [charCount, setCharCount] = useState(0)
  const [wordCount, setWordCount] = useState(0)
  const [isFocused, setIsFocused] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const val = e.target.value
    setText(val)
    setCharCount(val.length)
    setWordCount(val.trim() ? val.trim().split(/\s+/).length : 0)
  }

  const handleOpen = () => {
    navigate('/teleprompter', { state: { text: text.trim() || SAMPLE_TEXT } })
  }

  const handleSample = () => {
    setText(SAMPLE_TEXT)
    setCharCount(SAMPLE_TEXT.length)
    setWordCount(SAMPLE_TEXT.trim().split(/\s+/).length)
  }

  const handleClear = () => {
    setText('')
    setCharCount(0)
    setWordCount(0)
  }

  const handleImport = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (evt) => {
      const content = evt.target.result
      setText(content)
      setCharCount(content.length)
      setWordCount(content.trim().split(/\s+/).length)
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  const readingMinutes = Math.ceil(wordCount / 130)

  return (
    <section
      id="script-input"
      className="py-24 px-6"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2
            className="font-qurova mb-3"
            style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 600, color: 'var(--text)' }}
          >
            Script Editor
          </h2>
          <p
            className="max-w-md mx-auto"
            style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}
          >
            Type or paste your content here. Every change is kept locally for your privacy.
          </p>
        </div>

        {/* Premium Editor Container */}
        <div
          className={`transition-all duration-500 ease-out shadow-2xl ${isFocused ? 'scale-[1.01]' : ''}`}
          style={{
            background: 'white',
            border: isFocused ? '2px solid var(--navy)' : '2px solid rgba(33, 40, 66, 0.08)',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: isFocused 
              ? '0 25px 50px -12px rgba(33, 40, 66, 0.15)' 
              : '0 20px 25px -5px rgba(33, 40, 66, 0.05)'
          }}
        >
          {/* Toolbar */}
          <div
            className="flex items-center justify-between px-6 py-4"
            style={{ 
              background: 'rgba(33, 40, 66, 0.02)',
              borderBottom: '1px solid rgba(33, 40, 66, 0.06)' 
            }}
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5 mr-2">
                <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f56' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#ffbd2e' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#27c93f' }} />
              </div>
              <span className="text-xs tracking-widest font-mono  select-none">script.txt</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleSample}
                className="text-sm font-mono tracking-wide px-4 py-2 rounded-lg transition-all  hover:text-green-600 hover:bg-green-50"
                style={{ color: 'var(--text-muted)', border: '1px solid transparent' }}
              >
              sample
              </button>
              <button
                onClick={handleClear}
                className="text-sm font-mono tracking-wider px-4 py-2 rounded-lg transition-all hover:text-red-600 hover:bg-red-50 "
                style={{ color: 'var(--text-muted)' }}
              >
                clear
              </button>
              <label
                htmlFor="import-file"
                className="text-sm font-mono tracking-wider px-4 py-2 rounded-lg cursor-pointer bg-navy text-cream hover:opacity-90 transition-all hover:text-cream hover:bg-cream"
              >
                import .txt
              </label>
              <input type="file" id="import-file" accept=".txt" onChange={handleImport} className="hidden" />
            </div>
          </div>

          {/* Textarea Area */}
          <div className="relative">
             <textarea
              id="script-textarea"
              value={text}
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={`Write something remarkable…\n\nExample:\n"Good evening, and thank you all for being part of this incredible journey..."`}
              rows={10}
              style={{
                width: '100%',
                background: 'transparent',
                color: 'var(--text)',
                resize: 'none',
                padding: '32px',
                fontSize: '1.1rem',
                lineHeight: 1.8,
                outline: 'none',
                border: 'none',
                fontFamily: 'DM Sans, system-ui, sans-serif',
                caretColor: 'var(--navy)',
              }}
            />

          </div>

          {/* Status Bar */}
          <div
            className="flex items-center justify-between px-6 py-3"
            style={{ 
              background: 'rgba(33, 40, 66, 0.01)',
              borderTop: '1px solid rgba(33, 40, 66, 0.04)' 
            }}
          >
            <div className="flex items-center justify-between w-full text-[11px] font-medium" style={{ color: 'var(--text-muted)' }}>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span>Ready to prompt</span>
                </div>
                {wordCount > 0 && <span className="opacity-60">• Approx. {readingMinutes} min reading time</span>}
              </div>
              <div className="flex items-center gap-4 opacity-70 font-bold uppercase tracking-wider">
                <span>{wordCount.toLocaleString()} Words</span>
                <span>{charCount.toLocaleString()} Characters</span>
              </div>
            </div>
          </div>
        </div>

        {/* Major CTA */}
        <div className="mt-12 flex justify-center">
          <button
            id="open-teleprompter-btn"
            onClick={handleOpen}
            className="btn-primary text-[#F0E7D5] font-qurova flex items-center gap-4 px-12 py-5 rounded-2xl text-xl font-medium shadow-xl"
            style={{ background: 'var(--navy)' }}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.867V15.133a1 1 0 01-1.447.902L15 14M4 8h11a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z" />
            </svg>
            Launch Teleprompter
            <svg className="w-5 h-5 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}
