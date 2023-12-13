document.addEventListener('alpine:init', () => {
    Alpine.data('keyboardShortcuts', () => ({
        shortcuts: [
            { name: 'Copy', combo: 'Ctrl + C', hover: false },
            // ... other shortcuts ...
        ],
        showCombo(index) {
            this.shortcuts[index].hover = true;
        },
        hideCombo(index) {
            this.shortcuts[index].hover = false;
        }
    }));
});
