import { useState } from "react"
import type { IPokemon } from "../../interfaces/IPokemon"
import "./PokemonList.css"
import { activePokemon, dummyPokemon } from "../../data/data"
import PokeCard from "../poke-card/PokeCard"

export default function PokemonList() {
  const currentlyActive = activePokemon //dummy data
  const [listedPokemon, setListedPokemon] = useState<IPokemon[]>(dummyPokemon)

  return (
    <>
      <section className="section_pokemonlist">
        {listedPokemon.map((pokemon, index) => {
          return (
            <div key={index}>
              <PokeCard
                pokemon={pokemon}
                // TODO : hier muss die richtige Variable gesetzt werden
                isActive={pokemon.id === currentlyActive}
                // Todo: hier müsste die funktion zur Änderung der active ID ergänzt werden
                onClick={function (): void {
                  console.log("Active Pokemon ID was changed to ", pokemon.id)
                }}
              />
            </div>
          )
        })}
      </section>
    </>
  )
}
