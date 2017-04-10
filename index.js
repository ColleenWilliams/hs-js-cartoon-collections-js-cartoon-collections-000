function dwarfRollCall(dwarves) {
  var dwarves2 = "";
  for(var i = 0; i<= dwarves.length - 1; i++){
    dwarves2+= ((i*1+1).toString()) + ". " + dwarves[i] + " ";
  }
  return dwarves2;
}

function summonCaptainPlanet(planeteerCalls){
  var loudPlaneteerCalls = [];
  for(var i =0; i<=planeteerCalls.length -1; i++){
    loudPlaneteerCalls.push(planeteerCalls[i].toUpperCase() + "!");
  }
  return loudPlaneteerCalls;
}

// function summonCaptainPlanet(planeteerCalls){
//   // var loudPlaneteerCalls = [];
//   for(var i =0; i<=planeteerCalls.length -1; i++){
//     planeteerCalls[i] = planeteerCalls[i].toUpperCase() + "!";
//   }
//   return planeteerCalls;
// }

function longPlaneteerCalls(words) {
  var counter = 0;
  for(var i =0; i<=longPlaneteerCalls.length -1; i++){
    if(words[i].length >4){
      counter++
    }
    if(counter > 0){
      return true;
    } else {
      return false;
    }
  }
  
}

function findTheCheese (foods) {
  var cheese = ["gouda", "camembert", "cheddar"];
  var cheeseFound =[];
  for (var i = 0; i<=foods.length; i++){
    for(var j = 0; j<=cheese.length -1; j++){
      if(foods[i] === cheese[j]){
        cheeseFound.push(cheese[j]);
      } 
    }
  }
  if(cheeseFound.length > 0){
  return cheeseFound[0];    
  } else {
  return "no cheese!";
  }
}

