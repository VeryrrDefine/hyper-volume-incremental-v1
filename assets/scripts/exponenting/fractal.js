// Fracture Ray(不是)

function getFractalEffect() {
    let temp1 = "";
    if (player.exponenting.fractal.fractals.lt(10)) {
        temp1 = temp1.concat("Get 10 6D Fractal unlock 6DFr-1<sup>st</sup> Effect<br>")
    } else {
        temp1 = temp1.concat("mm<sup>5</sup> gain ×" + tmp.mm6.fractal.fracEff1.formatA() + "<br>")
    }
    if (player.exponenting.fractal.fractals.lt(1000)) {
        temp1 = temp1.concat("Get 1,000 6D Fractal unlock 6DFr-2<sup>nd</sup> Effect<br>")
    }else{
        temp1 = temp1.concat("mm<sup>5.95</sup> gain ×"+(tmp.mm6.fractal.fracEff2.formatA()))
    }
    return temp1
}
function updateFractal(){
    player.exponenting.fractal.fractals = player.exponenting.fractal.fractals.add(
        player.exponenting.fractal.fractalEngine.mul(diff2)
    )
}
function getFractalEngineCost() {
    return ExpantaNum.pow(2.64454438, player.exponenting.fractal.fractalEngine)
}
function buyFractalEngine() {
    player.exponenting.points.gte(getFractalEngineCost()) ? (function(){
        player.exponenting.points = player.exponenting.points.sub(getFractalEngineCost())
        player.exponenting.fractal.fractalEngine=player.exponenting.fractal.fractalEngine.add(1)
    })() : (function(){})()
}
function bulkFractalEngine() {
    let bulkTimes = player.exponenting.fractal.fractalEngine.logarithm(2.64454438).floor().sub(
        getFractalEngineCost().logarithm(2.64454438)
    ).floor()

    player.exponenting.fractal.fractalEngine = player.exponenting.fractal.fractalEngine.add(bulkTimes)

}