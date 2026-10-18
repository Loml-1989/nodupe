document.getElementById('closeBtn').addEventListener('click', async () => {
    const tabs = await browser.tabs.query({});
    const seenUrls = new Set();
    const tabIdToClose = [];

    for (const tab of tabs) {
        if (seenUrls.has(tab.url)) {
            tabIdToClose.push(tab.id);
        }
        else {
            seenUrls.add(tab.url);
        }
    }

    if (tabIdToClose.length > 0) {
        browser.tabs.remove(tabIdToClose);
    }
});