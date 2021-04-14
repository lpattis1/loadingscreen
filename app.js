const btn = document.querySelector(".btn");
const btnReload = document.querySelector(".btn1");
const moveBar = document.querySelector(".move-bar");
const title = document.querySelector("h1");
const bear = document.querySelector(".bear");
const barContainer = document.querySelector(".container-one");
let width = 1;

let interval = setInterval(progress, 150);

function progress() {
  if (width >= 100) {
    clearInterval(interval);
    width = 0;
    barContainer.style.display = "none";
    title.style.opacity = "1";
    bear.style.opacity = "1";
    btnReload.style.opacity = "1";
  } else {
    width++;
    moveBar.style.width = `${width}%`;
  }

  let randomMoveColor = Math.floor(Math.random() * 16777215).toString(16);
  moveBar.style.background = `#${randomMoveColor}`;
}

btn.addEventListener("click", function () {
  width = 100;
});

btnReload.addEventListener("click", function () {
  location.reload();
});
