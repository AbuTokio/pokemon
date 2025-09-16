import { createContext, useState } from "react"
import type { IPokemon } from "../interfaces/IPokemon"

// eslint-disable-next-line react-refresh/only-export-components
export const pokemonContext = createContext<PokemonProviderProps | null>(null)

export interface PokemonProviderProps {
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  filterType: number
  setFilterType: React.Dispatch<React.SetStateAction<number>>
  selectedPokemon: IPokemon | null
  setSelectedPokemon: React.Dispatch<React.SetStateAction<IPokemon | null>>
}

export default function PokemonProvider({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState(0)
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemon | null>(null)

  return (
    <pokemonContext.Provider
      value={{ searchTerm, setSearchTerm, filterType, setFilterType, selectedPokemon, setSelectedPokemon }}>
      {children}
    </pokemonContext.Provider>
  )
}
