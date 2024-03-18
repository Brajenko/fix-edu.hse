function readableTitles() {
    const index = document.title.indexOf(':');
    if (index !== -1) {
        document.title = document.title.substring(index + 1).trim();
    }
}

readableTitles();