const scriptURL = 'https://script.google.com/macros/s/AKfycbxz7RwFCHWEKdSgB0-5mmKXd1QGI9Mb4Hoq8f8Olert--x2f4zXFnguCPdYIp8CPDEkyA/exec';

const form = document.forms['reg-form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      alert("Thank you! Form is submitted");
      window.location.href = 'courses.html'; // Redirects to courses.html
    })
    .catch(error => console.error('Error!', error.message));
});
