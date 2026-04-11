// import { useState } from 'react'
import SliderControl from './SliderControl'
import ColorPicker from './ColorPicker'

const ALIGN_OPTIONS = [
  { value: 'left',   label: 'L', title: 'Align Left' },
  { value: 'center', label: 'C', title: 'Align Center' },
  { value: 'right',  label: 'R', title: 'Align Right' },
]

function IconPlay() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
    </svg>
  )
}

function IconPause() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" />
    </svg>
  )
}

function IconReset() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
    </svg>
  )
}

function IconFullscreen({ active }) {
  return active
    ? <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" /></svg>
    : <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>
}

function IconBack() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
  )
}

function IconSettings() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
    </svg>
  )
}

function IconAlign() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} title="Alignment">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h12M3 18h18" />
    </svg>
  )
}

function IconReflect() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} title="Reflection">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 3H5a2 2 0 00-2 2v14a2 2 0 002 2h3m8-18h3a2 2 0 012 2v14a2 2 0 01-2 2h-3M12 2v2m0 4v2m0 4v2m0 4v2" />
    </svg>
  )
}

function NavBtn({ onClick, title, children, active = false }) {
  return (
    <button
      onClick={onClick}
      title={title}
      style={{
        background: active ? 'rgba(33, 40, 66, 0.1)' : 'transparent',
        color: 'var(--text)',
        border: 'none',
        borderRadius: '10px',
        padding: '8px 10px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '0.85rem',
        fontWeight: 600,
        transition: 'all 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(33, 40, 66, 0.05)' }}
      onMouseLeave={e => {
        e.currentTarget.style.background = active ? 'rgba(33, 40, 66, 0.1)' : 'transparent'
      }}
    >
      {children}
    </button>
  )
}

export default function NavbarControls({
  isPlaying, onTogglePlay, onReset,
  textAlign, onAlignChange,
  isFlipped, onFlipToggle,
  bgColor, onBgColorChange,
  textColor, onTextColorChange,
  fontSize, onFontSizeChange,
  margin, onMarginChange,
  scrollSpeed, onSpeedChange,
  isFullscreen, onFullscreenToggle,
  onBack,
  isExpanded, onExpandToggle,
}) {
  return (
    <header
      className="navbar-blur fixed top-0 left-0 right-0 z-50 shadow-sm"
      role="banner"
      style={{ fontFamily: 'DM Sans, system-ui, sans-serif' }}
    >
      {/* ── Top bar ───────────────────────────────────────── */}
      <div className="flex items-center gap-3 px-6 py-3 bg-gray-300">

        {/* Back */}
        <NavBtn onClick={onBack} title="Back to Home">
          <IconBack />
          <span className="hidden sm:inline">Home</span>
        </NavBtn>

        {/* Logo */}
        <div className="flex-1 flex justify-center">
          <span
            className="font-qurova"
            style={{ color: 'var(--text)', fontSize: '1.25rem', fontWeight: 500, letterSpacing: '0.02em' }}
          >
            Qurova Pro
          </span>
        </div>

        {/* Play / Pause button */}
        <button
          id="navbar-play-btn"
          onClick={onTogglePlay}
          title={isPlaying ? 'Pause (Space)' : 'Play (Space)'}
          style={{
            background: isPlaying ? 'var(--navy)' : 'var(--navy)',
            color: isPlaying ? 'var(--cream)' : 'var(--cream)',
            border: isPlaying ? '1.5px solid var(--navy)' : 'none',
            borderRadius: '12px',
            padding: '8px 24px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'Qurova, Georgia, serif',
            fontSize: '0.95rem',
            fontWeight: 600,
            letterSpacing: '0.02em',
            transition: 'all 0.2s',
            boxShadow: isPlaying ? 'none' : '0 4px 12px rgba(33, 40, 66, 0.2)'
          }}
        >
          {isPlaying ? <><IconPause /><span>Pause</span></> : <><IconPlay /><span>Play</span></>}
        </button>

        <div className="flex items-center gap-1">
          <NavBtn onClick={onReset} title="Reset to top (R)">
            <IconReset />
          </NavBtn>

          <NavBtn onClick={onFullscreenToggle} title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen (F)'}>
            <IconFullscreen active={isFullscreen} />
          </NavBtn>

          <NavBtn onClick={onExpandToggle} title="Settings" active={isExpanded}>
            <IconSettings />
          </NavBtn>
        </div>
      </div>

      {/* ── Controls panel ────────────────────────────────── */}
      <div
        style={{
          overflow: 'hidden',
          maxHeight: isExpanded ? '200px' : '0',
          opacity: isExpanded ? 1 : 0,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          borderTop: isExpanded ? '1px solid rgba(33, 40, 66, 0.08)' : '1px solid transparent',
          background: 'rgba(33, 40, 66, 0.01)'
        }}
      >
        <div className="flex flex-wrap items-end gap-x-8 gap-y-6 px-8 py-6 bg-gray-300">
          {/* Sliders */}
          <div className="flex flex-wrap gap-8">
            <SliderControl id="speed-ctrl" label="Speed" min={1} max={20} step={1} value={scrollSpeed} onChange={onSpeedChange} />
            <SliderControl id="fontsize-ctrl" label="Size" min={16} max={90} step={2} value={fontSize} onChange={onFontSizeChange} unit="px" />
            <SliderControl id="margin-ctrl" label="Margin" min={0} max={40} step={1} value={margin} onChange={onMarginChange} unit="%" />
          </div>

          <div style={{ width: '1px', height: '40px', background: 'rgba(33, 40, 66, 0.1)' }} className="hidden lg:block" />

          {/* Toggles & Pickers */}
          <div className="flex flex-wrap items-end gap-8">
            {/* Alignment */}
            <div className="flex items-center gap-3">
              <span style={{ color: 'var(--text)' }}>
                <IconAlign />
              </span>
              <div className="flex gap-1.5 p-1 bg-navy/5 border border-navy/10 rounded-xl">
                {ALIGN_OPTIONS.map((a) => (
                  <button
                    key={a.value}
                    id={`align-${a.value}-btn`}
                    onClick={() => onAlignChange(a.value)}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      background: textAlign === a.value ? 'var(--navy)' : 'transparent',
                      color: textAlign === a.value ? 'var(--cream)' : 'var(--text)',
                      border: 'none',
                    }}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mirror */}
            <div className="flex items-center gap-3">
              <span style={{ color: 'var(--text)' }}>
                <IconReflect />
              </span>
              <button
                id="flip-toggle-btn"
                onClick={onFlipToggle}
                style={{
                  padding: '6px 16px',
                  height: '40px',
                  minWidth: '90px',
                  borderRadius: '10px',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  background: isFlipped ? 'var(--navy)' : 'rgba(33, 40, 66, 0.05)',
                  color: isFlipped ? 'var(--cream)' : 'var(--text)',
                  border: isFlipped ? 'none' : '1px solid rgba(33, 40, 66, 0.1)',
                  boxShadow: isFlipped ? '0 4px 8px rgba(33, 40, 66, 0.1)' : 'none'
                }}
              >
                {isFlipped ? 'Mirrored' : 'Normal'}
              </button>
            </div>

            <div style={{ width: '1px', height: '40px', background: 'rgba(33, 40, 66, 0.1)' }} className="hidden lg:block" />

            {/* Color section */}
            <div className="flex gap-6">
               <ColorPicker id="bg-color-picker" label="Canvas" value={bgColor} onChange={onBgColorChange} />
               <ColorPicker id="text-color-picker" label="Text" value={textColor} onChange={onTextColorChange} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
