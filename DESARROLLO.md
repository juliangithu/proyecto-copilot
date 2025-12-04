# 📖 Guía de Desarrollo y Personalización de GraphBlog

Esta guía te ayudará a entender la estructura del código y cómo personalizarlo o expandirlo.

## 🎨 Estructura de Archivos

```
proyecto-copilot/
├── index.html                    # Estructura HTML y contenido
├── styles.css                    # Estilos CSS (500+ líneas)
├── script.js                     # JavaScript interactivo (350+ líneas)
├── README.md                     # Documentación principal
├── PUBLICACION_GITHUB_PAGES.md   # Guía de publicación
├── DESARROLLO.md                 # Este archivo
└── .gitignore                    # Archivo para ignorar en Git
```

## 💡 Principales Características Implementadas

### HTML (index.html)
- ✅ Estructura semántica HTML5
- ✅ 4 secciones de contenido (Inicio + 3 Posts)
- ✅ 4 Canvas para visualizaciones de grafos
- ✅ 2 Tablas comparativas
- ✅ Navegación interactiva
- ✅ Meta tags para SEO y responsividad

### CSS (styles.css)
- ✅ Variables CSS para colores y tema
- ✅ Flexbox y Grid para layouts
- ✅ Media queries para responsividad (768px, 480px)
- ✅ Animaciones y transiciones suaves
- ✅ Estilos para impresión
- ✅ Más de 20 clases CSS reutilizables

### JavaScript (script.js)
- ✅ Navegación entre posts sin recargar página
- ✅ 4 funciones de Canvas para diagramas
- ✅ Manejo de eventos de teclado
- ✅ Scroll suave
- ✅ Inicialización automática de diagramas

## 🔧 Cómo Personalizador el Proyecto

### Cambiar Colores

En `styles.css`, modifica las variables CSS (líneas 1-10):

```css
:root {
    --primary-color: #2563eb;      /* Azul principal */
    --secondary-color: #1e40af;    /* Azul oscuro */
    --accent-color: #06b6d4;       /* Cyan */
    --success-color: #10b981;      /* Verde */
    --warning-color: #f59e0b;      /* Amarillo */
    --danger-color: #ef4444;       /* Rojo */
    --light-bg: #f8fafc;           /* Fondo claro */
    --white: #ffffff;              /* Blanco */
    --text-dark: #1e293b;          /* Texto oscuro */
    --text-light: #64748b;         /* Texto gris */
}
```

### Agregar un Nuevo Post

1. **En `index.html`**, añade una nueva sección:

```html
<section id="post4" class="post">
    <div class="post-header">
        <h2>Post #4: Tu Tema Nuevo</h2>
        <p class="post-date">Diciembre 3, 2025</p>
    </div>
    <div class="post-body">
        <!-- Tu contenido aquí -->
    </div>
</section>
```

2. **En el navbar**, añade un botón:

```html
<li><a href="#" class="nav-link" onclick="showPost('post4')">Post 4</a></li>
```

3. **En `script.js`**, actualiza el array de posts:

```javascript
const posts = ['inicio', 'post1', 'post2', 'post3', 'post4'];
```

### Modificar un Diagrama Canvas

Para cambiar el diagrama de BFS en `script.js`:

```javascript
function drawBFSDiagram() {
    const canvas = document.getElementById('canvas3');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Cambiar datos del grafo
    const nodes = {
        A: { x: 300, y: 50, level: 0 },
        // ... más nodos
    };
    
    const edges = [
        ['A', 'B'],
        // ... más aristas
    ];
    
    // El código de dibujo continúa...
}
```

### Cambiar Fuentes

En `styles.css`, modifica la propiedad `font-family`:

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* Prueba con: Georgia, 'Times New Roman' para serif */
    /* O: 'Courier New' para monospacio */
}
```

## 📱 Responsive Design

El proyecto es responsive en 3 niveles:

### Desktop (> 768px)
- Navbar en fila horizontal
- Tablas con todas las columnas visibles
- Grids de 3 columnas

### Tablet (768px - 480px)
- Navbar ajustado
- Grids de 2 columnas
- Tablas con fuentes más pequeñas

### Móvil (< 480px)
- Navbar vertical
- Grids de 1 columna
- Tablas muy compactadas

Para probar responsividad:
1. En Chrome/Firefox: F12 → Ctrl + Shift + M
2. Cambia el tamaño de la ventana
3. Prueba en tu teléfono

## 🎓 Extensiones Posibles

### 1. Agregar Más Algoritmos

**Sugeridos:**
- Algoritmo de Dijkstra (camino más corto ponderado)
- Floyd-Warshall (distancias entre todos los pares)
- Algoritmo de Prim (árbol de expansión mínima)
- Algoritmo de Kruskal (árbol de expansión mínima)

**Implementación:**
```javascript
// En script.js
function drawDijkstraVisualization() {
    // Código de visualización
}

// En index.html
<canvas id="canvasDijkstra" width="600" height="400"></canvas>
```

### 2. Modo Oscuro

En `styles.css`, añade:

```css
@media (prefers-color-scheme: dark) {
    :root {
        --primary-color: #60a5fa;
        --light-bg: #1f2937;
        --white: #111827;
        --text-dark: #f3f4f6;
    }
}

/* O crea un switch en HTML */
<button class="dark-mode-toggle" onclick="toggleDarkMode()">🌙</button>
```

### 3. Modo Editor Visual

Permitir que los usuarios creen sus propios grafos:

```javascript
function createGraphEditor() {
    // Detectar clicks en el canvas
    // Dibujar nodos dinámicamente
    // Conectar nodos con aristas
    // Mostrar propiedades del grafo
}
```

### 4. Ejercicios Interactivos

```html
<div class="exercise">
    <h4>Ejercicio: Encontrar el camino BFS</h4>
    <p>¿Cuál es el camino más corto de A a E?</p>
    <input type="text" id="answer" placeholder="Ej: A-B-D-E">
    <button onclick="checkAnswer()">Verificar</button>
</div>
```

### 5. Sistema de Comentarios

Integrar Disqus o Utterances:

```html
<div id="comments"></div>
<script>
    // Código de integración
</script>
```

## 🐛 Debugging

### Abrir Developer Tools
- **Chrome/Edge**: F12 o Ctrl + Shift + I
- **Firefox**: F12 o Ctrl + Shift + I
- **Safari**: Cmd + Option + I

### Verificar Errores
1. Abre la pestaña **Console**
2. Los errores aparecerán en rojo
3. Busca mensajes sobre Canvas o funciones JavaScript

### Verificar Estilos CSS
1. Abre la pestaña **Elements**
2. Haz clic derecho en un elemento
3. Selecciona "Inspect" o "Inspeccionar"
4. Modifica el CSS en tiempo real

## 🚀 Optimización de Rendimiento

### Minificar CSS y JavaScript

```bash
# Usando un servicio online o herramienta local
# Ejemplo: UglifyJS para JavaScript, cssnano para CSS
```

### Lazy Loading de Canvas

```javascript
// Dibujar canvas solo cuando sean visibles
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            drawGraphDiagram1();
            observer.unobserve(entry.target);
        }
    });
});

observer.observe(document.getElementById('canvas1'));
```

### Caché de Assets

Agregar headers HTTP en tu servidor:

```
Cache-Control: max-age=31536000  # 1 año para archivos estáticos
```

## 📊 Estadísticas del Proyecto

| Métrica | Valor |
|---------|-------|
| Líneas HTML | 450+ |
| Líneas CSS | 550+ |
| Líneas JavaScript | 350+ |
| Canvas Implementados | 4 |
| Posts Incluidos | 3 |
| Tablas | 2 |
| Secciones Principales | 5 |
| Tamaño Total | 58 KB |

## 📚 Recursos Útiles

### HTML5
- [MDN HTML Reference](https://developer.mozilla.org/es/docs/Web/HTML)
- [HTML5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)

### CSS3
- [MDN CSS Reference](https://developer.mozilla.org/es/docs/Web/CSS)
- [CSS Grid](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout)
- [Flexbox](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout)

### JavaScript
- [MDN JavaScript Reference](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Canvas API](https://developer.mozilla.org/es/docs/Web/API/Canvas_API)

### Diseño
- [Color Palette Generator](https://coolors.co/)
- [Font Pairing](https://www.fontpair.co/)

## 🤝 Buenas Prácticas

1. **Comentarios Claros**:
   ```javascript
   // Explicar el propósito de cada sección
   // Usar comentarios de bloque para grandes secciones
   ```

2. **Nombres Descriptivos**:
   ```javascript
   // Bien
   function drawBFSVisualization() { }
   
   // Mal
   function draw1() { }
   ```

3. **Validar Elementos**:
   ```javascript
   const canvas = document.getElementById('canvas1');
   if (!canvas) return; // Validar que existe
   ```

4. **Commits Descriptivos**:
   ```bash
   git commit -m "Agregar visualización de DFS con colores distintivos"
   # No: git commit -m "fix"
   ```

---

**¡Diviértete personalizando y expandiendo GraphBlog!** 🚀
