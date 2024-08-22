function getRealmm61() {
    return player.exponenting.tower.from6DFractal.sub(player.exponenting.tower.spent)
}

const mm6_upgrades = [
    {//1
        name: "e+605",
        desc: "All 4D Dimensions exponentplier mores based on 6D Fractals",
        get require(){
            return getRealmm61().gte(15)
        },
        get require_desc(){
            return "15 mm<sup>6.1</sup>"
        },
        unlocked: true,
        bought_do() {
            player.exponenting.tower.spent = player.exponenting.tower.spent.add(15)
        },
        get effect(){
            return player.exponenting.fractal.fractals.slog().slog().div(3)
        },
        get effectDisplay() {
            return `+${this.effect.formatA()} more`
        }
    },
    {//2
        name: "s1^605",
        desc: "4D Volumes softcap^1 lates based on 6D Fractals",
        get require() {
            return getRealmm61().gte(2)
        },
        get require_desc(){
            return "2 mm<sup>6.1</sup>"
        },
        get unlocked(){
            return hasMM6Upg(1)
        },
        bought_do() {
            player.exponenting.tower.spent = player.exponenting.tower.spent.add(2)
        },
        get effect(){
            return player.exponenting.fractal.fractals.slog().div(3).add(1).max(1)
        },
        get effectDisplay() {
            return `^${this.effect.formatA()} later`
        }
    },
    {//3
        name: "qolc",
        desc: "Force unlock Compress",
        get require() {
            return player.exponenting.fractal.fractalEngine.gte(5)
        },
        get require_desc(){
            return "5 Fractal Engines"
        },
        get unlocked(){
            return hasMM6Upg(2)
        },
        bought_do() {
        },
    },
    /*
    {//2
        desc: "2<sup>nd</sup> 4D Dimension exponentplier +0.15",
        get require(){
            return player.secutitation.points.gte(20000)
        },
        get require_desc(){
            return "20000 secutitation points"
        },
        get unlocked() {
            return hasMM5Upg(1);
        },
        bought_do(){
            player.secutitation.points = player.secutitation.points.sub(1024)
        }
    },
    {//3
        desc: "1<sup>st</sup> 4D Dimension exponentplier +0.05",
        get require(){
            return player.secutitation.points.gte(2048)
        },
        get require_desc(){
            return "2048 secutitation points"
        },
        get unlocked() {
            return hasMM5Upg(2);
        },
        bought_do(){
            player.secutitation.points = player.secutitation.points.sub(2048)
        }
    },
    {//4
        desc: "All 4D Dimensions multiplier ^1.02",
        get require(){
            return player.secutitation.mm5_volumes.energy.gte("1e25")
        },
        get require_desc(){
            return "1e25 mm<sup>5</sup> energies"
        },
        get unlocked() {
            return hasMM5Upg(3);
        },
        bought_do(){
        }
    }*/
]


function hasMM6Upg(id) {
    return player.exponenting.upgrades.includes(id)

}
function buyMM6Upg(id) {
    if (mm6_upgrades[id - 1].require) {
        player.exponenting.upgrades.push(id)
        mm6_upgrades[id - 1].bought_do()
    }
}

function getMM6UpgText(){
    if (app.hover_6upg === 0) return;
    let a = "[mm<sup>6</sup> Upgrade "
    a = a.concat(app.hover_6upg)
    a = a.concat("]")
    a = a.concat(mm6_upgrades[app.hover_6upg-1].name ? mm6_upgrades[app.hover_6upg-1].name : "")
    a = a.concat("<br>")
    a = a.concat(mm6_upgrades[app.hover_6upg-1].desc)
    a = a.concat("<br>")
    a = a.concat("Cost: ")
    a = a.concat(mm6_upgrades[app.hover_6upg-1].require_desc)
    if (mm6_upgrades[app.hover_6upg-1].effectDisplay !== void 0){
        a = a.concat("<br>")
        a = a.concat(`<span class="green">Currently: ${mm6_upgrades[app.hover_6upg-1].effectDisplay}</span>`)
    }
    return a
}

function getMM6UpgClassName(id) {
    let upgradeClassName = 'mm6_upg';
    if(hasMM6Upg(id)) {
        upgradeClassName += '_bought';
    }
    //if (typeof (mm4_upgrades[id-1].disableInChal5) == "boolean") upgradeClassName = "mm4_upg_disabled"

    return upgradeClassName
}