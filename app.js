const cardColor = document.querySelector(".colorCard");
const cardAnimal = document.querySelector(".animalCard");

let colorArray = [
  "red",
  "blue",
  "yellow",
  "black",
  "purple",
  "green",
  "orange",
  "gray",
  "pink",
  "lightblue",
  "limegreen",
];

let animalArray = [
  "imgs/cat.jpg",
  "imgs/dog.jpg",
  "imgs/elephant.jpg",
  "imgs/giraffe.jpg",
];

let colorRemoved = "";
let prevColorRemoved = "";

let animalRemoved = "";
let prevAnimalRemoved = "";

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

function animalChange() {
  //Randomize the Array Selection
  const random = Math.floor(Math.random() * animalArray.length);
  //Apply new Random selection to the variable
  animalRemoved = animalArray[random];
  //Change Background Animal
  cardAnimal.style.backgroundImage = `url('${animalRemoved}')`;
  //Add previous Animal back into Array after background is applied
  if (prevAnimalRemoved !== "") {
    animalArray.push(prevAnimalRemoved);
  }
  //Remove the current Animal selected
  animalArray.splice(animalArray.indexOf(animalRemoved), 1);
  //Apply current removed Animal to variable that will be added back to the list next round
  prevAnimalRemoved = animalRemoved;
  console.log(animalArray, animalRemoved);
}

//setInterval(colorChange, 5000);
//setInterval(animalChange, 5000);

// event = keyup or keydown
document.addEventListener("keypress", (event) => {
  if (event.code === "Space") {
    //console.log("Space pressed");
    colorChange();
    animalChange();
  }
});

colorChange();
animalChange();

console.log(animalArray);
