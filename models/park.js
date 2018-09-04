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
