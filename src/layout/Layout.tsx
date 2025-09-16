import { Outlet } from "react-router"
import "../layout/Layout.css"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import "./Layout.css"
import PokemonDetails from "../components/pokemon-details/PokemonDetails"

export default function Layout() {
  return (
    <>
      <div className="wrapper_layout">
        <div className="wrapper_header_main">
          <Header />
          <main>
            <Outlet />
          </main>
        </div>

        <aside className="aside_poke_details">
          <PokemonDetails />
        </aside>
      </div>
      <Footer />
    </>
  )
}
