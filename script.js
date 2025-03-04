let menuToggle = document.querySelector('.toggleIcon');
let menu = document.querySelector('.menu');
let cross = document.querySelector('.cross');


menuToggle.addEventListener('click', function () {
  menu.classList.add(`menuActive`);
})

cross.addEventListener(`click`, function () {
  menu.classList.remove(`menuActive`);
})