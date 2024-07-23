var mm3_opt = {
    upgrades: [
        // todo: upgrades
        {
            desc: "mm<sup>4</sup> gain ×1.000e5",
            cost: E("1"),
            get unlocked() {
                return player.mm3_volumes.unl;
            }
        },
        {
            desc: "All dimensions multiplier ×1.000e10",
            cost: E("2"),
            get unlocked() {
                return hasMM4Upg(7)
            }
        },
        {
            desc: "mm<sup>3.5</sup> multiplier to mm<sup>4</sup>'s formula be better<br>Before:log<sub>10</sub>(x)<sup>2</sup>÷10<br>After:log<sub>1.001</sub>(x)<sup>2</sup>÷10",
            cost: E("150"),
            get unlocked() {
                return hasMM3Upg(2)
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

    if (!hasMM4Upg(8)){
        player.mm35_volumes.points = E("1")
    }
    player.mm35_volumes.san_xiang_bo_points = E("0")
    player.mm3_volumes.unl = true;

    player.tickspeed = E("0");
}

function doMM3reset() {

    if (tmp.mm3.gain.gte("1")) {
        player.mm3_volumes.points = player.mm3_volumes.points.add(tmp.mm3.gain);
        player.volume_generated.mm3 = player.volume_generated.mm3.add(tmp.mm3.gain);
        no_reward_mm3_reset()
        tmp.mm3.confirm = 0;
    }
}
function doMM3resetManmade(){
    if (player.inMM3Challenge){
        if (player.volumes.gte(mm3_challenges[player.inMM3Challenge-1].complete_requirement)){
            mm3HandleChallenge()
        }
    }else if (player.volumes.gte("1.797e308")){
        doMM3reset();
    }
}

function buyMM3Upg(id) {
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
    if(player.mm3_volumes.points.gte(mm3_opt.upgrades[id - 1].cost) && !hasMM3Upg(id)) {
        upgradeClassName += '_buyable';
    }
    //if (typeof (mm4_upgrades[id-1].disableInChal5) == "boolean") upgradeClassName = "mm4_upg_disabled"

    return upgradeClassName
}

function getMM3resetButton() {
    if (player.inMM3Challenge){
        return  'Reach ' + mm3_challenges[player.inMM3Challenge-1].complete_requirement.format()+' mm<sup>4</sup> to do a mm<sup>3</sup>reset, get ' +format(tmp.mm3.gain)+ 'mm<sup>3</sup> volumes'
    
    }else{
        return  'Reach 1.797e308 mm<sup>4</sup> to do a mm<sup>3</sup>reset, get ' +format(tmp.mm3.gain)+ 'mm<sup>3</sup> volumes'
    }
}
