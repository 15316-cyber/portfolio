document.addEventListener("DOMContentLoaded", function () {
    new Sakura('body', {
        className: 'sakura',
        fallSpeed: 1.5,
        maxSize: 18,
        minSize: 10,
        delay: 300,
        swayAnimations: [
            'sway-0',
            'sway-1',
            'sway-2',
            'sway-3'
        ]
    });
});
