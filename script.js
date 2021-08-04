let sounds = {
  a: "sounds/cymbal-crash.mp3",
  s: "sounds/tom-2.mp3",
  d: "sounds/snare.mp3",
  j: "sounds/kick-bass.mp3",
  k: "sounds/tom-3.mp3",
  l: "sounds/crash.mp3",
};
// attempt to play audio file upon page load to negate delay when user clicks button. audio shouldn't actually play (uncaught in promise error) but there should now be no delay when user clicks
// let audio = new Audio(sounds.a);
// audio.play();
let numDrums = document.querySelectorAll(".drum");
for (let i = 0; i < numDrums.length; i++) {
  numDrums[i].addEventListener("click", function () {
    let soundKey = this.textContent;
    document.getElementById(soundKey).play();
    // let audio = new Audio(sounds[soundKey]);
    // audio.play();
    buttonAnimation(soundKey);
  });
}
document.addEventListener("keydown", function (event) {
  document.getElementById(event.key).play();
  // let audio = new Audio(sounds[event.key]);
  // audio.play();
  buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
  let pressedKey = document.querySelector("." + currentKey);
  console.log(pressedKey);
  pressedKey.classList.add("pressed");
  setTimeout(() => {
    pressedKey.classList.remove("pressed");
  }, 100);
}
