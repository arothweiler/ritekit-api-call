require('dotenv').config();

module.exports = {
  NODE_ENV: '"production"',
  CLIENT_ID: JSON.stringify(process.env.CLIENT_ID),
};
