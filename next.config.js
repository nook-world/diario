const withPWA = require('next-pwa');

const getEnv = (name, fallback = '') => {
  return process.env[name] || fallback;
}

module.exports = withPWA({
  env: {
    FATHOM_URL: getEnv('FATHOM_URL', '//isabelle.nook.world/main.js'),
    FATHOM_SITE_ID: getEnv('FATHOM_SITE_ID', 'OSVBX')
  },
  pwa: {
    dest: 'public'
  }
});
