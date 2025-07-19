# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Environment Configuration

Copy the example environment file and configure it for your environment:

```bash
# Copy the example file
cp env.example .env.development

# For production, copy and modify as needed
cp env.example .env.production
```

#### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API base URL | `http://localhost:8080` |
| `VITE_API_MEALS_ENDPOINT` | Meals API endpoint | `/api/v1/current/meals` |
| `VITE_API_SUBMIT_ORDER_ENDPOINT` | Order submission endpoint | `/api/submit-order` |
| `VITE_DEV_PORT` | Development server port | `5173` |
| `VITE_TOAST_DURATION_MS` | Toast notification duration | `3000` |
| `VITE_MAX_MEAL_QUANTITY` | Maximum meal quantity selector | `21` |
| `VITE_APP_TITLE` | Application title | `Off the Fork` |
| `VITE_APP_DESCRIPTION` | Application description | `Welcome to React Router!` |
| `VITE_DEFAULT_MEAL_IMAGE` | Default meal image URL | CDN URL |
| `VITE_GOOGLE_FONTS_URL` | Google Fonts URL | `https://fonts.googleapis.com` |
| `VITE_GOOGLE_FONTS_STATIC_URL` | Google Fonts static URL | `https://fonts.gstatic.com` |

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:${VITE_DEV_PORT}`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
