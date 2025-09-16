import PokemonList from "../../components/pokemon-list/PokemonList"
import PokemonDetails from "../../components/pokemon-details/PokemonDetails"
import { dummyPokemon } from "../../data/data"
import "./Home.css"

export default function Home() {
  const firstPokemon = dummyPokemon[0]

  return (
    <div className="wrapper_home_layout">
      <div className="bg_image"></div>
      <PokemonList />
      <aside className="aside_poke_details">
        <PokemonDetails pokemon={firstPokemon} />
      </aside>
    </div>
  )
}
