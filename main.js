// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


const likes = document.querySelectorAll('.like');

likes.forEach((like) => {

  like.addEventListener('click', (ev) => {
    mimicServerCall()
    .then(data => {
      console.log(data);
      
      if (like.childNodes[1].textContent !== FULL_HEART){
        like.childNodes[1].textContent = FULL_HEART;
        like.childNodes[1].className = 'activated-heart';  
      }else{
        like.childNodes[1].textContent = EMPTY_HEART;
        like.childNodes[1].className = '';
      }

  })
    .catch(err => {
      console.log(err);
      
      let errorModal = document.getElementById('modal');
      errorModal.className = '';
      
      let errorMessage = document.getElementById('modal-message');
      errorMessage.textContent = `Displaying ${err}`;
      
      setTimeout(() => { errorMessage.style.display = 'none'; }, "3000");
      
    })
    
  })
})





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
