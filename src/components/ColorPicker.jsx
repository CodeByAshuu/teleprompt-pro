/**
 * ColorPicker – Compact color input with label and swatch preview.
 */
export default function ColorPicker({ id, label, value, onChange }) {
  return (
    <div className="flex flex-col items-center gap-1" id={id}>
      <span className="text-xs text-gray-400 font-medium whitespace-nowrap">{label}</span>
      <div className="relative group">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          title={label}
          aria-label={label}
          className="block"
        />
        <div className="absolute inset-0 rounded-lg pointer-events-none group-hover:ring-2 group-hover:ring-brand-400/50 transition-all" />
      </div>
    </div>
  )
}
