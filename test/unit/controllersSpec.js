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