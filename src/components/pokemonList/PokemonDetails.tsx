import { Link } from "react-router"
import "./PokemonDetails.css"
import type { IPokemon } from "../../interfaces/IPokemon"
import { PokemonType } from "../../enum/PokemonType"

interface IPokemonDetailsProps {
  pokemon: IPokemon,
  altText: string,
  sprite: 
}

export default function PokemonDetails({pokemon}: IPokemonDetailsProps) {
  return (
    <>
      <aside>
        <section className="section_poke_intro">
          <img src={pokemon.sprites.animated} alt={pokemon.name} />
          <p>#{pokemon.id}</p>
          <h2></h2>
          <div className="div_poke_types">
            <PokemonType/>
            <PokemonType/>
          </div>
        </section>

        {/* <section className="section_pokedex_entry">
          <h4>Pokédex Entry </h4>
          <p>{pokemon.}</p>
        </section> */}

        <section className="div_poke_info">
          <div className="div_poke_abilities">
            <h4>Abilities</h4>
            <div className="wrapper_abilities"></div>
          </div>

          <div className="div_poke_height">
            <h4>Height</h4>
          </div>

          <div className="div_poke_weight">
            <h4>Weight</h4>
          </div>

          <div className="div_poke_exp">
            <h4>Base Exp</h4>
          </div>
        </section>

        <section className="section_back_forward">
          <Link />
          <Link />
        </section>
      </aside>
    </>
  )
}
