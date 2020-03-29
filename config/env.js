export const ENV = process.env.NODE_ENV || 'development';
export const ENV_MODE_DEV = ENV === 'development';
export const ENV_MODE_PROD = ENV === 'production';

export const GOOGLE_ANALYTICS_ID = process.env.GOOGLE_ANALYTICS_ID || null;