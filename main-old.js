

//  go over with Lee about how this works exactly again so I understand copied from our nav bar work we did together.

console.log('hello world');

const btnMenuToggle = document.querySelector('.menu-toggle');
console.log(btnMenuToggle);
const elNavFrame = document.querySelector('nav ul');
console.log(elNavFrame);
const elBtnText = btnMenuToggle.innerText;


function handleMenuToggleClick() {
  console.log('you clicked')

  if (btnMenuToggle.innerText === 'Menu') {
    btnMenuToggle.innerText = 'Close'
  } else {
    btnMenuToggle.innerText = 'Menu'
  }

  elNavFrame.classList.toggle('me-hide')


}

btnMenuToggle.addEventListener('click', handleMenuToggleClick);