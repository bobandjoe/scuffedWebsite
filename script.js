var progress = 0;


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

progCont();



