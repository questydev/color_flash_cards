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

let animalArray = [];

//Get Animal Pics from API
async function getData() {
  const res = await fetch(
    "https://api.unsplash.com/search/photos?page=1&query=animals&client_id=wV366wG17ZFzGewQZOAlk7KuMBpSFNL9zQroLafIRyc"
  );

  const { results } = await res.json();

  console.log(results);

  results.forEach((animal) => {
    const picList = animal.urls.regular;
    animalArray.push(picList);
  });

  colorChange();
  animalChange();
}

getData();

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
