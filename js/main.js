//random candy pictures for container
image_array = [
  "../image/airheads-two.avif",
  "../image/almond-joy-two.jpg",
  "../image/baby-bottle-pop.jpg",
  "../image/baby-ruth.jpg",
  "../image/bazooka-gum.jpg",
  "../image/blow-pops.jpg",
  "../image/butterfinger.jpg",
  "../image/candy-cigarettes.jpg",
  "../image/candy-corn-two.jpg",
  "../image/crunchbar.jpg",
  "../image/dots-candy.jpg",
  "../image/dove.jpg",
  "../image/Dubble_Bubble.jpg",
  "../image/dumdums.jpg",
  "../image/fundip.jpg",
  "../image/gobstopper-candy.jpg",
  "../image/gummybears.jpg",
  "../image/hersheys-cookies-n-cream-candy.jpg",
  "../image/hersheys-kisses.jpg",
  "../image/hersheys.jpg",
  "../image/hot-tamales.jpg",
  "../image/hubba-bubba.jpg",
  "../image/jellybeans.jpg",
  "../image/jollyranchers.jpg",
  "../image/juniormints.webp",
  "../image/kitkat.jpg",
  "../image/laffytaffy.jpg",
  "../image/lemonheads-candy.jpg",
  "../image/lifesavers.jpg",
  "../image/mandm.jpg",
  "../image/mandmpeanuts.jpg",
  "../image/mikeandike.jpg",
  "../image/milkduds.jpg",
  "../image/milkyway.jpg",
  "../image/mrgoodbar.jpg",
  "../image/nerds-rainbow-rope.png",
  "../image/nerds.jpg",
  "../image/now-and-later.jpg",
  "../image/one-hund-gran-two.jpg",
  "../image/payday.jpg",
  "../image/peppermintcandy.jpg",
  "../image/pop-rocks.jpg",
  "../image/reecesminicups.jpg",
  "../image/reeses-pieces.jpg",
  "../image/reesescups.jpg",
  "../image/skittles.jpg",
  "../image/smarties.jpg",
  "../image/snickers.jpg",
  "../image/sourpatchkids.jpg",
  "../image/sourpatchwatermelon.jpg",
  "../image/sourskittles.jpg",
  "../image/starburst.jpg",
  "../image/sugardaddy.jpg",
  "../image/swedishfish.jpg",
  "../image/sweettarts.jpg",
  "../image/three-musk-two.jpg",
  "../image/tootsie-roll.jpg",
  "../image/tootsiepop.jpg",
  "../image/twix.jpg",
  "../image/warheads.jpg",
  "../image/whoppers.jpg",
  "../image/yorkpepatty.jpg",
  "../image/",
];

//candy randomized code
function get_random_image() {
  random_index = Math.floor(Math.random() * image_array.length);
  selected_image = image_array[random_index];
  document.getElementById("image_shower").src = `../image/${selected_image}`;
}

//audio for button click
const audioArr = [
  new Audio("../sounds/blood_guts_spill.wav"),
  new Audio("../sounds/breathe_ghost_eerie.wav"),
  new Audio("../sounds/creepy-little-creature.wav"),
  new Audio("../sounds/creepy-two.wav"),
  new Audio("../sounds/deep_doom.wav"),
  new Audio("../sounds/digital_destruction.wav"),
  new Audio("../sounds/game-blood-pop-slide.wav"),
  new Audio("../sounds/magic_element_death_a.wav"),
  new Audio("../sounds/metal_shing.wav"),
  new Audio("../sounds/monster_bat_scream.wav"),
  new Audio("../sounds/monster_ghost_death.wav"),
  new Audio("../sounds/monster_screech.wav"),
  new Audio("../sounds/piano-hit.wav"),
  new Audio("../sounds/piano-string-two.wav"),
  new Audio("../sounds/production_element_glitch_distort.wav"),
  new Audio("../sounds/production_element_hit_distortion.wav"),
  new Audio("../sounds/zombie-monster-growl.wav"),
];

//randomized button sound click
function playRandomAudio() {
  //Get a random index of the sound to be played
  const randomAudioIndex = Math.floor(Math.random() * (audioArr.length + 1));

  //Play the selected sound
  audioArr[randomAudioIndex].play();
}

//single sound button click

// const audio = new Audio("./sounds/zombie-monster-growl.wav");
// const buttons = document.querySelectorAll("button");

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     audio.play();
//   });
// });
