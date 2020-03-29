import { ENV } from './env';

export const ENV_MODE_DEV = ENV  === 'development';
export const ENV_MODE_PROD = ENV === 'production';

export const isProduction = ENV === 'production';
export const isDebug = ENV === 'development';
export const isClient = typeof window !== 'undefined';

export const apiEndpoint = isDebug ? 'http://localhost:9999' : 'https://demo-reactgo.herokuapp.com';

export const apiAddress = ENV_MODE_DEV ? `http://127.0.0.1:9999` :`http://127.0.0.1:9999`;

// Replace with 'UA-########-#' or similar to enable tracking
export const trackingID = null;
