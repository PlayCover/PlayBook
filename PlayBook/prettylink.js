if (window.location.href.endsWith(".html")) {
    history.replaceState(null, "", window.location.href.slice(0, -5));
}

window.onload = function() {
    const anchors = document.getElementById("a");

    for (let i = 0; i < anchors.length; i++) {
        if (anchors[i].href.endsWith(".html")) {
            anchors[i].href= anchors[i].href.slice(0, -5);
        }
    }
}