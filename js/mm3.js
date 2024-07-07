var mm3_opt = {
    upgrades: [
        [
            {
                id: 10,
                name: "自动化购买维度1-4",
                cost: E(1)
            },
            {
                id: 11,
                name: "Coming s1.79e308n",
                cost: E("10^^1000000")
            },
            {
                id: 12,
                name: "Coming s1.79e308n",
                cost: E("10^^1000000")
            },
            {
                id: 13,
                name: "Coming s1.79e308n",
                cost: E("10^^1000000")
            },
        ],
        [
            {
                id: 21,
                name: "Coming s1.79e308n",
                cost: E("10^^1000000")
            },
            {
                id: 22,
                name: "Coming s1.79e308n",
                cost: E("10^^1000000")
            },
            {
                id: 23,
                name: "Coming s1.79e308n",
                cost: E("10^^1000000")
            },
            {
                id: 24,
                name: "Coming s1.79e308n",
                cost: E("10^^1000000")
            },
        ]
    ]
}

function hasMM3upgrade(i) {
    try {
        return player.mm3_volumes.upgrades[i].bought
    } catch {
        player.mm3_volumes.upgrades[i] = {
            bought: false
        }
        return false
    }
}
function mm3FixOldSaves(){
    if (player.mm3_volumes.upgrades === void 0){
        player.mm3_volumes.upgrades = {}
    }
    if (player.mm3_volumes.automation === void 0){
        player.mm3_volumes.automation = {}
    }
}
function buyMM3upgrade(i) {
    console.log(i)
    let upgrade = mm3_opt.upgrades[Math.floor(i / 10)-1][i % 10]
    if (upgrade.cost.lte(player.mm3_volumes.points) && !hasMM3upgrade(i)) {
        let newObject = {}
        newObject[i] = {}
        newObject[i].bought = true;
        player.mm3_volumes.points = player.mm3_volumes.points.sub(upgrade.cost);
        Object.assign(player.mm3_volumes.upgrades, newObject);
    }
}

function toggleAutobuyer(i){
    if (between(1,i,4) && !hasMM3upgrade(10)){
        alert("你需要购买mm3 #10升级来切换")
    }
    if (between(5,i,114514)){
        alert("Coming s1.79e308n")
    }
    if (between(1,i,4) && hasMM3upgrade(10)){
        player.mm3_volumes.automation[i] = !player.mm3_volumes.automation[i];
    }
}