function AutoOpenLink() {
    const url = document.querySelector('.urlworkaround').querySelector('a').href;
    window.open(url);
    // chrome.tabs.create({url: url});
}

AutoOpenLink()