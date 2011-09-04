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
    var onLine = function(point) {
      var result = false,
          distance = function(point1, point2) {
            return Math.sqrt(Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2));
          };

      for(var i = 1; i < points.length; i++) {
        if(distance(points[i - 1], point) + distance(point, points[i]) == distance(points[i - 1], points[i])) {
          result = true;
          break;
        }
      }

      return result;
    };

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

        if(result) { return result; }

        return onLine(point);
      }
    }
  };
})();
