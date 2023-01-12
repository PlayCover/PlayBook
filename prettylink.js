if (window.location.href.endsWith(".html")) {
    history.replaceState(null, "", window.location.href.slice(0, -5));
}