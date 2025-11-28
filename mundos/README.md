# Mundos / Niveles

Esta carpeta contiene diseños de mapas, fondos y niveles completos para diferentes tipos de juegos.

## Estructura de carpetas

```
mundos/
├── escenarios/    # Edificaciones y escenarios (casas, estructuras)
├── obstaculos/    # Objetos de ambiente (piedras, barriles)
└── README.md
```

## Tipos de contenido
- Fondos (backgrounds)
- Mapas de nivel (level maps)
- Tilesets (conjuntos de tiles)
- Parallax layers (capas de parallax)
- Diseños de escenarios
- Obstáculos y objetos destructibles

## Estilos disponibles

Cada asset está disponible en tres estilos:

- **`_pixel.svg`**: Estilo pixel art usando rectángulos en grid 16x16. Incluye `shape-rendering="crispEdges"`.
- **`_flat.svg`**: Estilo flat/iconográfico con formas geométricas y paleta simple.
- **`_silhouette.svg`**: Silueta en color negro (#000000).

## Convención de nombres

```
{tipo}_{numero}_{estilo}.svg

Ejemplos:
- casa_01_pixel.svg
- casa_destruida_01_flat.svg
- piedra_01_silhouette.svg
```

## Especificaciones técnicas

- **Formato**: SVG
- **ViewBox**: 0 0 128 128 (escalable)

## Géneros de juegos soportados
- Plataformas
- RPG
- Aventuras
- Puzzle
- Arcade

## Licencia

Las imágenes usan la licencia actual del repositorio.

## Formatos alternativos
- PNG (fondos y tilesets)
- JSON/TMX (datos de nivel para Tiled)
- JPG (fondos grandes)

## Consideraciones
- Incluir versiones en diferentes resoluciones
- Documentar la organización de tiles
- Mantener coherencia visual entre elementos del mismo mundo
