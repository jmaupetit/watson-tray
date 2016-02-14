/*
    Configuration
 */

var config = new Object();

config.watsonDir = process.env['HOME'] + '/Library/Application\ Support/watson';
config.watsonStateFile = config.watsonDir + '/state';
config.watsonStateUrl = 'http://localhost:3000';

module.exports = config;
