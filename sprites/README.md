# Sprites

Esta carpeta contiene gráficos 2D utilizados para personajes, objetos y animaciones en videojuegos.

## Tipos de sprites
- Personajes (characters)
- Enemigos (enemies)
- Objetos (items)
- Efectos (effects)
- UI elementos (ui)

## Formatos sugeridos
- PNG (con transparencia)
- GIF (animaciones simples)
- SVG (gráficos vectoriales)

## Consideraciones
- Usar fondos transparentes
- Mantener consistencia en el estilo artístico
- Incluir hojas de sprites (sprite sheets) cuando sea posible

## Assets SVG de Juego

Esta carpeta contiene assets SVG vectoriales organizados en subcarpetas:

### Estructura
```
sprites/
├── enemigos/     # Sprites de enemigos
│   ├── ogro_01_pixel.svg, ogro_01_flat.svg, ogro_01_silhouette.svg
│   ├── duende_01..04_*.svg
│   ├── tanque_01..02_*.svg
│   ├── moto_01..04_*.svg
│   ├── carro_01..05_*.svg
│   ├── avion_01..03_*.svg
│   └── nave_01..03_*.svg
└── heroes/       # Sprites de héroes
    ├── astronauta_*.svg
    ├── soldado_*.svg
    ├── general_*.svg
    └── civil_*.svg
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
<img src="sprites/enemigos/ogro_01_flat.svg" alt="Ogro" width="64" height="64">

<!-- Ejemplo en CSS -->
.enemy-icon {
  background-image: url('sprites/enemigos/tanque_01_silhouette.svg');
}
```

### Licencia
Estas imágenes están bajo la licencia actual del repositorio (uso libre). Los diseños son originales y no representan marcas registradas.
