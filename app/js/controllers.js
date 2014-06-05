'use strict';

/* Controllers */

angular.module('scoreKeeperApp.controllers', [])
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

  }]);

