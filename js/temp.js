var tmp = {

    dimension: {
        getDimMultiplier(dimid) {
            i = dimid - 1;
            let result = E('2')
                //.add(player.mm3o5_volumes.points.logarithm("100").div(10).minimum("1.5")))
                .pow(player.dimensions[DIMENSIONS_BOUGHT][i].floor())

            ;
            if (hasMM4Upg(1) && i===0){
                result = result.mul(mm4_upgrades[0].effect);
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
    }
}