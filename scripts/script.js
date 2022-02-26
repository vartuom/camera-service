//------------------------------ var\const ----------------------------//
const content = document.querySelector('.page');
const mailForms = content.querySelectorAll('.mail-form');
//------------------------------ functions ----------------------------//

// function validateMail(mail) {
//   const regex = /\S+@\S+\.\S{2,}/;
//   return regex.test(mail);
// }

function handleInput(evt) {
  evt.target.form[2].classList.remove('mail-form__button_active');
}
function handleMailSubmit (evt) {
  evt.preventDefault();
  evt.submitter.classList.add('mail-form__button_active');
}
//------------------------------ listeners ----------------------------//
mailForms.forEach((mailForm) => {
  mailForm.addEventListener('submit', handleMailSubmit);
  mailForm[1].addEventListener('input', handleInput);
});
//------------------------------ execution ----------------------------//
