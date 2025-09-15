import React from "react"
import { PokemonType } from "../../enum/PokemonType"
import { TYPE_COLORS } from "../../constants/TypeColors"
import "./typeTag.css"

interface TypeTagProps {
  type: PokemonType
}

export default function TypeTag({ type }: TypeTagProps) {
  const color = TYPE_COLORS[type] ?? "#999"

  return (
    <span
      className="type-tag"
      style={{
        backgroundColor: color,
        color: "white",
        padding: "2px 8px",
        marginRight: "4px",
        borderRadius: "8px",
        fontSize: "0.8rem",
        textTransform: "capitalize",
      }}>
      {type}
    </span>
  )
}
