var buttonFilter = document.querySelector(".catalog__filter-button");
var filter = document.querySelector(".catalog__filter-alphabet");
var filterClose = filter.querySelector(".catalog__filter-alphabet-close-top");
var filterCloseBottom = filter.querySelector(".catalog__filter-alphabet-link");

buttonFilter.addEventListener("click", function(evt) {
  evt.preventDefault();
  filter.classList.add("catalog__filter-alphabet--show");
});

filterClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  filter.classList.remove("catalog__filter-alphabet--show");
});

filterCloseBottom.addEventListener("click", function(evt) {
  evt.preventDefault();
  filter.classList.remove("catalog__filter-alphabet--show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (filter.classList.contains("catalog__filter-alphabet--show")) {
            filter.classList.remove("catalog__filter-alphabet--show");
        }
    }
});
