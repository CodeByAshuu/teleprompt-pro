import { useNavigate } from 'react-router-dom'

const FEATURES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Instant Speed Control',
    desc: 'Fine-tune scroll speed in real-time with keyboard shortcuts or the slider.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: 'Full Customization',
    desc: 'Change font size, colors, alignment, and margins to match your setup.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
      </svg>
    ),
    title: 'Mirror / Flip Mode',
    desc: 'Vertically flip text for professional teleprompter glass setups.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
    title: 'Import / Export',
    desc: 'Load .txt scripts directly from your device and export finished scripts.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      </svg>
    ),
    title: 'No Login Required',
    desc: 'Zero accounts, zero ads. Your script stays entirely private.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: 'Fullscreen Mode',
    desc: 'Go fullscreen for a distraction-free, immersive reading experience.',
  },
]

const SHORTCUTS = [
  ['Space', 'Start / Pause scrolling'],
  ['↑', 'Increase scroll speed'],
  ['↓', 'Decrease scroll speed'],
  ['F', 'Toggle fullscreen'],
  ['R', 'Reset to top'],
  ['Esc', 'Exit fullscreen'],
]

export default function HeroSection() {
  const navigate = useNavigate()

  const scrollToInput = () => {
    document.getElementById('script-input')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section
        className="flex flex-col items-center justify-center text-center px-6 py-28"
        style={{ background: 'var(--navy)' }}
      >
        {/* Badge */}
        <div
          className="fade-in-up-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-10 text-sm"
          style={{
            background: 'rgba(240,231,213,0.07)',
            border: '1px solid rgba(240,231,213,0.15)',
            color: 'var(--cream-muted)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
          100% Free · No login · No ads
        </div>

        {/* Headline — Qurova */}
        <h1
          className="fade-in-up-2 font-qurova leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: 'var(--cream)', fontWeight: 500 }}
        >
          Read Like a Pro
        </h1>

        {/* Sub-headline — DM Sans */}
        <p
          className="fade-in-up-2 font-qurova mb-4"
          style={{ fontSize: 'clamp(1.1rem, 3vw, 1.6rem)', color: 'var(--cream-muted)', fontWeight: 400 }}
        >
          Free Online Teleprompter
        </p>

        {/* Subtext */}
        <p
          className="fade-in-up-3 max-w-xl mb-10 leading-relaxed"
          style={{ color: 'var(--cream-muted)', fontSize: '1rem' }}
        >
          No login, no ads — just smooth, customizable teleprompting.
          Perfect for creators, speakers, journalists &amp; presenters.
        </p>
        <CircularText
          text="REACT*BITS*COMPONENTS*"
          onHover="speedUp"
          spinDuration={20}
          className=""
        />

        {/* CTA buttons */}
        <div className="fade-in-up-4 flex flex-col sm:flex-row gap-3">
          <button
            id="hero-cta-primary"
            onClick={scrollToInput}
            className="btn-primary font-qurova px-8 py-3 rounded-xl text-base font-medium flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
            </svg>
            Start Teleprompter
          </button>
          <button
            id="hero-cta-demo"
            onClick={() => navigate('/teleprompter', { state: { text: '' } })}
            className="btn-outline px-8 py-3 rounded-xl text-base font-medium flex items-center justify-center gap-2"
          >
            Try Demo
          </button>
        </div>
      </section>

      {/* TextInputBox is rendered here from HomePage — see order in HomePage.jsx */}

      {/* ── Keyboard Shortcuts ─────────────────────────────── */}
      <section
        id="keyboard-shortcuts"
        className="py-16 px-6"
        style={{ background: 'var(--navy)' }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-qurova mb-8 text-center"
            style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--cream)' }}
          >
            Keyboard Shortcuts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SHORTCUTS.map(([key, desc]) => (
              <div key={key} className="flex items-center gap-4">
                <span className="kbd">{key}</span>
                <span style={{ color: 'var(--cream-muted)', fontSize: '0.9rem' }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────── */}
      <section
        className="py-20 px-6"
        style={{ background: 'var(--navy-soft)' }}
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-qurova text-center mb-4"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 500, color: 'var(--cream)' }}
          >
            Everything You Need
          </h2>
          <p
            className="text-center mb-12"
            style={{ color: 'var(--cream-muted)', fontSize: '0.95rem' }}
          >
            Professional-grade features, completely free, in your browser.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="card p-6 hover:-translate-y-0.5 transition-transform duration-200 cursor-default"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'rgba(240,231,213,0.1)', color: 'var(--cream)' }}
                >
                  {f.icon}
                </div>
                <h3
                  className="font-qurova mb-2"
                  style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--cream)' }}
                >
                  {f.title}
                </h3>
                <p style={{ color: 'var(--cream-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
