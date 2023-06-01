export default {
    isProduction: process.env.NODE_ENV === 'production',
    PORT: process.env.PORT,
    PROD_URL: process.env.PROD_URL,
    BOT_TOKEN: process.env.BOT_TOKEN,
};