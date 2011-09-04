beforeEach(function() {
  this.addMatchers({
    toContain: function(point) {
      return this.actual.contains(point);
    },

    toNotContain: function(point) {
      return !this.actual.contains(point);
    }
  })
});
