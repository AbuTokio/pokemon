import "./SearchBar.css"

export default function SearchBar() {
  return (
    <>
      <div className="wrapper_searchbar">
        <input type="text" placeholder="Search your Pokémon" className="searchbar" />
        <button className="search_button">
          <img src="../../../public/img/icon_pokeball_red.svg" alt="Pokeball Button" />
        </button>
      </div>
    </>
  )
}
