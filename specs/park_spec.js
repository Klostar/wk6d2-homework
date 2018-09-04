const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {


  let park;
  let trex;
  let velociraptor;
  let dipliodocus;
  let dinosaur;

  beforeEach(function () {

    trex = new Dinosaur('t-rex','carnivore',50)
    velociraptor = new Dinosaur('velociraptor', 'omnivore', 40)
    dipliodocus = new Dinosaur('dipliodocus','herbivore',30)
    stegosaurus = new Dinosaur('stegosaurus','carnivore', 60)
    dinosaurs = [ trex, velociraptor,dipliodocus];
    park = new Park('Jurrassic', 10 , dinosaurs)


  })

it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual,'Jurrassic');
  });



  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function(){

    const actual = park.dinosaurs.length
    assert.strictEqual(actual,3)
  });


  it('should be able to add a dinosaur to its collection',function(){
    park.addDinosaur(stegosaurus);
    const actual = park.dinosaurs.length
    assert.strictEqual(actual,4)
  });

  it('should be able to remove a dinosaur from its collection',function(){
    park.removeDinosaur(stegosaurus)
    const actual = park.dinosaurs.length
    assert.strictEqual(actual,2)
  });

  it('should be able to find the dinosaur that attracts the most visitors',function(){
    
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
