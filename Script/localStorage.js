const nameField = document.getElementById('name');
const emailField = document.getElementById('mail');
const messageField = document.getElementById('text');

const formFields = JSON.parse(localStorage.getItem('formFields')) || {
  name: '',
  email: '',
  message: '',
};

function updateForm() {
  formFields.name = nameField.value;
  formFields.email = emailField.value;
  formFields.message = messageField.value;

  localStorage.setItem('formFields', JSON.stringify(formFields));
}

nameField.onchange = updateForm;
emailField.onchange = updateForm;
messageField.onchange = updateForm;

nameField.value = formFields.name;
emailField.value = formFields.email;
messageField.value = formFields.message;