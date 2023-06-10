let keys = document.querySelectorAll('.white-key');

keys.forEach(function(key) {
  key.addEventListener('click', function() {
    let note = this.id;
    let audio = document.getElementById('audio-' + note);
    
    this.classList.add('active-white');
    setTimeout(function() {
      key.classList.remove('active-white');
    }, 300);
    
    // Відтворення аудіофайлу
    audio.currentTime = 0;
    audio.play();
  });
});

/* 
let keys = document.querySelectorAll('.white-key');

keys.forEach(function(key) {
  key.addEventListener('click', function() {
    let note = this.id;
    let audio = document.getElementById('audio-' + note);
    
    // Зміна стану клавіші (додайте власні стилі для зміни вигляду)
    this.classList.add('active-white');
    setTimeout(function() {
      key.classList.remove('active-white');
    }, 300);
    
    // Відтворення аудіофайлу
    audio.currentTime = 0;
    audio.play();
  });
}); 

*/



/*  Segunda manera
let whiteKeys = document.querySelectorAll('.white-key');
let blackKeys = document.querySelectorAll('.black-key');

whiteKeys.forEach(function(key) {
  key.addEventListener('click', function() {
    playAudio(this.id);
    animateKey(this);
  });
});

blackKeys.forEach(function(key) {
  key.addEventListener('click', function() {
    playAudio(this.id);
    animateKey(this);
  });
});

function playAudio(keyId) {
  // Відтворення аудіо-файлу відповідно до ноти
  let audio = new Audio(keyId + '.mp3');
  audio.play();
}

function animateKey(key) {
  // Анімація клавіші при кліку
  key.classList.add('active-white');
  setTimeout(function() {
    key.classList.remove('active-white');
  }, 300);
}

*/





