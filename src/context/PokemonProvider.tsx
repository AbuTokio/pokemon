import { createContext, useEffect, useState } from "react"
import type { IPokemon } from "../interfaces/IPokemon"
import type { IResponse, Result } from "../interfaces/IResponse"
import axios from "axios"

// eslint-disable-next-line react-refresh/only-export-components
export const pokemonContext = createContext<PokemonProviderProps | null>(null)

export interface PokemonProviderProps {
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  filterType: number
  setFilterType: React.Dispatch<React.SetStateAction<number>>
  selectedPokemon: IPokemon | null
  setSelectedPokemon: React.Dispatch<React.SetStateAction<IPokemon | null>>
  offset: number
  setOffset: React.Dispatch<React.SetStateAction<number>>
  pokemonResults: Result[]
  setPokemonResults: React.Dispatch<React.SetStateAction<Result[]>>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PokemonProvider({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState(0)
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemon | null>(null)
  const [offset, setOffset] = useState(0)
  const [pokemonResults, setPokemonResults] = useState<Result[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await axios.get<IResponse>(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
        if (resp.data.results) {
          setPokemonResults([...pokemonResults, ...resp.data.results])
          console.log(pokemonResults)
        }
      } catch (error) {
        console.error(error)
      }
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset])

  return (
    <pokemonContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        filterType,
        setFilterType,
        selectedPokemon,
        setSelectedPokemon,
        offset,
        setOffset,
        pokemonResults,
        setPokemonResults,
        loading,
        setLoading,
      }}>
      {children}
    </pokemonContext.Provider>
  )
}
