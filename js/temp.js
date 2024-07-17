var tmp = {

    dimension: {
        getDimMultiplier(dimid) {
            i = dimid - 1;
            let result = E('2')
                //.add(player.mm3o5_volumes.points.logarithm("100").div(10).minimum("1.5")))
                .pow(player.dimensions[DIMENSIONS_BOUGHT][i].floor())
                .mul(!player.mm3_volumes.unl ? tmp.mm35.effect_to_dimensions : 1)
            ;
            if (hasMM4Upg(1) && i===0){
                result = result.mul(mm4_upgrades[0].effect);
            }
            if (hasMM4Upg(2) && i===6){
                result = result.mul(mm4_upgrades[1].effect);
            }
            if (hasMM4Upg(4) ){
                result = result.mul(mm4_upgrades[3].effect);
            }
            if (hasMM4Upg(6) ){
                result = result.mul(E.pow(1.001,player.dimensions[DIMENSIONS_BOUGHT][i].div(10).floor()));
            }
            return result;
        },
    },
    mm3: {
        get gain() {
            return player.volumes.logarithm(10).sub(258.3).div(50).floor().max(0);
        },
        confirm: 0
    },
    mm4: {
        get gain(){ // gain per second
            return player.dimensions[DIMENSIONS_POINTS][0]
                .mul(player.dimensions[DIMENSIONS_MULTI][0])
        }
    },
    mm35: {
        get replicatePerTick(){
            let mult = E(1).add(E(0.1).mul(player.volumes.add(1).logarithm(10).div(80).max(1)).mul(diff))
            return mult
        },
        get effect_to_dimensions(){
            let a = player.mm35_volumes.points.logarithm(10).pow(2).div(10).max(1)
            return a
        },
        get san_xiang_bo_decrease(){
            let a = player.mm35_volumes.san_xiang_bo_points.pow(diff)
            return a
        }
    }
}