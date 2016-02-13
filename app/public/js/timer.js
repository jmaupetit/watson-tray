/*
    Timer
 */

var initializeTimer = function(id, timestamp){

    var timer = document.getElementById(id);

    var timeinterval = setInterval(function(){

        var start = moment.unix(timestamp).utc();
        var now = moment.utc();
        var delta = now.diff(start);

        timer.innerHTML = moment.utc(delta).format('HH:mm:ss');
    }, 1000);
};
