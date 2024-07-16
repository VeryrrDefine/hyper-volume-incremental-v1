"use strict";
var this_frame = Date.now();
var last_frame = Date.now();
var diff = 1;

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
        options: {
            showNewsTicker: true,
            stickyDisplay: false,
        },

        mm3_volumes: {
            unl: false,
            points: E(0),
            upgrades: {},
        },

        multi: {
            unl: false,
            points: E(0)
        },


        // stats
        time: {
            eter: 0,
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
    return player.volumes.gte(temp1) && temp1.lt("1.797e308")
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
        /*     1.????
        * a : 11
        *      1
        *      10
        *
        * 1.?? > 1
        *
        * minus 10^1
        *
        *
        * */
        let temp1 = player.volumes.logarithm(10).div(dim)
        let temp2 = (player.dimensions[DIMENSIONS_COST][dim - 1]).logarithm(10).div(dim)
        player.volumes = player.volumes.sub(E.pow(10, temp2.mul(dim)))
        player.dimensions[DIMENSIONS_BOUGHT][dim - 1] = player.dimensions[DIMENSIONS_BOUGHT][dim - 1].add(temp1.sub(temp2).ceil());
        player.dimensions[DIMENSIONS_POINTS][dim - 1] = player.dimensions[DIMENSIONS_POINTS][dim - 1].add(temp1.sub(temp2).ceil().mul(10)); //     player.volumes = player.volumes.sub(E.pow(10,temp1.mul(dim).ceil()))
        //
        //     player.dimensions[DIMENSIONS_BOUGHT][dim-1].add(temp3.ceil());
        /*let cost = player.dimensions[DIMENSIONS_COST][dim - 1];
        let times = E.minimum(
            player.dimensions[DIMENSIONS_BOUGHT][dim - 1].modular(10).neg().add(10)
            , player.volumes.div(cost)).floor();

        //console.log(dim-1,player.dimensions[DIMENSIONS_BOUGHT][dim - 1])
        player.volumes = player.volumes.sub(E.mul(player.dimensions[DIMENSIONS_COST][dim - 1], times))
        player.dimensions[DIMENSIONS_BOUGHT][dim - 1] = player.dimensions[DIMENSIONS_BOUGHT][dim - 1].add(times);
        player.dimensions[DIMENSIONS_POINTS][dim - 1] = player.dimensions[DIMENSIONS_POINTS][dim - 1].add(times);


        player.dimensions[DIMENSIONS_COST][dim - 1] = calc_cost(dim - 1, player.dimensions[DIMENSIONS_BOUGHT][dim - 1])//recalc cost
        if (player.volumes.gte(player.dimensions[DIMENSIONS_COST][dim - 1])) { // if volumes >= cost, buydim
            return buydim(dim);
        }*/

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

function upgradeTickspeed() {
    let buycount = E(0);
    // 1e3 * 10**player.tickspeed
    let temp1 = player.volumes

    if (player.volumes.logarithm(10).gte("308")) {
        let temp1 = E("1e308")
    }
    if (temp1.logarithm(10).gte(tmp.tickspeed.cost.logarithm(10))) {
        buycount = E(1);
        buycount = buycount.add(player.volumes.logarithm(10).sub(tmp.tickspeed.cost.logarithm(10)).floor())
    }
    if (temp1.lte("1e308")) {
        player.tickspeed = player.tickspeed.add(buycount);
        if (player.tickspeed.gte("1e10")) {
            player.tickspeed = E("1e10")
        }
    } else {
        // handle cost add
        let temp = player.volumes.logarithm(10).sub(308 - 1.301029995663981).div(1.301029995663981) /*1e308 * 2e10^temp */
        let temp2 = tmp.tickspeed.cost.logarithm(10).sub(308 - 1.301029995663981).div(1.301029995663981)
        let temp3 = temp.sub(temp2)

        buycount = buycount.add(temp3);
        if (buycount.gte(0)) {
            player.tickspeed = player.tickspeed.add(buycount);

        }
        /*
        * 0-305: 1
        * 306-inf: log_10(20)=1.301029995663981
        * 305 1e308
        * 306 1e309*2
        * */
    }
}

/*異議あり*/
function calc_cost(dimid, count) {
    // count before buy
    // 1st dimension dimid = 0
    let temp1 = dim_base_price[dimid]
        .mul(dim_incre[dimid].pow(count.floor()));

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

        window.diff = (this_frame - last_frame) / 1000 * developer.timeboost;


        if (!player.dimensions[DIMENSIONS_POINTS][0].mul) {
            fix();
        }
        player.time.eter += window.diff;
        /* if (player.volumes.isNaN()){
             player.volumes = E(10);
         }*/
        let more = player.dimensions[DIMENSIONS_POINTS][0]
            .mul(player.dimensions[DIMENSIONS_MULTI][0])
            .mul(diff);

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
            if (player.mm3_volumes.automation[i + 1]) {
                buydim(i + 1);
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

function toggleAutobuyer(i) {
    if (between(5, i, 10) && !player.mm3_volumes.unl) {
        alert("Automator error: ???")
        return;
    }
    if (between(5, i, 8) && !hasMM3upgrade(12)) {
        alert("你需要购买mm3 #12升级来切换")
    }
    if (i === 9 && !hasMM3upgrade(13)) {
        alert("你需要购买mm3 #13升级来切换")
    }
    if (i === 10 && !hasMM3upgrade(21)) {
        alert("你需要购买mm3 #21升级来切换")
    }


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
    }
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
    //player.mm3o5_volumes.points = ENify(player.mm3o5_volumes.points);

    player.multi.points = ENify(player.multi.points);

    player.volume_generated.mm3 = ENify(player.volume_generated.mm3);
    //player.volume_generated.mm35 = ENify(player.volume_generated.mm35);
    player.volume_generated.mm4 = ENify(player.volume_generated.mm4);
    for (let i = 0; i < 8; i++) {
        player.dimensions[DIMENSIONS_MULTI][i] = ENify(player.dimensions[DIMENSIONS_MULTI][i])
        player.dimensions_buymulti[i] = ENify(player.dimensions_buymulti[i])
        player.dimensions[DIMENSIONS_BOUGHT][i] = ENify(player.dimensions[DIMENSIONS_BOUGHT][i])
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
        fix();
        /*
        mm3FixOldSaves();
        delete player.error*/
        loadVue();
        app.tabShow = player.lastTab

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


function loadVue() {
    window.app = new Vue({
        el: "#app",
        data: {
            tabShow: '1',
            hasNewsTickerError: false,
            player: player,
            hasLoaded: hasLoaded,
            developer_mode: !location.hostname.endsWith("github.io"),
            developer_get_mm4: "1e100",
            dimensions: [
                {id: 1, label: '1st Dimension'},
                {id: 2, label: '2nd Dimension'},
                {id: 3, label: '3rd Dimension'},
                {id: 4, label: '4th Dimension'},
                {id: 5, label: '5th Dimension'},
                {id: 6, label: '6th Dimension'},
                {id: 7, label: '7th Dimension'},
                {id: 8, label: '8th Dimension'},
            ],
            save: "",
            isShowingPopup: false,
            hasError: false,
            errortext: "",
            pianyi0: "aa",
            pianyi1: 0,
            developer_code: "",
            changelogs: [
                {
                    version: "v1.0.3", title: "...",
                    changes: [
                        "Language -> English",
                        "Change Style"
                    ]
                }
            ],
            mm3: mm3_opt,
        },
        computed: {},
        methods: {
            inTab(a) {
                return (this.tabShow > (a - 1) * 10 && this.tabShow < (a) * 10);

            }
        }
    })
    Vue.component("rainbow", {
        template() {
            return `<div :style="{color: getUndulatingColor()}"><slot></slot></div>`
        }
    })
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