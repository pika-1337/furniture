$(function(){


    $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
    
  });

  $('.product__box').slick({
  infinite: false,
  dots: false ,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow:'<button type="button" class="slick-prev"><img  src="images/product/arrow-left.svg" alt="img"></button>',
  nextArrow:'<button type="button" class="slick-next"><img src="images/product/arrow-right.svg" alt="img"></button>',
    responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3
      }
    },
      {
      breakpoint: 728,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
$(' .our__star-box').slick({
  infinite: false,
  dots: false ,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:'<button type="button" class="slick-prev"><img  src="images/product/arrow-left.svg" alt="img"></button>',
  nextArrow:'<button type="button" class="slick-next"><img src="images/product/arrow-right.svg" alt="img"></button>',
      responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3
      }
    },
      {
      breakpoint: 728,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.querySelector('.special__clock');
  const daysSpan = clock.querySelector('.special__days');
  const hoursSpan = clock.querySelector('.special__hours');
  const minutesSpan = clock.querySelector('.special__minutes');
  const secondsSpan = clock.querySelector('.special__seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 1057 * 8 * 45 * 50 * 1000);
initializeClock('special__clock', deadline);
})