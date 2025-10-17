// Load the base config from app.json
const appJson = require('./app.json');

// Export the config directly - RN 0.79 supports all Expo SDK 53 features natively
module.exports = appJson.expo;
