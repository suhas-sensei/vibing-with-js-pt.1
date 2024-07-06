var index = 0;

function changeColors() {
  var colors = [
    "Azure",
    "Crimson",
    "Emerald",
    "Lavender",
    "Magenta",
    "Indigo",
    "Saffron",
    "Turquoise",
    "Charcoal",
    "Coral",
    "Amber",
    "Olive",
    "Plum",
    "Teal",
    "Fuchsia",
  ];
  document.getElementsByTagName("body")[0].style.backgroundColor =
    colors[index++];
  document.getElementById("ok").style.color=colors[index++];

  if (index > colors.length - 1) {
    index = 0;
  }
}
