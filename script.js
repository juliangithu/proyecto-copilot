/* ===========================
   FUNCIONALIDAD DE NAVEGACIÓN
   =========================== */

// Función para mostrar un post específico
function showPost(postId) {
    // Ocultar todos los posts
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        post.classList.remove('active');
    });

    // Mostrar el post seleccionado
    const selectedPost = document.getElementById(postId);
    if (selectedPost) {
        selectedPost.classList.add('active');
    }

    // Actualizar enlaces de navegación activos
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick').includes(postId)) {
            link.classList.add('active');
        }
    });

    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar el post de inicio por defecto
document.addEventListener('DOMContentLoaded', () => {
    showPost('inicio');
    
    // Dibujar diagramas
    drawGraphDiagram1();
    drawGraphDiagram2();
    drawBFSDiagram();
    drawDFSDiagram();
});

/* ===========================
   DIAGRAMAS CON CANVAS - POST 1
   =========================== */

function drawGraphDiagram1() {
    const canvas = document.getElementById('canvas1');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Limpiar canvas
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    // Datos del grafo: posiciones de nodos
    const nodes = {
        A: { x: 300, y: 50 },
        B: { x: 100, y: 150 },
        C: { x: 500, y: 150 },
        D: { x: 150, y: 300 },
        E: { x: 450, y: 300 }
    };

    // Aristas del grafo
    const edges = [
        ['A', 'B'],
        ['A', 'C'],
        ['B', 'C'],
        ['B', 'D'],
        ['C', 'E'],
        ['D', 'E']
    ];

    // Dibujar aristas
    ctx.strokeStyle = '#2563eb';
    ctx.lineWidth = 2;
    edges.forEach(edge => {
        const start = nodes[edge[0]];
        const end = nodes[edge[1]];
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
    });

    // Dibujar nodos
    const nodeRadius = 30;
    Object.keys(nodes).forEach(nodeName => {
        const node = nodes[nodeName];

        // Círculo del nodo
        ctx.fillStyle = '#06b6d4';
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius, 0, 2 * Math.PI);
        ctx.fill();

        // Borde del nodo
        ctx.strokeStyle = '#0891b2';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Etiqueta del nodo
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 18px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(nodeName, node.x, node.y);
    });

    // Información del grafo
    ctx.fillStyle = '#1e293b';
    ctx.font = '14px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Nodos: A, B, C, D, E (Total: 5)', 20, height - 30);
    ctx.fillText('Aristas: A-B, A-C, B-C, B-D, C-E, D-E (Total: 6)', 20, height - 10);
}

/* ===========================
   DIAGRAMAS CON CANVAS - POST 2
   =========================== */

function drawGraphDiagram2() {
    const canvas = document.getElementById('canvas2');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Limpiar canvas
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    // Datos del grafo
    const nodes = {
        A: { x: 150, y: 40 },
        B: { x: 60, y: 120 },
        C: { x: 240, y: 120 },
        D: { x: 80, y: 220 },
        E: { x: 220, y: 220 }
    };

    const edges = [
        ['A', 'B'],
        ['A', 'C'],
        ['B', 'C'],
        ['B', 'D'],
        ['C', 'E']
    ];

    // Dibujar aristas
    ctx.strokeStyle = '#2563eb';
    ctx.lineWidth = 1.5;
    edges.forEach(edge => {
        const start = nodes[edge[0]];
        const end = nodes[edge[1]];
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
    });

    // Dibujar nodos
    const nodeRadius = 20;
    Object.keys(nodes).forEach(nodeName => {
        const node = nodes[nodeName];

        ctx.fillStyle = '#06b6d4';
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius, 0, 2 * Math.PI);
        ctx.fill();

        ctx.strokeStyle = '#0891b2';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(nodeName, node.x, node.y);
    });

    // Leyenda
    ctx.fillStyle = '#1e293b';
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Mismo grafo usado para ambas representaciones', 10, height - 15);
}

/* ===========================
   DIAGRAMAS CON CANVAS - BFS
   =========================== */

function drawBFSDiagram() {
    const canvas = document.getElementById('canvas3');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Limpiar canvas
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, height, height);

    // Datos del grafo
    const nodes = {
        A: { x: 300, y: 50, level: 0 },
        B: { x: 100, y: 150, level: 1 },
        C: { x: 500, y: 150, level: 1 },
        D: { x: 150, y: 300, level: 2 },
        E: { x: 450, y: 300, level: 2 }
    };

    const edges = [
        ['A', 'B'],
        ['A', 'C'],
        ['B', 'C'],
        ['B', 'D'],
        ['C', 'E']
    ];

    // Orden de visita BFS
    const visitOrder = ['A', 'B', 'C', 'D', 'E'];
    const colors = {
        A: '#10b981', // Verde (visitado primero)
        B: '#06b6d4', // Cyan
        C: '#06b6d4', // Cyan
        D: '#f59e0b', // Amarillo
        E: '#f59e0b'  // Amarillo
    };

    // Dibujar aristas
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 2;
    edges.forEach(edge => {
        const start = nodes[edge[0]];
        const end = nodes[edge[1]];
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();

        // Flecha para indicar dirección de recorrido
        const angle = Math.atan2(end.y - start.y, end.x - start.x);
        const arrowSize = 8;
        const midX = (start.x + end.x) / 2;
        const midY = (start.y + end.y) / 2;

        ctx.fillStyle = '#cbd5e1';
        ctx.beginPath();
        ctx.moveTo(midX, midY);
        ctx.lineTo(midX - arrowSize * Math.cos(angle - Math.PI / 6), midY - arrowSize * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(midX - arrowSize * Math.cos(angle + Math.PI / 6), midY - arrowSize * Math.sin(angle + Math.PI / 6));
        ctx.fill();
    });

    // Dibujar nodos
    const nodeRadius = 30;
    Object.keys(nodes).forEach(nodeName => {
        const node = nodes[nodeName];
        const visitIndex = visitOrder.indexOf(nodeName);

        // Círculo del nodo
        ctx.fillStyle = colors[nodeName];
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius, 0, 2 * Math.PI);
        ctx.fill();

        // Borde del nodo
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Etiqueta del nodo
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 18px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(nodeName, node.x, node.y);

        // Orden de visita
        ctx.fillStyle = '#1e293b';
        ctx.font = 'bold 12px Arial';
        ctx.fillText(`(${visitIndex + 1})`, node.x, node.y + nodeRadius + 18);
    });

    // Leyenda
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Visualización de BFS', 20, 30);

    ctx.font = '12px Arial';
    ctx.fillText('Orden de visita: A → B → C → D → E', 20, 360);
    ctx.fillText('Estructura: Cola (Queue)', 20, 378);

    // Indicadores de niveles
    ctx.fillStyle = '#10b981';
    ctx.fillRect(350, 335, 15, 15);
    ctx.fillStyle = '#1e293b';
    ctx.font = '12px Arial';
    ctx.fillText('Nivel 0', 370, 345);

    ctx.fillStyle = '#06b6d4';
    ctx.fillRect(480, 335, 15, 15);
    ctx.fillText('Nivel 1', 500, 345);
}

/* ===========================
   DIAGRAMAS CON CANVAS - DFS
   =========================== */

function drawDFSDiagram() {
    const canvas = document.getElementById('canvas4');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Limpiar canvas
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    // Datos del grafo
    const nodes = {
        A: { x: 300, y: 50 },
        B: { x: 100, y: 150 },
        C: { x: 500, y: 150 },
        D: { x: 150, y: 300 },
        E: { x: 450, y: 300 }
    };

    const edges = [
        ['A', 'B'],
        ['A', 'C'],
        ['B', 'C'],
        ['B', 'D'],
        ['C', 'E']
    ];

    // Orden de visita DFS
    const visitOrder = ['A', 'B', 'D', 'C', 'E'];
    const colors = {
        A: '#10b981',
        B: '#06b6d4',
        D: '#f59e0b',
        C: '#8b5cf6',
        E: '#ec4899'
    };

    // Dibujar aristas
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 2;
    edges.forEach(edge => {
        const start = nodes[edge[0]];
        const end = nodes[edge[1]];
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
    });

    // Dibujar el camino DFS en orden
    ctx.strokeStyle = '#ff6b6b';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    for (let i = 0; i < visitOrder.length - 1; i++) {
        const current = nodes[visitOrder[i]];
        const next = nodes[visitOrder[i + 1]];
        ctx.beginPath();
        ctx.moveTo(current.x, current.y);
        ctx.lineTo(next.x, next.y);
        ctx.stroke();
    }
    ctx.setLineDash([]);

    // Dibujar nodos
    const nodeRadius = 30;
    Object.keys(nodes).forEach(nodeName => {
        const node = nodes[nodeName];
        const visitIndex = visitOrder.indexOf(nodeName);

        // Círculo del nodo
        ctx.fillStyle = colors[nodeName];
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius, 0, 2 * Math.PI);
        ctx.fill();

        // Borde del nodo
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Etiqueta del nodo
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 18px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(nodeName, node.x, node.y);

        // Orden de visita
        ctx.fillStyle = '#1e293b';
        ctx.font = 'bold 12px Arial';
        ctx.fillText(`(${visitIndex + 1})`, node.x, node.y + nodeRadius + 18);
    });

    // Leyenda
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Visualización de DFS', 20, 30);

    ctx.font = '12px Arial';
    ctx.fillText('Orden de visita: A → B → D → C → E', 20, 360);
    ctx.fillText('Estructura: Pila (Stack) / Recursión', 20, 378);

    // Indicador de camino
    ctx.strokeStyle = '#ff6b6b';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(350, 335);
    ctx.lineTo(380, 335);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillText('Camino DFS', 390, 340);
}

/* ===========================
   FUNCIONALIDADES ADICIONALES
   =========================== */

// Mejorar interactividad con teclado
document.addEventListener('keydown', (e) => {
    const posts = ['inicio', 'post1', 'post2', 'post3'];
    const currentPost = posts.find(p => document.getElementById(p).classList.contains('active'));
    const currentIndex = posts.indexOf(currentPost);

    if (e.key === 'ArrowRight' && currentIndex < posts.length - 1) {
        showPost(posts[currentIndex + 1]);
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        showPost(posts[currentIndex - 1]);
    }
});

// Scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Mostrar mensaje de bienvenida en consola
console.log('%c📊 ¡Bienvenido a GraphBlog!', 'font-size: 20px; color: #2563eb; font-weight: bold;');
console.log('%cBlog educativo sobre Grafos', 'font-size: 14px; color: #06b6d4;');
console.log('Repositorio: https://github.com/juliangithu/proyecto-copilot');
