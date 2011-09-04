describe("Polygon", function() {
  beforeEach(function() {
    this.basicPolygon   = [[0,0], [4,0], [4,4], [0,4]];
    this.convexPolygon  = [[1,0], [4,0], [5,2], [3,4], [1,5], [0,1]];
    this.concavePolygon = [
      [0,0], [3,-1], [5,-1], [7,1], [6,3],
      [4,5], [5,2],  [4,1],  [3,2], [2,1],
      [2,4], [1,4],  [-1,2]
    ];
  });

  it("handles basic polygons", function() {
    var polygon = new Polygon(this.basicPolygon);
    expect(polygon.sides).toEqual(4);
    expect(polygon).toContain([1,1]);
    expect(polygon).toContain([2,2]);
    expect(polygon).toContain([3,3]);
    expect(polygon).toNotContain([5,3]);
    expect(polygon).toNotContain([4,5]);
  });

  it("contains edges", function() {
    var polygon = new Polygon(this.basicPolygon);
    expect(polygon).toContain([0,0]);
    expect(polygon).toContain([2,0]);
    expect(polygon).toContain([4,0]);
    expect(polygon).toContain([4,2]);
    expect(polygon).toContain([4,4]);
    expect(polygon).toContain([2,4]);
    expect(polygon).toContain([0,4]);
  });

  it("handle convex polygons", function() {
    var polygon = new Polygon(this.convexPolygon);
    expect(polygon.sides).toEqual(6)
    expect(polygon).toContain([1,1]);
    expect(polygon).toContain([2,2]);
    expect(polygon).toContain([3,3]);
    expect(polygon).toNotContain([5,3]);
    expect(polygon).toNotContain([2,5]);
    expect(polygon).toNotContain([0,0]);
    expect(polygon).toNotContain([0,2]);
    expect(polygon).toNotContain([5,1]);
  });

  it("handles concave polygons", function() {
    polygon = new Polygon(this.concavePolygon)
    expect(polygon).toContain([1,1]);
    expect(polygon).toContain([1,2]);
    expect(polygon).toContain([1,3]);
    expect(polygon).toContain([3,1]);
    expect(polygon).toContain([4,0]);
    expect(polygon).toContain([5,0]);
    expect(polygon).toContain([6,1]);
    expect(polygon).toContain([6,2]);
    expect(polygon).toContain([5,3]);
    expect(polygon).toNotContain([3,3]);
    expect(polygon).toNotContain([4,2]);
    expect(polygon).toNotContain([4,3]);
    expect(polygon).toNotContain([7,0]);
    expect(polygon).toNotContain([7,2]);
    expect(polygon).toNotContain([3,4]);
  });
});
