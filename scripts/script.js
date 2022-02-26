//------------------------------ var\const ----------------------------//
//page
const content = document.querySelector('.page');
const elMailForm = content.querySelector('.mail-form');
const elSubmitButton = elMailForm.querySelector('.mail-form__button');
const elMailInput = elMailForm.querySelector('.mail-form__input');
//------------------------------ functions ----------------------------//

// function validateMail(mail) {
//   const regex = /\S+@\S+\.\S{2,}/;
//   return regex.test(mail);
// }

function handleInput(e) {
  elSubmitButton.classList.remove('mail-form__button_active');
}
function handleMailSubmit (e) {
  e.preventDefault();
  elSubmitButton.classList.add('mail-form__button_active');
}
//------------------------------ listeners ----------------------------//
elMailInput.addEventListener('input', handleInput);
elMailForm.addEventListener('submit', handleMailSubmit);
//------------------------------ execution ----------------------------//
