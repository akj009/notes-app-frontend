import colors from 'colors';

/* eslint-disable no-console */
let envMode = process.env.NODE_ENV || 'dev';
console.log(`:::: starting server in ${envMode} mode`.green);
