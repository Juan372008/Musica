
let keys = document.querySelectorAll('.white-key, .black-key');

keys.forEach(function(key) {
  key.addEventListener('click', function() {
    let note = this.id;
    let audio = document.getElementById('audio-' + note);
    
    // Зміна стану клавіші (додайте власні стилі для зміни вигляду)
    this.classList.add('active');
    setTimeout(function() {
      key.classList.remove('active');
    }, 300);
    
    // Відтворення аудіофайлу
    audio.currentTime = 0;
    audio.play();
  });
});







