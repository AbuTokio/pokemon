# 👾 Pokédex – Next Generation

Dein digitaler Begleiter auf dem Weg zum Pokémon-Meister – durchstöbere alle Pokémon, entdecke ihre Fähigkeiten und folge ihren Ruf.

![Pokédex Start](./docs/pokedex_start.png)

#### 🔗 [Pokédex Live Demo](https://super-code-pokedex.netlify.app) 

---

## 📋 Über das Projekt

Pokédex – Next Generation ist eine interaktive Webanwendung, die angehenden Trainern alles bietet, was sie für ihre Reise durch die Pokémon-Welt benötigen. Die Anwendung greift auf die PokéAPI zu und präsentiert Pokémon-Daten visuell ansprechend mit animierten Sprites, detaillierten Informationen zu Fähigkeiten, Stats und Typen – inklusive der Original-Pokémon-Rufe.

Das Projekt entstand als Team-Projekt während unserer Weiterbildung. Mit React, TypeScript und modernen Web-APIs haben wir eine skalierbare Anwendung entwickelt, die Infinite Scroll, Context-basiertes State Management und eine umfassende Detailansicht für jedes Pokémon bietet. Vom ersten Starter-Pokémon bis zu legendären Begegnungen – hier beginnt das Abenteuer.

---

## 🛠️ Technologien

- **React 19** - UI-Framework mit modernen React-Features
- **TypeScript** - Typsichere Entwicklung
- **React Router 7** - Client-seitiges Routing
- **Vite 7** - Ultraschnelles Build-Tool mit HMR und SWC
- **Context API** - Zentrales State Management
- **Axios** - HTTP-Client für PokéAPI-Requests
- **React Icons** - Icon-Bibliothek
- **Vanilla CSS** - Component-basierte CSS-Module
- **PokéAPI v2** - Umfassende Pokémon-Datenbank

---

## ✨ Features

### Pokémon-Entdeckung

- ✅ **Infinite Scroll** - Automatisches Nachladen mit Intersection Observer
- ✅ **Live-Daten** - Initial 151 Pokémon aus der PokéAPI
- ✅ **Dynamisches Nachladen** - 20 weitere Pokémon pro Scroll

### Detailansicht

- ✅ **Animierte Sprites** - Bewegte GIF-Animationen mit Static-Fallback
- ✅ **Pokémon-Rufe** - Original-Audio aus den Spielen
- ✅ **Umfassende Informationen** - Fähigkeiten, Base Stats, Typen
- ✅ **Typ-basierte Farben** - 18 verschiedene Typ-Farben nach offiziellem Standard

### Technische Features

- ✅ **Context-basiertes State Management** - Globaler State ohne Prop-Drilling
- ✅ **TypeScript Interfaces** - Vollständig typisierte PokéAPI-Responses
- ✅ **Intersection Observer** - Performance-optimiertes Infinite Scroll
- ✅ **Error Handling** - Robuste Fehlerbehandlung bei API-Calls
- ✅ **Loading States** - Visuelle Feedback-Komponenten

---

## 💡 Was wir gelernt haben

- **Intersection Observer API**: Moderne Browser-API für performance-optimiertes Infinite Scrolling ohne traditionelle Scroll-Events
- **Context Provider Pattern**: Zentrales State Management für pokemonResults, selectedPokemon, offset und loading
- **Cascading API Requests**: Erst Pokémon-Liste laden, dann individuelle Detail-Requests für jedes Pokémon
- **Fallback-Strategien**: Animated Sprites mit Static-Fallback und Conditional Rendering für optionale Daten
- **Audio Web API**: Dynamische Audio-Wiedergabe mit `new Audio()` und Volume-Control
- **TypeScript Enums**: Typsichere Pokémon-Typen mit Record-Type für Color-Mapping
- **CSS Custom Properties**: Konsistentes Design-System mit Variablen für Farben, Fonts und Effekte
- **Utility Functions**: Helper-Funktionen für Number-Formatting und String-Kapitalisierung
- **Array Spreading**: Immutable State-Updates für kontinuierliche Datenerweiterung

---

## 📸 Screenshots

### Pokémon-Liste mit Infinite Scroll

![Loading Animation](./docs/pokedex_pokeball_loader.gif)

### Detailansicht mit animiertem Sprite

![pokedex_card_hover](./docs/pokedex_card_hover.gif)

---

## 🌐 API-Integration

**Verwendete API:** PokéAPI v2 (`https://pokeapi.co/api/v2`)

### Endpunkte

- `GET /pokemon?limit=151` - Initiale Pokémon-Liste (Kanto-Region)
- `GET /pokemon?limit=20&offset={offset}` - Paginierte Requests
- `GET /pokemon/{id}` - Individuelle Pokémon-Details
- GitHub CDN für animierte Showdown-Sprites

### Besonderheiten

- **Cascading Requests**: Liste → Details für jedes Pokémon
- **Fallback-Handling**: Animated → Static Sprites
- **Audio-Integration**: Pokémon-Cries direkt aus der API
- **Umfassende Daten**: Abilities, Stats, Types, Forms, Held Items

---

## 🧩 Geplante Features & Verbesserungen

- [ ] **Responsive Design** - Optimierung für Mobile und Tablet
- [ ] **Filter-Funktionen** - Nach Typ, Generation und Region filtern
- [ ] **Volle Such-Funktionalität** - Erweiterte Suche nach Namen, ID und Eigenschaften
- [ ] **Erweiterte Detailansicht** - Weitere Stats und Informationen aus der API
- [ ] **UI-Optimierung** - Verbessertes Design und Animationen
- [ ] **Pagination** - Alternative zum Infinite Scroll mit Seitennavigation
- [ ] **Lazy Loading** - Performance-Optimierung für große Datenmengen
- [ ] **Evolution Chain** - Visualisierung der Entwicklungsreihen
- [ ] **Type Effectiveness** - Stärken/Schwächen-Übersicht
