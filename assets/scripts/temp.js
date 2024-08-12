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
                result = result.mul(E("e700").pow(player.mm3_volumes.mm45buyables[1]))
            }else{
                result = result.mul(E("e600").pow(player.mm3_volumes.mm45buyables[2]));
            }
            if (!hasMM3Upg(9)){
                result = softcap(result,tmp.dimension.softcap,hasMM3Upg(6)? 0.95 : 0.9,"pow",dis=!softcapped) 
            }
            result = softcap(result,tmp.dimension.softcap2,0.7,"pow",dis=!softcapped) 

            result = result.mul(tmp.mm5.energyeffect);
            if (player.secutitation.mm5_volumes.galaxies.gte("2") && dimid != 1){
                result = result.mul("e1e6")
            }
            if (player.secutitation.mm5_volumes.galaxies.gte("4") && dimid != 1){
                result = result.mul("e1e4")
            }
            if (dimid !== 1 && player.secutitation.mm5_volumes.galaxies.gte("1")){
                result = result.pow(1.01)
            }
            /*if (player.secutitation.mm5_volumes.galaxies.gte(10)){
                result = result.pow(1.02)
            }*/
            if (hasMM5Upg(4)){
                result = result.pow(1.02)
            }
            if (hasMM5TowUpg(31)){
                result = result.mul("ee6")
            }
            if (player.inMM5Challenge==1){
                temp1 = result.logarithm(10).logarithm(10)
                temp1 = temp1.mul(0.25)
                result = E(10).pow(E(10).pow(temp1));
            }
            result = result.mul(shortcut.secu.mm5_volumes.galaxies.gte(10)?galaxy_rewards[6].effect:"1");
            
            return result;
        },
        canbuyDim(dim){
            if (player.dimensions[DIMENSIONS_COST][dim-1].gte(E.pow(10,Number.MAX_SAFE_INTEGER))){
                return false;
            }
            return true;
        }
        ,
        getDimExponentplier(dimid){
            let result = E(1)
            if (dimid === 8 && hasMM5Upg(1)){
                result = result.add(0.05)
            }
            if (dimid === 2 && hasMM5Upg(2)){
                result = result.add(0.15)
            }
            /*if (dimid === 1 && player.secutitation.mm5_volumes.galaxies.gte("7")){
                result = result.add(0.05)
            }*/
            if (dimid === 1 && hasMM5Upg(3)){
                result = result.add(0.05)

            }
            if (dimid===8){
                result = result.add(0.01*getMM5ChalCompletionTimes(1))
            }
            return result
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
            a = a.mul(E("ee4").pow(player.mm3_volumes.mm45buyables[0]))
            return a
        },
        get softcap2(){
            let a = E("e1e7")
            return a;
        }
    },
    mm45: {
        get sacrifice_goal(){
            let a = E("e6.5e4")
            a = a.mul(E.pow("e5e3",player.mm3_volumes.sacrifice_times))
            return a
        }
    },
    mm3: {
        get gain() {
            let a = player.volumes.div("1e8").root(300).div(10);
            if (hasMM4Upg(9)){
                a = player.volumes.div("1e8").root(250).div(10);
            }
            
            a=a.mul(hasMM5TowUpg(51)?"1e10000":1)
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
            let temp1 = player.dimensions[DIMENSIONS_POINTS][0]
            temp1 = temp1.mul(player.dimensions[DIMENSIONS_MULTI][0])
            temp1 = temp1.mul(hasMM3Upg(1) ? 1e5 : 1)
            .mul(hasMM3Chal(7) ? "1e500" : 1)
            .mul(hasMM5TowUpg(21) ? "1e10000" : 1)
            temp1 = temp1.softcap(tmp.mm4.softcap1_start, tmp.mm4.softcap1_power, 'pow')
            .pow(player.dimensions[DIMENSIONS_EXPONENT][0])
                return temp1;
        },
        get softcapped1() {
            return tmp.mm4.gain.gte(tmp.mm4.softcap1_start)
        },
        get softcap1_power() {
            return 1
        },
        get softcap1_start() {
            return E("J^11451191 999")
        }
    },
    mm35: {
        get replicatePerSecond() {
            let mult = E(1).add(E(0.1).mul(player.volumes.add(1).logarithm(10).div(80).max(1)))

            if (hasMM3Upg(4)){
                mult = mult.pow(10)
            }
            if (player.inMM3Challenge==4){
                mult = E(1)

            }
            return mult.pow(tmp.mm5.mm35replicatemore)
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
    },
    mm5: {
        get gain(){
            let temp1 = player.volumes.clone();
            
            temp1 = temp1.logarithm(10).sub(4500000).div(500000)
            temp1 = temp1.mul(hasMM5TowUpg(41) ? 30 : 1)
            temp1 = temp1.floor().max(0)
            return temp1
        },
        get nextmm5At(){
            return E.pow(10,this.gain.add(1).div(hasMM5TowUpg(41) ? 30 : 1).mul(500000).add(4500000))
        },
        get secu_gain(){
            let temp1 = player.mm3_volumes.points.clone();
            return temp1.logarithm(10).sub(15000).div(5000).floor().max(0)

        },
        get nextSecuAt(){
            return E.pow(10,this.secu_gain.add(1).mul(5000).add(15000));

        },
        get resetable(){
            
            if (player.inMM5Challenge){
                return player.mm3_volumes.points.gte(
                    mm5_challenges[player.inMM5Challenge-1].complete_requirements[getMM5ChalCompletionTimes(player.inMM5Challenge)]
                )
            }else{
                return player.volumes.gte("e5e6") && player.mm3_volumes.points.gte("e2e4")
            }
        },
        get galaxycost(){
            return mm5Galaxycost()
        },
        getDimMultiplier(dimid){
            i = dimid - 1;
            let result = E('1.5')

                //.add(player.mm3o5_volumes.points.logarithm("100").div(10).minimum("1.5")))
            result = result.pow(player.mm5_volume_dimensions[DIMENSIONS_BOUGHT][i].floor())
            if (hasMM5TowUpg(82)){
                result = result.pow(1.3)
            }
            result = result.mul(shortcut.secu.mm5_volumes.galaxies.gte(6)?galaxy_rewards[5].effect:"1");
            return result;
        },
        /*
        1st dim x3
        2st dim x5
        3st dim x10
        4st dim x20
        5st dim x35
        6st dim x90
        7st dim x270
        8st dim x1729
        */
        get mm35replicatemore(){
            return shortcut.secu.secutitation_reset_times.gte(200) ? shortcut.mm5.points.max(1) : 1
        },

        dimcost(dimid){ // 1-8
            return E.pow(mm5_scale[dimid-1],player.mm5_volume_dimensions[DIMENSIONS_BOUGHT][dimid-1].add(1))
        },
        get energyeffect(){
            /*if (player.secutitation.mm5_volumes.galaxies.gte(9)){
                return player.secutitation.mm5_volumes.energy.pow("1e6")
            }
            if (player.secutitation.mm5_volumes.galaxies.gte(8)){
                return player.secutitation.mm5_volumes.energy.pow("1e5")
            }*/
            return player.secutitation.mm5_volumes.energy.pow(5)
        }
        
    }
}