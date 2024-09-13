document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form telah dikirim!');
        form.reset();
    });
});
