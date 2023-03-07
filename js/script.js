const form = document.getElementById('myForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);
  fetch('http://127.0.0.1:5000/companies', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log(response.json());
  })
  .then(data => {
    console.log('Form data sent successfully:', data);
  })
  .catch(error => {
    console.error('Error sending form data:', error);
  });
});
