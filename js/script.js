var url = 'https://api.icndb.com/jokes/random',
    button = document.getElementById('get-joke-JS'),
    paragraph = document.getElementById('joke-JS');

window.addEventListener('load', function() {
  getJokeJS();
});

button.addEventListener('click', function() {
  getJokeJS();
});

function getJokeJS() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function() {
    var response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
}

//----- jQuery -----

var url = 'https://api.icndb.com/jokes/random',
    $button = $('#get-joke-jQ').click(function() {
      getJokejQ();
    }),
    $paragraph = $('#joke-jQ');

$(window).on('load', function() {
  getJokejQ();
});

function getJokejQ() {
  $.ajax({
    method: 'GET',
    url: url,
    success: function(res) {
      $paragraph.text(res.value.joke);
    }
  });
}