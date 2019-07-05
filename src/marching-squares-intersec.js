/*
 * https://github.com/mluex/marching-squares-intersec
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */

;(function (root, factory) {
    if (typeof exports === 'object') { // CommonJS
        var marchingSquaresIntersec = factory();

        if (typeof module === 'object' && module && module.exports) {
            exports = module.exports = marchingSquaresIntersec;
        }

        exports.marchingSquaresIntersec = marchingSquaresIntersec;
    } else if (typeof define === 'function' && define.amd) { // AMD
        define([], factory);
    } else { // Browser
        root.marchingSquaresIntersec = factory();
    }

}(this, function () {
    var calculate = function (params) {
        validateParams(params);

        var a = ((((-1) * params.pointB.f) + params.iso) / (params.pointA.f - params.pointB.f));
        var b = 1 - a;

        var intersecX = (a * params.pointA.x) + (b * params.pointB.x);
        var intersecY = (a * params.pointA.y) + (b * params.pointB.y);

        return {
            x: intersecX,
            y: intersecY
        };
    };

    var validateParams = function (params) {
        params = params || {};

        if (!params.hasOwnProperty('iso') || isNaN(params.iso)) {
            throw new Error('Param iso is missing or invalid');
        }

        if (!params.hasOwnProperty('pointA')) {
            throw new Error('Param pointA is missing or invalid');
        }

        validatePointParams(params.pointA);

        if (!params.hasOwnProperty('pointB')) {
            throw new Error('Param pointB is missing or invalid');
        }

        validatePointParams(params.pointB);
    };

    var validatePointParams = function (pointParams) {
        pointParams = pointParams || {};

        if (!pointParams.hasOwnProperty('x') || isNaN(pointParams.x)) {
            throw new Error('Param x of point is missing or invalid');
        }

        if (!pointParams.hasOwnProperty('y') || isNaN(pointParams.y)) {
            throw new Error('Param y of point is missing or invalid');
        }

        if (!pointParams.hasOwnProperty('f') || isNaN(pointParams.y)) {
            throw new Error('Function value of point is missing or invalid');
        }
    };

    return calculate;
}));