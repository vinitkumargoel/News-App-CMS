const gConfig = require('../config/globalConfig.json');
const path = require('path');

const config = {
    globalConfig : gConfig,
    CLIENT_ROOTPATH : path.resolve('Client/')
};

module.exports = config; 