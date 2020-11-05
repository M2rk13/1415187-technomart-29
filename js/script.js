const cartBtn = document.querySelectorAll('.buy-button, .button-container'),
  cartMessage = document.querySelector('.cart-popup'),
  cartActive = document.querySelector('.look-cart'),
  bookmarkBtn = document.querySelectorAll('.bookmark-button'),
  writeBtn = document.querySelectorAll('.write-us-call'),
  writeWindow = document.querySelector('.write-us-popup'),
  writeForm = document.querySelector('.write-us-form'),
  mapBtn = document.querySelector('.map-mini'),
  map = document.querySelector('.map-popup'),
  closeBtn = document.querySelectorAll('.close-button, .resume-button'),
  serviceOptions = document.querySelectorAll('.service-item button'),
  serviceItems = document.querySelectorAll('.services-item'),
  sliderList = document.querySelectorAll('.content-slider-item'),
  striderList = document.querySelectorAll('.content-slider-strider button'),
  cartCountElement = document.querySelector('.look-cart .count'),
  bookmarksCountElement = document.querySelector('.look-bookmarks .count'),
  sliderBtn = document.querySelectorAll('.slider-button'),
  submitBtn = document.querySelector('.submit-button'),
  pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let cartCount = Number(cartCountElement.innerHTML),
  emailError = document.querySelector('.write-us-popup span'),
  currentSlide;

////////////////

let toggleSlider = function (current) {
    sliderList.forEach(element => element.classList.remove('animation-slider')),
      sliderList.forEach(element => element.classList.add('none-display')),
      striderList.forEach(element => element.classList.remove('active')),
      sliderList[current].classList.add('animation-slider'),
      sliderList[current].classList.remove('none-display'),
      striderList[current].classList.add('active'),
      currentSlide = current;
  },
  submitFunc = function () {
    var txt = document.getElementById("email").value;
    if (pattern.test(txt)) {
      writeForm.submit(),
        submitClose(),
        emailError.innerHTML = '';
    } else {
      emailError.innerHTML = 'Неверный email',
        writeForm.classList.add('animation-error');
    }
    setTimeout(function () {
      writeForm.classList.remove('animation-error');
    }, 600);
  },
  submitClose = function () {
    writeWindow.classList.remove('animation'),
      writeWindow.classList.add('none-display'),
      document.querySelectorAll('.write-us-form input, .write-us-form textarea').forEach(element => element.value = '');
  };

/////////////////

document.addEventListener('DOMContentLoaded', () => {
  for (var i = 0; i < sliderList.length; i++)
    if (sliderList[i].classList.contains('animation-slider')) {
      currentSlide = i;
      break;
    }
});

if (submitBtn) {
  submitBtn.addEventListener('click', submitFunc);
}

if (cartBtn) {
  for (var i = 0; i < cartBtn.length; i++) cartBtn[i].addEventListener('click', function (event) {
    event.preventDefault(),
      cartMessage.classList.add('animation'),
      cartMessage.classList.remove('none-display'),
      cartCount++,
      document.getElementById('cart').focus(),
      cartCountElement.innerHTML = String(cartCount);
    if (((cartActive.classList.contains('active') !== true)) && (cartCount > 0)) {
      cartActive.classList.add('active');
    }
  });
  for (i = 0; i < closeBtn.length; i++) closeBtn[i].addEventListener('click', function (event) {
    event.preventDefault(),
      cartMessage.classList.remove('animation'),
      cartMessage.classList.add('none-display'),
      document.getElementById('write-us-btn');
  });
  window.addEventListener('keydown', function (event) {
    27 === event.keyCode && cartMessage.classList.contains('animation') && (cartMessage.classList.remove('animation'), cartMessage.classList.add('none-display'));
  });
}

if (bookmarkBtn) {
  for (i = 0; i < bookmarkBtn.length; i++) bookmarkBtn[i].addEventListener('click', function (event) {
    event.preventDefault(),
      bookmarksCountElement.innerHTML = String(Number(bookmarksCountElement.innerHTML) + 1);
  });
}

if (writeBtn) {
  for (i = 0; i < writeBtn.length; i++) writeBtn[i].addEventListener('click', function (event) {
      event.preventDefault(), writeWindow.classList.add('animation'),
        writeWindow.classList.remove('none-display'),
        document.getElementById('name').focus();
    }),
    window.addEventListener('keydown', function (event) {
      27 === event.keyCode && writeWindow.classList.contains('animation') && (submitClose(), (emailError.innerHTML = ''));
      13 === event.keyCode && !(closeBtn.onfocus) && submitFunc();
    });
  for (i = 0; i < closeBtn.length; i++) closeBtn[i].addEventListener('click', function (event) {
    event.preventDefault(),
      submitClose(),
      emailError.innerHTML = '';
  });
}

if (mapBtn) {
  mapBtn.addEventListener('click', function (event) {
    event.preventDefault(), map.classList.add('animation'), map.classList.remove('none-display'),
      document.getElementById('map').focus();
  });
  for (i = 0; i < closeBtn.length; i++) closeBtn[i].addEventListener('click', function (event) {
    event.preventDefault(), map.classList.remove('animation'), map.classList.add('none-display');
  });
  window.addEventListener('keydown', function (event) {
    27 === event.keyCode && map.classList.contains('animation') && (map.classList.remove('animation'), map.classList.add('none-display'));
  });
}

if (serviceOptions) {
  for (i = 0; i < serviceOptions.length; i++) serviceOptions[i].addEventListener('click', function (event) {
    serviceOptions.forEach(element => element.classList.remove('active')),
      event.target.classList.add('active');
    for (i = 0; i < serviceOptions.length; i++) {
      if (serviceOptions[i].classList.contains('active') === false) {
        if (!(serviceItems[i].classList.contains('visually-hidden'))) {
          serviceItems[i].classList.add("visually-hidden"),
            serviceItems[i].classList.remove("services-animation");
        }
      } else {
        serviceItems[i].classList.remove("visually-hidden"),
          serviceItems[i].classList.add("services-animation");
      }
    }
  });
}

if (striderList) {
  for (i = 0; i < striderList.length; i++) striderList[i].addEventListener('click', function (event) {
    var temp = Array.from(striderList).indexOf(event.target);
    toggleSlider(temp);
  });
}

if (sliderBtn) {
  for (i = 0; i < sliderBtn.length; i++) sliderBtn[i].addEventListener('click', function (event) {
    var temp = Array.from(sliderBtn).indexOf(event.target);
    if ((temp === 1) && (currentSlide < (sliderList.length - 1))) {
      currentSlide++;
      toggleSlider(currentSlide);
    } else {
      if ((temp === 1) && (currentSlide >= (sliderList.length - 1))) {
        currentSlide = 0;
        toggleSlider(currentSlide);
      } else {
        if ((temp === 0) && (currentSlide > (0))) {
          currentSlide--;
          toggleSlider(currentSlide);
        } else {
          if ((temp === 0) && (currentSlide <= (0))) {
            currentSlide = sliderList.length - 1;
            toggleSlider(currentSlide);
          }
        }
      }
    }
  });
}