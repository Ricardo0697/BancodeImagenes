# 🎮 Banco de Imágenes SVG para Videojuegos

Colección de iconos SVG estilizados para miniaturas, iconos y thumbnails de videojuegos. Incluye un generador base para crear nuevos iconos personalizados.

## 📁 Estructura del Proyecto

```
BancodeImagenes/
├── icons/                    # Iconos SVG listos para usar
│   ├── 2048-master.svg
│   ├── adventure-hero.svg
│   ├── battleships-master.svg
│   ├── candy-crush-master.svg
│   ├── javascript-playing-piano.svg
│   ├── javascript-solitaire.svg
│   ├── jeopardy-javascript.svg
│   ├── memory-game.svg
│   ├── pac-man.svg
│   ├── platform-hero.svg
│   ├── racing-fury.svg
│   ├── rock-paper-scissors.svg
│   ├── snake-master.svg
│   ├── space-invader.svg
│   └── tetris-main.svg
├── generator/                # Generador de iconos SVG
│   ├── index.js             # Clase base SVGGenerator
│   ├── templates.js         # Plantillas predefinidas
│   └── package.json
├── index.html               # Galería visual de iconos
└── README.md
```

## 🎨 Iconos Disponibles

### Juegos de Puzzle
- **2048 Master** - Juego de puzzle numérico con estilo de cuadrícula
- **Candy Crush** - Match-3 de dulces coloridos
- **Tetris** - Clásico de bloques con piezas de colores
- **Memory Game** - Juego de memoria con cartas

### Juegos de Cartas y Mesa
- **Solitaire** - Solitario clásico con cartas
- **Jeopardy** - Concurso de preguntas estilo TV
- **Battleships** - Batalla naval con barcos

### Juegos Arcade Clásicos
- **Pac-Man** - El clásico comecocos
- **Snake Master** - La serpiente clásica
- **Space Invaders** - Invasores del espacio retro

### Juegos de Aventura y Plataformas
- **Platform Hero** - Héroe de plataformas (estilo Mario alternativo)
- **Adventure Hero** - Aventurero épico (estilo Zelda alternativo)
- **Racing Fury** - Carreras de alta velocidad

### Juegos Musicales y Casuales
- **Piano** - Piano musical interactivo
- **Rock Paper Scissors** - Piedra, papel o tijera

## 🛠️ Generador de Iconos SVG

El proyecto incluye un generador JavaScript para crear nuevos iconos.

### Instalación

```bash
cd generator
npm install  # (si fuera necesario en el futuro)
```

### Uso Básico

```javascript
const { GameIconGenerator, COLOR_PALETTES } = require('./generator');

// Crear un nuevo generador
const generator = new GameIconGenerator();

// Crear fondo con gradiente
generator.createBackground('myBg', ['#667eea', '#764ba2']);

// Agregar elementos
generator.addElement(generator.createCircle(100, 100, 50, { fill: '#ff0' }));

// Guardar el SVG
generator.save('mi-icono.svg');
```

### Uso de Plantillas

```javascript
const { createPuzzleNumberIcon, createSpaceGameIcon } = require('./generator/templates');

// Generar icono de puzzle
const puzzle = createPuzzleNumberIcon();
puzzle.save('nuevo-puzzle.svg');

// Generar icono espacial
const space = createSpaceGameIcon();
space.save('nuevo-espacio.svg');
```

### Características del Generador

- **SVGGenerator**: Clase base para crear SVGs
  - `createLinearGradient()` - Crear gradientes
  - `createRect()` - Crear rectángulos
  - `createCircle()` - Crear círculos
  - `createEllipse()` - Crear elipses
  - `createPolygon()` - Crear polígonos
  - `createPath()` - Crear paths
  - `createText()` - Crear texto
  - `createGroup()` - Agrupar elementos

- **GameIconGenerator**: Extiende SVGGenerator con funciones para juegos
  - `createBackground()` - Crear fondo con gradiente
  - `createGrid()` - Crear cuadrícula
  - `createStars()` - Crear estrellas de fondo
  - `createSparkle()` - Crear efecto de brillo
  - `createPixelCharacter()` - Crear personaje pixel art

### Paletas de Colores Predefinidas

```javascript
const { COLOR_PALETTES } = require('./generator');

// Paletas disponibles:
// - retro: Colores vibrantes retro
// - neon: Colores neón brillantes
// - pastel: Tonos suaves pastel
// - dark: Colores oscuros dramáticos
// - arcade: Colores clásicos de arcade
// - fantasy: Colores de fantasía
```

## 📖 Ver la Galería

Abre `index.html` en un navegador para ver todos los iconos en una galería visual.

## 🚀 Cómo Contribuir

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nuevo-icono`)
3. Crea tu nuevo icono SVG o mejora el generador
4. Commit tus cambios (`git commit -am 'Agregar nuevo icono'`)
5. Push a la rama (`git push origin feature/nuevo-icono`)
6. Crea un Pull Request

## 📄 Licencia

Este proyecto está disponible para uso libre. Los iconos son diseños originales y no representan marcas registradas.

---

*Nota: Los personajes como "Platform Hero" y "Adventure Hero" son diseños originales inspirados en géneros de videojuegos, no representaciones de personajes con copyright.*

