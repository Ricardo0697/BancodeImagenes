# Mundos / Niveles

Esta carpeta contiene diseños de mapas, fondos y niveles completos para diferentes tipos de juegos.

## Tipos de contenido
- Fondos (backgrounds)
- Mapas de nivel (level maps)
- Tilesets (conjuntos de tiles)
- Parallax layers (capas de parallax)
- Diseños de escenarios
- Obstáculos

## Géneros de juegos soportados
- Plataformas
- RPG
- Aventuras
- Puzzle
- Arcade

## Formatos sugeridos
- PNG (fondos y tilesets)
- JSON/TMX (datos de nivel para Tiled)
- JPG (fondos grandes)
- SVG (gráficos vectoriales)

## Consideraciones
- Incluir versiones en diferentes resoluciones
- Documentar la organización de tiles
- Mantener coherencia visual entre elementos del mismo mundo

## Assets SVG de Juego

Esta carpeta contiene assets SVG vectoriales organizados en subcarpetas:

### Estructura
```
mundos/
├── escenarios/     # Escenarios y edificios
│   ├── casa_pixel.svg, casa_flat.svg, casa_silhouette.svg
│   ├── casa_destruida_*.svg
│   └── casa_fuego_*.svg
└── obstaculos/     # Obstáculos del juego
    ├── piedra_*.svg
    └── barril_*.svg
```

### Estilos disponibles
Cada asset está disponible en tres estilos:
- **`_pixel.svg`**: Estilo pixel-art usando cuadrícula 16x16 con `shape-rendering="crispEdges"`
- **`_flat.svg`**: Estilo flat con 4-6 colores, formas geométricas
- **`_silhouette.svg`**: Silueta en un único color (#000000)

### Especificaciones técnicas
- **Formato**: SVG vectorial
- **viewBox**: `0 0 128 128`
- **Tamaño de píxel (pixel-art)**: 8x8 unidades por píxel
- **Colores flat**: 4-6 colores consistentes por icono
- **Silueta**: fill="#000000", sin trazos

### Uso
```html
<!-- Ejemplo de uso en HTML -->
<img src="mundos/escenarios/casa_flat.svg" alt="Casa" width="64" height="64">

<!-- Ejemplo en CSS -->
.obstacle {
  background-image: url('mundos/obstaculos/barril_pixel.svg');
}
```

### Licencia
Estas imágenes están bajo la licencia actual del repositorio (uso libre). Los diseños son originales y no representan marcas registradas.
