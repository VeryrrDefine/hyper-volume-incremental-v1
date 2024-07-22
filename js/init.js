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

function softcap(value,start,power,mode,dis=false){
    var x = value.clone()
    if (!dis&&x.gte(start)) {
        if ([0, "pow"].includes(mode)) x = x.div(start).max(1).pow(power).mul(start)
        if ([1, "mul"].includes(mode)) x = x.sub(start).div(power).add(start)
        if ([2, "exp"].includes(mode)) x = expMult(x.div(start), power).mul(start)
        if ([3, "log"].includes(mode)) x = x.div(start).log(power).add(1).mul(start)
    }
    return x
}
ExpantaNum.prototype.softcap = function (start,power,mode,dis=false){
    var x = this.clone()
    return softcap(x,start,power,mode,dis)
}

/*
=

* Q.softcap = Q.soft = function (a, start, power, mode, dis=false) {
    return new ExpantaNum(a).softcap(start,power, mode, dis)
  }
  P.softcap = P.soft = function (start, power, mode, dis=false) {
    var x = this.clone()
    if (!dis&&x.gte(start)) {
      if ([0, "pow"].includes(mode)) x = x.div(start).max(1).pow(power).mul(start)
      if ([1, "mul"].includes(mode)) x = x.sub(start).div(power).add(start)
      if ([2, "exp"].includes(mode)) x = expMult(x.div(start), power).mul(start)
      if ([3, "log"].includes(mode)) x = x.div(start).log(power).add(1).mul(start)
    }
    return x
  }*/
function expMult(a,b,base=10) {
    return ExpantaNum.gte(a,10) ? ExpantaNum.pow(base,ExpantaNum.log(a,base).pow(b)) : E(a)
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

