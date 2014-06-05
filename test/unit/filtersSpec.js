'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {
  beforeEach(module('scoreKeeperApp.filters'));


  describe('interpolate', function() {
    beforeEach(module(function($provide) {
      $provide.value('version', 'TEST_VER');
    }));


    it('should replace VERSION', inject(function(interpolateFilter) {
      expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
    }));
  });

  describe('scoreText', function(){
    it('should replace numbers with a fixed width version of themselves, including the + or - sign for positive or negative', inject(function(scoreTextFilter){
      expect(scoreTextFilter(10,10)).toEqual('+\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A010');
      expect(scoreTextFilter(-10,10)).toEqual('-\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A010');
      expect(scoreTextFilter(123,10)).toEqual('+\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0123');
      expect(scoreTextFilter(-123,10)).toEqual('-\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0123');
    }));


  })
});
