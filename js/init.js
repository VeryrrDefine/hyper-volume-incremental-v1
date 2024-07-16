"use strict";
var hasLoaded = {status: false};
var player = {};
var developer = {
    timeboost: 1
};
var E = EN;
ExpantaNum.prototype.format = function (){
    return format(this);
}

const DIMENSIONS_POINTS = 0;
const DIMENSIONS_MULTI = 1;
const DIMENSIONS_BOUGHT = 2;
const DIMENSIONS_COST = 3;

function ENify(a) {
    let b = new ExpantaNum(0);
    if (a !== undefined) {
        b.array = a.array;
        b.layer = a.layer;
        b.sign = a.sign;
    }
    return b
}

