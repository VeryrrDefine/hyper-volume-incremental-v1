var mm3_opt = {
    upgrades: [
        // todo: upgrades
        {
            desc: "Coming s∞n",
            cost: E("10^^10"),
            get unlocked() {
                return player.mm3_volumes.unl;
            }
        },
        {
            desc: "Coming s∞n",
            cost: E("10^^10"),
            get unlocked() {
                return false;
            }
        }
    ]
}

function hasMM3Upg(id) {
    return player.mm3_volumes.upgrades.includes(id)

}


function no_reward_mm3_reset() {

    player.volumes = E("11");
    reset_dimensions(1);
    player.galaxy_count = E("0");
    player.mm35_volumes.points = E("1")
    player.mm35_volumes.san_xiang_bo_points = E("0")
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

function buyMM3Upg(i) {
    if (player.mm3_volumes.points.gte(mm3_opt.upgrades[id - 1].cost)) {
        player.mm3_volumes.points = player.mm3_volumes.points.sub(mm3_opt.upgrades[id - 1].cost)
        player.mm3_volumes.upgrades.push(id)
    }
}

function getMM3UpgText(){
    if (app.hover_3upg === 0) return;
    let a = "[mm<sup>3</sup> Upgrade "
    a = a.concat(app.hover_3upg)
    a = a.concat("]<br>")
    a = a.concat(mm3_opt.upgrades[app.hover_3upg-1].desc)
    a = a.concat("<br>")
    a = a.concat("Cost: ")
    a = a.concat(mm3_opt.upgrades[app.hover_3upg-1].cost.format())
    a = a.concat(" mm<sup>3</sup>")
    if (mm3_opt.upgrades[app.hover_3upg-1].effectDisplay !== void 0){
        a = a.concat("<br>")
        a = a.concat(`<span class="green">Currently: ${mm3_opt.upgrades[app.hover_3upg-1].effectDisplay}</span>`)
    }
    return a
}

function getMM3UpgClassName(id) {
    let upgradeClassName = 'mm3_upg';
    if(hasMM3Upg(id)) {
        upgradeClassName += '_bought';
    }
    if(player.volumes.gte(mm3_opt.upgrades[id - 1].cost) && !hasMM3Upg(id)) {
        upgradeClassName += '_buyable';
    }
    //if (typeof (mm4_upgrades[id-1].disableInChal5) == "boolean") upgradeClassName = "mm4_upg_disabled"

    return upgradeClassName
}