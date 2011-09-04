# Polygon.js

A polygon object written in Javascript. Provides points, sides, and contains.

## Usage

```javascript
var square = new Polygon([[0,0], [2,0], [2,2], [0,2]]);
square.sides           # 4
square.points          # [[0,0], [2,0], [2,2], [0,2]]
square.contains([1,1]) # true
```

## License

See LICENSE

## Author

Written by Josh Clayton.
