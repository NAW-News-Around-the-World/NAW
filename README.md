# 🌍 NAW: News Around the World

[![Angular](https://img.shields.io/badge/Angular-20-red.svg)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![SSR](https://img.shields.io/badge/SSR-Angular%20Universal-green.svg)](https://angular.io/guide/universal)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern, high-performance web application to stay up-to-date with the latest global news, built with **Angular 20** and **Server-Side Rendering (SSR)**. It provides a smooth user experience with support for multiple languages and dark mode.

## 📋 Description

**NAW (News Around the World)** is a news platform that keeps you informed about the most important global events. The app fetches real-time news from reliable sources and presents them in an organized and attractive way, supporting both English and Spanish.

### 🎯 Key Features

* 📰 **Featured News**: Shows the 4 latest news articles in a special section
* 🌐 **Global Coverage**: News from around the world sorted by publication date
* 🌍 **Multilingual**: Support for English and Spanish with separate routes
* 📱 **Fully Responsive**: Adaptive design working perfectly on all devices
* ⚡ **Optimized Performance**: Server-Side Rendering (SSR) for ultra-fast loading
* 🔄 **Real-Time Data**: Automatic updates from the NewsAPI
* 🌙 **Dark Mode**: Toggle between light and dark themes with localStorage persistence
* 🎨 **Modern UI**: Clean, professional design using Angular Material
* 📄 **Smart Pagination**: Progressive news loading with a "Load More" button
* 🔍 **SEO Optimized**: Meta tags and structure optimized for search engines

## 🛠️ Tech Stack

### Frontend

* **Framework**: Angular 20 (Standalone Components)
* **Language**: TypeScript 5.9
* **Styles**: SCSS with custom CSS variables
* **UI Components**: Angular Material 20
* **State Management**: Angular Signals (reactive)
* **Routing**: Angular Router with lazy loading

### Backend & Rendering

* **SSR**: Angular Universal (Angular SSR)
* **Server**: Express.js 5.1
* **Build**: Angular CLI with optimizations

### APIs & Services

* **News API**: NewsAPI.org for real-time news
* **HTTP Client**: Angular HttpClient with interceptors
* **Storage**: localStorage for user preferences

### Development Tools

* **Testing**: Jasmine + Karma
* **Linting**: Prettier with custom configuration
* **Type Checking**: TypeScript strict mode
* **Package Manager**: npm

## 📦 Dependencies

### Production Dependencies

```json
{
  "@angular/cdk": "^20.2.7",
  "@angular/common": "^20.2.0",
  "@angular/compiler": "^20.2.0",
  "@angular/core": "^20.2.0",
  "@angular/forms": "^20.2.0",
  "@angular/material": "^20.2.7",
  "@angular/platform-browser": "^20.2.0",
  "@angular/platform-server": "^20.2.0",
  "@angular/router": "^20.2.0",
  "@angular/ssr": "^20.2.1",
  "express": "^5.1.0",
  "rxjs": "~7.8.0"
}
```

### Development Dependencies

```json
{
  "@angular/cli": "^20.2.1",
  "@types/express": "^5.0.1",
  "@types/jasmine": "~5.1.0",
  "@types/node": "^20.17.19",
  "jasmine-core": "~5.9.0",
  "karma": "~6.4.0",
  "karma-chrome-launcher": "~3.2.0",
  "karma-coverage": "~2.2.0",
  "karma-jasmine": "~5.1.0",
  "karma-jasmine-html-reporter": "~2.1.0",
  "typescript": "~5.9.2"
}
```

## 📋 Prerequisites

Before getting started, make sure you have installed:

* **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
* **npm** (included with Node.js)
* **Git** - [Download](https://git-scm.com/)
* A **NewsAPI key** (free at [newsapi.org](https://newsapi.org/))

## 🚀 Installation and Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd NAW
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure the API Key

#### Option A: Direct Configuration (Development)

1. Register at [NewsAPI](https://newsapi.org/) to get your free API key
2. Open `src/app/services/new.service.ts`
3. Replace the existing key on line 6:

   ```typescript
   private key = 'YOUR_API_KEY_HERE';
   ```

#### Option B: Environment Variables (Recommended for Production)

1. Create a `.env` file at the project root:

   ```bash
   NEWS_API_KEY=your_api_key_here
   ```
2. Modify the service to use the environment variable:

   ```typescript
   private key = process.env['NEWS_API_KEY'] || 'default_key';
   ```

## 💻 Usage & Commands

### Development

```bash
# Development server with hot reload
npm start
# or
ng serve

# Server on a specific port
ng serve --port 4201

# Server with production configuration
ng serve --configuration production
```

App will be available at `http://localhost:4200/`

### Build

```bash
# Build for development
npm run build

# Production build (optimized)
ng build --configuration production

# Build with bundle analysis
ng build --stats-json
```

### Testing

```bash
# Run unit tests
npm test
# or
ng test

# Run tests with coverage
ng test --code-coverage

# Watch mode
ng test --watch
```

### Server-Side Rendering

```bash
# Run SSR in production
npm run serve:ssr:NAW

# Build for SSR
ng build --configuration production
```

## 🏗️ Project Architecture

```
NAW/
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📁 components/           # Reusable components
│   │   │   ├── 📁 context/
│   │   │   │   └── 📁 theme/
│   │   │   │       └── 📁 dark-mode/    # Dark mode toggle
│   │   │   └── 📁 menu/                 # Main navigation
│   │   ├── 📁 pages/                # Application pages
│   │   │   ├── 📁 footer/               # Footer
│   │   │   └── 📁 home/                 # Home page
│   │   │       ├── 📁 es/               # Spanish version
│   │   │       ├── home.html            # Main template
│   │   │       ├── home.scss            # Component styles
│   │   │       └── home.ts              # Component logic
│   │   ├── 📁 services/             # Application services
│   │   │   └── new.service.ts           # News service
│   │   ├── 📁 widgets/              # Specialized widgets
│   │   │   └── 📁 weather/              # Weather widget (future)
│   │   ├── app.config.ts            # App configuration
│   │   ├── app.config.server.ts     # SSR configuration
│   │   ├── app.html                 # Main template
│   │   ├── app.routes.ts            # App routes
│   │   ├── app.routes.server.ts     # SSR routes
│   │   ├── app.scss                 # Global styles
│   │   └── app.ts                   # Root component
│   ├── 📁 assets/                   # Static assets
│   │   └── 📁 img/
│   │       └── nawlogo.ico          # App logo
│   ├── index.html                   # Main HTML
│   ├── main.ts                      # Entry point
│   ├── main.server.ts               # SSR entry point
│   ├── server.ts                    # Express server
│   └── styles.scss                  # Global styles
├── 📁 dist/                         # Compiled files (generated)
├── 📁 public/                       # Public assets
├── 📁 node_modules/                 # Dependencies (generated)
├── angular.json                     # Angular CLI config
├── package.json                     # Dependencies & scripts
├── tsconfig.json                    # TypeScript config
├── tsconfig.app.json                # TS config for app
├── tsconfig.spec.json               # TS config for tests
└── README.md                        # This file
```

## 🔧 Advanced Configuration

### Angular Material Theme

The project uses Angular Material with a custom theme. Styles are located at:

* `src/styles.scss` - Global variables and base theme
* `src/app/app.scss` - Application-specific styles

### SSR Configuration

Server-Side Rendering configuration is located at:

* `src/app/app.config.server.ts` - Server configuration
* `src/server.ts` - Custom Express server
* `angular.json` - Build configuration for SSR

### Routing

Routes are configured in `src/app/app.routes.ts`:

* `/` → Redirects to `/home`
* `/home` → Home page (English)
* `/home/es` → Home page (Spanish)

## 📦 Deployment

### Recommended Platforms

#### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Netlify

```bash
# Build project
npm run build

# Upload dist/ folder to Netlify
```

#### Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Initialize project
firebase init hosting

# Deploy
firebase deploy
```

### Production Environment Variables

Set the following variables on your deployment platform:

```bash
NEWS_API_KEY=your_newsapi_key
NODE_ENV=production
```

### Docker (Optional)

```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 4000
CMD ["npm", "run", "serve:ssr:NAW"]
```

## 🧪 Testing

### Test Structure

```
src/
├── app/
│   ├── components/
│   │   └── dark-mode/
│   │       └── dark-mode.spec.ts
│   ├── pages/
│   │   ├── footer/
│   │   │   └── footer.spec.ts
│   │   └── home/
│   │       ├── home.spec.ts
│   │       └── es/
│   │           └── es.spec.ts
│   └── app.spec.ts
```

### Testing Commands

```bash
# Unit tests
npm test

# Tests with coverage
npm run test:coverage

# Watch mode
npm run test:watch

# E2E tests (if implemented)
npm run e2e
```

## 🚀 Roadmap & Future Improvements

* [ ] **Weather Widget**: Integration with weather API
* [ ] **News Categories**: Filtering by categories (tech, sports, etc.)
* [ ] **Search**: News search functionality
* [ ] **Favorites**: Save favorite news
* [ ] **Push Notifications**: Alerts for important news
* [ ] **PWA**: Convert to Progressive Web App
* [ ] **E2E Testing**: Implement Cypress or Playwright
* [ ] **Internationalization**: Support for more languages
* [ ] **Caching**: Advanced caching strategies
* [ ] **Analytics**: Google Analytics integration

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork** the project
2. **Create** a branch for your feature (`git checkout -b feature/new-feature`)
3. **Commit** your changes (`git commit -am 'Add new feature'`)
4. **Push** the branch (`git push origin feature/new-feature`)
5. **Open** a Pull Request

### Contribution Guidelines

* Follow established code conventions
* Add tests for new features
* Update documentation when necessary
* Use descriptive commits following [Conventional Commits](https://www.conventionalcommits.org/)

## 🐛 Reporting Bugs

If you find a bug:

1. Check if it has already been reported in [Issues](https://github.com/NAW-News-Around-the-World/NAW/issues)
2. Create a new issue including:

   * Detailed description of the problem
   * Steps to reproduce
   * Screenshots (if applicable)
   * Environment information (browser, OS, etc.)

## 📄 License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

## 👥 Contributors

* **Izhan Lara** - *Initial development* - [GitHub](https://github.com/izhanlaraagarcia)

---