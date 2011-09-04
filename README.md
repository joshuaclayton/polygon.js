# Polygon.js

A polygon object written in Javascript. Provides `points`, `sides`, and `contains`. Handles [simple polygons](http://en.wikipedia.org/wiki/Simple_polygon).

## Usage

```javascript
var square = new Polygon([[0,0], [2,0], [2,2], [0,2]]);

square.sides;           // 4
square.points;          // [[0,0], [2,0], [2,2], [0,2]]
square.contains([1,1]); // true
```

## Why?

More advanced [geospatial querying in Mongo](http://www.mongodb.org/display/DOCS/Geospatial+Indexing#GeospatialIndexing-Querying) (I think?).

## License

See LICENSE

## Author

Written by Josh Clayton.
