document.getElementById('button').setAttribute('disabled', 'true');

var tweet = document.getElementById('tweet-message');

var wordCount = document.getElementById('wordCount');

tweet.addEventListener('keyup', counter); // NÃO ESTÁ FUNCIONANDO

function twitter() {
  var today = ' (posted on ' + new Date(); + ' )';
  var tweet = document.getElementById('tweet-message').value;
  var element = document.createElement("li");
  element.appendChild(document.createTextNode(tweet));
  element.appendChild(document.createTextNode(today));
  document.getElementById('timeline').appendChild(element);
  document.getElementById('tweet-message').value = '';
}

function counter() {   // NÃO ESTÁ FUNCIONANDO
  document.getElementById('button').removeAttribute('disabled');
  var characters = document.getElementById('tweet-message').value.split('');
  if (characters.length < 0 || characters.length > 140) {
    wordCount.innerText = 140 - characters.lenght;
  }
  console.log(140 - characters.length);
}