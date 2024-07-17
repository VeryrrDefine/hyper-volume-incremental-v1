"use strict";
var this_frame = Date.now();
var last_frame = Date.now();
var diff = 1;
var sound_element = document.getElementById("music");
var mm4_upgrades = [
    {//1
        desc: "1<sup>st</sup> Dimension multiplier add based on mm<sup>4</sup> Volumes",
        get effect() {
            let a = player.volumes.log(3).mul(0.5);
            if (a.gte("1e5")) {
                a = E("1e5")
            }
            return a.max(1)
        },
        cost: E("1e75"),
        get effectDisplay() {
            return `×${this.effect.format()}`
        },
        get unlocked(){
            return player.volume_generated.mm4.gte("1e50");
        }
    },
    {//2
        desc: "7<sup>th</sup> Dimension multiplier add based on 8<th>th</th> Dimension Point",
        cost: E("1e115"),
        get effect() {
            let a = player.dimensions[DIMENSIONS_POINTS][8 - 1].mul(0.1).max(1);
            return a
        },
        get unlocked() {
            return hasMM4Upg(1)
        },
        get effectDisplay() {
            return `×${this.effect.format()}`
        },
    },
    {//3
        get desc() {
            if (!player.mm3_volumes.unl) {
                return "Unlock 3.5D"
            } else {
                return "<del>Unlock 3.5D</del>"
            }
        },
        cost: E("1e120"),
        get unlocked() {
            return hasMM4Upg(2)
        },

    },
    {//4
        desc: "All Dimensions multiplier add based on your mm<sup>3</sup> volumes",
        cost: E("1e50"),
        get unlocked() {
            return player.mm3_volumes.unl;
        },
        get effect() {
            return player.mm3_volumes.points.add(1).mul(10)
        },
        get effectDisplay() {
            return `×${this.effect.format()}`
        },
    },
    {//5
        desc: "You can buy dimensions automatically",
        cost: E("1e70"),
        get unlocked() {
            return player.mm3_volumes.unl;
        },
    },
    {//6
        desc: "You gain a 1.01x multiplier to this dimension when you buy 10 this dimension",
        cost: E("1e120"),
        get unlocked() {
            return hasMM4Upg(4);
        },
    },
    {//7
        desc: "Unlock Second 3D Upgrades",
        cost: E("1e420"),
        unlocked: false,
    },
    {
        desc: "Coming s∞n",
        cost: E("10^^10^114514"),
        unlocked: false,
    },
    {
        desc: "Coming s∞n",
        cost: E("10^^10^114514"),
        unlocked: false,
    },
    {
        desc: "Coming s∞n",
        cost: E("10^^10^114514"),
        unlocked: false,
    }
]

function buyMM4Upg(id) {
    if (player.volumes.gte(mm4_upgrades[id - 1].cost)) {
        player.volumes = player.volumes.sub(mm4_upgrades[id - 1].cost)
        player.upgrades.push(id)
    }
}

function hasMM4Upg(id) {
    return player.upgrades.includes(id);
}

function reset_dimensions(dim_boost_reset) {
    Object.assign(player,
        {
            dimensions: [
                [E(0), E(0), E(0), E(0), E(0), E(0), E(0), E(0)], //dimensions
                [E(1), E(1), E(1), E(1), E(1), E(1), E(1), E(1)], //dimensions_multi
                [E(0), E(0), E(0), E(0), E(0), E(0), E(0), E(0)], // dimensions_bought
                [E(10), E(100), E(1000), E(1e4), E(1e5), E(1e6), E(1e7), E(1e8)],// dim_cost
            ]
        }
    )
    if (dim_boost_reset) {
        Object.assign(player, {
                dim_boost: (() => {
                    if (false) { // player.upgrades[0]
                        return E(1)
                    } else {
                        return E(0);
                    }
                })()
            }
        )
    }
}


function hard_reset() {
    window.player = {
        volumes: E(11),
        version: 10,
        volumeInfinite: false,
        achieve: new Array(200),
        display_mode: 0,
        dim_boost: E(0),
        dimensions_buymulti: [
            E(2), E(2), E(2), E(2), E(2), E(2), E(2), E(2),
        ],
        offlinedTime: 0,
        options: {
            showNewsTicker: true,
            stickyDisplay: false,
            music: 0,
            gamespeed: 1,
        },

        mm3_volumes: {
            unl: false,
            points: E(0),
            upgrades: []
        },

        mm35_volumes: {
            unl: false,
            points: E(0),
            san_xiang_bo_points: E(0),
            machineState: false
        },
        auto: [],
        multi: {
            unl: false,
            points: E(0)
        },
        sound_volume: 0,
        upgrades: [],
        // stats
        time: {
            eter: 0,
            real_eter: 0,
            time_now: Date.now()
        },
        volume_generated: {
            mm4: E(0),
            mm3: E(0)
        },

        window_show: {
            first_mm3_reset: false
        },
        lastTab: '1'

    }
    reset_dimensions(1)
}


/*
* player.tickspeed.gte(1000)
* 1000 1000.50       1001
* 0      1            2
* */


function buyable(dim) {
    let temp1 = player.dimensions[DIMENSIONS_COST][dim - 1]
    return player.volumes.gte(temp1)
}

function import_str(pl) {
    let importing_player = JSON.parse(pl);
    Object.assign(player, importing_player)
    fix();
    save();
    location.href = location.href;
}

function buydim(dim) {
    if (player.volumes.gte(player.dimensions[DIMENSIONS_COST][dim - 1])) {
        let temp1 = player.volumes.logarithm(10).div(dim)
        let temp2 = (player.dimensions[DIMENSIONS_COST][dim - 1]).logarithm(10).div(dim)
        let bought_now = player.dimensions[DIMENSIONS_BOUGHT][dim - 1];
        let buycount = temp1.sub(temp2).ceil();
        let temp3 = buycount.clone();
        if (bought_now.lt(costmore_position[dim - 1])) {
            let buycount = temp1.sub(temp2).ceil();
            if (bought_now.add(buycount).gte(costmore_position[dim - 1] + 1)) {
                /*                     \
                * |||||||||||||| |||||||||||||
                *                      {  x   }
                * */
                buycount = buycount.sub(E.sub(costmore_position[dim - 1] + 1, bought_now))

            }
        }


        player.volumes = player.volumes.sub(E.pow(10, temp2.mul(dim)))
        player.dimensions[DIMENSIONS_BOUGHT][dim - 1] = player.dimensions[DIMENSIONS_BOUGHT][dim - 1].add(buycount);
        player.dimensions[DIMENSIONS_POINTS][dim - 1] = player.dimensions[DIMENSIONS_POINTS][dim - 1].add(buycount.mul(10)); //     player.volumes = player.volumes.sub(E.pow(10,temp1.mul(dim).ceil()))


        return true
    }
    return false


}


function dimensionBoost(nBoost) {
    if (!tmp.dimensionBoost.boostable) {
        return;
    }
    if (player.dim_boost.lte(3)) {
        player.dim_boost = player.dim_boost.add(1);
        reset_dimensions(false)
        player.volumes = E(10)
        player.tickspeed = E(0)
        return;
    }
    if (player.dim_boost.gte(4)) {
        player.dim_boost = player.dim_boost.add(1);
        reset_dimensions(false)
        player.volumes = E(10)
        player.tickspeed = E(0)
        return;

    }

}


const dim_base_price = [
    E(10), E(100), E(1E3), E(1E4), E(1E5), E(1E6), E(1E7), E(1E8)
]
const dim_incre = [
    E(1e1), E(1e2), E(1E3), E(1E4), E(1E5), E(1E6), E(1E7), E(1E8)
];

function calculate_dim() {

    for (let i = 0; i < 7; i++) {
        player.dimensions[DIMENSIONS_POINTS][i] = player.dimensions[DIMENSIONS_POINTS][i]
            .add(
                player.dimensions[DIMENSIONS_POINTS][i + 1]
                    .mul(player.dimensions[DIMENSIONS_MULTI][i + 1])

                    .mul(diff)
            );
        if (player.dimensions[DIMENSIONS_POINTS][i].isNaN()) {
            player.dimensions[DIMENSIONS_POINTS][i] = E(0);
        }
    }
}

const costmore_position = [
    308, 154, 102, 77,
    61, 51, 44, 38
]
const LOG10_60 = Math.log10(60);

/*異議あり*/
function calc_cost(dimid, count) {
    // count before buy
    // 1st dimension dimid = 0
    let temp1 = dim_base_price[dimid]
        .mul(dim_incre[dimid].pow(count.floor()));
    if (count.gte(costmore_position[dimid])) {
        temp1 = temp1.mul(E.pow(
            6, count.sub(costmore_position[dimid] - 1)
        ))
    }
    return temp1;
}

function exportErrorLog() {
    let str = `An error log happening at ${getCurrentBeijingTime()}
traceback:
${app.errortext.replaceAll("<br>", "\n")}

save:
${JSON.stringify(player)}
`
    navigator.clipboard.writeText(str);
}

function exportPurePlayerJson() {
    if (app.developer_mode) {
        navigator.clipboard.writeText(JSON.stringify(player));
    }
}

function loop() {
    try {
        this_frame = Date.now()
        player.time_now = this_frame;

        window.global_diff = (this_frame - last_frame) / 1000 * developer.timeboost ;

        sound_element.volume = player.sound_volume;

        window.diff = window.global_diff * player.options.gamespeed;

        let temp1 = (player.options.gamespeed-1) * window.global_diff * 1000
        if (temp1 <player.offlinedTime){
            player.offlinedTime -= temp1
        }else{
            player.options.gamespeed = 1
        }

        mm35_loop();

        if (player.volumes.isNaN()) {
            player.volumes = E(11);
        }
        if (player.dimensions[DIMENSIONS_POINTS][0]) {
            fix();
        }
        if (!player.mm35_volumes.unl && hasMM4Upg(3) && !player.mm3_volumes.unl) {
            player.mm35_volumes.unl = true
        }
        if (player.mm3_volumes.unl) {
            player.mm35_volumes.unl = false
        }
        if (player.mm35_volumes.points.lt(1)) {
            player.mm35_volumes.points = E(1);
        }
        player.time.eter += window.diff;
        player.time.real_eter += window.global_diff;
        /* if (player.volumes.isNaN()){
             player.volumes = E(10);
         }*/
        let more = tmp.mm4.gain.mul(diff);

        if (player.volumes.gte("e9007199254740991")) {
            player.volumes = EN("e9007199254740991");
            more = EN("0");
        }

        player.volume_generated.mm4 = player.volume_generated.mm4.add(more);
        player.volumes = player.volumes.add(
            more
        );
        //MM35();
        calculate_dim();

        for (let i = 0; i < 8; i++) {
            if (player.auto.includes(i + 1)) {
                if (buyable(i + 1)) {
                    buydim(i + 1)
                }
            }
            player.dimensions[DIMENSIONS_MULTI][i] = tmp.dimension.getDimMultiplier(i + 1);
            player.dimensions[DIMENSIONS_COST][i] = calc_cost(i, player.dimensions[DIMENSIONS_BOUGHT][i])
        }
        if (player.error !== void 0) {
            throw new Error("you throw a error!");
        }
        player.lastTab = app.tabShow
        last_frame = this_frame
    } catch (e) {
        clearInterval(window.qqq);
        clearInterval(window.www);
        setErrorDial(e);
        window.errorMessage = e;
        console.log(e);
    }
}

function setErrorDial(q) {
    app.hasError = true;
    app.errortext = q.stack.replaceAll("\n", "<br>");
}

const musics = [
    "OFF",
    "Heaven and Hell",
    "啊米诺斯"
]

function toggleMusic(a = -1) {
    if (a === -1) {
        player.options.music++
    } else {
        player.options.music = a
    }

    if (player.options.music > 2) {
        player.options.music = 0
    }
    let ele = document.querySelector("audio");
    switch (player.options.music) {
        case 0:
            ele.src = "";

            break;
        case 1:

            ele.src = "/music/heavenandhell.mp3";
            let playPromise = ele.play()
            playPromise.catch(function () {
                addNotify("Sorry, I can't play the music.")
                player.options.music--
            })
            break;
    }
}

function toggleAutobuyer(i) {
    let temp1 = player.auto.indexOf(i)
    if (temp1 == -1) {
        player.auto.push(i)
    } else {
        player.auto.splice(temp1, 1)
    }
    /*
        if (between(1, i, 4)) {
            player.mm3_volumes.automation[i] = !player.mm3_volumes.automation[i];
        }
        if (between(5, i, 8) && hasMM3upgrade(12)) {
            player.mm3_volumes.automation[i] = !player.mm3_volumes.automation[i];
        }
        if (between(9, i, 9) && hasMM3upgrade(13)) {
            player.mm3_volumes.automation[i] = !player.mm3_volumes.automation[i];
        }
        if (between(10, i, 10) && hasMM3upgrade(21)) {
            player.mm3_volumes.automation[i] = !player.mm3_volumes.automation[i];
        }*/
}

function buyAll() {
    buydim(1);
    buydim(2);
    buydim(3);
    buydim(4);
    buydim(5);
    buydim(6);
    buydim(7);
    buydim(8);
}

function fix() {
    player.volumes = ENify(player.volumes);
    player.mm3_volumes.points = ENify(player.mm3_volumes.points);
    player.mm35_volumes.points = ENify(player.mm35_volumes.points);
    player.mm35_volumes.san_xiang_bo_points = ENify(player.mm35_volumes.san_xiang_bo_points);

    if (player.mm35_volumes.machineState === void 0) {
        player.mm35_volumes.machineState = false;
    }
    if (player.options.music === void 0) {
        player.options.music = 0;
    }
    if (player.options.gamespeed === void 0) {
        player.options.gamespeed = 1;
    }
    if (player.mm3_volumes.upgrades.toString() === "[object Object]"){
        player.mm3_volumes.upgrades = []
    }
    player.multi.points = ENify(player.multi.points);

    player.volume_generated.mm3 = ENify(player.volume_generated.mm3);

    //player.volume_generated.mm35 = ENify(player.volume_generated.mm35);
    player.volume_generated.mm4 = ENify(player.volume_generated.mm4);
    for (let i = 0; i < 8; i++) {
        player.dimensions[DIMENSIONS_MULTI][i] = ENify(player.dimensions[DIMENSIONS_MULTI][i])
        player.dimensions_buymulti[i] = ENify(player.dimensions_buymulti[i])
        player.dimensions[DIMENSIONS_BOUGHT][i] = ENify(player.dimensions[DIMENSIONS_BOUGHT][i])
        player.dimensions[DIMENSIONS_COST][i] = ENify(player.dimensions[DIMENSIONS_COST][i])
        player.dimensions[DIMENSIONS_POINTS][i] = ENify(player.dimensions[DIMENSIONS_POINTS][i])
        //player.dimensions[DIMENSIONS_SCALE][i] = ENify(player.dimensions[DIMENSIONS_SCALE][i])

    }
}

function load() {
    try {
        hard_reset();
        let loadplayer = JSON.parse(localStorage.getItem("volume-incremental"));
        let loaddeveloper = JSON.parse(localStorage.getItem("developerSettings"));
        if (loadplayer != null) {
            if (loadplayer.version != player.version) {
                alert("游戏已更新")
                alert("游戏已更新")
            }
            Object.assign(player, loadplayer)
        }
        if (loadplayer != null) {
            Object.assign(developer, loaddeveloper)
        }
        last_frame = player.time_now;
        player.offlinedTime += this_frame - last_frame
        fix();
        /*
        mm3FixOldSaves();
        delete player.error*/
        loadVue();
        app.tabShow = player.lastTab
        toggleMusic(player.options.music)
        window.qqq = setInterval(loop, 35)
        window.www = setInterval(save, 1000);
        if (window.newsTickerError !== undefined) {
            app.hasNewsTickerError = true;
        }
        hasLoaded.status = true
    } catch (e) {
        document.getElementById("ithinksomeone").style.display = "block";
        document.getElementById("error").innerText = e.stack;

        // document.querySelectorAll("[if-not-fatal-error]").forEach((value, key, parent)=>{
        //     value.style.display="none";
        // })

    }
}

var qqq;
var www;

function between(x, y, z) {
    return x <= y && y <= z;
}

function getAchieve(id, condition) {
    if (player.achieve[id]) {
        return true;
    }
    if (condition) {
        player.achieve[id] = true;
        return true
    }
    return false;
}



// endregion Vue
function speedrun(a) {
    alert("Speedrun is not allowed in the release version");
}

function get_mm4_vol(a) {
    alert("Get mm4 volume is not allowed in the release version");
}

function dev_reset_vol() {
    player.volumes = E(10);
}

(() => {
    if (!location.hostname.endsWith("github.io")) {
        window.speedrun = function (timeBoost) {
            developer.timeboost = timeBoost;
            if (isNaN(developer.timeboost)) {
                developer.timeboost = 1;
            }
        };
        window.get_mm4_vol = function () {
            player.volumes = player.volumes.add(app.developer_get_mm4);
        };
    }
})();

document.addEventListener('DOMContentLoaded', function () {

    load();

});

var openPopup = function (option) {
    app.isShowingPopup = option
}

function db_pianyi() {
    var q = "";
    for (let i = 0; i < app.pianyi0.length; i++) {
        q = q.concat(String.fromCharCode(app.pianyi0[i].charCodeAt(0) + Number(app.pianyi1)));
    }
    return q;
}