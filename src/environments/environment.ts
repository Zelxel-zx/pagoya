export const environment = {
  production: true,
  apiUrl: '/api',
  // Los endpoints de IA viven en /ai (no bajo /api). En prod, Netlify hace el proxy.
  aiUrl: '/ai',
};

