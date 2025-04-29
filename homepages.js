document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Here you can handle the form data (e.g., send it to a server)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    console.log('Feedback submitted:', { name, email, feedback });

    // Show thank-you message
    document.getElementById('thank-you-message').style.display = 'block';

    // Optionally, reset the form
    this.reset();
});