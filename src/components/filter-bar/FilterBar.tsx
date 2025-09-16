import { useState } from "react"
import SelectFilter from "../select-filter/SelectFilter"
import { PokemonType } from "../../enum/PokemonType"
import "./FilterBar.css"

export default function FilterBar() {
  const [selectedType, setSelectedType] = useState("")
  const [selectedGen, setSelectedGen] = useState("")
  const typeOptions = Object.values(PokemonType)
  return (
    <div className="filter-bar">
      <SelectFilter label="Typ" options={typeOptions} value={selectedType} onChange={setSelectedType} />

      <SelectFilter
        label="Generation"
        options={["Gen 1", "Gen 2", "Gen 3"]}
        value={selectedGen}
        onChange={setSelectedGen}
      />
    </div>
  )
}
