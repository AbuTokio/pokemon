import { useContext, useEffect, useRef } from "react"
import "./PokemonList.css"
import PokeCard from "../poke-card/PokeCard"
import { pokemonContext, type PokemonProviderProps } from "../../context/PokemonProvider"
import Loader from "../loader/Loader"

export default function PokemonList() {
  const { pokemonResults, setOffset, loading, setLoading } = useContext(pokemonContext) as PokemonProviderProps

  const loadMoreRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0]
        if (first.isIntersecting && !loading) {
          setLoading(true)
          setTimeout(() => {
            setOffset((prev) => prev + 20)
          }, 1000)
        }
      },
      { threshold: 1 }
    )

    const current = loadMoreRef.current
    if (current) observer.observe(current)

    return () => {
      if (current) observer.unobserve(current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, setOffset])

  useEffect(() => {
    if (pokemonResults.length > 0) {
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonResults])

  return (
    <div className="wrapper_pokemonlist">
      <article className="pokemon_cards">
        {pokemonResults.map((pokemonResult, index) => (
          <div key={index}>
            <PokeCard pokemonResult={pokemonResult} />
          </div>
        ))}
      </article>
      {loading ? <Loader /> : <div ref={loadMoreRef} style={{ height: "20px" }} />}
    </div>
  )
}
