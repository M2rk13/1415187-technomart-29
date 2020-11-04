let currentSlide;

var cartCount = Number(document.querySelector(".look-cart .count").innerHTML),
    toggleSlider = function (t) {
  sliderList.forEach(n => n.classList.remove("animation-slider")),
  sliderList.forEach(n => n.classList.add("none-display")),
  striderList.forEach(n => n.classList.remove('active')),
  sliderList[t].classList.add("animation-slider"),
  sliderList[t].classList.remove("none-display"),
  striderList[t].classList.add('active'),
  currentSlide = t;
};

const cartBtn = document.querySelectorAll(".buy-button, .button-container"),
  cartMessage = document.querySelector(".cart-popup"),
  cartActive = document.querySelector(".look-cart"),
  writeBtn = document.querySelectorAll(".write-us-call"),
  writeWindow = document.querySelector(".write-us-popup"),
  mapBtn = document.querySelector(".map-mini"),
  map = document.querySelector(".map-popup"),
  closeBtn = document.querySelectorAll(".close-button, .resume-button"),
  serviceOptions = document.querySelectorAll(".service-item button"),
  optionsList = document.querySelector(".services-list"),
  serviceItems = document.querySelectorAll(".services-item"),
  sliderList = document.querySelectorAll(".content-slider-item"),
  striderList = document.querySelectorAll(".content-slider-strider button"),
  striderListParent = document.querySelector(".content-slider-strider"),
  sliderBtn = document.querySelectorAll(".slider-button"),
  sliderBtnParent = document.querySelector(".content-slider-navigation");

/////////////////

document.addEventListener("DOMContentLoaded", () => {
    for (var i = 0; i < sliderList.length; i++) if (sliderList[i].classList.contains("animation-slider")) {
    currentSlide = i;
    break;
  }
  });

document.querySelector(".submit-button").addEventListener("click", function () {
  document.querySelector(".write-us-form").submit(),
    writeWindow.classList.remove("animation"), writeWindow.classList.add("none-display");
});

if (cartBtn) {
  for (var i = 0; i < cartBtn.length; i++) cartBtn[i].addEventListener("click", function (a) {
    a.preventDefault(),
      cartMessage.classList.add("animation"),
      cartMessage.classList.remove("none-display"),
      cartCount++,
      document.getElementById("cart").focus(),
      document.querySelector(".look-cart .count").innerHTML = String(cartCount);
    if (((cartActive.classList.contains('active') !== true)) && (cartCount > 0)) {
      cartActive.classList.add('active');
    }
  });
  for (i = 0; i < closeBtn.length; i++) closeBtn[i].addEventListener("click", function (a) {
    a.preventDefault(),
      cartMessage.classList.remove("animation"),
      cartMessage.classList.add("none-display"),
      document.getElementById("write-us-btn");
  });
  window.addEventListener("keydown", function (a) {
    27 === a.keyCode && cartMessage.classList.contains("animation") && (cartMessage.classList.remove("animation"), cartMessage.classList.add("none-display"));
  });
}

if (writeBtn) {
  for (i = 0; i < writeBtn.length; i++) writeBtn[i].addEventListener("click", function (a) {
      a.preventDefault(), writeWindow.classList.add("animation"),
        writeWindow.classList.remove("none-display"),
        document.getElementById("name").focus();
    }),
    window.addEventListener("keydown", function (a) {
      27 === a.keyCode && writeWindow.classList.contains("animation") && (writeWindow.classList.remove("animation"), writeWindow.classList.add("none-display"));
    });
  for (i = 0; i < closeBtn.length; i++) closeBtn[i].addEventListener("click", function (a) {
    a.preventDefault(), writeWindow.classList.remove("animation"), writeWindow.classList.add("none-display");
  });
}

if (mapBtn) {
  mapBtn.addEventListener("click", function (a) {
    a.preventDefault(), map.classList.add("animation"), map.classList.remove("none-display"),
      document.getElementById("map").focus();
  });
  for (i = 0; i < closeBtn.length; i++) closeBtn[i].addEventListener("click", function (a) {
    a.preventDefault(), map.classList.remove("animation"), map.classList.add("none-display");
  });
  window.addEventListener("keydown", function (a) {
    27 === a.keyCode && map.classList.contains("animation") && (map.classList.remove("animation"), map.classList.add("none-display"));
  });
}

optionsList.onclick = function(event) {
  serviceOptions.forEach(n => n.classList.remove('active')),
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
};

striderListParent.onclick = function(event) {
  var temp = Array.from(striderList).indexOf(event.target);
  toggleSlider(temp);
};

sliderBtnParent.onclick = function(event) {
  var temp = Array.from(sliderBtn).indexOf(event.target);
  if ((temp === 1)&&(currentSlide < (sliderList.length-1))) {
    currentSlide++;
    toggleSlider(currentSlide);
  } else {
      if ((temp === 1)&&(currentSlide >= (sliderList.length-1))) {
        currentSlide = 0;
        toggleSlider(currentSlide);
      } else {
        if ((temp === 0)&&(currentSlide > (0))) {
          currentSlide--;
          toggleSlider(currentSlide);
        } else {
          if ((temp === 0)&&(currentSlide <= (0))) {
            currentSlide = sliderList.length-1;
            toggleSlider(currentSlide);
        }
      }
  }
}
};