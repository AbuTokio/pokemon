import "./SearchBar.css"

export default function SearchBar() {
  return (
    <>
      <div className="wrapper_searchbar">
        <input type="text" placeholder="Search your Pokémon" className="searchbar" />
        <svg
          id="pokeball_cutout"
          data-name="pokeball_cutout"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 173.26 174">
          <path
            className="cls-1"
            d="M86.63,120.95c-15.96,0-29.38-11.08-32.99-25.95H0c4.05,44.23,41.36,79,86.63,79s82.58-34.77,86.63-79h-53.64c-3.61,14.87-17.03,25.95-32.99,25.95Z"
            fill="#f0f1f7"
          />
          <path
            className="cls-1"
            d="M104.58,87c0-9.9-8.05-17.95-17.95-17.95s-17.95,8.05-17.95,17.95,8.05,17.95,17.95,17.95,17.95-8.05,17.95-17.95Z"
            fill="#f0f1f7"
          />
          <path
            className="cls-1"
            d="M86.63,0C41.36,0,4.05,34.77,0,79h53.64c3.61-14.87,17.02-25.95,32.99-25.95s29.38,11.08,32.99,25.95h53.64C169.2,34.77,131.9,0,86.63,0Z"
            fill="#f0f1f7"
          />
        </svg>
      </div>
    </>
  )
}
