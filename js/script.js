/*  __________________PRIMERA MANERA__________________
// Teclas blancas
let keys = document.querySelectorAll('.white-key');

keys.forEach(function(key) {
  key.addEventListener('click', function() {
    let note = this.id;
    let audio = document.getElementById('audio-' + note);
    
    this.classList.add('active-white');
    setTimeout(function() {
      key.classList.remove('active-white');
    }, 300);
    
    // Play audio
    audio.currentTime = 0;
    audio.play();
  });
});

// Teclas negras
let keys2 = document.querySelectorAll('.black-key');

keys2.forEach(function(key2) {
  key2.addEventListener('click', function() {
    let note = this.id;
    let audio = document.getElementById('audio-' + note);
    
    this.classList.add('active-black');
    setTimeout(function() {
      key2.classList.remove('active-black');
    }, 300);
    
    // Play audio
    audio.currentTime = 0;
    audio.play();
  });
});
*/

// Map of keys
const noteKeyMap = {
  'a': 'Do',
  's': 'Re',
  'd': 'Mi',
  'f': 'Fa',
  'g': 'Sol',
  'h': 'La',
  'j': 'Si',
  'k': 'Re♭',
  'l': 'Mi♭',
  'q': 'Sol♭',
  'w': 'La♭',
  'e': 'Si♭',
};

// todos teclas blancas  (funcciona)
let keys = document.querySelectorAll('.white-key, .black-key');
console.log(keys)

// metodo de teclas 
keys.forEach(function(key) {
  // funccia KLICK (funcciona)
  key.addEventListener('click', function() {
    playNote(this.id); // sound note
    animateKey(this); // animacion tecla
  });
  console.log(key)

// Sonido audio  (funcciona)

function playNote(note) {
  let audio = document.getElementById('audio-' + note);
  audio.play();
}


// funccia animacion (funcciona)
function animateKey(key) {
  key.classList.add('active-white');
  setTimeout(function() {
    key.classList.remove('active-white');
  }, 300);
}

  // pushing keys  ( !!! NO funcciona)
  document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    if (noteKeyMap.hasOwnProperty(key)) {
      const note = noteKeyMap[key];
      const targetKey = document.querySelector(`[id="${note}"]`);
      console.log(targetKey);
      console.log(note);
      if (targetKey) {
        playNoteAndAnimate(targetKey);

      }
    }
  });
    
  });
  // Функція для відтворення звуку ноти та зміни стилю клавіші
function playNoteAndAnimate(key) {
  const note = key.getAttribute('data-note');
  playNote(note);
  animateKey(key);
}
 // Функція для відтворення звуку ноти
function playNote(note) {
  const audio = new Audio(note + '.mp3');
  audio.play();
}
// Функція для зміни стилю клавіші при натисканні клавіші
function animateKey(key) {
  key.classList.add('active-white');
  setTimeout(function() {
    key.classList.remove('active-white');
  }, 500);
}

//_________________________


