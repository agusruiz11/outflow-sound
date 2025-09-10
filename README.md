# Outflow Horizons Export

## Descripción
Proyecto web desarrollado con React y Vite para Outflow Horizons, una empresa especializada en servicios de exportación. El sitio incluye un sistema avanzado de visualización de audio y una interfaz moderna y responsiva.

## Tecnologías Utilizadas

- **Frontend**: React 18 + Vite
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Base de datos**: Supabase
- **Autenticación**: Supabase Auth
- **Iconos**: Lucide React

## Características Principales

### 🎵 Sistema de Visualización de Audio
- Equalizador animado con múltiples efectos
- Ondas de sonido CSS puras
- Partículas flotantes y círculos concéntricos
- Sistema de presets predefinidos
- Controlador automático según hora del día

### 🎨 Diseño Moderno
- Interfaz responsiva y elegante
- Efectos de ondas y animaciones sutiles
- Tema adaptable con múltiples variaciones de color
- Componentes UI reutilizables

### 🔐 Autenticación
- Sistema de login/registro con Supabase
- Formularios de contacto integrados
- Gestión de usuarios

## Instalación y Desarrollo

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/agusruiz11/outflow-sound.git
cd outflow-sound
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
Crear archivo `.env.local` con:
```env
VITE_SUPABASE_URL=tu_supabase_url
VITE_SUPABASE_ANON_KEY=tu_supabase_anon_key
```

4. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

5. **Abrir en el navegador**
Visitar `http://localhost:5173`

## Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Preview del build
- `npm run lint` - Linter de código

## Despliegue en Hostinger

### Pasos para subir a Hostinger:

1. **Crear build de producción**
```bash
npm run build
```

2. **Acceder al File Manager de Hostinger**
   - Ir a [hpanel.hostinger.com](https://hpanel.hostinger.com)
   - Abrir "File Manager"

3. **Subir archivos**
   - Navegar a la carpeta `public_html`
   - Subir **todos** los archivos de la carpeta `dist/`:
     - `index.html`
     - Carpeta `assets/` (CSS y JS)
     - Carpeta `images/` (imágenes)
     - `llms.txt`

4. **Configurar para React Router** (si es necesario)
Crear archivo `.htaccess` en `public_html`:
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### Actualizaciones futuras:
1. Ejecutar `npm run build`
2. Subir nuevos archivos de `dist/` a Hostinger

## Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes UI reutilizables
│   ├── AudioVisualizer.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   └── ...
├── contexts/           # Contextos de React
├── lib/               # Utilidades y configuración
├── styles/            # Estilos CSS adicionales
└── main.jsx           # Punto de entrada
```

## Componentes Principales

- **AudioVisualizer**: Sistema completo de visualización de audio
- **Hero**: Sección principal con efectos de fondo
- **Services**: Catálogo de servicios
- **ContactForm**: Formulario de contacto integrado
- **Header/Footer**: Navegación y pie de página

## Personalización

### Temas de visualización
```jsx
// Temas disponibles
theme: 'purple' | 'blue' | 'pink' | 'mixed'

// Intensidades disponibles
intensity: 'low' | 'medium' | 'high'
```

### Presets predefinidos
- `hero`: Efecto completo para sección principal
- `services`: Efecto sutil para contenido
- `contact`: Efecto intenso para CTAs
- `about`: Efecto suave para información
- `minimal`: Efecto mínimo
- `party`: Efecto máximo festivo

## Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Contacto

- **Desarrollador**: Agustin M. Ruiz
- **Email**: agustinmruiz29@gmail.com
- **GitHub**: [@agusruiz11](https://github.com/agusruiz11)

---

Para más detalles sobre el sistema de visualización de audio, consultar [README-AudioVisualizer.md](./README-AudioVisualizer.md)
