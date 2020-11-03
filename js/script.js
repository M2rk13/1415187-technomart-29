var cartBtn = document.querySelectorAll(".buy-button, .button-container"),
  cartMessage = document.querySelector(".cart-popup"),
  cartActive = document.querySelector(".look-cart"),
  cartCount = Number(document.querySelector(".look-cart .count").innerHTML),
  writeBtn = document.querySelectorAll(".write-us-call"),
  writeWindow = document.querySelector(".write-us-popup"),
  mapBtn = document.querySelector(".map-mini"),
  map = document.querySelector(".map-popup"),
  closeBtn = document.querySelectorAll(".close-button, .resume-button"),
  serviceOptions = document.querySelectorAll(".service-item button"),
  optionsList = document.querySelector('.services-list'),
  serviceItems = document.querySelectorAll(".services-item");

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


document.querySelector(".submit-button").addEventListener("click", function () {
  document.querySelector(".write-us-form").submit(),
    writeWindow.classList.remove("animation"), writeWindow.classList.add("none-display");
});

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
  serviceOptions[0].classList.remove('active'),
  serviceOptions[1].classList.remove('active'),
  serviceOptions[2].classList.remove('active'),
  event.target.classList.add('active');
  for (i = 0; i < serviceOptions.length; i++) {
  if (serviceOptions[i].classList.contains('active') == false) {
    if (!(serviceItems[i].classList.contains('none-display'))) {
    serviceItems[i].classList.add("none-display"),
    serviceItems[i].classList.remove("services-animation");
    }
  } else {
    serviceItems[i].classList.remove("none-display"),
    serviceItems[i].classList.add("services-animation");
  }
}
}