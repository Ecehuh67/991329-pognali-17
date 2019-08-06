var businesLink = document.querySelector(".payment__link");
var businesMenu = document.querySelector(".payment__popup");
var businesClose = businesMenu.querySelector(".payment__popup-close");

businesLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  businesMenu.classList.add("payment__popup--on");
});

businesClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  businesMenu.classList.remove("payment__popup--on");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (businesMenu.classList.contains("payment__popup--on")) {
            businesMenu.classList.remove("payment__popup--on");
        }
    }
});
