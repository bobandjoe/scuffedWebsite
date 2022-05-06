var progress = 0;
var c = document.getElementById("canvas");
var ctx = c.getContext('2d');
var img = new Image();
img.src = 'donateButton.png';


function prog() {
    document.getElementById("pb").style.width = progress + "%";
    progress += 1;
    if (progress > 50) {
        document.getElementById("pbp").innerHTML = "I mean, what?";
    } else {
        document.getElementById("pbp").innerHTML = "Downloading virus...";
    }
    if (progress > 100) {
        progress = 0;
    }
}

function progCont() {
    var interval = setInterval(prog, 100);
}

window.onload = function() {
    var cursorX;
    var cursorY;
    document.onmousemove = function(e) {
        cursorX = e.pageX;
        cursorY = e.pageY;
    }
    ctx.drawImage(img, cursorX, cursorY);
}

progCont();



