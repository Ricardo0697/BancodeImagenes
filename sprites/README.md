# Sprites

Esta carpeta contiene gráficos 2D utilizados para personajes, objetos y animaciones en videojuegos.

## Tipos de sprites
- Personajes (characters)
- Enemigos (enemies)
- Objetos (items)
- Efectos (effects)
- UI elementos (ui)

## Estructura de carpetas

```
sprites/
├── enemigos/     # Sprites de enemigos (ogros, duendes, vehículos, naves)
├── heroes/       # Sprites de personajes jugables
└── README.md
```

## Estilos disponibles

Cada asset está disponible en tres estilos:

- **`_pixel.svg`**: Estilo pixel art usando rectángulos en grid 16x16. Incluye `shape-rendering="crispEdges"` para evitar antialiasing.
- **`_flat.svg`**: Estilo flat/iconográfico con formas geométricas simples, paleta de 4-6 colores, y sombras bloqueadas.
- **`_silhouette.svg`**: Silueta en color negro (#000000) para uso como iconos o marcadores.

## Convención de nombres

```
{tipo}_{numero}_{estilo}.svg

Ejemplos:
- ogro_01_pixel.svg
- duende_02_flat.svg
- tanque_01_silhouette.svg
```

## Especificaciones técnicas

- **Formato**: SVG
- **ViewBox**: 0 0 128 128 (escalable)
- **Pixel art**: Grid de 16x16 (cada "pixel" = 8x8 unidades)

## Licencia

Las imágenes usan la licencia actual del repositorio.

## Formatos alternativos
- PNG (con transparencia)
- GIF (animaciones simples)

## Consideraciones
- Usar fondos transparentes
- Mantener consistencia en el estilo artístico
- Incluir hojas de sprites (sprite sheets) cuando sea posible
