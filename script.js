var progress = 0;
function prog() {
    document.getElementById("pb").style.width = progress + "%";
    progress++;
    if (progress > 100) {
        progress = 0;
    }
}
