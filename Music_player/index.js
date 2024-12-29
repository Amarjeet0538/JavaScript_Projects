let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrl = document.getElementById("ctrlIcon");

song.onloadeddata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (ctrl.classList.contains("play")) {
    song.pause();
    ctrl.setAttribute;
  } else {
    song.play();
  }
}
