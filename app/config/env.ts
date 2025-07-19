// Environment configuration with fallbacks and type safety
export const config = {
  // API Configuration
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080',
    endpoints: {
      meals: import.meta.env.VITE_API_MEALS_ENDPOINT || '/api/v1/current/meals',
      submitOrder: import.meta.env.VITE_API_SUBMIT_ORDER_ENDPOINT || '/api/submit-order',
    },
  },
  
  // App Configuration
  app: {
    title: import.meta.env.VITE_APP_TITLE || 'Off the Fork',
    description: import.meta.env.VITE_APP_DESCRIPTION || 'Welcome to React Router!',
    devPort: import.meta.env.VITE_DEV_PORT || '5173',
  },
  
  // UI Configuration
  ui: {
    toastDuration: parseInt(import.meta.env.VITE_TOAST_DURATION_MS || '3000'),
    maxMealQuantity: parseInt(import.meta.env.VITE_MAX_MEAL_QUANTITY || '21'),
    defaultMealImage: import.meta.env.VITE_DEFAULT_MEAL_IMAGE || 'https://cdn-icons-png.flaticon.com/512/1377/1377194.png',
  },
  
  // External Resources
  external: {
    googleFonts: {
      url: import.meta.env.VITE_GOOGLE_FONTS_URL || 'https://fonts.googleapis.com',
      staticUrl: import.meta.env.VITE_GOOGLE_FONTS_STATIC_URL || 'https://fonts.gstatic.com',
    },
  },
} as const;

// Helper function to get full API URL
export const getApiUrl = (endpoint: string): string => {
  return `${config.api.baseUrl}${endpoint}`;
};

// Type exports for better type safety
export type Config = typeof config; 