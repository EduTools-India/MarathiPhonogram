document.addEventListener('DOMContentLoaded', function () {
  const soundButtons = document.querySelectorAll('.sound-btn');
  const soundPlayer = document.getElementById('soundPlayer');

  soundButtons.forEach(button => {
    button.addEventListener('click', function () {
      const sound = this.getAttribute('data-sound');
      const soundSrc = `sounds/${sound}.m4a`; // Assuming sound files are in a 'sounds' folder

      soundPlayer.src = soundSrc;
      soundPlayer.play();
    });
  });
});
