document.querySelector('a').addEventListener('click', function () {
    NProgress.start();
});

// When the new page is fully loaded, complete the progress bar
window.addEventListener('load', function () {
    NProgress.done();
});