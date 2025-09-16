import "./pokeCard.css"
import { capitalizeString, formatNumber } from "../../utilis/Utilis"
import TypeTag from "../type-tag/TypeTag"
import type { PokemonType } from "../../enum/PokemonType"
import type { IPokemon } from "../../interfaces/IPokemon"

interface IPokeCardsProps {
  pokemon: IPokemon
  isActive: boolean
  onClick: () => void //wenn auf die Karte geklickt wird, soll die aktive ID aktualisiert werden
}

export default function PokeCard({ pokemon, isActive, onClick }: IPokeCardsProps) {
  return (
    <div className={`card ${isActive ? "active" : ""}`} onClick={onClick}>
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
  )
}
