var menubar = require('menubar');
var chokidar = require('chokidar');
var config = require('./app/config.js');
var fs = require("fs");

var mb = menubar({
    'dir': 'app',
    'icon': './IconTemplate@2x.png',
    'index': config.watsonStateUrl,
    'tooltip': 'Watson',
    'preload-window': true,
    'height': 220
});

mb.on('ready', function ready () {
    console.log('app is ready');

    var updateIcon = function(mb, statePath){

        var content = fs.readFileSync(statePath);
        var state = JSON.parse(content);

        if(state.project)
            mb.tray.setImage('./IconTemplateRunning@2x.png');
        else
            mb.tray.setImage('./IconTemplate@2x.png');
    }

    // Watch watson state add reload the app upon change
    var watcher = chokidar.watch(config.watsonStateFile, {
        persistent: true
    });

    updateIcon(mb, config.watsonStateFile);

    watcher.on('change', function(path){
        console.log('watson state changed');
        mb.window.loadURL(config.watsonStateUrl);
        updateIcon(mb, config.watsonStateFile);
    });
});
