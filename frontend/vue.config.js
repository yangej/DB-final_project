const path = require('path');

module.exports = {
    transpileDependencies: ['vuetify'],
    chainWebpack: (config) => {
        config.resolve.alias.set('@', path.resolve(__dirname, 'src/'));
    },
};
