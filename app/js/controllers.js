'use strict';

/* Controllers */

angular.module('scoreKeeperApp.controllers', [])
  .controller('HomePageCtrl', ['$scope', function($scope) {

  }])
  .controller('SimpleScoreCtrl', ['$scope', function($scope) {
    $scope.players = [
      {name:'Player 1',
       scores: [0],
        newScore:"",
        editing:false}, 
      {name:'Player 2',
       scores: [0],
        newScore:"",
        editing:false}];

    $scope.cumulativeScore = function(scores, index){
      // Default to the entire cumulative score if no index is given.
      index = index != undefined? index : scores.length - 1;

      if (index === 0){
        return scores[0];
      }else{
        return scores.slice(0,index+1).reduce(function(a, b) { return a + b });
      }
    }

    $scope.addScore = function(player){
      player.scores.push(Number(player.newScore));
      player.newScore = "";
    }

    $scope.resetScores = function() {
      angular.forEach($scope.players, function (player, index){
        player.scores = [0];
        player.newScore = "";
      });
    }

    $scope.addPlayer = function() {
      $scope.players.push({
        name:"Player " + ($scope.players.length + 1),
        scores: [0],
        editing: false
      })
    }

    $scope.removePlayer = function(playerIndex){
      $scope.players[playerIndex].editing = false;
      $scope.players.splice(playerIndex,1);
    }

  }])
  .controller('OhHellCtrl', ['$scope', function($scope) {
    $scope.tricksPerPlayer = tricksPerPlayer;

    $scope.players = [
      {name:'Player 1',
        scores: [],
        newScore:"",
        editing:false}, 
      {name:'Player 2',
        scores: [],
        newScore:"",
        editing:false},
      {name:'Player 3',
        scores: [],
        newScore:"",
        editing:false}];

    $scope.maxTrickSize = 8;

    $scope.trickData = [];

    var tricks = tricksPerPlayer($scope.players.length, $scope.maxTrickSize);

    for(var i = 0; i < tricks.length; i++){
      $scope.trickData.push(
        {numberOfTricks:tricks[i],
          trump:""
        });
      for (var j = 0; j < $scope.players.length; j++){
        $scope.players[j].scores.push({
          bid:"b",
          made:"s"
        })
      }
    };

    console.log($scope.trickData);


    function tricksPerPlayer(numberOfPlayers, maxTrickSize){
      var maxTrickSize = maxTrickSize != undefined? maxTrickSize : Math.floor(52/numberOfPlayers);
      var tricks = [];

      for (var i = 1; i <= maxTrickSize; i++){
        tricks.push(i);
      }

      var rTricks = tricks.slice().reverse();

      // We usually play with the same amount of no trump hands as there are players.
      var numberOfMiddleTricks = numberOfPlayers > 1 ? numberOfPlayers - 2: 0;
      for( var i = 1; i<= numberOfMiddleTricks; i++ ){
        tricks.push( maxTrickSize );
      }

      var tricks = tricks.concat( rTricks );

      return tricks;
    }    
  }]);

