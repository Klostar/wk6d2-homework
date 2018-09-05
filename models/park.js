const Park = function(name,ticketPrice, dinosaurs,visitors){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
  this.visitors = visitors;

}

module.exports = Park;


Park.prototype.addDinosaur = function (dinosaurs) {
  this.dinosaurs.push(dinosaurs)
};

Park.prototype.removeDinosaur = function (dinosaurs) {
  this.dinosaurs.pop()
};


Park.prototype.mostPopularDinosaur = function () {
  this.dinosaurs.sort(function(obj1 , obj2){
    return obj2.guestsAttractedPerDay - obj1.guestsAttractedPerDay
// why do you need a return here!!!
  })
return this.dinosaurs[0]
};

Park.prototype.dinosaurSpecies = function () {
  let dinosaurSpecies = {'trex':0, 'velociraptor':0, 'dipliodocus':0, 'other':0};
  for (const dinosaur of this.dinosaurs){
    if (dinosaur.species === 'trex'){
      dinosaurSpecies.trex +=1;
    }
    else if ( dinosaur.species === 'velociraptor'){
      dinosaurSpecies.velociraptor +=1;
    }
    else if ( dinosaur.species === 'dipliodocus'){
      dinosaurSpecies.dipliodocus +=1;
    }
    else dinosaurSpecies.other +=1;

  }
  return dinosaurSpecies;
};

Park.prototype.removeSpecies = function (species) {
  let dinosaurSpecies = ('trex', 'velociraptor', 'dipliodocus', 'other')
  for ( const dinosaur of this.dinosaurs){
    if( dinosaur.species === species) {
      dinosaur.removeSpecies();
    }
    else return dinosaurSpecies
  };
};


//itterating through the array so could come back with unexpected results, try not to do this. push the ones you want to keep on
//to a new array. try the below code.

// ----------------class solution---------------------------
// Park.prototype.removeBySpecies = function (species) {
//   const newDinosaurs = [];
//
//   for (const dinosaur of this.dinosaurs) {
//     if (dinosaur.species !== species) {
//       newDinosaurs.push(dinosaur);
//     }
//   }
//
//   this.dinosaurs = newDinosaurs;
// }



Park.prototype.dailyVisitors = function () {
  let dailyVisitors = 0
    for ( const dinosaur of this.dinosaurs){
      dailyVisitors += dinosaur.guestsAttractedPerDay
    }
    return dailyVisitors
};

Park.prototype.annualVisitors = function () {
  let dailyVisitors = this.dailyVisitors();
  let annualVisitors = (dailyVisitors * 365 );
  return annualVisitors;

};

Park.prototype.annualRevenue = function () {
  let annualVisitors = this.annualVisitors();
  let annualRevenue = (annualVisitors * this.ticketPrice)
  return annualRevenue

};

Park.prototype.dinosaurDiet = function () {
  let dinosaurDiet = {'carnivore':0, 'herbivore':0, 'omnivore':0,};
  for (const dinosaur of this.dinosaurs){
    if (dinosaur.diet === 'carnivore'){
      dinosaurDiet.carnivore +=1;
    }
    else if ( dinosaur.diet === 'herbivore'){
      dinosaurDiet.herbivore +=1;
    }
    else dinosaurDiet.omnivore +=1;

  }
  return dinosaurDiet;
};


//-------------------class notes------------------------
// Park.prototype.numberOfDinosaursByDiet = function () {
//   const numberOfDinosaursByDiet = {};
//
//   for (const dinosaur of this.dinosaurs) {
//     if (numberOfDinosaursByDiet[dinosaur.diet]) {
//       numberOfDinosaursByDiet[dinosaur.diet] += 1;
//     }
//     else {
//       numberOfDinosaursByDiet[dinosaur.diet] = 1;
//     }
//   }
//
//   return numberOfDinosaursByDiet;
// }
//
// module.exports = Park;
