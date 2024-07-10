var tmp = {
    dimensionBoost:{
        getMultiplier(dimid){
            return E.maximum(1, E(hasMM3upgrade(22)?4:2).pow(player.dim_boost.sub(dimid)))
        },
        get boostable(){
            if (player.dim_boost.eq(0)) {
                if (player.dimensions[DIMENSIONS_POINTS][3].gte(20)) {
                    return true;
                }
            }
            if (player.dim_boost.eq(1)) {
                if (player.dimensions[DIMENSIONS_POINTS][4].gte(20)) {
                    return true;
                }
            }
            if (player.dim_boost.eq(2)) {
                if (player.dimensions[DIMENSIONS_POINTS][5].gte(20)) {
                    return true;
                }
            }
            if (player.dim_boost.eq(3)) {
                if (player.dimensions[DIMENSIONS_POINTS][6].gte(20)) {
                    return true;
                }
            }
            if (player.dim_boost.gte(4)) {
                if (player.dimensions[DIMENSIONS_POINTS][7].gte(tmp.dimensionBoost.need_aft_4)) {
                    return true;
                }

            }
            return false;
        },
        get need_aft_4(){
            return E.add(20, E.mul(10, player.dim_boost.sub(4))).add(tmp.dimensionBoost.softcap)

        },
        get softcap(){
            return E(1.5).pow(player.dim_boost.sub(21)).max(0)
        },
        get softcapped(){
            return player.dim_boost.gte(22);
        }
    },
    galaxy:{
        get cost(){
            return E.add(40, player.galaxy_count.mul(20))
        },
        get galaxyable(){
            return hasMM3upgrade(30) && player.dimensions[DIMENSIONS_POINTS][7].gte(calc_galaxy_need())

        }
    },
    dimension:{
        getDimMultiplier(dimid){
            i=dimid-1;
            let result = E('2')
                //.add(player.mm3o5_volumes.points.logarithm("100").div(10).minimum("1.5")))
                .pow(player.dimensions[DIMENSIONS_BOUGHT][i].div(10).floor())
                .mul(tmp.dimensionBoost.getMultiplier(i))
                .mul(tmp.tickspeed.effect)
                .mul(hasMM3upgrade(11)?2:1)
                .mul(hasMM3upgrade(20)?20:1)
                .mul(hasMM3upgrade(32)?E.max(1,player.volumes.logarithm(10).div(2)):1)
            ;
            return result;
        }
    },
    tickspeed: {
        get effect(){
            if (player.tickspeed.lt(1000)){
                return player.tickspeed_amount.pow(player.tickspeed)
            }
            else{
                return player.tickspeed_amount.pow(1000).mul(player.tickspeed_amount.pow(player.tickspeed.pow(E(1).div(player.tickspeed.pow(100)))))
            }
        }
    },
    mm3:{
        get gain(){
            return player.volumes.logarithm(10).sub(208.3).div(100).floor().max(0);
        },
        confirm: 0
    }
}