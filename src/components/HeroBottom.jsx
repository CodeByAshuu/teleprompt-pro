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

export default function HeroBottom() {
  return (
    <>
      {/* ── Keyboard Shortcuts ─────────────────────────────── */}
      <section
        id="keyboard-shortcuts"
        className="py-24 px-6"
        style={{ background: 'var(--bg)' }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-qurova mb-10 text-center"
            style={{ fontSize: '1.6rem', fontWeight: 600, color: 'var(--text)' }}
          >
            Keyboard Shortcuts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SHORTCUTS.map(([key, desc]) => (
              <div key={key} className="flex items-center gap-5">
                <span className="kbd" style={{ color: 'var(--cream)', fontSize: '0.85rem', fontWeight: 600 }}>{key}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────── */}
      <section
        className="py-28 px-6"
        style={{ background: 'rgba(33, 40, 66, 0.02)', borderTop: '1px solid rgba(33, 40, 66, 0.04)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="font-qurova mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 2.6rem)', fontWeight: 600, color: 'var(--text)' }}
            >
              Professional Features
            </h2>
            <p
              className="max-w-xl mx-auto"
              style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}
            >
              Powerful tools under the hood, wrapped in a simple experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="card p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default"
                style={{ background: 'var(--text)' }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: 'rgba(33, 40, 66, 0.04)', color: 'var(--cream)' }}
                >
                  {f.icon}
                </div>
                <h3
                  className="font-qurova mb-3"
                  style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--cream)' }}
                >
                  {f.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
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
