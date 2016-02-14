var menubar = require('menubar');
var chokidar = require('chokidar');
var config = require('./app/config.js');

var mb = menubar({
    'dir': 'app',
    'index': config.watsonStateUrl,
    'tooltip': 'Watson',
    'preload-window': true,
    'height': 220
});

mb.on('ready', function ready () {
    console.log('app is ready');

    // Watch watson state add reload the app upon change
    var watcher = chokidar.watch(config.watsonStateFile, {
        persistent: true
    });

    watcher.on('change', function(path){
        console.log('watson state changed');
        mb.window.loadURL(config.watsonStateUrl);
    });
});
