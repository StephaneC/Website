var lastdisplayed;
const displaySample = (toDisplay) => {
    if (lastdisplayed) {
        lastdisplayed.style.display = 'none';
    }
    //document.getElementsByClass('toDisplay').style.display = 'block';
    lastdisplayed = document.getElementById(toDisplay);
    lastdisplayed.style.display = 'flex';
}