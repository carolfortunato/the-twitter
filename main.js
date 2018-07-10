document.getElementById('button').setAttribute('disabled', 'true');

var tweet = document.getElementById('tweet-message');
var max = 140;
var characters = document.getElementById('tweet-message').value;
var wordCount = document.getElementById('wordCount');
wordCount.innerHTML = max;

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
  var characters = document.getElementById('tweet-message').value.split('');
  wordCount.innerHTML = max;

  if (tweet.value !== "" && characters.length <= 140) {
    document.getElementById('button').removeAttribute('disabled');
    wordCount.innerHTML = max - characters.length;
    if (characters.length > 120 && characters.length < 130){
      wordCount.style.color = "orange";
    } else if (characters.length >= 130 && characters.length < 141){
      wordCount.style.color = "red";
    }
  } else if (characters.length > 140) {
    wordCount.innerHTML = max - characters.length;
    document.getElementById('button').setAttribute('disabled', 'true');
    wordCount.style.color = "brown";
  }
  console.log(max - characters.length);
}