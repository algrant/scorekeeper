'use strict';

/* Filters */

angular.module('scoreKeeperApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]).
  filter('scoreText', function() {
    return function(input, totallength) {
      input = input || 0;
      totallength = totallength || 20;

      var output = ""
      if (input < 0){
      	input = (input*-1).toString();
      	output = "-"
      }else{
      	input = input.toString();
      	output = "+";
      }
      // Array length is going to be the number of spaces + 1 that we wish for
      var spaces = new Array(totallength - input.length).join('\u00A0');
      output += spaces + input;

      return output;
    };
  }).filter('absolute', function(){
    return function(input){
      return Math.abs(input).toString();
    }
  }).filter('floor', function(){
    return function(input){
      return Math.floor(input).toString();
    }
  })
