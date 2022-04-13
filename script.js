const scene = document.querySelector(".scene");
const ball = document.querySelector(".ball");
const sceneRect = scene.getBoundingClientRect();
const ballRect = ball.getBoundingClientRect();
const BORDER_WIDTH = 50;

let ballActive = false;

scene.addEventListener("mousemove", function (e) {
    if (!ballActive) return;
    const {clientX, clientY} = e;
    let left = clientX - sceneRect.left - BORDER_WIDTH - ballRect.width / 2 + window.scrollX;
    let top = clientY - sceneRect.top - BORDER_WIDTH - ballRect.height / 2 + window.scrollY;
    let leftEdge = scene.offsetWidth - ball.offsetWidth - BORDER_WIDTH * 2;
    let topEdge = scene.offsetHeight - ball.offsetHeight - BORDER_WIDTH * 2;
    if (left < 0) {
        left = 0;
    }
    if (left > leftEdge) {
        left = leftEdge;
    }
    if (top < 0) {
        top = 0;
    }
    if (top > topEdge) {
        top = topEdge;
    }
    ball.style.transform = `translate(${left}px, ${top}px)`;
});
ball.addEventListener("click", () => {
    ballActive = !ballActive;
});
