document.getElementById('button').setAttribute('disabled', 'true');

var tweet = document.getElementById('tweet-message');

var wordCount = document.getElementById('wordCount');

tweet.addEventListener('keyup', counter);

function twitter() {
  var today = ' (posted on ' + new Date(); + ' )';
  var tweet = document.getElementById('tweet-message').value;
  var element = document.createElement("li");
  element.appendChild(document.createTextNode(tweet));
  element.appendChild(document.createTextNode(today));
  document.getElementById('timeline').appendChild(element);
  document.getElementById('tweet-message').value = '';
}

function counter() {   // imprime no console, mas não imprime no html
  var max = 140;
  var characters = document.getElementById('tweet-message').value.split('');
  wordCount.innerHTML = max;

  if (tweet.value !== "" && characters.length <= 140) {
    document.getElementById('button').removeAttribute('disabled');
    wordCount.innerHTML = parseInt(max - characters.lenght);
  } else if (characters.length > 140) {
    wordCount.innerHTML = parseInt(max - characters.lenght);
    document.getElementById('button').setAttribute('disabled', 'true');
  }
  console.log(max - characters.length);
}