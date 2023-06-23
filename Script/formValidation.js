const email = document.getElementById('mail');

const lowerCase = /^[^A-Z]+$/;

email.addEventListener('input', () => {
  if (lowerCase.test(email.value) === false) {
    email.setCustomValidity('All letters must be lower case.');
  } else {
    email.setCustomValidity('');
  }
});
