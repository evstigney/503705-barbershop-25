/*------ МОДАЛЬНЫЕ ОКНА --------*/
var loginButton = document.querySelector('a[href="login.html"]');
var addressButton = document.querySelector('.button-address');
var closeButton = document.querySelectorAll('.modal-close');
var modalLogin = document.querySelector('.modal-login');
var modalMap = document.querySelector('.modal-map');
var showModalFlag = false;

var showModal = function (element) {
  var target = event.target;
  target.removeAttribute('href');
  var opacity = 0.1;
  element.style.display = 'block';
  var timer = setInterval(function() {
    if (opacity <= 1) {
      element.style.opacity = opacity;
      opacity += 0.1;
    } else {
      clearInterval(timer);
    }
  }, 70);
  return true;
};

var closeModal = function (element) {
  var opacity = 1;
  var display = 'block';
  var timer = setInterval(function() {
    if (opacity >= 0) {
      element.style.opacity = opacity;
      opacity -= 0.1;
      display = (opacity <= 0) ? 'none' : 'block';
      element.style.display = display;
    } else {
      clearInterval(timer);
    }
  }, 70);
  return false;
};

var openLoginHandler = function () {
  if (!showModalFlag) {
    if (event.keyCode === 32 || event.type === 'click') {
      showModalFlag = showModal(modalLogin);
    }
  }
};

var closeLoginHandler = function () {
  if (showModalFlag) {
    if (event.keyCode === 32 || event.type === 'click') {
    loginButton.setAttribute('href', 'login.html');
      showModalFlag = closeModal(modalLogin);
    }
  }
};

var openMapHandler = function () {
  if (!showModalFlag) {
    if (event.keyCode === 32 || event.type === 'click') {
      showModalFlag = showModal(modalMap);
    }
  }
};

var closeMapHandler = function () {
  if (showModalFlag) {
    if (event.keyCode === 32 || event.type === 'click') {
      showModalFlag = closeModal(modalMap);
    }
  }
};



loginButton.addEventListener('click', openLoginHandler);
loginButton.addEventListener('keypress', openLoginHandler);
closeButton[0].addEventListener('click', closeLoginHandler);
closeButton[0].addEventListener('keypress', closeLoginHandler);

addressButton.addEventListener('click', openMapHandler);
addressButton.addEventListener('keypress', openMapHandler);
closeButton[1].addEventListener('click', closeMapHandler);
closeButton[1].addEventListener('keypress', closeMapHandler);

/*---------- ИНТЕРАКТИВНАЯ КАРТА -------------*/

var initMap = function () {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {lat: 59.939033, lng: 30.322833},
    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({
  position: {lat: 59.938376, lng: 30.324603},
  icon: 'img/map-marker.png',
  map: map
});
};
