export default function SliderControl({ id, label, min, max, step = 1, value, onChange, unit = '', formatValue }) {
  const display = formatValue ? formatValue(value) : `${value}${unit}`

  return (
    <div id={id} className="flex flex-col gap-1" style={{ minWidth: '100px' }}>
      <div className="flex items-center justify-between">
        <span style={{ fontSize: '0.7rem', color: 'var(--cream-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          {label}
        </span>
        <span
          style={{
            fontSize: '0.7rem',
            fontFamily: 'monospace',
            color: 'var(--text)',
            background: 'rgba(33, 40, 66, 0.05)',
            padding: '1px 6px',
            borderRadius: '4px',
          }}
        >
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
        aria-label={label}
      />
    </div>
  )
}
