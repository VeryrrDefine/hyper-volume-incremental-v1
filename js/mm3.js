var mm3_opt = {
    upgrades: [
        [
            {
                id: 10,
                name: "维度价格÷2",
                cost: E(1),
                unlock: true
            },
            {
                id: 11,
                name: "所有维度×2",
                cost: E("1"),
                unlock: true
            },
            {
                id: 12,
                name: "自动化购买维度5-8",
                cost: E("3"),
                unlock: true
            },
            {
                id: 13,
                name: "自动化维度提升",
                cost: E("7"),
                unlock: true
            },
        ],
        [
            {
                id: 20,
                name: "所有维度×20",
                cost: E("20"),
                unlock: true
            },
            {
                id: 21,
                name: "自动化tickspeed",
                cost: E("30"),
                unlock: true
            },
            {
                id: 22,
                name: "维度提升效果从x2变为x4",
                cost: E("40"),
                unlock: true
            },
            {
                id: 23,
                name: "解锁更多升级",
                cost: E("45"),
                unlock: true
            },
        ],
        [
            {
                id: 30,
                name: "解锁维度星系",
                cost: E("0"),
                get unlock() {
                    return hasMM3upgrade(23)
                }
            },
            {
                id: 31,
                name: "维度8也可以使用3维空间购买<br>且用3维空间购买维度之后所需的4维空间不会涨价",
                cost: E("0"),
                get unlock() {
                    return hasMM3upgrade(50)
                }
            },
            {
                id: 32,
                name: "所有维度根据当前的所拥有的mm<sup>4</sup>4维体积提升",
                cost: E("20"),
                get unlock() {
                    return hasMM3upgrade(30)
                },
                get effect() {
                    return E.max(1, player.volumes.logarithm(10).div(2));
                },
                effectbefore: E(1)
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

function mm3FixOldSaves() {
    if (player.mm3_volumes.automation === void 0) {
        player.mm3_volumes.automation = {
            '1': false,
            '2': false,
            '3': false,
            '4': false,
            '5': false,
            '6': false,
            '7': false,
            '8': false,
            '9': false,
            '10': false
        }
    }
    if (player.mm3_volumes.automation[9] === void 0) {
        player.mm3_volumes.automation[9] = false
    }
    if (player.mm3_volumes.automation[10] === void 0) {
        player.mm3_volumes.automation[10] = false
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
