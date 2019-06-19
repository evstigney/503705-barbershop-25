/*------ ОКНО ВХОДА НА САЙТ --------*/
var loginButton = document.querySelector('a[href="login.html"]');
var closeButton = document.querySelector('.modal-close');
var modalLogin = document.querySelector('.modal-login');
var showModalFlag = false;

var showModal = function (element) {
  var target = event.target;
  target.removeAttribute('href');
  var opacity = 0.1;
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
  var timer = setInterval(function() {
    if (opacity >= 0) {
      element.style.opacity = opacity;
      opacity -= .1;
    } else {
      clearInterval(timer);
    }
  }, 70);
  return false;
};

var modalLoginHandler = function () {
  if (!showModalFlag) {
    if (event.keyCode === 32 || event.type === 'click') {
      showModalFlag = showModal(modalLogin);
    }
  }
};

var modalCloseHandler = function () {
  if (showModalFlag) {
    if (event.keyCode === 32 || event.type === 'click') {
    loginButton.setAttribute('href', 'login.html');
      showModalFlag = closeModal(modalLogin);
    }
  }
};

loginButton.addEventListener('click', modalLoginHandler);
loginButton.addEventListener('keypress', modalLoginHandler);
closeButton.addEventListener('click', modalCloseHandler);
closeButton.addEventListener('keypress', modalCloseHandler);
