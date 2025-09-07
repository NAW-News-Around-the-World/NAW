# 🌍 NAW: News Around the World

Una aplicación web moderna para mantenerse al día con las últimas noticias del mundo, construida con Angular 20 y Server-Side Rendering (SSR).

## 📋 Descripción

NAW es una plataforma de noticias que te mantiene informado sobre los acontecimientos más importantes a nivel global. La aplicación obtiene noticias en tiempo real de fuentes confiables y las presenta de manera organizada y atractiva.

## ✨ Características

- 📰 **Noticias destacadas**: Muestra las 3 noticias más recientes en una sección especial
- 🌐 **Cobertura global**: Noticias de todo el mundo ordenadas por fecha de publicación
- 📱 **Responsive**: Diseño adaptativo que funciona en dispositivos móviles y de escritorio
- ⚡ **Rendimiento optimizado**: Server-Side Rendering (SSR) para una carga rápida
- 🔄 **Actualización en tiempo real**: Datos frescos de la API de NewsAPI
- 🎨 **Interfaz moderna**: Diseño limpio con SCSS y componentes Angular

## 🛠️ Tecnologías Utilizadas

- **Framework**: Angular 20
- **Lenguaje**: TypeScript
- **Estilos**: SCSS
- **SSR**: Angular Universal
- **API**: NewsAPI (https://newsapi.org/)
- **HTTP Client**: Angular HttpClient
- **Estado**: Signals (Angular 17+)
- **Build**: Angular CLI

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** (viene incluido con Node.js)
- Una **clave API de NewsAPI** (obténla gratis en https://newsapi.org/)

## 🚀 Instalación

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd NAW
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura la API Key:**
   - Regístrate en [NewsAPI](https://newsapi.org/) para obtener tu clave gratuita
   - Abre `src/app/services/new.service.ts`
   - Reemplaza la clave existente en la línea 7:
     ```typescript
     private key = 'TU_CLAVE_API_AQUI';
     ```

## 💻 Uso

### Desarrollo

Para ejecutar la aplicación en modo desarrollo:

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200/`

### Producción

Para construir la aplicación para producción:

```bash
npm run build
```

Los archivos compilados se generarán en la carpeta `dist/NAW/`

### Server-Side Rendering

Para ejecutar con SSR en producción:

```bash
npm run serve:ssr:NAW
```

## 🏗️ Estructura del Proyecto

```
NAW/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   └── home/          # Página principal
│   │   ├── services/
│   │   │   └── new.service.ts # Servicio para obtener noticias
│   │   └── app.ts             # Componente raíz
│   ├── public/                # Assets estáticos
│   └── styles.scss            # Estilos globales
├── dist/                      # Archivos compilados (generado)
├── angular.json               # Configuración de Angular CLI
├── package.json               # Dependencias y scripts
└── tsconfig.json              # Configuración de TypeScript
```

## 📦 Despliegue

La aplicación está configurada para desplegarse fácilmente en plataformas como:

- **Vercel**
- **Netlify**
- **Firebase Hosting**
- **AWS S3 + CloudFront**
- Cualquier servidor que soporte Node.js

### Variables de Entorno

Para producción, configura la API Key como variable de entorno:

```bash
export NEWS_API_KEY=tu_clave_api
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Para contribuir:

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

Si tienes preguntas o sugerencias, no dudes en contactarme.

---

⭐ **¡Si te gusta este proyecto, dale una estrella!**
