import { useState } from "react"
import SelectFilter from "../select-filter/SelectFilter"
import { PokemonType } from "../../enum/PokemonType"
import "./FilterBar.css"
import { capitalizeString } from "../../utilis/Utilis"
import { POKEMON_GENERATIONS } from "../../constants/PokemonGeneration"

export default function FilterBar() {
  const [selectedType, setSelectedType] = useState("")
  const [selectedGen, setSelectedGen] = useState("")

  const typeOptions = Object.values(PokemonType)
  const genOptions = POKEMON_GENERATIONS.map((gen) => gen.name)

  return (
    <div className="filter-bar">
      <SelectFilter
        label="Typ"
        options={typeOptions.map(capitalizeString)}
        value={selectedType}
        // Todo: Filter anwenden
        onChange={setSelectedType}
      />

      <SelectFilter
        label="Generation"
        options={genOptions}
        value={selectedGen}
        // Todo: Filter anwenden
        onChange={setSelectedGen}
      />
    </div>
  )
}
