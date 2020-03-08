module.exports = {
  apps: [{
    name: 's365-device',
    script: './src/index.js',
    instances: 1,
    autorestart: true,
    watch: true,
    ignore_watch: ['node_modules', 'uploads', 'logs'],
    max_memory_restart: '3G'
  }]
};