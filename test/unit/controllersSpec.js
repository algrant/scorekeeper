'use strict';

/* jasmine specs for controllers go here */



describe('SimpleScoreCtrl', function(){
  var scope = {}, 
      ctrl;

  beforeEach( function(){
    module('scoreKeeperApp.controllers');
    inject(function($controller) {
      ctrl = $controller('SimpleScoreCtrl', {$scope:scope});
    });
  });

  it('should create "players" model with 2 players', function(){
    expect(scope.players.length).toEqual(2);
  });

  it('should load empty scores', function(){
    expect(scope.players[0].scores).toEqual([0]);
  });

  it('should have a function cumulativeScore(score, index) which can determine culumative score up to a certain index', function(){
    var scores = [0];
    expect(scope.cumulativeScore(scores,0)).toEqual(0);
    scores = [1,2,3,4,5]
    expect(scope.cumulativeScore(scores,4)).toEqual(15);
  });

  it('should have function to add a new player: addPlayer()', function(){
    scope.addPlayer();
    expect(scope.players.length).toEqual(3);
    expect(scope.players[2].name).toEqual("Player 3");
  });

  it('should have a function to reset the scores: resetScores()', function(){
    scope.players[0].scores = [1,2,3,4,5];
    scope.players[1].scores = [6,7,8,9,10];
    
    expect(scope.players[0].scores.length).toEqual(5);
    expect(scope.players[1].scores.length).toEqual(5);

    scope.resetScores();
    
    expect(scope.players[0].scores).toEqual([0]);
    expect(scope.players[1].scores).toEqual([0]);
  })

});


describe('OhHellCtrl', function(){
  var scope = {}, 
      ctrl;

  beforeEach( function(){
    module('scoreKeeperApp.controllers');
    inject(function($controller) {
      ctrl = $controller('OhHellCtrl', {$scope:scope});
    });
  });

  it('should create "players" model with 3 players', function(){
    expect(scope.players.length).toEqual(3);
  });

  it('should have a function to generate trick sizes', function(){
    var fourPlayer = scope.tricksPerPlayer(4);
    expect(fourPlayer).toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,13,13,13,12,11,10,9,8,7,6,5,4,3,2,1]);

    var threePlayerMaxEight = scope.tricksPerPlayer(3,8);
    expect(threePlayerMaxEight).toEqual([1,2,3,4,5,6,7,8,8,8,7,6,5,4,3,2,1]);
  });

  it('should initialise an empty score sheet', function(){
    expect(scope.myData).toEqual([]);
  });

});