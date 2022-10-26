image_array = [
  "../image/100-Grand-Bar-2.jpg",
  "../image/3musssk.jpg",
  "../image/airheads2.avif",
  "../image/almond joyy.jpg",
  "../image/baby-bottle-pop.jpg",
  "../image/baby-ruth.jpg",
  "../image/bazooka gum.jpg",
  "../image/blow-pops.jpg",
  "../image/butterfinger.jpg",
  "../image/candy corn 2.jpg",
  "../image/candy-cigarettes.jpg",
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
  "../image/tootsie-roll.jpg",
  "../image/tootsiepop.jpg",
  "../image/twix.jpg",
  "../image/warheads.jpg",
  "../image/whoppers.jpg",
  "../image/yorkpepatty.jpg",
];

function get_random_image() {
  random_index = Math.floor(Math.random() * image_array.length);
  selected_image = image_array[random_index];
  document.getElementById("image_shower").src = `../images/${selected_image}`;
}

const audio = new Audio("../image/creepy2.wav");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});