
(function (doc, win) {
    function fn() {
        var docEl = doc.documentElement,
            clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
    }
    if (!doc.addEventListener) return;
    win.addEventListener('resize', fn);
    doc.addEventListener('DOMContentLoaded', fn);
})(document, window);