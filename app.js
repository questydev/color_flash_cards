const cardColor = document.querySelector(".card");
let colorArray = [
  "red",
  "blue",
  "yellow",
  "white",
  "black",
  "purple",
  "green",
  "orange",
  "gray",
  "pink",
];

let colorRemoved = "";
let prevColorRemoved = "";

function colorChange() {
  //Randomize the Array Selection
  const random = Math.floor(Math.random() * colorArray.length);
  //Apply new Random selection to the variable
  colorRemoved = colorArray[random];
  //Change Background Color
  cardColor.style.backgroundColor = colorRemoved;
  //Add previous Color back into Array after background is applied
  if (prevColorRemoved !== "") {
    colorArray.push(prevColorRemoved);
  }
  //Remove the current color selected
  colorArray.splice(colorArray.indexOf(colorRemoved), 1);
  //Apply current removed color to variable that will be added back to the list next round
  prevColorRemoved = colorRemoved;
  //console.log(colorArray, colorRemoved);
}

setInterval(colorChange, 5000);
