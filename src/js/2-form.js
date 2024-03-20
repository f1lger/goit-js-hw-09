const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const valueInLocaleStorage = 'feedback-form-state';

const getLocalStorageItem = localStorage.getItem(valueInLocaleStorage);

if (getLocalStorageItem) {
  const { email, message } = JSON.parse(getLocalStorageItem);
  emailInput.value = email;
  messageInput.value = message;
}

form.addEventListener('input', () => {
  const data = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (email && message) {
    console.log({ email, message });


    emailInput.value = '';
    messageInput.value = '';
    localStorage.removeItem('feedback-form-state');
  } else {
    console.log('Please fill in all fields.');
  }
});