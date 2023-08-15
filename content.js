let replacementCount = 0;

function replaceText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        const matches = node.textContent.match(/Winston/g);
        if (matches) {
            replacementCount += matches.length;
            node.textContent = node.textContent.replace(/Winston/g, 'Winton');
        }
    } else {
        for (let i = 0; i < node.childNodes.length; i++) {
            replaceText(node.childNodes[i]);
        }
    }
}

browser.storage.local.get('isEnabled', function(data) {
    if (data.isEnabled !== undefined ? data.isEnabled : true) {
        replaceText(document.body);
        browser.storage.local.set({replacementCount: replacementCount});
    }
});

