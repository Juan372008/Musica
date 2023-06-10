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
