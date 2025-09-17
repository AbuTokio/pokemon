import FilterBar from "../filter-bar/FilterBar"
import SearchBar from "../search-bar/SearchBar"
import "./Header.css"

export default function Header() {
  return (
    <>
      <header>
        <div className="div_logo">
          <img src="../../../public/img/pokedex_logo_02.svg" alt="Pokédex Logo" />
        </div>

        <div className="div_searchbar">
          <SearchBar />
        </div>

        <div className="div_filterbar">
          <FilterBar />
        </div>
      </header>
    </>
  )
}
