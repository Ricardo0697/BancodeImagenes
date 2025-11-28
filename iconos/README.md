# Iconos

Esta carpeta contiene iconos diseñados para aplicaciones y juegos.

## Estructura de carpetas

```
iconos/
├── powerups/      # Iconos de power-ups (vida, escudo, munición)
└── README.md
```

## Estilos disponibles

Cada asset está disponible en tres estilos:

- **`_pixel.svg`**: Estilo pixel art usando rectángulos en grid 16x16. Incluye `shape-rendering="crispEdges"`.
- **`_flat.svg`**: Estilo flat/iconográfico con formas geométricas y paleta de 4-6 colores.
- **`_silhouette.svg`**: Silueta en color negro (#000000) para uso como marcadores.

## Convención de nombres

```
{tipo}_{numero}_{estilo}.svg

Ejemplos:
- vida_01_pixel.svg
- escudo_01_flat.svg
- municion_01_silhouette.svg
```

## Especificaciones técnicas

- **Formato**: SVG
- **ViewBox**: 0 0 128 128 (escalable)

## Licencia

Las imágenes usan la licencia actual del repositorio.

## Formatos alternativos
- PNG (con transparencia)
- SVG (vectorial)
- ICO (para Windows)

## Tamaños comunes recomendados
- 16x16 px
- 32x32 px
- 64x64 px
- 128x128 px
- 256x256 px
- 512x512 px
