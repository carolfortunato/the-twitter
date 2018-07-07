var tweet;

function twitter() {
  var tweet = document.getElementsByClassName('tweet-message')[0].value;
  console.log(tweet);
  var element = document.createElement("li");
  element.appendChild(document.createTextNode(tweet));
  document.getElementById('timeline').appendChild(element);
}

/*
tweet-message.addEventListener('keydown', counter)
function counter () {  }

*/

//  PARA A DATA -> document.write(Date());