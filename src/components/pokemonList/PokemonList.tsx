import { useState } from "react"
import type { IPokemon } from "../../interfaces/IPokemon"
import "./PokemonList.css"
import { dummyPokemon } from "../../data/data"

export default function PokemonList() {
  const [listedPokemon, setListedPokemon] = useState<IPokemon[]>(dummyPokemon)

  return (
    <>
      <section className="section_pokemonlist">
        {listedPokemon.map((pokemon, index) => {
          return (
            <div key={index}>
              <PokemonCard pokemon={pokemon} />
            </div>
          )
        })}
      </section>
    </>
  )
}
