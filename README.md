# ALO SISTEMAS - Landing Page

Landing page moderna y optimizada para ALO SISTEMAS, construida con **Vite + TypeScript**.

## 🚀 Características

- ⚡ **Vite** - Build ultra rápido
- 🎨 **Diseño moderno** - Inspirado en la carpeta rediseño
- 📱 **Responsive** - Adaptado a todos los dispositivos
- 🎯 **TypeScript** - Type-safe
- 🔄 **SPA Router** - Navegación sin recargas
- 🎭 **Componentes animados** - Terminal interactivo y más
- 📦 **Zero dependencies** - Solo Vite y Marked

## 📁 Estructura del Proyecto

```
alosite-simple/
├── src/
│   ├── components/      # Componentes TypeScript
│   │   └── Terminal.ts  # Componente terminal animado
│   ├── pages/           # Páginas de la aplicación
│   │   └── proyectos.ts # Página de proyectos
│   ├── styles/          # Estilos CSS
│   │   └── main.css     # Estilos principales
│   └── main.ts          # Punto de entrada + Router
├── public/              # Archivos estáticos
├── index.html           # HTML principal
└── vite.config.ts       # Configuración de Vite
```

## 🛠️ Comandos

### Desarrollo Local

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Build para Producción

```bash
npm run build
```

Los archivos se generan en la carpeta `dist/`.

### Preview de Producción

```bash
npm run preview
```

## 🚢 Despliegue a GitHub Pages

### Configuración Inicial

1. **Actualiza `vite.config.ts`:**
   ```ts
   base: '/tu-repositorio/', // Cambia esto por el nombre de tu repo
   ```

2. **Crea un repositorio en GitHub** y sube el código:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/tu-repositorio.git
   git push -u origin main
   ```

3. **Habilita GitHub Pages:**
   - Ve a: `Settings` > `Pages`
   - Source: `GitHub Actions`

4. **El workflow ya está configurado** (`.github/workflows/deploy.yml`)
   - Se desplegará automáticamente en cada push a `main`

### URL Final

Tu sitio estará disponible en:
```
https://tu-usuario.github.io/tu-repositorio/
```

## 📄 Páginas Disponibles

- **`/`** - Home con terminal animado y servicios
- **`/proyectos`** - Timeline de proyectos realizados
- **`/contacto`** - Información de contacto

## 🎨 Personalización

### Colores y Fuentes

Edita las variables CSS en `src/styles/main.css`:

```css
:root {
  --accent: #2D5FEE;        /* Color principal */
  --accent-2: #4d7aff;      /* Color secundario */
  --font-display: 'Space Grotesk';
  --font-body: 'Inter';
  --font-mono: 'JetBrains Mono';
}
```

### Contenido

- **Servicios:** Edita en `src/main.ts` función `renderHome()`
- **Proyectos:** Edita en `src/pages/proyectos.ts` array `projects`
- **Terminal:** Edita en `src/components/Terminal.ts` array `lines`

## 📝 Notas Importantes

- El router es SPA (Single Page Application)
- Las rutas usan `data-link` attribute para navegación
- El terminal se anima automáticamente en loop
- Responsive breakpoint en 768px

## 🔧 Troubleshooting

### El sitio no carga en GitHub Pages

1. Verifica que `base` en `vite.config.ts` coincida con el nombre del repo
2. Asegúrate de que GitHub Pages esté configurado con "GitHub Actions"
3. Revisa los logs en la pestaña "Actions" del repositorio

### Los enlaces no funcionan

- Asegúrate de usar `data-link` en los `<a>` tags
- Los href deben empezar con `/`

## 📚 Stack Tecnológico

- **Vite 8** - Build tool
- **TypeScript 6** - Lenguaje
- **Marked** - Markdown parser (para futuras extensiones)
- **CSS Moderno** - Variables, Grid, Flexbox

## 🤝 Contribuir

Este es un proyecto interno de ALO SISTEMAS.

## 📞 Contacto

**ALO SISTEMAS**
- 📱 +51 970 070 369
- ✉️ info@alosistemas.com
- 📍 Lima, Perú

---

Hecho con ❤️ por ALO SISTEMAS
