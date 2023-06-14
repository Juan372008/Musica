
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
  'a': 'Do', 's': 'Re', 'd': 'Mi', 'f': 'Fa', 'g': 'Sol', 'h': 'La', 'j': 'Si',
  'q': 'Re♭', 'w': 'Mi♭', 'e': 'Sol♭', 'r': 'La♭', 't': 'Si♭',
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
  }, 20);
}

//_________________________





/*Enlace a los sonidos, y se crea Array con las letras(sonido) del teclado de la "Q" a la "L"*/
//https://hackernoon.com/create-a-piano-app-with-javascript-97dbad1ff28c




let whiteKeys = [
 
  {
    keyNo: "keyQ", 
    keyID: "Q",
    mp3Link: "https://s3-ap-southeast-2.amazonaws.com/korora747/Piano+Assets/q.mp3"
  },
  {
    keyNo: "keyW", 
    keyID: "W",
    mp3Link: "https://s3-ap-southeast-2.amazonaws.com/korora747/Piano+Assets/w.mp3"
  }, 
  {
    keyNo: "keyE", 
    keyID: "E",
    mp3Link: "https://s3-ap-southeast-2.amazonaws.com/korora747/Piano+Assets/e.mp3"
  },
  {
    keyNo: "keyR", 
    keyID: "R",
    mp3Link: "https://s3-ap-southeast-2.amazonaws.com/korora747/Piano+Assets/r.mp3"
  },  
  {
    keyNo: "keyT", 
    keyID: "T",
    mp3Link: "https://s3-ap-southeast-2.amazonaws.com/korora747/Piano+Assets/t.mp3"
  },
  {
    keyNo: "keyY", 
    keyID: "Y",
    mp3Link: "https://s3-ap-southeast-2.amazonaws.com/korora747/Piano+Assets/y.mp3"
  },
  {
    keyNo: "keyU", 
    keyID: "U",
    mp3Link: "https://s3-ap-southeast-2.amazonaws.com/korora747/Piano+Assets/u.mp3"
  },
  {
    keyNo: "keyI", 
    keyID: "I",
    mp3Link: "https://s3-ap-southeast-2.amazonaws.com/korora747/Piano+Assets/i.mp3"
  }, 
  {
    keyNo: "keyO", 
    keyID: "O",
    mp3Link: "https://s3-ap-southeast-2.amazonaws.com/korora747/Piano+Assets/o.mp3"
  },
  {
    keyNo: "keyP", 
    keyID: "P",
    mp3Link: "https://s3-ap-southeast-2.amazonaws.com/korora747/Piano+Assets/p.mp3"
  },  
  {
    keyNo: "keyA", 
    keyID: "A",
    mp3Link: "https://s3-ap-southeast-2.amazonaws.com/korora747/Piano+Assets/a.mp3"
  },
  {
    keyNo: "keyS", 
    keyID: "S",
    mp3Link: "https://s3-ap-southeast-2.amazonaws.com/korora747/Piano+Assets/s.mp3"
  },
  {
    keyNo: "keyD", 
    keyID: "D",
    mp3Link: "https://s3-ap-southeast-2.amazonaws.com/korora747/Piano+Assets/d.mp3"
  },
  {
    keyNo: "keyF", 
    keyID: "F",
    mp3Link: "https://s3-ap-southeast-2.amazonaws.com/korora747/Piano+Assets/f.mp3"
  }, 
  {
    keyNo: "keyG", 
    keyID: "G",
    mp3Link: "https://s3-ap-southeast-2.amazonaws.com/korora747/Piano+Assets/g.mp3"
  },
  {
    keyNo: "keyH", 
    keyID: "H",
    mp3Link: "https://s3-ap-southeast-2.amazonaws.com/korora747/Piano+Assets/h.mp3"
  },  
  {
    keyNo: "keyJ", 
    keyID: "J",
    mp3Link: "https://s3-ap-southeast-2.amazonaws.com/korora747/Piano+Assets/j.mp3"
  },
  {
    keyNo: "keyK", 
    keyID: "K",
    mp3Link: "https://s3-ap-southeast-2.amazonaws.com/korora747/Piano+Assets/k.mp3"
  },
  {
    keyNo: "keyL", 
    keyID: "L",
    mp3Link: "https://s3-ap-southeast-2.amazonaws.com/korora747/Piano+Assets/l.mp3"
  },
  
];

//takes a keyID and changes the css temproarily to show that button had been pressed when using the keyboard to play notes. Reverts to white again after 200ms
function visualWhiteKeyPress(keyID){ 
  document.getElementById("key" + keyID).style.background = "linear-gradient(180deg, white 100px, grey 250px)";
  setTimeout(
    function(){ 
      document.getElementById("key" + keyID).style.background = "white"; 
    }, 200);
}

document.onkeydown = function(event){
  let kp = String.fromCharCode(event.keyCode);
  playAudioFromKeyCode(kp);
  visualWhiteKeyPress(kp);
}

document.onmousedown = function(event){ // plays audio regardless of whether or not the letter is clicked or the button is clicked
  if(event.target.className == "keyboard-button-trigger"){
    playAudioFromDivID(event.path[1].id);
  }
  else playAudioFromDivID(event.target.id);
}

function playAudioFromDivID(id){
  for(let x = 0; x < whiteKeys.length; x++){
    if(id == whiteKeys[x].keyNo){
      new Audio(whiteKeys[x].mp3Link).play();
    }
  }
}

function playAudioFromKeyCode(keyCode){
  for(let x = 0; x < whiteKeys.length; x++){
    if(keyCode == whiteKeys[x].keyID){
      new Audio(whiteKeys[x].mp3Link).play();
    }
  }
}

