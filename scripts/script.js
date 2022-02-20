//------------------------------ var\const ----------------------------//
//page
const content = document.querySelector('.page');

//form submit button
const elSubmitButton = content.querySelector('.mail-form__button');
const elMailInput = content.querySelector('.mail-form__input');
//------------------------------ functions ----------------------------//

//popup state manage functions
function validateMail(mail) {
  const regex = /\S+@\S+\.\S{2,}/;
  return regex.test(mail);
}

function handleInput(e) {
  if (validateMail(e.target.value)) {
    elSubmitButton.classList.add('mail-form__button_active');
  } else {
    elSubmitButton.classList.remove('mail-form__button_active');
  }
}
//------------------------------ listeners ----------------------------//
elMailInput.addEventListener('input', handleInput);
//------------------------------ execution ----------------------------//
