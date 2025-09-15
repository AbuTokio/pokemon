import "./pokeCard.css"
import { dummyPokemon } from "../../data/data"
import { capitalizeString, formatNumber } from "../../utilis/Utilis"
import { TypeTag } from "../typeTag/typeTag"

export default function PokemonCard() {
  const pokemon = dummyPokemon[0]

  return (
    <div className="card">
      <div className="card-background">
        <img src={pokemon.sprites.front_default} alt={`Image of ${pokemon.name}`} className="card-img" />
      </div>
      <div className="card-details">
        <p>{formatNumber(pokemon.id, 4) ?? "?"}</p>
        <p>{capitalizeString(pokemon.name)}</p>
        <div className="type-tags">
          {types.map((t) => (
            <TypeTag key={t} type={t} />
          ))}
        </div>
      </div>
    </div>
  )
}
