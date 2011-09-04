(function() {
  var map = function(elems, callback, arg) {
    var ret = [], value;
    for (var i = 0, length = elems.length; i < length; i++) {
      value = callback(elems[i], i, arg);
      if (value != null) { ret[ret.length] = value; }
    }

    return ret.concat.apply([], ret);
  },
  max = function(arr) { return Math.max.apply({}, arr); },
  min = function(arr) { return Math.min.apply({}, arr); };

  window.Polygon = function(points) {
    return {
      points   : points,
      sides    : points.length,
      contains : function(point) {
        var polyXs = map(this.points, function(p, i) { return p[0]; }),
            polyYs = map(this.points, function(p, i) { return p[1]; }),
            x      = point[0],
            y      = point[1];

        if(max(polyXs) < x || min(polyXs) > x || max(polyYs) < y || min(polyYs) > y) {
          return false;
        }

        var result = false,
            j      = this.sides - 1;

        for(var i = 0; i < this.sides; i++) {
          if((polyYs[i] < y && polyYs[j] >= y) || (polyYs[j] < y && polyYs[i] >= y)) {
            if((polyXs[i] + (y - polyYs[i])/(polyYs[j] - polyYs[i])*(polyXs[j] - polyXs[i])) < x) {
              result = !result;
            }
          }
          j = i;
        }

        return result;
      }
    }
  };
})();
