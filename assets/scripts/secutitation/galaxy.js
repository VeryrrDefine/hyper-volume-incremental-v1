function mm5Galaxycost(){
    return E.mul("1e6",E.pow("1e3.2",player.secutitation.mm5_volumes.galaxies));
    if (player.secutitation.mm5_volumes.galaxies.eq(0)){
        return E("1e9");
    }
    if (player.secutitation.mm5_volumes.galaxies.eq(1)){
        return E("1e12");
    }
    if (player.secutitation.mm5_volumes.galaxies.eq(2)){
        return E("1e15");
    }
    if (player.secutitation.mm5_volumes.galaxies.eq(3)){
        return E("1e18");
    }
    return E.GRAHAMS_NUMBER
}
const galaxy_rewards = [
    {
        req: E("1"),
        desc: "2~7<sup>th</sup> 4D Dimensions multiplier ^1.01"
    },
    {
        req: E("2"),
        desc: "2~7<sup>th</sup> 4D Dimensions multiplier ×1e1,000,000"
    },
    {
        req: E("3"),
        desc: "Purchasing mm<sup>5</sup> galaxies doesn't reset anything"
    },
    {
        req: E("4"),
        desc: "2~7<sup>th</sup> 4D Dimensions multiplier ×1e10,000"
    },
    {
        req: E("5"),
        desc: "mm<sup>5</sup> reset doesn't reset mm<sup>5</sup> energies"
    },/*
    {
        req: E("7"),
        desc: "1<sup>st</sup> 4D Dimensions exponentplier +0.05"
    },
    {
        req: E("8"),
        desc: "Improve 5D Dimensions to 4D Dimensions' multiplier formula (x^5 → x^1e5)"
    },
    {
        req: E("9"),
        desc: "Imp 5D→4D multiplier formula (x^1e5 → x^1e6)"
    },
    {
        req: E("10"),
        desc: "All 4D Dimensions multiplier ^1.02"
    }*/
]
function mm5_gal_reset(){
    if (player.secutitation.mm5_volumes.galaxies.lt(2)){
        player.mm5_volume_dimensions[DIMENSIONS_POINTS][0] = E(0);
        player.secutitation.mm5_volumes.energy = E(1);
    }

    player.secutitation.mm5_volumes.galaxies = player.secutitation.mm5_volumes.galaxies.add(1);

}
function mm5_gal_reset_manmade(){
    if (player.secutitation.mm5_volumes.energy.gte(tmp.mm5.galaxycost)){
        mm5_gal_reset()
    }
}
function getMM5galaxyText(){
    let a = `Reach `
    let x = player.secutitation.mm5_volumes.galaxies;
    a = a.concat(tmp.mm5.galaxycost.formatA())
    a = a.concat(` mm<sup>5</sup> energy for a mm<sup>5</sup> galaxy`)
    if (x.lt(galaxy_rewards[galaxy_rewards.length-1].req)){
        for (let i=0;i<galaxy_rewards.length;i++){
            if (x.lt(galaxy_rewards[i].req)){
                a = a.concat("<br>In ")
                a = a.concat(galaxy_rewards[i].req.formatA())
                if (galaxy_rewards[i].req.eq(1)){
                    a = a.concat(" galaxy, ")
                }else{
                    a = a.concat(" galaxies, ")
                }
                a = a.concat(galaxy_rewards[i].desc)
                return a;
            }
        }
    }
    return a;
}