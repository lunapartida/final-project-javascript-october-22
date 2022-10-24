image_array = [
  "../image/100 grand.jpg",
  "../image/3 musk.jpg",
  "../image/5 gum.jpg",
  "../image/airheads.jpg",
];

function get_random_image() {
  random_index = Math.floor(Math.random() * image_array.length);
  selected_image = image_array[random_index];
  document.getElementById("image_shower").src = `../images/${selected_image}`;
}
