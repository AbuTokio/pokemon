import { PokemonType } from "../../enum/PokemonType"
import { TYPE_COLORS } from "../../constants/TypeColors"
import "./typeTag.css"

interface TypeTagProps {
  type: PokemonType
}

export default function TypeTag({ type }: TypeTagProps) {
  const color = TYPE_COLORS[type] ?? "#999"

  return (
    <span className="type-tag" style={{ backgroundColor: color, color: "white" }}>
      {type}
    </span>
  )
}
