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

#### Option A: Direct Configuration (Development) (Only to see the news)

1. Register at [NewsAPI](https://newsapi.org/) to get your free API key
2. Open `src/app/services/new.service.ts`
3. Replace the existing key on line 6:

   ```typescript
   private key = 'YOUR_API_KEY_HERE';
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

## 📋 Prerequisites

Before getting started, make sure you have installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (included with Node.js)
- **Git** - [Download](https://git-scm.com/)
- **NewsAPI key** (free at [newsapi.org](https://newsapi.org/)) (Only in case we need work on news feature)
- **Weather Key** (free at [openweathermap.org](https://openweathermap.org/)) (Only in case we need work on weather feature/widget)