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
        volumes: E(10),
        version: 10,
        volumeInfinite: false,
        tickspeed: E(0),
        galaxy_count: E(0),
        tickspeed_amount: E(1.15),
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
            automation: {
                "1": false,
                "2": false,
                "3": false,
                "4": false,
                "5": false,
                "6": false,
                "7": false,
                "8": false,
            }
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
        }

    }
    reset_dimensions(1)
}

function getDimBoostResu(dimid) {
    // dimid == 0...7
    return E.maximum(1, E(2).pow(player.dim_boost.sub(dimid)))
}
/*
* player.tickspeed.gte(1000)
* 1000 1000.50       1001
* 0      1            2
* */
function getTickspeedResu(){
    if (player.tickspeed.lt(1000)){
        return player.tickspeed_amount.pow(player.tickspeed)
    }
    else{
        return player.tickspeed_amount.pow(1000).mul(player.tickspeed_amount.pow(player.tickspeed.pow(E(1).div(player.tickspeed.pow(100)))))
    }
}
function getDimMult(i) {
    let result = E('2')
        //.add(player.mm3o5_volumes.points.logarithm("100").div(10).minimum("1.5")))
        .pow(player.dimensions[DIMENSIONS_BOUGHT][i].div(10).floor())
        .mul(getDimBoostResu(i))
        .mul(player.tickspeed_amount.pow(player.tickspeed))
    ;
    return result;
}

function buyable(dim) {
    return player.volumes.gte(player.dimensions[DIMENSIONS_COST][dim - 1])
}

function buydim(dim) {
    if (dim >= 5 && player.dim_boost.eq(0)) return false;
    if (dim >= 6 && player.dim_boost.eq(1)) return false;
    if (dim >= 7 && player.dim_boost.eq(2)) return false;
    if (dim >= 8 && player.dim_boost.eq(3)) return false;
    if (player.volumes.gte(player.dimensions[DIMENSIONS_COST][dim - 1])) {
        let cost = player.dimensions[DIMENSIONS_COST][dim - 1];
        let times = E.minimum(
            player.dimensions[DIMENSIONS_BOUGHT][dim - 1].modular(10).neg().add(10)
            , player.volumes.div(cost)).floor();

        player.volumes = player.volumes.sub(player.dimensions[DIMENSIONS_COST][dim - 1].mul(times))
        player.dimensions[DIMENSIONS_BOUGHT][dim - 1] = player.dimensions[DIMENSIONS_BOUGHT][dim - 1].add(times);
        player.dimensions[DIMENSIONS_POINTS][dim - 1] = player.dimensions[DIMENSIONS_POINTS][dim - 1].add(times);


        player.dimensions[DIMENSIONS_COST][dim - 1] = calc_cost(dim - 1, player.dimensions[DIMENSIONS_BOUGHT][dim - 1])//recalc cost
        if (player.volumes.gte(player.dimensions[DIMENSIONS_COST][dim - 1])) { // if volumes >= cost, buydim
            return buydim(dim);
        }

        return true
    }
    return false


}

function boostable() {
    if (player.dim_boost.eq(0)) {
        if (player.dimensions[DIMENSIONS_POINTS][3].gte(20)) {
            return true;
        }
    }
    if (player.dim_boost.eq(1)) {
        if (player.dimensions[DIMENSIONS_POINTS][4].gte(20)) {
            return true;
        }
    }
    if (player.dim_boost.eq(2)) {
        if (player.dimensions[DIMENSIONS_POINTS][5].gte(20)) {
            return true;
        }
    }
    if (player.dim_boost.eq(3)) {
        if (player.dimensions[DIMENSIONS_POINTS][6].gte(20)) {
            return true;
        }
    }
    if (player.dim_boost.gte(4)) {
        if (player.dimensions[DIMENSIONS_POINTS][7].gte(E.add(20, E.mul(10, player.dim_boost.sub(4))))) {
            return true;
        }

    }
    return false;
}

function dimensionBoost(nBoost) {
    if (!boostable()) {
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
    E(10), E(100), E(1E4), E(1E6), E(1E9), E(1E13), E(1E18), E(1E24)
]
const dim_incre = [
    E(1e3), E(1e4), E(1E5), E(1E6), E(1E8), E(1E10), E(1E12), E(1E15)
];

function calculate_dim() {

    for (let i = 0; i < 7; i++) {
        player.dimensions[DIMENSIONS_POINTS][i] = player.dimensions[DIMENSIONS_POINTS][i]
            .add(
                player.dimensions[DIMENSIONS_POINTS][i + 1]
                    .mul(player.dimensions[DIMENSIONS_MULTI][i + 1])

                    .mul(diff)
            );

    }
}

function upgradeTickspeed() {
    let buycount = E(0);
    // 1e3 * 10**player.tickspeed
    if (player.volumes.logarithm(10).gte(calc_tickspeed_cost().logarithm(10))) {
        buycount = E(1);

        buycount = buycount.add(player.volumes.logarithm(10).sub(calc_tickspeed_cost().logarithm(10)).floor())
    }
    player.tickspeed = player.tickspeed.add(buycount);
}

/*異議あり*/
function calc_cost(dimid, count) {
    // count before buy
    // 1st dimension dimid = 0
    if (count.gte("1e4")) {
        return E.POSITIVE_INFINITY
    }
    return dim_base_price[dimid].mul(dim_incre[dimid].pow(count.div(10).floor()))
}

function calc_tickspeed_cost() {
    return E.mul(1e3, E.pow(10, player.tickspeed));
}

function loop() {
    this_frame = Date.now()
    player.time_now = this_frame;

    window.diff = (this_frame - last_frame) / 1000 * developer.timeboost;


    player.time.eter += window.diff;
    player.tickspeed_amount = E(1.15).add(E(0.1).mul(player.galaxy_count))
    let more = player.dimensions[DIMENSIONS_POINTS][0]
        .mul(player.dimensions[DIMENSIONS_MULTI][0])
        .mul(diff);

    if (player.volumes.gte("1.797e308")) {
        more = E("0");
        player.volumes = E("10");
        reset_dimensions(1);
        player.galaxy_count = E("0");
        //player.mm3o5_volumes.points = E("1");
        player.mm3_volumes.unl = true;
        player.tickspeed = E("0");
        player.mm3_volumes.points = player.mm3_volumes.points.add(1);
        player.volume_generated.mm3 = player.volume_generated.mm3.add(1);
        if (!player.window_show.first_mm3_reset) {
            alert("这是第一次mm3重置，每当你的4维体积超过1.797e308(约2^1024) mm4时，" +
                "你的4维体积就会坍缩成1 mm3 体积");
        }
    }
    player.volume_generated.mm4 = player.volume_generated.mm4.add(more);
    player.volumes = player.volumes.add(
        more
    );
    //MM35();
    calculate_dim();

    for (let i = 0; i < 8; i++) {
        if (player.mm3_volumes.automation[i+1]){
            buydim(i+1);
        }
        player.dimensions[DIMENSIONS_MULTI][i] = getDimMult(i);
        player.dimensions[DIMENSIONS_COST][i] = calc_cost(i, player.dimensions[DIMENSIONS_BOUGHT][i])
    }


    last_frame = this_frame
}

function buyAll() {
    upgradeTickspeed();
    buydim(1);
    buydim(2);
    buydim(3);
    buydim(4);
    buydim(5);
    buydim(6);
    buydim(7);
    buydim(8);
}

function calc_galaxy_need() {
    return E.add(40, player.galaxy_count.mul(20))
}

function galaxyable() {
    return player.dimensions[DIMENSIONS_POINTS][7].gte(calc_galaxy_need())
}

function dimensionGalaxy() {
    if (galaxyable()) {
        reset_dimensions(true);
        player.tickspeed = E(0);
        player.volumes = E(10);
        player.galaxy_count = player.galaxy_count.add(1);
    }
}

function fix() {
    player.volumes = ENify(player.volumes);
    player.mm3_volumes.points = ENify(player.mm3_volumes.points);
    //player.mm3o5_volumes.points = ENify(player.mm3o5_volumes.points);

    player.multi.points = ENify(player.multi.points);
    player.dim_boost = ENify(player.dim_boost);
    player.tickspeed = ENify(player.tickspeed);
    player.tickspeed_amount = ENify(player.tickspeed_amount);
    player.galaxy_count = ENify(player.galaxy_count);

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
    hard_reset();
    let loadplayer = JSON.parse(localStorage.getItem("volume-incremental"));
    let loaddeveloper = JSON.parse(localStorage.getItem("developerSettings"));
    if (loadplayer != null) {
        if (loadplayer.version != player.version) {
            alert("游戏已更新")
        }
        Object.assign(player, loadplayer)
    }
    if (loadplayer != null) {
        Object.assign(developer, loaddeveloper)
    }
    last_frame = player.time_now;
    fix();
    mm3FixOldSaves();
    loadVue();
    setInterval(loop, 35)
    setInterval(save, 1000);
}
function between(x,y,z){
    return x <= y && y <= z;
}
function getAchieve(id,condition){
    if (player.achieve[id]){
        return true;
    }
    if (condition){
        player.achieve[id] = true;
        return true
    }
    return false;
}
var achieves = [
    [
        {
            id: 1, label: "从哪里开始？", get unlock() {
                return getAchieve(1,player.dimensions[DIMENSIONS_POINTS][0].gt(0));
            }
        },
        {
            id: 2, label: "第四维度？", get unlock() {
                return getAchieve(2,player.dimensions[DIMENSIONS_POINTS][3].gt(0));
            }
        },
        {
            id: 3, label: "第六维度？", get unlock() {
                return getAchieve(3,player.dimensions[DIMENSIONS_POINTS][5].gt(0));
            }
        },
        {
            id: 4, label: "第八维度？", get unlock() {
                return getAchieve(4,player.dimensions[DIMENSIONS_POINTS][7].gt(0));
            }
        },
    ],
    [
        {
            id: 11, label: "我是谁？我在那？", get unlock() {
                return true;
            }
        },
    ],
]

function loadVue() {
    window.app = new Vue({
        el: "#app",
        data: {
            tabShow: '1',
            player: player,
            hasLoaded: hasLoaded,
            developer_mode: !location.hostname.endsWith("github.io"),
            developer_get_mm4: "1e100",
            dimensions: [
                {id: 1, label: '第1维度'},
                {id: 2, label: '第2维度'},
                {id: 3, label: '第3维度'},
                {id: 4, label: '第4维度'},
                {id: 5, label: '第5维度'},
                {id: 6, label: '第6维度'},
                {id: 7, label: '第7维度'},
                {id: 8, label: '第8维度'},
            ],
            save: "",
            modalShow: false,
            modalText: "",
            changelogs: [
                {
                    version: "v1.0.2.1", title: "等一下，我format_time.js忘记投了",
                    changes:[
                        "修复了无法查看统计页面的bug"
                    ]
                },
                {
                    version: "v1.0.2", title: "mm<sup>3</sup>" , changes: [
                        "添加一个mm<sup>3</sup>升级",
                        "新闻限时回归",
                        "移除mm<sup>3.5</sup>",
                        "删除了维度星系",
                        "<span class='corrupted'>警告，由于游戏的不确定性，维度星系最终可能会回归</span>"
                    ]
                },
                {
                    version: "v1.0.1.2", title: "" ,changes: [
                        "不鸡丢"
                    ]
                },
                {
                    version: "v1.0.1.1",title: "" , changes: [
                        "新闻列表重写"
                    ]
                },
                {
                    version: "v1.0.1", title: "Vue!!!!!!" ,changes: [
                        "使用Vue",
                        "体积菜单分两个",
                        "添加3.5维度",
                        "修改维度提升结果",
                        "添加维度星系",
                        "维度页面新样式",
                        "移除了部分新闻",
                        "添加了tickspeed"
                    ]
                },
                {
                    version: "v1.0.0", title: "" ,changes: [
                        "添加第五维度",
                        "and a lot of..."
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
function dev_reset_vol(){
    player.volumes = E(10);
}
(() => {
    if (!location.hostname.endsWith("github.io")) {
        window.speedrun = function (timeBoost) {
            developer.timeboost = timeBoost;
            if (isNaN(developer.timeboost)){
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

