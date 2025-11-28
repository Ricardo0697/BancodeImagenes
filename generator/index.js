/**
 * SVG Icon Generator - Base para crear iconos estilizados para videojuegos
 * 
 * Este generador proporciona funciones base para crear iconos SVG
 * personalizados con gradientes, formas y estilos predefinidos.
 */

const fs = require('fs');
const path = require('path');

// Configuración base de SVG
const SVG_CONFIG = {
    width: 200,
    height: 200,
    viewBox: "0 0 200 200",
    cornerRadius: 15
};

/**
 * Clase base para generar SVG
 */
class SVGGenerator {
    constructor(config = SVG_CONFIG) {
        this.config = config;
        this.elements = [];
        this.defs = [];
    }

    /**
     * Crear un gradiente lineal
     */
    createLinearGradient(id, colors, direction = { x1: "0%", y1: "0%", x2: "100%", y2: "100%" }) {
        const stops = colors.map((color, index) => {
            const offset = (index / (colors.length - 1)) * 100;
            return `<stop offset="${offset}%" style="stop-color:${color}"/>`;
        }).join('\n      ');

        return `<linearGradient id="${id}" x1="${direction.x1}" y1="${direction.y1}" x2="${direction.x2}" y2="${direction.y2}">
      ${stops}
    </linearGradient>`;
    }

    /**
     * Crear un rectángulo con esquinas redondeadas
     */
    createRect(x, y, width, height, options = {}) {
        const rx = options.rx || 0;
        const fill = options.fill || '#000';
        const stroke = options.stroke || '';
        const strokeWidth = options.strokeWidth || 0;
        
        let strokeAttr = stroke ? ` stroke="${stroke}" stroke-width="${strokeWidth}"` : '';
        return `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}" fill="${fill}"${strokeAttr}/>`;
    }

    /**
     * Crear un círculo
     */
    createCircle(cx, cy, r, options = {}) {
        const fill = options.fill || '#000';
        const stroke = options.stroke || '';
        const strokeWidth = options.strokeWidth || 0;
        
        let strokeAttr = stroke ? ` stroke="${stroke}" stroke-width="${strokeWidth}"` : '';
        return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"${strokeAttr}/>`;
    }

    /**
     * Crear una elipse
     */
    createEllipse(cx, cy, rx, ry, options = {}) {
        const fill = options.fill || '#000';
        const transform = options.transform || '';
        
        let transformAttr = transform ? ` transform="${transform}"` : '';
        return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}"${transformAttr}/>`;
    }

    /**
     * Crear un polígono
     */
    createPolygon(points, options = {}) {
        const fill = options.fill || '#000';
        return `<polygon points="${points}" fill="${fill}"/>`;
    }

    /**
     * Crear un path
     */
    createPath(d, options = {}) {
        const fill = options.fill || 'none';
        const stroke = options.stroke || '';
        const strokeWidth = options.strokeWidth || 1;
        
        let strokeAttr = stroke ? ` stroke="${stroke}" stroke-width="${strokeWidth}"` : '';
        return `<path d="${d}" fill="${fill}"${strokeAttr}/>`;
    }

    /**
     * Crear texto
     */
    createText(x, y, content, options = {}) {
        const fontFamily = options.fontFamily || 'Arial, sans-serif';
        const fontSize = options.fontSize || 12;
        const fill = options.fill || '#000';
        const textAnchor = options.textAnchor || 'start';
        const fontWeight = options.fontWeight || 'normal';
        
        return `<text x="${x}" y="${y}" font-family="${fontFamily}" font-size="${fontSize}" fill="${fill}" text-anchor="${textAnchor}" font-weight="${fontWeight}">${content}</text>`;
    }

    /**
     * Crear un grupo con transformación
     */
    createGroup(elements, options = {}) {
        const transform = options.transform || '';
        const fill = options.fill || '';
        const opacity = options.opacity || '';
        
        let attrs = [];
        if (transform) attrs.push(`transform="${transform}"`);
        if (fill) attrs.push(`fill="${fill}"`);
        if (opacity) attrs.push(`opacity="${opacity}"`);
        
        const attrStr = attrs.length > 0 ? ' ' + attrs.join(' ') : '';
        return `<g${attrStr}>
    ${elements.join('\n    ')}
  </g>`;
    }

    /**
     * Agregar definiciones (gradientes, filtros, etc.)
     */
    addDef(def) {
        this.defs.push(def);
        return this;
    }

    /**
     * Agregar elemento al SVG
     */
    addElement(element) {
        this.elements.push(element);
        return this;
    }

    /**
     * Generar el SVG completo
     */
    generate() {
        const defsSection = this.defs.length > 0 
            ? `<defs>
    ${this.defs.join('\n    ')}
  </defs>` 
            : '';

        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${this.config.viewBox}">
  ${defsSection}
  ${this.elements.join('\n  ')}
</svg>`;
    }

    /**
     * Guardar el SVG en un archivo
     */
    save(filename) {
        const outputPath = path.join(__dirname, '..', 'icons', filename);
        fs.writeFileSync(outputPath, this.generate());
        console.log(`SVG guardado en: ${outputPath}`);
    }

    /**
     * Resetear el generador
     */
    reset() {
        this.elements = [];
        this.defs = [];
        return this;
    }
}

/**
 * Clase para crear iconos de juegos específicos
 */
class GameIconGenerator extends SVGGenerator {
    constructor() {
        super();
    }

    /**
     * Crear fondo con gradiente
     */
    createBackground(gradientId, colors) {
        this.addDef(this.createLinearGradient(gradientId, colors));
        this.addElement(this.createRect(0, 0, this.config.width, this.config.height, {
            rx: this.config.cornerRadius,
            fill: `url(#${gradientId})`
        }));
        return this;
    }

    /**
     * Crear una cuadrícula de juego
     */
    createGrid(rows, cols, options = {}) {
        const startX = options.startX || 10;
        const startY = options.startY || 10;
        const cellWidth = options.cellWidth || 40;
        const cellHeight = options.cellHeight || 40;
        const gap = options.gap || 5;
        const stroke = options.stroke || '#333';
        
        const lines = [];
        for (let i = 0; i <= rows; i++) {
            const y = startY + i * (cellHeight + gap);
            lines.push(`<line x1="${startX}" y1="${y}" x2="${startX + cols * (cellWidth + gap)}" y2="${y}" stroke="${stroke}" stroke-width="1"/>`);
        }
        for (let j = 0; j <= cols; j++) {
            const x = startX + j * (cellWidth + gap);
            lines.push(`<line x1="${x}" y1="${startY}" x2="${x}" y2="${startY + rows * (cellHeight + gap)}" stroke="${stroke}" stroke-width="1"/>`);
        }
        
        this.addElement(this.createGroup(lines, { opacity: '0.3' }));
        return this;
    }

    /**
     * Crear estrellas de fondo (para juegos espaciales)
     */
    createStars(count = 20) {
        const stars = [];
        for (let i = 0; i < count; i++) {
            const cx = Math.random() * this.config.width;
            const cy = Math.random() * this.config.height;
            const r = Math.random() * 1.5 + 0.5;
            stars.push(this.createCircle(cx.toFixed(0), cy.toFixed(0), r.toFixed(1), { fill: '#fff' }));
        }
        this.addElement(this.createGroup(stars));
        return this;
    }

    /**
     * Crear efecto de brillo
     */
    createSparkle(x, y, size = 10) {
        const points = [];
        for (let i = 0; i < 4; i++) {
            const angle = (i * 90) * Math.PI / 180;
            const longRadius = size;
            const shortRadius = size * 0.3;
            
            points.push(
                x + Math.cos(angle) * longRadius,
                y + Math.sin(angle) * longRadius,
                x + Math.cos(angle + Math.PI / 4) * shortRadius,
                y + Math.sin(angle + Math.PI / 4) * shortRadius
            );
        }
        
        this.addElement(this.createPolygon(points.join(','), { fill: '#fff' }));
        return this;
    }

    /**
     * Crear un personaje básico estilo pixel
     */
    createPixelCharacter(x, y, pixelSize = 4, colorMap) {
        const elements = [];
        colorMap.forEach((row, rowIndex) => {
            row.forEach((color, colIndex) => {
                if (color) {
                    elements.push(this.createRect(
                        x + colIndex * pixelSize,
                        y + rowIndex * pixelSize,
                        pixelSize,
                        pixelSize,
                        { fill: color }
                    ));
                }
            });
        });
        
        this.addElement(this.createGroup(elements));
        return this;
    }
}

/**
 * Paletas de colores predefinidas para juegos
 */
const COLOR_PALETTES = {
    retro: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96e6a1', '#dfe6e9'],
    neon: ['#ff00ff', '#00ffff', '#ff0066', '#00ff00', '#ffff00'],
    pastel: ['#ffb3ba', '#bae1ff', '#baffc9', '#ffffba', '#ffdfba'],
    dark: ['#1a1a2e', '#16213e', '#0f3460', '#e94560', '#533483'],
    arcade: ['#ff4757', '#2ed573', '#ffa502', '#3742fa', '#a4b0be'],
    fantasy: ['#6c5ce7', '#a29bfe', '#fd79a8', '#00b894', '#fdcb6e']
};

/**
 * Ejemplos de uso
 */
function generateExampleIcon() {
    const generator = new GameIconGenerator();
    
    // Crear un icono de ejemplo
    generator
        .createBackground('exampleBg', ['#667eea', '#764ba2'])
        .createStars(15);
    
    // Agregar un personaje pixel art simple
    const characterColors = [
        [null, null, '#ff0', '#ff0', null, null],
        [null, '#ff0', '#ff0', '#ff0', '#ff0', null],
        ['#ff0', '#fff', '#000', '#000', '#fff', '#ff0'],
        [null, '#ff0', '#ff0', '#ff0', '#ff0', null],
        [null, null, '#ff0', '#ff0', null, null],
        [null, '#ff0', null, null, '#ff0', null]
    ];
    
    generator.createPixelCharacter(80, 80, 8, characterColors);
    
    generator.save('example-generated.svg');
    
    return generator.generate();
}

// Exportar módulos
module.exports = {
    SVGGenerator,
    GameIconGenerator,
    COLOR_PALETTES,
    SVG_CONFIG,
    generateExampleIcon
};

// Si se ejecuta directamente, generar ejemplo
if (require.main === module) {
    console.log('Generando icono de ejemplo...');
    generateExampleIcon();
    console.log('¡Icono generado exitosamente!');
}
