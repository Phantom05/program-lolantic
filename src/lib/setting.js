export const ENV = process.env.NODE_ENV || 'development';
export const ENV_MODE_DEV = ENV  === 'development';
export const ENV_MODE_PROD = ENV === 'production';
export const apiAddress = ENV_MODE_DEV ? `http://127.0.0.1:9999` :`http://127.0.0.1:9999`;





// export const ENV_MODE_DEV = ENV_MODE_DEV;
// export const ENV_MODE_PROD = ENV_MODE_PROD;

