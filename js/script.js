

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

//Cambia de color durante 200ms, cuando pulsas la tecla//
function visualWhiteKeyPress(keyID){ 
  document.getElementById("key" + keyID).style.background = "linear-gradient(180deg, white 100px, grey 250px)";
  setTimeout(
    function(){ 
      document.getElementById("key" + keyID).style.background = "white"; 
    }, 200);
}

document.onkeydown = function(event){
  let kp = String.fromCharCode(event.keyCode);
  playAudioFromKeyCode(kp);/* pulsar una tecla kp*/
  visualWhiteKeyPress(kp);
}

document.onmousedown = function(event){ //Se ilumina cuando pulsas con el ratón//
  if(event.target.className == "keyboard-button-trigger"){
    playAudioFromDivID(event.path[1].id);
  }
  else playAudioFromDivID(event.target.id);
}

function playAudioFromDivID(id){  //Cuando dejas de pulsar la tecla, hace el sonido y vuelve a esperar a pulsar otra tecla
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
// Teclas blancas, de Victor//
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