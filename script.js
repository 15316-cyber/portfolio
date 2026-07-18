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
const container = document.getElementById("sakura-container");

function createSakura(){

    const sakura = document.createElement("div");

    sakura.classList.add("sakura");

    sakura.innerHTML = "🌸";

    sakura.style.left = Math.random()*100 + "vw";

    sakura.style.fontSize = (18 + Math.random()*18) + "px";

    sakura.style.animationDuration = (5 + Math.random()*5) + "s";

    sakura.style.opacity = Math.random();

    container.appendChild(sakura);

    setTimeout(()=>{
        sakura.remove();
    },10000);

}

setInterval(createSakura,250);
