var tmp = {

    dimension: {
        getDimMultiplier(dimid) {
            i = dimid - 1;
            let result = E('2')
                //.add(player.mm3o5_volumes.points.logarithm("100").div(10).minimum("1.5")))
                .pow(player.dimensions[DIMENSIONS_BOUGHT][i].floor())
                .mul(tmp.mm35.effect_to_dimensions)
            ;
            if (hasMM4Upg(1) && i === 0) {
                result = result.mul(mm4_upgrades[0].effect);
            }
            if (hasMM4Upg(2) && i === 6) {
                result = result.mul(mm4_upgrades[1].effect);
            }
            if (hasMM4Upg(4)) {
                result = result.mul(mm4_upgrades[3].effect);
            }
            if (hasMM4Upg(6)) {
                result = result.mul(E.pow(1.001, player.dimensions[DIMENSIONS_BOUGHT][i].div(10).floor()));
            }
            return result;
        },
    },
    mm3: {
        get gain() {
            return player.volumes.div("1e8").root(300).div(10)
                .mul(hasMM3Upg(2) ? 5 : 1).floor().max(0);
        },
        confirm: 0
    },
    mm4: {
        get gain() { // gain per second
            return player.dimensions[DIMENSIONS_POINTS][0]
                .mul(player.dimensions[DIMENSIONS_MULTI][0])
                .mul(hasMM3Upg(1) ? 1e5 : 1)
                .softcap(tmp.mm4.softcap1_start, tmp.mm4.softcap1_power, 'pow');
        },
        get softcapped1() {
            return tmp.mm4.gain.gte(tmp.mm4.softcap1_start)
        },
        get softcap1_power() {
            return 0.1
        },
        get softcap1_start() {
            return E("1.797e308")
        }
    },
    mm35: {
        get replicatePerTick() {
            let mult = E(1).add(E(0.1).mul(player.volumes.add(1).logarithm(10).div(80).max(1)).mul(diff))

            return mult
        },
        get effect_to_dimensions() {
            let a = player.mm35_volumes.points.logarithm(10).pow(2).div(10).max(1)
            a = softcap(a, 150, 0.2, "pow")
            return a
        },
        get san_xiang_bo_decrease() {
            let a = player.mm35_volumes.san_xiang_bo_points.pow(diff)
            if (player.mm3_volumes.unl) {
                a = E(1)
            }
            return a
        }
    }
}