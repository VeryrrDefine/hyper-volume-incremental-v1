function no_reward_mm6_reset() {
    let galaxyBefore = E(0)
    if (hasMM6Upg(13)){
        galaxyBefore = player.secutitation.mm5_volumes.galaxies.clone()
    }
    player.secutitation= {
        mm5_volumes: {
            points: E(0),
            energy: E(1),
            galaxies: E(0)
        },
        points: E(0),
        challenges: [],
        challenges2x: [],
        challenges3x: [],
        challenges4x: [],
        challenges5x: [],
        upgrades: [],
        reacUpgrades: [0,0,0,0,0,0],
        reactorStates: [0,0,0,0,0,0],
        towerUpgrades: [],
        tower: {
            fromMM3: E(0),
            fromMM4: E(0),
            fromMM5: E(0),
            spent: E(0)
        },
        secutitation_reset_times: E(7),
        mm53: E(0),
        mm54: E(0),
        mm55: E(0),
        mm56: E(0),
        mm57: E(0),
    }
    no_reward_mm5_reset()
    if (hasMM6Upg(13)){
        player.secutitation.mm5_volumes.galaxies = galaxyBefore.clone()
    }
    let mm59Before = E(0)
    if (hasMM6Upg(11)){
        mm59Before = player.compress.mm59.clone()
    }
    player.compress= {
        mm59: E(0),
        mm595: E(0),
        highestMM4inCompress: E(0),
        upgrades: [],
        buyables: [E(0),E(0),E(0)],
        inCompress: false,
        unl: false
    }
    if (hasMM6Upg(11)){
        player.compress.mm59 = mm59Before.clone()
    }

    if (!hasMM6Upg(5)){
        reset_mm5_dimensions()
    }
}
function doMM6reset() {
    if (player.volumes.gte(E.E_MAX_SAFE_INTEGER)){
        player.exponenting.resetTimes = player.exponenting.resetTimes.add(1)
        player.exponenting.points = player.exponenting.points.add(tmp.mm6.gain)
        player.volume_generated.mm6 = player.volume_generated.mm6.add(tmp.mm6.gain)
        no_reward_mm6_reset() 
    }
}
function doMM6resetManmade(){
    if (player.exponenting.resetTimes.lte(0)){
        if (
            confirm("Are you sure you want to reset?\nYou'll reset all secutitation contents, all mm^3 contents") &&
            confirm("ARE YOU SURE???")
        
            )
            doMM6reset();

        return;
    }
    doMM6reset()
}
