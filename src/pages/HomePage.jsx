import HeroTop from '../components/HeroTop'
import TextInputBox from '../components/TextInputBox'
import HeroBottom from '../components/HeroBottom'


export default function HomePage() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh' }}>

      {/* ── Logo strip ──────────────────────────────────── */}
      <header className="navbar-strip py-5 px-8 flex items-center justify-between">
        <span className="font-qurova text-2xl font-light" style={{ color: 'var(--text)' }}>
          Qurova Pro
        </span>
      </header>

      {/* ── Content in correct order ─────────────────────── */}
      <main>
        {/* 1. Hero */}
        <HeroTop />
        {/* 2. Script Input */}
        <TextInputBox />
        {/* 3. Keyboard Shortcuts + Features */}
        <HeroBottom />
      </main>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer
        className="py-10 px-8 text-center text-sm"
        style={{ borderTop: '1px solid rgba(33, 40, 66, 0.06)', color: 'var(--text-muted)' }}
      >
        TelePrompter Pro - Free, no login, no ads. Made with rizz by @SagarSahu
      </footer>
    </div>
  )
}
