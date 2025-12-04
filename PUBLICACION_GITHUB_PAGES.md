# 🚀 Guía de Publicación en GitHub Pages

Este documento explica paso a paso cómo publicar GraphBlog en GitHub Pages para que sea accesible en línea.

## Requisitos Previos

1. Una cuenta de GitHub (gratuita en https://github.com)
2. Git instalado en tu computadora
3. El repositorio `proyecto-copilot` clonado o disponible

## Opción 1: Publicar con GitHub Pages (Recomendado)

### Paso 1: Configurar GitHub Pages en tu Repositorio

1. **Ve a tu repositorio** en GitHub:
   - Abre https://github.com/juliangithu/proyecto-copilot
   - O navega a tu repositorio en GitHub

2. **Accede a Settings (Configuración)**:
   - Haz clic en la pestaña **Settings**
   - En el menú izquierdo, desplázate hacia abajo
   - Busca y haz clic en **Pages**

3. **Configura la fuente de publicación**:
   - En "Source", selecciona:
     - **Branch**: `main` (o la rama donde está tu código)
     - **Folder**: `/ (root)` - la raíz del repositorio
   - Haz clic en **Save**

4. **Espera a que GitHub procese**:
   - GitHub tardará 1-2 minutos en generar tu sitio
   - Recibirás una notificación cuando esté listo

### Paso 2: Acceder a tu Blog Publicado

Tu blog estará disponible en:
```
https://juliangithu.github.io/proyecto-copilot/
```

Sustitúyete el nombre de usuario `juliangithu` por tu usuario de GitHub.

## Opción 2: Publicar Cambios Locales

Si ya tienes el repositorio clonado en tu máquina:

### Paso 1: Añadir todos los cambios

```bash
cd proyecto-copilot
git add .
```

### Paso 2: Crear un commit

```bash
git commit -m "Versión inicial del blog GraphBlog sobre Grafos"
```

### Paso 3: Subir los cambios a GitHub

```bash
git push origin main
```

Si te pide credenciales:
- **Usuario**: tu usuario de GitHub
- **Contraseña**: tu token de acceso personal (no tu contraseña de GitHub)

### Paso 4: Verificar la Publicación

- GitHub Pages se actualizará automáticamente
- Tu sitio estará disponible en: `https://juliangithu.github.io/proyecto-copilot/`

## Opción 3: Crear un Token de Acceso Personal (Si es necesario)

Si Git te pide autenticación:

1. **En GitHub**, ve a:
   - Settings → Developer settings → Personal access tokens → Tokens (classic)

2. **Haz clic en "Generate new token"**

3. **Configura el token**:
   - **Note**: "GraphBlog Publication"
   - **Expiration**: Selecciona una expiración adecuada
   - **Scopes**: Marca al menos `repo` y `workflow`

4. **Copia el token** y úsalo como contraseña cuando Git te lo pida

## Verificar que Todo Funcione

1. **Accede a tu blog**:
   - Abre `https://juliangithu.github.io/proyecto-copilot/`

2. **Prueba la funcionalidad**:
   - Los botones de navegación deben funcionar
   - Los diagramas Canvas deben mostrarse
   - Las tablas deben verse correctamente

3. **Prueba en dispositivos móviles**:
   - Abre el enlace en tu teléfono
   - Verifica que el diseño se adapte correctamente

## Solución de Problemas

### "404 - Página no encontrada"

- **Solución**: Espera 5-10 minutos a que GitHub Pages procese los cambios
- Verifica en Settings → Pages que la publicación esté activada

### Los cambios no aparecen

- **Solución**: Borra la caché del navegador (Ctrl + Shift + Del)
- O abre una nueva pestaña de incógnito

### Las rutas de archivos no funcionan

- **Solución**: Asegúrate de que los archivos HTML, CSS y JS estén en la raíz del repositorio
- No deben estar dentro de carpetas

### Canvas no se renderiza

- **Solución**: Abre la consola (F12) y busca mensajes de error
- Asegúrate de que `script.js` se está cargando correctamente

## Actualizar el Blog

Cuando hagas cambios locales:

```bash
# 1. Añade los cambios
git add .

# 2. Crea un commit
git commit -m "Descripción del cambio"

# 3. Sube a GitHub
git push origin main
```

Los cambios se publicarán automáticamente en 1-2 minutos.

## Personalización Opcional

### Cambiar la URL del Sitio

Si quieres que tu blog esté en la raíz de tu perfil (`https://juliangithu.github.io/`):

1. **Crea un nuevo repositorio** llamado: `juliangithu.github.io`
2. **Mueve los archivos** de `proyecto-copilot` a este nuevo repositorio
3. **Sigue los mismos pasos** de publicación en GitHub Pages

### Usar un Dominio Personalizado

Si tienes un dominio propio:

1. **En Settings → Pages**:
   - Añade tu dominio en "Custom domain"
   - Configura los DNS records según las instrucciones de GitHub

## Compartir tu Blog

Una vez publicado, puedes compartir estos enlaces:

- **Blog completo**: `https://juliangithu.github.io/proyecto-copilot/`
- **Repositorio**: `https://github.com/juliangithu/proyecto-copilot`

---

**¡Felicidades! Tu blog sobre Grafos está ahora publicado en internet.** 🎉
