var menubar = require('menubar');

var mb = menubar({
    'dir': 'app',
    'index': 'http://localhost:3000',
    'tooltip': 'Watson',
    'preload-window': true,
    'height': 220
});

mb.on('ready', function ready () {
    console.log('app is ready');

    var exec = require('child_process').exec;

    function puts(error, stdout, stderr) { console.log(stdout) }

    exec("watson status", puts);
});
