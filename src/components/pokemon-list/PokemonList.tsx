import { useContext } from "react"
import "./PokemonList.css"
import PokeCard from "../poke-card/PokeCard"
import { pokemonContext, type PokemonProviderProps } from "../../context/PokemonProvider"
import useScrolledToBottom from "../../hooks/useScrolledToBottom"

export default function PokemonList() {
  const { pokemonResults, setOffset } = useContext(pokemonContext) as PokemonProviderProps
  useScrolledToBottom(setOffset)

  return (
    <>
      <section className="section_pokemonlist">
        {pokemonResults.map((pokemonResult, index) => {
          return (
            <div key={index}>
              <PokeCard pokemonResult={pokemonResult} />
            </div>
          )
        })}
      </section>
    </>
  )
}
