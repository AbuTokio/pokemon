import "./pokeCard.css"
import { capitalizeString, formatNumber } from "../../utilis/Utilis"
import TypeTag from "../type-tag/TypeTag"
import type { PokemonType } from "../../enum/PokemonType"
import type { Result } from "../../interfaces/IResponse"
import type { IPokemon } from "../../interfaces/IPokemon"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { pokemonContext, type PokemonProviderProps } from "../../context/PokemonProvider"

interface IPokeCardsProps {
  pokemonResult: Result
}

export default function PokeCard({ pokemonResult }: IPokeCardsProps) {
  const [pokemon, setPokemon] = useState<IPokemon>()

  const { selectedPokemon, setSelectedPokemon } = useContext(pokemonContext) as PokemonProviderProps

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const resp = await axios.get<IPokemon>(pokemonResult.url)
        if (resp.data) {
          setPokemon(resp.data)
        }
      } catch {
        console.error("Fehler beim Laden des Pokemons")
      }
    }
    getPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {pokemon && (
        <div
          className={`card ${pokemon === selectedPokemon && "active"}`}
          onClick={() => {
            setSelectedPokemon(pokemon)
          }}>
          <div className="card-details">
            <img src={pokemon.sprites.front_default} alt={`Image of ${pokemon.name}`} className="card-img" />
            <p className="id-number">{formatNumber(pokemon.id, 4) ?? "?"}</p>
            <p className="name">{capitalizeString(pokemon.name)}</p>
            <div className="type-tags">
              {pokemon.types.map((t) => (
                <TypeTag key={t.type.name} type={t.type.name as PokemonType} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
