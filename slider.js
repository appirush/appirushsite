let position = 0;
const slidesToMove = 1;
const slidesToShow = 1;
const container = document.querySelector(".container");
const track = document.querySelector(".track"); //Местро прокрутки
const btnNext = document.querySelector(".btn-next");//Кнопки слайдера
const btnPrev = document.querySelector(".btn-prev");//Кнопки слайдера
const itemWidth = container.clientWidth / slidesToShow;//Высчитывание ширины прокрутки
const itemsCount = document.querySelectorAll(".item").length;
const movePosition = slidesToMove * itemWidth;

//Ровняем елементы
document.querySelectorAll(".item").forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

//Ивенты кнопки прокрутки
btnNext.addEventListener("click", () => {
  const itemsLeft =
    itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

  position -= itemsLeft >= slidesToMove ? movePosition : itemsLeft * itemWidth;

  setPosition();
});

//Ивенты кнопки прокрутки
btnPrev.addEventListener("click", () => {
  const itemsLeft = Math.abs(position) / itemWidth;

  position += itemsLeft >= slidesToMove ? movePosition : itemsLeft * itemWidth;

  setPosition();
});

//Прокручивает слайдер
const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
  checkBtns();
};

//Проверка конца слайдера и начала
const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();
