import PokemonList from "../../components/pokemon-list/PokemonList"
import PokemonDetails from "../../components/pokemon-details/PokemonDetails"
import "./Home.css"

export default function Home() {
  return (
    <div className="wrapper_home_layout">
      <div className="bg_image"></div>
      <PokemonList />
      <aside className="aside_poke_details">
        <PokemonDetails />
      </aside>
    </div>
  )
}
