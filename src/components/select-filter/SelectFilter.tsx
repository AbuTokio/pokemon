// src/components/ui/SelectFilter.tsx
import "./SelectFilter.css"

interface SelectFilterProps {
  label: string
  options: string[]
  value: string
  onChange: (value: string) => void
}

export default function SelectFilter({ label, options, value, onChange }: SelectFilterProps) {
  return (
    <div className="select-filter">
      <label className="select-label">
        {label}
        <select className="select" value={value} onChange={(e) => onChange(e.target.value)}>
          <option value="">Alle</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}
