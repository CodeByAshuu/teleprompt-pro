import { useNavigate } from 'react-router-dom'
import CircularText from './CircularText';


export default function HeroTop() {
  const navigate = useNavigate()

  const scrollToInput = () => {
    document.getElementById('script-input')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative overflow-hidden flex flex-col items-center justify-center text-center px-6 py-32"
      style={{ background: 'var(--bg)' }}
    >
      {/* Decorative SVG Shapes (Navy on Cream) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Circle */}
        <svg className="absolute -top-20 -left-20 w-64 h-64 opacity-[0.03]" viewBox="0 0 100 100" fill="var(--navy)">
          <circle cx="50" cy="50" r="50" />
        </svg>
        
        {/* Square */}
        <svg className="absolute top-1/2 -right-16 w-48 h-48 opacity-[0.03] rotate-12" viewBox="0 0 100 100" fill="var(--navy)">
          <rect width="100" height="100" />
        </svg>

        {/* Triangle */}
        <svg className="absolute bottom-1/4 -left-12 w-40 h-40 opacity-[0.03] -rotate-12" viewBox="0 0 100 100" fill="var(--navy)">
          <path d="M50 0 L100 100 L0 100 Z" />
        </svg>

        {/* Abstract Blob 1 */}
        <svg className="absolute top-1/4 left-1/4 w-32 h-32 opacity-[0.025]" viewBox="0 0 200 200" fill="var(--navy)">
          <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-46.2C87.4,-33.3,90,-16.7,89.1,-0.5C88.2,15.7,83.9,31.4,75.4,44.9C66.9,58.4,54.2,69.7,39.6,76.5C25,83.3,8.5,85.6,-7.7,84.3C-23.9,83,-39.8,78.1,-53.6,69.2C-67.4,60.3,-79.1,47.4,-84.9,32.7C-90.7,18.1,-90.6,1.8,-86.3,-13.4C-82,-28.7,-73.4,-42.8,-62.1,-51.1C-50.8,-59.4,-36.8,-61.8,-24,-69.6C-11.2,-77.4,0.4,-90.6,12.7,-91.3C25,-92.1,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>

        {/* Abstract Blob 2 */}
        <svg className="absolute bottom-10 right-1/4 w-56 h-56 opacity-[0.02]" viewBox="0 0 200 200" fill="var(--navy)">
          <path d="M38.1,-63.4C49.1,-58.5,57.7,-47.1,64.2,-34.9C70.8,-22.8,75.3,-9.8,74.1,2.8C72.9,15.4,66,27.7,57.2,38.1C48.4,48.5,37.8,57.1,25.4,61.9C13,66.7,-1.2,67.7,-14.8,65.1C-28.4,62.5,-41.4,56.3,-50.8,46.5C-60.2,36.7,-66,23.3,-68.1,9.4C-70.2,-4.5,-68.6,-18.9,-61.9,-30.9C-55.2,-42.9,-43.4,-52.3,-31,-56.3C-18.6,-60.3,-5.6,-58.9,7.6,-61.4C20.8,-63.9,38.1,-63.4,38.1,-63.4Z" transform="translate(100 100)" />
        </svg>

        <div className="absolute top-20 right-70 opacity-40">
          <CircularText
            text="TELEPROMPTER*FREE*ONLINE*"
            onHover="speedUp"
            spinDuration={30}
            className=""
          />
        </div>
      </div>

      {/* Badge */}
      <div
        className="fade-in-up-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-10 text-sm"
        style={{
          background: 'rgba(33, 40, 66, 0.05)',
          border: '1px solid rgba(33, 40, 66, 0.1)',
          color: 'var(--text-muted)',
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
        100% Free · No login · No ads
      </div>

      {/* Headline */}
      <h1
        className="fade-in-up-2 font-qurova leading-tight mb-5 max-w-3xl"
        style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: 'var(--text)', fontWeight: 500 }}
      >
        Read Like a Pro
      </h1>

      {/* Sub-headline */}
      <p
        className="fade-in-up-2 font-qurova mb-5"
        style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', color: 'var(--text-muted)', fontWeight: 400 }}
      >
        Free Online Teleprompter
      </p>

      {/* Body text */}
      <p
        className="fade-in-up-3 max-w-xl mb-12 leading-relaxed"
        style={{ color: 'var(--text-muted)', fontSize: '1rem' }}
      >
        No login, no ads! just smooth, customizable teleprompting.
        Perfect for creators, speakers, journalists &amp; presenters.
      </p>

      {/* CTAs */}
      <div className="fade-in-up-4 flex flex-col sm:flex-row gap-4">
        <button
          id="hero-cta-primary"
          onClick={scrollToInput}
          className="btn-primary  font-qurova px-10 py-4 rounded-2xl text-lg font-medium flex items-center justify-center gap-3"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
          </svg>
          Start Teleprompter
        </button>
        <button
          id="hero-cta-demo"
          onClick={() => navigate('/teleprompter', { state: { text: '' } })}
          className="bg-[#F0E7D5] font-light font-qurova hover:ring-1 hover: px-10 py-4 rounded-2xl text-lg flex items-center justify-center gap-2"
        >
          Try Demo
        </button>
      </div>
    </section>
  )
}
