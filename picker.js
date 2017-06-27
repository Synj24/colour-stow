var colour_1
var defaultColour = "#096E72";

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