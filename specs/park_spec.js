const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {


  let park;
  let trex;
  let velociraptor;
  let dipliodocus;
  let dinosaurs;

  beforeEach(function () {

    trex = new Dinosaur('trex','carnivore',50)
    velociraptor = new Dinosaur('velociraptor', 'omnivore', 60)
    dipliodocus = new Dinosaur('dipliodocus','herbivore',30)
    stegosaurus = new Dinosaur('stegosaurus','carnivore', 60)// only added for push method once loops bac round ignorew
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
    park.removeDinosaur(stegosaurus);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual,2)
  });

  it('should be able to find the dinosaur that attracts the most visitors',function(){
    const actual = park.mostPopularDinosaur();
    assert.strictEqual(actual,velociraptor)
  });


  it('should be able to find all dinosaurs of a particular species', function(){
      park.addDinosaur(stegosaurus)
      const actual = park.dinosaurSpecies();
      assert.deepStrictEqual(actual, { 'trex': 1, 'velociraptor': 1, 'dipliodocus': 1, 'other':1 })

    });


  it('should be able to remove all dinosaurs of a particular species', function(){
    park.dinosaurSpecies('trex', 'velociraptor', 'dipliodocus', 'other');
    park.removeSpecies(trex);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual,3)
  });

  it('should be able to get total daily visitors', function(){
      const actual = park.dailyVisitors();
      assert.strictEqual(actual, 140);
    });

  it('should be able to get total annual visitors', function(){
        const actual = park.annualVisitors();
        assert.strictEqual(actual, 51100);
      });
});
