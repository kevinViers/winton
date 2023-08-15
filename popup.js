let isEnabled = false;

document.getElementById('toggle').addEventListener('change', function(event) {
    isEnabled = event.target.checked;
    if (isEnabled) {
        browser.tabs.executeScript({
            code: 'replaceText(document.body);'
        });
    }
});

browser.storage.local.get('replacementCount', function(data) {
    document.getElementById('count').textContent = data.replacementCount || 0;
});

browser.storage.local.get('isEnabled', function(data) {
    document.getElementById('toggle').checked = data.isEnabled !== undefined ? data.isEnabled : true;
});

