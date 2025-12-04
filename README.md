# 📊 GraphBlog - Blog Educativo sobre Grafos

Un blog interactivo y educativo que cubre los conceptos fundamentales de la estructura de datos **Grafos** en la informática.

## 🎯 Descripción del Proyecto

**GraphBlog** es un proyecto web desarrollado como parte de un curso educativo que proporciona una introducción completa a los grafos, incluyendo:

- Definiciones y conceptos fundamentales
- Tipos de grafos (dirigidos, no dirigidos, ponderados)
- Representaciones en memoria (Lista de Adyacencia, Matriz de Adyacencia)
- Algoritmos esenciales de recorrido (BFS y DFS)

El blog incluye explicaciones teóricas, ejemplos prácticos, pseudocódigo y visualizaciones interactivas usando Canvas de HTML5.

## 📚 Contenido - Fases del Proyecto

### Fase 1: Estructura y Contenido (El "Blogging")

El blog contiene 3 artículos (posts) que cubren los aspectos fundamentales:

#### 📄 Post #1: Introducción a los Grafos - Nodos, Aristas y Tipos
- **Tema**: Conceptos básicos de grafos
- **Contenido**:
  - Definición de un grafo
  - Conceptos clave: Vértices, Aristas, Grado, Caminos, Ciclos
  - Tipos de grafos: Dirigidos, No dirigidos, Ponderados
  - Ejemplos de aplicaciones reales
- **Visualización**: Diagrama de un grafo no dirigido con 5 nodos y 6 aristas
- **Terminología**: Grado, camino, ciclo, grafo conectado/desconectado

#### 📄 Post #2: Representación de Grafos
- **Tema**: Formas de representar grafos en memoria
- **Contenido**:
  - **Lista de Adyacencia**: Estructura, ventajas (eficiencia de espacio), desventajas
    - Ideal para grafos dispersos (pocos aristas)
    - Complejidad: O(V + E) en espacio
  - **Matriz de Adyacencia**: Estructura, ventajas (eficiencia de tiempo), desventajas
    - Ideal para consultas rápidas de aristas
    - Complejidad: O(V²) en espacio
- **Visualización**: Comparación lado a lado de ambas representaciones
- **Análisis comparativo**: Cuándo usar cada una

#### 📄 Post #3: Algoritmos Fundamentales de Recorrido
- **Tema**: Dos algoritmos esenciales para recorrer grafos
- **Contenido**:

##### 1. Búsqueda en Amplitud (BFS - Breadth-First Search)
  - Concepto: Exploración por niveles usando una cola
  - Algoritmo paso a paso
  - Pseudocódigo iterativo
  - Complejidad: O(V + E) tiempo, O(V) espacio
  - Características: Encuentra camino más corto sin pesos
  - Aplicaciones: Caminos más cortos, análisis de redes, sistemas de recomendación

##### 2. Búsqueda en Profundidad (DFS - Depth-First Search)
  - Concepto: Exploración profunda usando una pila o recursión
  - Algoritmo paso a paso
  - Pseudocódigo iterativo y recursivo
  - Complejidad: O(V + E) tiempo, O(V) espacio
  - Características: Explora caminos completos antes de retroceder
  - Aplicaciones: Detección de ciclos, ordenamiento topológico, componentes conectados

- **Visualizaciones**: Diagramas animados de BFS y DFS
- **Tabla comparativa**: BFS vs DFS

### Fase 2: Implementación Técnica (El "Web Development")

El blog está implementado usando tecnologías web modernas:

#### Tecnologías Utilizadas
- **HTML5**: Estructura semántica del blog
- **CSS3**: Estilos modernos y diseño responsivo
- **JavaScript (ES6+)**: Interactividad y visualizaciones
- **Canvas HTML5**: Diagramas interactivos

#### Características Técnicas

✨ **Diseño Responsivo**
- Adaptable a dispositivos móviles, tablets y escritorio
- Media queries para diferentes tamaños de pantalla
- Interfaz intuitiva y accesible

🎨 **Interfaz Moderna**
- Tema de colores profesional y coherente
- Gradientes y sombras para profundidad visual
- Navegación fluida con transiciones suaves
- Animaciones CSS para mejor experiencia

🖥️ **Interactividad**
- Navegación entre posts sin recargar la página
- Control con mouse y teclado (flechas izquierda/derecha)
- Canvas interactivos que se actualizan dinámicamente
- Scroll suave

📊 **Visualizaciones**
- Diagramas de grafos con nodos y aristas
- Visualización del orden de recorrido (BFS/DFS)
- Tablas comparativas y matrices
- Código coloreado para legibilidad

## 🚀 Cómo Usar

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere instalación ni dependencias externas

### Instalación Local

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/juliangithu/proyecto-copilot.git
   cd proyecto-copilot
   ```

2. **Abrir el blog**:
   - Opción A: Hacer doble clic en `index.html`
   - Opción B: Usar un servidor local
     ```bash
     # Usando Python 3
     python -m http.server 8000
     
     # Usando Python 2
     python -m SimpleHTTPServer 8000
     
     # Usando Node.js con http-server
     npx http-server
     ```
   - Luego abrir: `http://localhost:8000` en el navegador

### Navegación
- **Botones de Navegación**: Haz clic en los botones "Inicio", "Post 1", "Post 2", "Post 3"
- **Teclado**: 
  - ➡️ Flecha derecha: Siguiente post
  - ⬅️ Flecha izquierda: Post anterior

## 📁 Estructura del Proyecto

```
proyecto-copilot/
├── index.html          # Archivo principal con toda la estructura HTML
├── styles.css          # Estilos CSS (diseño y responsividad)
├── script.js           # JavaScript (interactividad y diagramas Canvas)
└── README.md           # Este archivo
```

### Descripción de Archivos

- **index.html**: 
  - Estructura semántica HTML5
  - 5 secciones: Header, Inicio, Post 1, Post 2, Post 3
  - Integración de CSS y JavaScript
  - Canvas para visualizaciones
  - Tablas de comparación

- **styles.css**:
  - Más de 500 líneas de CSS puro (sin frameworks)
  - Variables CSS para colores y tamaños
  - Grid y Flexbox para layouts
  - Diseño responsivo con media queries
  - Estilos para impresión

- **script.js**:
  - Funciones de navegación entre posts
  - Algoritmos para dibujar en Canvas
  - Manejo de eventos de teclado
  - Animaciones y transiciones JavaScript
  - Visualización de BFS y DFS

## 🎓 Conceptos Cubiertos

### Fundamentales
- ✅ Definición de Grafos
- ✅ Vértices y Aristas
- ✅ Tipos de Grafos
- ✅ Grado de un Vértice
- ✅ Caminos y Ciclos

### Representación
- ✅ Lista de Adyacencia
- ✅ Matriz de Adyacencia
- ✅ Análisis de Complejidad Espacial y Temporal

### Algoritmos
- ✅ Búsqueda en Amplitud (BFS)
- ✅ Búsqueda en Profundidad (DFS)
- ✅ Comparación de Algoritmos
- ✅ Aplicaciones Prácticas

## 📊 Características Especiales

### Visualizaciones Interactivas
- Diagramas de grafos con Canvas
- Colores diferenciados para estados (visitado, no visitado, procesando)
- Indicadores de orden de visita
- Comparación visual de representaciones

### Contenido Didáctico
- Explicaciones paso a paso
- Pseudocódigo en formato legible
- Ejemplos prácticos y reales
- Tablas comparativas
- Resúmenes de características

### Diseño Accesible
- Colores de alto contraste
- Fuentes legibles y tamaños escalables
- Estructura semántica correcta
- Soporte para lectores de pantalla
- Imprimible con estilos optimizados

## 🔗 Integración con GitHub

Este proyecto está publicado en GitHub y puede ser consultado en:

**Repositorio**: https://github.com/juliangithu/proyecto-copilot

### Publicación con GitHub Pages

Para publicar este blog como sitio web estático:

1. **Desde GitHub Desktop o Git CLI**:
   ```bash
   git add .
   git commit -m "Versión inicial del blog sobre Grafos"
   git push origin main
   ```

2. **Activar GitHub Pages**:
   - Ir a: Settings → Pages
   - Seleccionar rama: `main`
   - Carpeta: `/ (root)`
   - Guardar cambios

3. **Acceder al sitio publicado**:
   - Tu blog estará disponible en: `https://juliangithu.github.io/proyecto-copilot/`

## 🛠️ Desarrollo y Mejoras Futuras

### Posibles Mejoras
- [ ] Agregar más algoritmos (Dijkstra, Floyd-Warshall, etc.)
- [ ] Implementar editor visual de grafos
- [ ] Agregar ejercicios interactivos
- [ ] Crear modo oscuro (dark mode)
- [ ] Agregar versión en otros idiomas
- [ ] Implementar tests unitarios
- [ ] Agregar más diagramas y visualizaciones

### Stack Tecnológico Actual
- HTML5 Semántico
- CSS3 (sin frameworks)
- JavaScript Vanilla (ES6+)
- Canvas API para gráficos

### Para Futuras Versiones
- React o Vue.js para componentes interactivos
- Three.js para visualizaciones 3D
- Testing con Jest
- Build tools (Webpack, Vite)

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

## ✍️ Autor

Desarrollado por: **Julian** como proyecto educativo  
Fecha: Diciembre 2025  
Repositorio: https://github.com/juliangithu/proyecto-copilot

## 📧 Contacto y Contribuciones

Para sugerencias, mejoras o reportar errores, puedes:
- Abrir un issue en GitHub
- Enviar un pull request con mejoras
- Contactar al autor del proyecto

---

**¡Gracias por visitar GraphBlog! Esperamos que este recurso te ayude a comprender mejor la estructura de datos Grafos.** 📚✨
