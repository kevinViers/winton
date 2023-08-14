let isEnabled = false;

document.getElementById('toggle').addEventListener('change', function(event) {
    isEnabled = event.target.checked;
    if (isEnabled) {
        // Send message to content script to replace text
        browser.tabs.executeScript({
            code: 'replaceText(document.body);'
        });
    }
    // You can add more functionality here to revert changes if you wish
});

// Retrieve replacement count from storage and update the popup
browser.storage.local.get('replacementCount', function(data) {
    document.getElementById('count').textContent = data.replacementCount || 0;
});

// Update the checkbox based on the current state
browser.storage.local.get('isEnabled', function(data) {
    document.getElementById('toggle').checked = data.isEnabled || false;
});
