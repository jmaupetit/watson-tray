var menubar = require('menubar');

var mb = menubar({
    'dir': 'app',
    'tooltip': 'Watson',
    'height:': 200
});

mb.on('ready', function ready () {
    console.log('app is ready');

    var exec = require('child_process').exec;

    function puts(error, stdout, stderr) { console.log(stdout) }

    exec("watson status", puts);
});
