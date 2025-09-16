import PokemonList from "../../components/pokemon-list/PokemonList"
import PokemonDetails from "../../components/pokemon-details/PokemonDetails"
import type { IPokemon } from "../../interfaces/IPokemon"
import { dummyPokemon } from "../../data/data"
import "./Home.css"

interface IHomeProps {
  pokemon: IPokemon
}

export default function Home({ pokemon }: IHomeProps) {
  const firstPokemon = dummyPokemon[0]

  return (
    <div>
      <div className="bg_image"></div>
      <h1>Home</h1>
      <PokemonList />
      <aside className="aside_poke_details">
        <PokemonDetails pokemon={firstPokemon} />
      </aside>
    </div>
  )
}
