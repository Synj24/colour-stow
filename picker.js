// # Used to track colour changes
// colorPicker.addEventListener("input", updateFirst, false);
// colorPicker.addEventListener("change", watchColorPicker, false);

// function watchColorPicker(event) {
//   document.querySelectorAll("p").forEach(function(p) {
//     p.style.color = event.target.value;
//   });
// }

var colour_1
var defaultColour = "#c0ffee";

window.addEventListener("load", startup, false)

function startup() {
  colour_1 = document.querySelector("#colour-1");
  colour_1.value = defaultColour;
  colour_1.addEventListener("input", updateFirst, false);
  colour_1.addEventListener("change", updateAll, false);
  colour_1.select();
}

function updateFirst(event) {
  var block_1 = document.querySelector("#block-1")

  if (block_1) {
    block_1.style.backgroundColor = event.target.value;
  }
  console.log(block_1.style.backgroundColor);
}

function updateAll(event) {
  document.querySelectorAll("block-1").forEach(function(block_1) {
    block_1.style.backgroundColor = event.target.value;
  });
}