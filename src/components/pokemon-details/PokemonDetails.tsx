import "./PokemonDetails.css"
import type { IPokemon } from "../../interfaces/IPokemon"
import { PokemonType } from "../../enum/PokemonType"
import TypeTag from "../type-tag/TypeTag"
import { capitalizeString, formatNumber } from "../../utilis/Utilis"
import "./PokemonDetails.css"

interface IPokemonDetailsProps {
  pokemon: IPokemon
}

export default function PokemonDetails({ pokemon }: IPokemonDetailsProps) {
  const playCry = () => {
    const audio = new Audio(pokemon.cries.legacy)
    audio.play()
  }

  return (
    <>
      <div className="div_aside">
        <section className="section_poke_intro">
          <div className="wrapper_detail_img">
            <img src={pokemon.sprites.front_default} alt={`Image of ${pokemon.name}`} className="poke_detail_img" />
          </div>
          <p>{formatNumber(pokemon.id, 4) ?? "?"}</p>
          <h2>{capitalizeString(pokemon.name)}</h2>
          <div className="div_poke_types">
            {pokemon.types.map((t) => (
              <TypeTag key={t.type.name} type={t.type.name as PokemonType} />
            ))}
          </div>
        </section>

        {/* ---- Finden wir in der API noch Pokedex-Descriptions?  ----- */}
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

          <div className="div_sound_btn">
            <a onClick={playCry}>
              <img src="../../../public/img/icon_note.svg" alt="Icon music note" />
            </a>
          </div>
        </section>

        <section className="section_back_forward">
          {/* ---- Platzhalter für Links für Back and Forward Buttons ---- */}
          {/* <Link />
          <Link /> */}
        </section>
      </div>
    </>
  )
}
