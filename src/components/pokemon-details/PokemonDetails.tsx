import "./PokemonDetails.css"
import { PokemonType } from "../../enum/PokemonType"
import TypeTag from "../type-tag/TypeTag"
import { capitalizeString, formatNumber } from "../../utilis/Utilis"
import InfoTags from "../info-tags/InfoTags"
import { useContext } from "react"
import { pokemonContext, type PokemonProviderProps } from "../../context/PokemonProvider"

export default function PokemonDetails() {
  const { selectedPokemon } = useContext(pokemonContext) as PokemonProviderProps
  const animatedPokemon = selectedPokemon?.sprites.other?.showdown.front_default
  // const animatedPokemon = selectedPokemon?.sprites.versions["generation-v"]["black-white"].animated.front_default
  const staticPokemon = selectedPokemon?.sprites.front_default

  //   const forwardPokemon = (Number(selectedPokemon) +1)
  //   const forwardPokemonFunc = () => {
  // setSelectedPokemon(pokemonResults[pokemonResults.indexOf(selectedPokemon)])
  // }

  return (
    <>
      {selectedPokemon && (
        <>
          <div className="div_aside">
            <section className="section_poke_intro">
              <div className="wrapper_detail_img">
                <img
                  src={animatedPokemon ? animatedPokemon : staticPokemon}
                  alt={`Image of ${selectedPokemon.name}`}
                  className="poke_detail_img"
                />
              </div>
              <p>{formatNumber(selectedPokemon.id, 4) ?? "?"}</p>
              <h2>{capitalizeString(selectedPokemon.name)}</h2>
              <div className="div_poke_types">
                {selectedPokemon.types.map((t) => (
                  <TypeTag key={t.type.name} type={t.type.name as PokemonType} />
                ))}
              </div>
            </section>

            {/* ---- Finden wir in der API noch Pokedex-Descriptions?  ----- */}
            {/* <section className="section_pokedex_entry">
          <h4>Pokédex Entry </h4>
          <p>{pokemon.}</p>
        </section> */}

            <section className="section_poke_info">
              <div className="div_poke_abilities">
                <h4>Abilities</h4>
                <div className="wrapper_infos"></div>
              </div>
              <div className="wrapper_infos">
                <div className="div_poke_info">
                  <h4>Height</h4>
                  <InfoTags text={`${selectedPokemon.height} m`} />
                </div>

                <div className="div_poke_info">
                  <h4>Weight</h4>
                  <InfoTags text={`${selectedPokemon.weight} kg`} />
                </div>
              </div>

              <div className="wrapper_infos">
                <div className="div_poke_info">
                  <h4>Base Exp</h4>
                  <InfoTags text={selectedPokemon.base_experience} />
                </div>

                <div className="div_sound_btn">
                  <a
                    onClick={() => {
                      const audio = new Audio(selectedPokemon.cries.legacy)
                      audio.play()
                      audio.volume = 0.05
                    }}>
                    <img src="/img/icon_note.svg" alt="Icon music note" />
                  </a>
                </div>
              </div>
            </section>

            <section className="section_back_forward">
              {/* <button type="button" onClick={setSelectedPokemon(selectedPokemon.de)}>Weiter</button>
              <button>Zurück</button> */}
              {/* {Number(selectedPokemon.id) > 1 && <Link to={`/pokemon/${Number(selectedPokemon.id) - 1}`}>Zurück</Link>}
              {Number(selectedPokemon.id) < 1025 && (
                <Link to={`/pokemon/${Number(selectedPokemon.id) + 1}`}>Weiter</Link>
              )} */}
            </section>
          </div>
        </>
      )}
    </>
  )
}
