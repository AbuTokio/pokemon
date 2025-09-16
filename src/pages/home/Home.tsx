import PokemonList from "../../components/pokemon-list/PokemonList"
import "./Home.css"

export default function Home() {
  return (
    <div className="wrapper_home_layout">
      <div className="bg_image"></div>
      <PokemonList />
    </div>
  )
}
