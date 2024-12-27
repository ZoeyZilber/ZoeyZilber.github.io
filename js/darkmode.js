function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('darkmode');

    localStorage.setItem('darkmode', isDarkMode ? 'enabled' : 'disabled');
}

window.onload = function () {
    const darkModeSetting = localStorage.getItem('darkmode');
    if (darkModeSetting === 'enabled') {
        document.body.classList.add('darkmode');
    }
};
