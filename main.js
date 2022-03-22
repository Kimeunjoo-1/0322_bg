const bgContainer = document.querySelector('.bg__img');
const btnToggle = document.querySelector('.btn_toggle');
// addEventListener('이벤트', 실행함수);
btnToggle.addEventListener('click', function () {
  bgContainer.classList.remove('bg__img--show');
  document.body.classList.toggle('bgcolor--blue');
  // console.log('버튼클릭');
});
const btnReset = document.querySelector('.btn--reset');
btnReset.addEventListener('click', function () {
  bgContainer.classList.remove('bg__img--show');
  document.body.classList.remove('bgcolor--blue', 'bgcolor--gray','bg--img');
  
});

const btnBgGray = document.querySelector('.btn--bggray');
btnBgGray.addEventListener('click', function () {
  bgContainer.classList.remove('bg__img--show');
  document.body.classList.add('bgcolor--gray');
});
const btnBgImg = document.querySelector('.btn--bgimg');
btnBgImg.addEventListener('click', function () {
  // document.body.classList.add('bg--img');
  bgContainer.classList.add('bg__img--show');
});

const navContainer = document.querySelector('.btns .container');
const navToggle = document.querySelector('.btns__toggle-btn');
document.addEventListener('scroll', function () {
  console.log(window.scrollY);
  if (window.scrollY > 60) {
    navContainer.classList.add('bgshow');
    navToggle.classList.add('bgshow');
    console.log('show');
  } else {
    navContainer.classList.remove('bgshow');
    navToggle.classList.remove('bgshow');
  }
});