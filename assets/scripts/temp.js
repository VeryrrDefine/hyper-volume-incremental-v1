var tmp = {

    dimension: {
        getDimMultiplier(dimid,softcapped=true) {
            i = dimid - 1;
            let result = E('2')
            if (hasMM3Upg(7)){
                result = E("2.1")
            }
            if (hasMM3Upg(8)){
                result = E("2.105")
            }

                //.add(player.mm3o5_volumes.points.logarithm("100").div(10).minimum("1.5")))
            result = result.pow(player.dimensions[DIMENSIONS_BOUGHT][i].floor())
            result = result.mul(tmp.mm35.effect_to_dimensions);

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
            if (hasMM3Upg(2)){
                result = result.mul("1e10")
            }
            if (hasMM3Chal(2)){
                result = result.mul("1e3")
            }
            if (hasMM3Chal(3)){
                result = result.pow(1.1);
            }
            if (hasMM3Chal(5) && i === 7) {
                result = result.mul("1e200");
            }
            if (player.inMM3Challenge === 3 || player.inMM3Challenge === 8){
                result = result.pow(0.1);
            }
            if (player.inMM3Challenge === 7){
                result = result.div(E.pow("1e5",player.time.mm3));
            }
            if (dimid==1){
                result = result.div(E.pow("10",player.mm3_volumes.sacrifice_dim1_log10))
            }else{
                result = result.mul(E("ee3").pow(player.mm3_volumes.mm45buyables[2]));
            }
            result = softcap(result,tmp.dimension.softcap,hasMM3Upg(6)? 0.95 : 0.9,"pow",dis=!softcapped) 
            return result;
        },
        get softcap(){
            let a = E("e308")
            if (hasMM4Upg(11)){
                a = E("e400")
            }
            if (hasMM4Upg(12)){
                a = E("e700")
            }
            if (hasMM4Upg(13)){
                a = E("e800")
            }
            if (hasMM3Chal(6)){
                a = E("1e1000")
            }
            if (hasMM4Upg(16)){
                a = E("e12500")
            }
            if (player.inMM3Challenge===6){
                a = E("1e100")
            }
            a = a.mul(E("ee3").pow(player.mm3_volumes.mm45buyables[0]))
            return a
        }
    },
    mm45: {
        get sacrifice_time(){
            return E(10)
        }
    },
    mm3: {
        get gain() {
            let a = player.volumes.div("1e8").root(300).div(10);
            if (hasMM4Upg(9)){
                a = player.volumes.div("1e8").root(250).div(10);
            }
            return a
                
        },
        get resetable(){
            if (player.inMM3Challenge){
                return player.volumes.gte(
                    mm3_challenges[player.inMM3Challenge-1].complete_requirement
                )
            }else{
                return player.volumes.gte('1.797e308')
            }
        },
        confirm: 0
    },
    mm4: {
        get gain() { // gain per second
            return player.dimensions[DIMENSIONS_POINTS][0]
                .mul(player.dimensions[DIMENSIONS_MULTI][0])
                .mul(hasMM3Upg(1) ? 1e5 : 1)
                .softcap(tmp.mm4.softcap1_start, tmp.mm4.softcap1_power, 'pow')
                .mul(hasMM3Chal(7) ? "1e500" : 1);
        },
        get softcapped1() {
            return tmp.mm4.gain.gte(tmp.mm4.softcap1_start)
        },
        get softcap1_power() {
            return 0.9
        },
        get softcap1_start() {
            return E("eee114514")
        }
    },
    mm35: {
        get replicatePerTick() {
            let mult = E(1).add(E(0.1).mul(player.volumes.add(1).logarithm(10).div(80).max(1)).mul(diff))

            if (hasMM3Upg(4)){
                mult = mult.pow(10)
            }
            if (player.inMM3Challenge==4){
                mult = E(1)

            }
            return mult
        },
        get effect_to_dimensions() {

            let a = E("1")
            if (hasMM3Upg(3)){
                a = player.mm35_volumes.points.logarithm(10).pow(2.01).div(10).max(1)
            }else{
                a = player.mm35_volumes.points.logarithm(10).pow(2).div(10).max(1)
            }

            if (player.inMM3Challenge==1){
                a = E(1)
            }
            if (hasMM3Chal(1)){
                a = a.mul("1e3")
            }
            return a
        },
        get san_xiang_bo_decrease() {
            let a = player.mm35_volumes.san_xiang_bo_points.pow(diff)
            if (player.mm3_volumes.unl) {
                a = E(1)
            }
            return a
        },
        get cap(){
            let a = E("e5000")
            if (hasMM3Chal(4)) a = a.mul(mm3_challenges[4-1].reward_effect)

            return a
        }
    }
}