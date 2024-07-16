var mm3_opt = {
    upgrades: [
        // todo: upgrades
        [
            {
                id: 10,
                name: "Coming s∞n",
                cost: E("10^^10"),
                unlock: true
            }
        ],
        [
            {
                id: 20,
                name: "Coming s∞n",
                cost: E("10^^10"),
                unlock: true
            }
        ]
    ]
}

function hasMM3upgrade(i) {
    try {
        return player.mm3_volumes.upgrades[i].bought
    } catch {
        player.mm3_volumes.upgrades = {};
        player.mm3_volumes.upgrades[i] = {
            bought: false
        }
        return false
    }
}

function getMM3upgradeEffect(i,default_=1) {
    let upgrade = mm3_opt.upgrades[Math.floor(i / 10) - 1][i % 10]
    try{
        return hasMM3upgrade(i) ? upgrade.effect : upgrade.effectbefore;
    }catch{
        return E(default_);
    }
}

function no_reward_mm3_reset() {

    player.volumes = E("10");
    reset_dimensions(1);
    player.galaxy_count = E("0");
    player.mm3_volumes.unl = true;
    player.tickspeed = E("0");
}

function doMM3reset() {

    if (player.volumes.gte("1.797e308")) {
        if (!player.mm3_volumes.unl && tmp.mm3.confirm < 4) {
            tmp.mm3.confirm++
            return;
        }
        player.mm3_volumes.points = player.mm3_volumes.points.add(tmp.mm3.gain);
        player.volume_generated.mm3 = player.volume_generated.mm3.add(tmp.mm3.gain);
        no_reward_mm3_reset()
        tmp.mm3.confirm = 0;
    }
}

function buyMM3upgrade(i) {
    console.log(i)
    let upgrade = mm3_opt.upgrades[Math.floor(i / 10) - 1][i % 10]
    if (upgrade.cost.lte(player.mm3_volumes.points) && !hasMM3upgrade(i)) {
        let newObject = {}
        newObject[i] = {}
        newObject[i].bought = true;
        player.mm3_volumes.points = player.mm3_volumes.points.sub(upgrade.cost);
        Object.assign(player.mm3_volumes.upgrades, newObject);
    }
}
