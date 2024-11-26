document.getElementById('userDetailsForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('userName').value.trim();
    const genre = document.getElementById('userGenre').value;

    if (name.length < 3) {
        document.getElementById('nameMessage').innerText = 'Name must be at least 3 characters long.';
        document.getElementById('userName').classList.add('is-invalid');
        return;
    } else {
        document.getElementById('nameMessage').innerText = '';
        document.getElementById('userName').classList.remove('is-invalid');
    }

    if (!genre) {
        document.getElementById('genreMessage').innerText = 'Please select a favorite genre.';
        document.getElementById('userGenre').classList.add('is-invalid');
        return;
    } else {
        document.getElementById('genreMessage').innerText = '';
        document.getElementById('userGenre').classList.remove('is-invalid');
    }

    alert('Thank you for submitting your details!');
    this.reset(); 
});
