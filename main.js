document.getElementById('button').setAttribute('disabled', 'true');

const tweet = document.getElementById('tweet-message');
const max = 140;
const char = document.getElementById('tweet-message').value;
const wordCount = document.getElementById('wordCount');
wordCount.innerHTML = max;

tweet.addEventListener('keyup', counter);

function twitter() {
  let today = ' (posted on ' + new Date().toDateString() + ' )';
  let element = document.createElement("li");
  element.appendChild(document.createTextNode(tweet.value));
  element.appendChild(document.createTextNode(today));
  document.getElementById('timeline').appendChild(element);
  document.getElementById('tweet-message').value = '';
}

function counter() {   // imprime no console, mas não imprime no html
  let characters = document.getElementById('tweet-message').value.split('');
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


function autoResize() {
  objTextArea = document.getElementById('tweet-message');
  while (objTextArea.scrollHeight > objTextArea.offsetHeight){
    objTextArea.rows += 1;
  }
}