import "./SelectFilter.css"
interface SelectFilterProps {
  label: string
  options: string[]
  value: string
  onChange: (value: string) => void
}

export default function SelectFilter({ label, options, value, onChange }: SelectFilterProps) {
  return (
    <label className="select-filter">
      <select className="select" value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  )
}
