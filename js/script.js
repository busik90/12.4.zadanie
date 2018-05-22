var url = 'http://api.icndb.com/jokes/random',
    button = document.getElementById('get-joke'),
    paragraph = document.getElementById('joke');

button.addEventListener('click', function() {
  getJoke();
});