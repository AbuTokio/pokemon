import "./pokeCard.css"
import { capitalizeString, formatNumber } from "../../utilis/Utilis"
import TypeTag from "../typeTag/typeTag"
import type { PokemonType } from "../../enum/PokemonType"
import type { IPokemon } from "../../interfaces/IPokemon"

interface IPokeCardsProps {
  pokemon: IPokemon
}

export default function PokeCard({ pokemon }: IPokeCardsProps) {
  return (
    <div className="card">
      <div className="card-background">
        <img src={pokemon.sprites.front_default} alt={`Image of ${pokemon.name}`} className="card-img" />
      </div>
      <div className="card-details">
        <p>{formatNumber(pokemon.id, 4) ?? "?"}</p>
        <p>{capitalizeString(pokemon.name)}</p>
        <div className="type-tags">
          {pokemon.types.map((t) => (
            <TypeTag key={t.type.name} type={t.type.name as PokemonType} />
          ))}
        </div>
      </div>
    </div>
  )
}
