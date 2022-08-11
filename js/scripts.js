window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", sorter);
  console.log("page load function worked")
});

// this above is going to run and when the event is submitted, will run the function 'sorter'

//function sorter(a, b, c) {
  //sorter(a, b, c)
//}
function hidetext() {
  document.getElementById("3same").setAttribute("class", "hidden");
  document.getElementById("2same").setAttribute("class", "hidden");
  document.getElementById("nosame").setAttribute("class", "hidden");
  document.getElementById("error").setAttribute("class", "hidden");
}

function sorter(event) {
  event.preventDefault();
  hidetext();
  let a = parseInt(document.querySelector("#side1").value);
  let b = parseInt(document.querySelector("#side2").value);
  let c = parseInt(document.querySelector("#side3").value);
  console.log("a is: " + a + " b is: " + b + " c is: " + c)
  ///const points = [40, 100, 1, 5, 25, 10];

// Sort the numbers in descending order:
//points.sort(function(a, b){return b-a});

//let highest = points[0];
  const listSides = [a, b, c];
  listSides.sort(function(a, b){return b-a});
  a = listSides[0];
  b = listSides[1];
  c = listSides[2];
  
  console.log("a is: " + a + "b is: " + b + "c is: " + c)
  sizeCheck(a, b, c);
}

function sizeCheck(a, b, c) {
if (a > b + c) {
  document.getElementById("error").removeAttribute("class");
} else {
  identifier(a, b, c);
}
}

function identifier(a, b, c) {
  if (a === b && b === c) { 
    console.log()
    document.getElementById("3same").removeAttribute("class");
  }
  else if (a === b || b === c) {
    document.getElementById("2same").removeAttribute("class");
  }
  else {
    document.getElementById("nosame").removeAttribute("class");
  }
 }

