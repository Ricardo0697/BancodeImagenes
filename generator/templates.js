/**
 * SVG Icon Templates - Plantillas predefinidas para juegos populares
 * 
 * Este módulo contiene plantillas listas para usar que generan
 * iconos SVG para diferentes tipos de juegos.
 */

const { GameIconGenerator, COLOR_PALETTES } = require('./index');

/**
 * Plantilla para juego de puzzle numérico (estilo 2048)
 */
function createPuzzleNumberIcon(options = {}) {
    const generator = new GameIconGenerator();
    const colors = options.colors || ['#faf8ef', '#bbada0'];
    const tileColors = options.tileColors || ['#eee4da', '#ede0c8', '#f2b179', '#f67c5f', '#edc22e'];
    
    generator.createBackground('puzzleBg', colors);
    
    // Crear cuadrícula 4x4
    const gridSize = 4;
    const cellSize = 38;
    const gap = 5;
    const startX = 15;
    const startY = 15;
    
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const x = startX + col * (cellSize + gap);
            const y = startY + row * (cellSize + gap);
            const colorIndex = Math.floor(Math.random() * tileColors.length);
            
            generator.addElement(generator.createRect(x, y, cellSize, cellSize, {
                rx: 6,
                fill: tileColors[colorIndex]
            }));
        }
    }
    
    return generator;
}

/**
 * Plantilla para juego de cartas
 */
function createCardGameIcon(options = {}) {
    const generator = new GameIconGenerator();
    const bgColors = options.bgColors || ['#1e5631', '#0d2818'];
    
    generator.createBackground('cardBg', bgColors);
    
    // Agregar gradientes para las cartas
    generator.addDef(generator.createLinearGradient('cardFace', ['#ffffff', '#f0f0f0'], 
        { x1: "0%", y1: "0%", x2: "0%", y2: "100%" }));
    generator.addDef(generator.createLinearGradient('cardBack', ['#1e3a8a', '#1e40af'], 
        { x1: "0%", y1: "0%", x2: "100%", y2: "100%" }));
    
    // Crear cartas apiladas
    const cardPositions = [
        { x: 30, y: 40, back: true },
        { x: 70, y: 35, back: false },
        { x: 110, y: 40, back: false },
        { x: 40, y: 110, back: false },
        { x: 80, y: 115, back: true },
        { x: 120, y: 110, back: false }
    ];
    
    cardPositions.forEach(pos => {
        generator.addElement(generator.createRect(pos.x, pos.y, 45, 65, {
            rx: 5,
            fill: pos.back ? 'url(#cardBack)' : 'url(#cardFace)',
            stroke: pos.back ? '#0d1f4d' : '#ccc',
            strokeWidth: 1
        }));
    });
    
    return generator;
}

/**
 * Plantilla para juego espacial
 */
function createSpaceGameIcon(options = {}) {
    const generator = new GameIconGenerator();
    const bgColors = options.bgColors || ['#0a0a0a', '#1a1a2e'];
    
    generator.createBackground('spaceBg', bgColors);
    generator.createStars(25);
    
    // Agregar nave espacial
    generator.addDef(generator.createLinearGradient('shipGrad', ['#00bcd4', '#0097a7'], 
        { x1: "0%", y1: "0%", x2: "0%", y2: "100%" }));
    
    const shipElements = [
        generator.createPolygon('100,140 80,175 95,175 95,185 105,185 105,175 120,175', { fill: 'url(#shipGrad)' }),
        generator.createRect(98, 145, 4, 8, { fill: '#00ff00' })
    ];
    
    generator.addElement(generator.createGroup(shipElements));
    
    return generator;
}

/**
 * Plantilla para juego de plataformas
 */
function createPlatformGameIcon(options = {}) {
    const generator = new GameIconGenerator();
    const skyColors = options.skyColors || ['#87ceeb', '#4a90c2'];
    
    generator.createBackground('skyBg', skyColors);
    
    // Nubes
    generator.addElement(generator.createEllipse(40, 30, 20, 12, { fill: '#fff' }));
    generator.addElement(generator.createEllipse(55, 28, 15, 10, { fill: '#fff' }));
    generator.addElement(generator.createEllipse(150, 45, 18, 10, { fill: '#fff' }));
    
    // Suelo
    generator.addDef(generator.createLinearGradient('ground', ['#d35400', '#a04000'], 
        { x1: "0%", y1: "0%", x2: "0%", y2: "100%" }));
    generator.addElement(generator.createRect(0, 160, 200, 40, { fill: 'url(#ground)' }));
    
    // Bloque de pregunta
    generator.addElement(generator.createRect(130, 80, 35, 35, { 
        rx: 3, 
        fill: '#f1c40f',
        stroke: '#d4a017',
        strokeWidth: 2
    }));
    generator.addElement(generator.createText(147, 105, '?', {
        fontFamily: 'Arial Black, sans-serif',
        fontSize: 20,
        fill: '#d35400',
        textAnchor: 'middle',
        fontWeight: 'bold'
    }));
    
    return generator;
}

/**
 * Plantilla para juego de serpiente
 */
function createSnakeGameIcon(options = {}) {
    const generator = new GameIconGenerator();
    const bgColors = options.bgColors || ['#1a1a2e', '#0f0f1a'];
    
    generator.createBackground('snakeBg', bgColors);
    generator.createGrid(10, 10, { stroke: '#2a2a4a' });
    
    // Cuerpo de la serpiente
    const snakeColors = ['#1d8348', '#229954', '#27ae60', '#2ecc71'];
    const snakePath = [
        { x: 30, y: 90 }, { x: 50, y: 90 }, { x: 70, y: 90 }, { x: 90, y: 90 },
        { x: 90, y: 70 }, { x: 90, y: 50 }, { x: 110, y: 50 }, { x: 130, y: 50 },
        { x: 130, y: 70 }, { x: 130, y: 90 }
    ];
    
    snakePath.forEach((pos, i) => {
        const colorIndex = Math.min(i, snakeColors.length - 1);
        generator.addElement(generator.createRect(pos.x, pos.y, 18, 18, {
            rx: 3,
            fill: snakeColors[colorIndex]
        }));
    });
    
    // Cabeza
    generator.addElement(generator.createRect(130, 110, 22, 22, { rx: 5, fill: '#2ecc71' }));
    generator.addElement(generator.createCircle(136, 118, 3, { fill: '#fff' }));
    generator.addElement(generator.createCircle(146, 118, 3, { fill: '#fff' }));
    
    // Manzana
    generator.addElement(generator.createCircle(60, 150, 12, { fill: '#e74c3c' }));
    
    return generator;
}

/**
 * Plantilla para juego de memoria
 */
function createMemoryGameIcon(options = {}) {
    const generator = new GameIconGenerator();
    const bgColors = options.bgColors || ['#667eea', '#764ba2'];
    
    generator.createBackground('memoryBg', bgColors);
    
    generator.addDef(generator.createLinearGradient('cardBackMem', ['#4a5568', '#2d3748'], 
        { x1: "0%", y1: "0%", x2: "100%", y2: "100%" }));
    generator.addDef(generator.createLinearGradient('cardFrontMem', ['#ffffff', '#f7fafc'], 
        { x1: "0%", y1: "0%", x2: "0%", y2: "100%" }));
    
    // Cuadrícula de cartas
    const cards = [
        { x: 15, y: 20, flipped: false },
        { x: 60, y: 20, flipped: true, symbol: '⭐' },
        { x: 105, y: 20, flipped: true, symbol: '⭐' },
        { x: 150, y: 20, flipped: false },
        { x: 15, y: 80, flipped: true, symbol: '🎮' },
        { x: 60, y: 80, flipped: false },
        { x: 105, y: 80, flipped: false },
        { x: 150, y: 80, flipped: true, symbol: '🎮' },
        { x: 15, y: 140, flipped: false },
        { x: 60, y: 140, flipped: true, symbol: '💎' },
        { x: 105, y: 140, flipped: false },
        { x: 150, y: 140, flipped: true, symbol: '💎' }
    ];
    
    cards.forEach(card => {
        generator.addElement(generator.createRect(card.x, card.y, 38, 50, {
            rx: 5,
            fill: card.flipped ? 'url(#cardFrontMem)' : 'url(#cardBackMem)',
            stroke: card.flipped ? '#e2e8f0' : '#1a202c',
            strokeWidth: 1
        }));
        
        if (card.flipped && card.symbol) {
            generator.addElement(generator.createText(card.x + 19, card.y + 35, card.symbol, {
                fontSize: 20,
                textAnchor: 'middle'
            }));
        }
    });
    
    return generator;
}

/**
 * Plantilla para juego de carreras
 */
function createRacingGameIcon(options = {}) {
    const generator = new GameIconGenerator();
    const bgColors = options.bgColors || ['#1a1a2e', '#16213e'];
    
    generator.createBackground('racingBg', bgColors);
    
    // Carretera
    generator.addDef(generator.createLinearGradient('road', ['#3d3d3d', '#2d2d2d'], 
        { x1: "0%", y1: "0%", x2: "0%", y2: "100%" }));
    generator.addElement(generator.createPolygon('60,200 140,200 180,0 20,0', { fill: 'url(#road)' }));
    
    // Líneas de carretera
    generator.addElement(generator.createPolygon('95,200 105,200 108,0 92,0', { fill: '#fff' }));
    
    // Franjas laterales
    generator.addElement(generator.createPolygon('60,200 68,200 38,0 20,0', { fill: '#e74c3c' }));
    generator.addElement(generator.createPolygon('132,200 140,200 180,0 162,0', { fill: '#e74c3c' }));
    
    // Coche
    generator.addDef(generator.createLinearGradient('carGrad', ['#ff4757', '#c0392b'], 
        { x1: "0%", y1: "0%", x2: "0%", y2: "100%" }));
    
    const carElements = [
        generator.createRect(85, 110, 30, 55, { rx: 8, fill: 'url(#carGrad)' }),
        generator.createRect(90, 118, 20, 12, { rx: 3, fill: '#2c3e50' }),
        generator.createRect(97, 110, 6, 55, { fill: '#fff' }),
        generator.createRect(80, 115, 8, 15, { rx: 2, fill: '#1a1a1a' }),
        generator.createRect(112, 115, 8, 15, { rx: 2, fill: '#1a1a1a' })
    ];
    
    generator.addElement(generator.createGroup(carElements, { transform: 'translate(0, 0)' }));
    
    return generator;
}

// Exportar plantillas
module.exports = {
    createPuzzleNumberIcon,
    createCardGameIcon,
    createSpaceGameIcon,
    createPlatformGameIcon,
    createSnakeGameIcon,
    createMemoryGameIcon,
    createRacingGameIcon
};

// Ejemplo de uso
if (require.main === module) {
    console.log('Generando iconos de ejemplo desde plantillas...');
    
    const templates = [
        { fn: createPuzzleNumberIcon, name: 'template-puzzle.svg' },
        { fn: createCardGameIcon, name: 'template-cards.svg' },
        { fn: createSpaceGameIcon, name: 'template-space.svg' },
        { fn: createPlatformGameIcon, name: 'template-platform.svg' },
        { fn: createSnakeGameIcon, name: 'template-snake.svg' },
        { fn: createMemoryGameIcon, name: 'template-memory.svg' },
        { fn: createRacingGameIcon, name: 'template-racing.svg' }
    ];
    
    templates.forEach(template => {
        const generator = template.fn();
        generator.save(template.name);
        console.log(`Generado: ${template.name}`);
    });
    
    console.log('¡Todas las plantillas generadas!');
}
