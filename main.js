console.log('hello world');

// ***** GLOBALS

const theStyleSheet = document.querySelector('link[href="style.css"');
const btnMenuToggle = document.querySelector('.menu-toggle');
const elNavFrame = document.querySelector('.nav-primary ul');

// ***** FUNCTION DEFINITIONS
function handleMenuToggleClick() {
  console.log('you clicked')
  if (btnMenuToggle.innerHTML.toUpperCase() === 'MENU') {
    btnMenuToggle.innerHTML = '&#10006;'
    btnMenuToggle.setAttribute('aria-expanded', 'true');
    btnMenuToggle.setAttribute('aria-label', 'Close the menu');
  } else {
    btnMenuToggle.innerHTML = 'Menu';
    btnMenuToggle.setAttribute('aria-expanded', 'false');
    btnMenuToggle.setAttribute('aria-label', 'Show the menu');
  }

  elNavFrame.classList.toggle('me-hide')
}

// ***** ON PAGE LOAD
document.body.classList.remove('no-js');
if (theStyleSheet.rel === 'stylesheet') {
  elNavFrame.classList.add('me-hide');
  btnMenuToggle.removeAttribute('hidden');
}
btnMenuToggle.addEventListener('click', handleMenuToggleClick);