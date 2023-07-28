
var audioPlayer = document.getElementById('audioPlayer');

playButton.addEventListener('click', function() {

    
      audioPlayer.play();

      document.getElementById('playButton').style.backgroundColor = "red"

      setTimeout(() => {
        document.getElementById('playButton').style.backgroundColor = "white"
      }, 1000)
      
  });