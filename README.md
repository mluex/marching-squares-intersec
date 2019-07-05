# marching-squares-intersec
## Introduction
Calculate intersection point of an isoline and an edge in a grid.

![Isoline (red) intersection at (0.625, 1.5)](iso_intersec.png?raw=true "Isoline (red) intersection at (0.625, 1.5)")

Isoline (red) intersection at (0.625, 1.5)

## Usage
```javascript
var intersec = marchingSquaresIntersec({
    iso: 0,
    pointA: {
        x: 0.5,
        y: 1.5,
        f: -0.6875
    },
    pointB: {
        x: 1.5,
        y: 1.5,
        f: 4.8125
    },
});

console.log(intersec);
// { x: 0.625, y: 1.5 }
```