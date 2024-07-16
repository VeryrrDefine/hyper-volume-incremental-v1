var tmp = {

    dimension: {
        getDimMultiplier(dimid) {
            i = dimid - 1;
            let result = E('2')
                //.add(player.mm3o5_volumes.points.logarithm("100").div(10).minimum("1.5")))
                .pow(player.dimensions[DIMENSIONS_BOUGHT][i].floor())
                .mul(hasMM3upgrade(11) ? 2 : 1)
                .mul(hasMM3upgrade(20) ? 20 : 1)
                .mul(getMM3upgradeEffect(32,1))

            ;
            return result;
        },
    },
    mm3: {
        get gain() {
            return player.volumes.logarithm(10).sub(258.3).div(50).floor().max(0);
        },
        confirm: 0
    }
}