"use strict";

//fastly = location.host=="veryrrdefine.github.io"? 0 : 1
var fastly = 0
const E = ExpantaNum

function ENify(a) {
    let b = new ExpantaNum(0);
    if (a !== undefined) {
        b.array = a.array;
        b.layer = a.layer;
        b.sign = a.sign;
    }
    return b
}


window.turn_max = 0


const LY = E("7.98930938444449e63")

/*
function gainMM5() {
    if (player.volumes.gte("1e500")) {
        player.mm5_volumes = player.mm5_volumes.add(E.floor(player.volumes.div("1e499").logarithm("10")))
        player.upgra des[0] = 0;
        player.dimensions_buymulti[0] = E(1.8)
        player.volumes = E(10);
        reset_dimensions(1);


    }
}*/

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




/*
function buyUpgrade(a) {
    switch (a) {
        case 1:
            if (player.volumes.gte(LY) && !player.upgrade s[0]) {
                player.volumes = player.volumes.sub(LY);
                player.upgrade s[0] = 1;
                player.dimensions_buymulti[0] = player.upgrad es[3] ? E(7) : E(2.5);
            }
            break;
        case 2:
            if (player.mm5_volumes.gte(1) && !player.upgra des[1]) {
                player.mm5_volumes = player.mm5_volumes.sub(1);
                player.upg rades[1] = 1;
                player.dimensions_buymulti[1] = E(2.5);
            }
            break;
        case 3:
            if (player.mm5_volumes.gte(10) && !player.upg  ades[2]) {
                player.mm5_volumes = player.mm5_volumes.sub(10);
                player.upg  rades[2] = 1;
                player.dimensions_buymulti[2] = E(3);
            }
            break;
        case 114514:
            if (player.mm5_volumes.gte("1e3") && !player.upgra des[3]) {
                player.mm5_volumes = player.mm5_volumes.sub("1e3");
                player.upgra des[3] = 1;
                player.dimensions_buymulti[0] = E(7);
            }
            break;
        case 114515:
            if (player.mm5_volumes.gte("1e4") && !player.upgr ades[4]) {
                player.mm5_volumes = player.mm5_volumes.sub("1e4");
                player.upgra des[4] = 1;
                player.dimensions_buymulti[0] = E(10);
            }
            break;
    }

}
*/
function maxDimensions() {
    for (let i = 1; i < 9; i++) {
        buydim(i);
    }
}

const secret_achieves = [2, 3];
const secret_achieves_information = ["玩ba玩的", "WOW, 第九维度<br>尝试购买第九维度"];


function dimensionBoost(nBoost) {

    if (player.dim_boost.eq(0)) {
        if (player.dimensions[DIMENSIONS_POINTS][3].gte(20) && !nBoost) {
            player.dim_boost = player.dim_boost.add(1);
            reset_dimensions(false)
            player.volumes = E(10)
        }
    }
    if (player.dim_boost.eq(1)) {
        if (player.dimensions[DIMENSIONS_POINTS][4].gte(20) && !nBoost) {
            player.dim_boost = player.dim_boost.add(1);
            reset_dimensions(false)
            player.volumes = E(10)
        }
    }
    if (player.dim_boost.eq(2)) {
        if (player.dimensions[DIMENSIONS_POINTS][5].gte(20) && !nBoost) {
            player.dim_boost = player.dim_boost.add(1);
            reset_dimensions(false)
            player.volumes = E(10)
        }
    }
    if (player.dim_boost.eq(3)) {
        if (player.dimensions[DIMENSIONS_POINTS][6].gte(20) && !nBoost) {
            player.dim_boost = player.dim_boost.add(1);
            reset_dimensions(false)
            player.volumes = E(10)
        }
    }
    if (player.dim_boost.gte(4)) {
        if (player.dimensions[DIMENSIONS_POINTS][7].gte(player.dim_boost.sub(2).mul(10)) && !nBoost) {
            player.dim_boost = player.dim_boost.add(1);
            reset_dimensions(false)
            player.volumes = E(10)
            for (let i = 0; i < 8; i++) {
                player.dimensions_buymulti[i] = player.dimensions_buymulti[i].add(0.1);

            }
        }

    }

}


function buydim(dim) {
    if (dim === 9) {
        player.achieve[3] = true;
        return;
    }
    if (dim >= 5 && player.dim_boost.eq(0)) return;
    if (dim >= 6 && player.dim_boost.eq(1)) return;
    if (dim >= 7 && player.dim_boost.eq(2)) return;
    if (dim >= 8 && player.dim_boost.eq(3)) return;
    if (player.volumes.gte(player.dimensions[DIMENSIONS_COST][dim - 1])) {
        player.volumes = player.volumes.sub(player.dimensions[DIMENSIONS_COST][dim - 1])
        player.dimensions[DIMENSIONS_BOUGHT][dim - 1] = player.dimensions[DIMENSIONS_BOUGHT][dim - 1].add(1);
        player.dimensions[DIMENSIONS_POINTS][dim - 1] = player.dimensions[DIMENSIONS_POINTS][dim - 1].add(10);
        return true
    }
    return false


}

function calculate_dim() {
    for (let i = 0; i < 7; i++) {
        if (i !== 0) {
            player.dimensions[DIMENSIONS_POINTS][i] = player.dimensions[DIMENSIONS_POINTS][i].add(player.dimensions[DIMENSIONS_POINTS][i + 1].mul(player.dimensions[DIMENSIONS_MULTI][i + 1]).div(10).div(30));
        }
        if (i === 0) {
            player.dimensions[DIMENSIONS_POINTS][0] = player.dimensions[DIMENSIONS_POINTS][0].add(player.dimensions[DIMENSIONS_POINTS][1].mul(player.dimensions[DIMENSIONS_MULTI][1]).div(10).div(30));

        }
    }
}

function reset_dimensions(dim_boost_reset) {
    Object.assign(player,
        {
            dimensions: [
                [E(0), E(0), E(0), E(0), E(0), E(0), E(0), E(0)], //dimensions
                [E(1), E(1), E(1), E(1), E(1), E(1), E(1), E(1)], //dimensions_multi
                [E(0), E(0), E(0), E(0), E(0), E(0), E(0), E(0)], // dimensions_bought
                [E(10), E(100), E(1000), E(1e4), E(1e5), E(1e6), E(1e7), E(1e8)],// dim_cost
                [E(10), E(100), E(1000), E(1e4), E(1e5), E(1e6), E(1e7), E(1e8)],// dim_scale
            ]
        }
    )
    if (dim_boost_reset) {
        Object.assign(player, {
                dim_boost: (()=>{
                    if (player.upgrades[0]){
                        return E(1)
                    }else{
                        return E(0);
                    }
                })()
            }
        )
    }
}

const DIMENSIONS_POINTS = 0;
const DIMENSIONS_MULTI = 1;
const DIMENSIONS_BOUGHT = 2;
const DIMENSIONS_COST = 3;
const DIMENSIONS_SCALE = 4;

function hard_reset() {
    window.player = {
        volumes: E(10),
        mm3_volumes: {
            unl: false,
            points: E(0)
        },
        version: 10,
        achieve: new Array(200),
        curpage: 1,
        display_mode: 0,
        notice: "",
        dim_boost: E(0),
        upgrades: [
            0, 0, 0, 0, 0, 0, 0, 0
        ],
        dimensions_buymulti: [
            E(2), E(2), E(2), E(2), E(2), E(2), E(2), E(2),
        ],

    }
    reset_dimensions(1)
}


var main_option_ABCD = new ABCD();
var volume_ABCD = new ABCD();
var suboption_ABCD = new ABCD();

function transformToE(object) {
    for (let key in object) {
        if (typeof object[key] === "string" && !new E(object[key]).isNaN()) {
            object[key] = new E(object[key]);
            console.debug(object[key], "translated")
        }
        if (typeof object[key] === "object") {
            transformToE(object[key]);
            console.debug(object[key], "is a object")
        }
    }
}

function calc_cost(dimid) {
    switch (dimid) {
        case 1:
            return player.DIMENSIONS_COST
    }
}


function loop() {
    player.volumes = player.volumes.add(player.dimensions[DIMENSIONS_POINTS][0].mul(player.dimensions[DIMENSIONS_MULTI][0]).div(30));
    if (player.volumes.gt(100)) {
        player.achieve[0] = 1
    }
    if (player.volumes.gt("1e24")) {
        player.achieve[1] = 1
    }
    if (player.volumes.gt("7625597484987")) {
        player.achieve[4] = 1
    }
    if (player.dim_boost.gte(6)) {
        player.mm3_volumes.unl = true
    }
    calculate_dim()
    /*if (player.volumes.gte("1e50") && player.mm3_volumes.unl) {
        player.mm3_volumes.points = player.mm3_volumes.points.add(E(1).div(30))
    }*/
    for (let i = 0; i < 8; i++) {
        player.dimensions[DIMENSIONS_MULTI][i] = player.dimensions_buymulti[i].pow(player.dimensions[DIMENSIONS_BOUGHT][i]);
        player.dimensions[DIMENSIONS_COST][i] = player.dimensions[DIMENSIONS_SCALE][i].pow(player.dimensions[DIMENSIONS_BOUGHT][i].add(1));
    }
    /*if (player.blackhole_invasion==2){
        player.space_max_timesm =  E(1);
    }*/
    save();
    display();
}

function fix() {
    player.volumes = ENify(player.volumes);
    player.mm3_volumes.points = ENify(player.mm3_volumes.points);
    player.dim_boost = ENify(player.dim_boost);
    for (let i = 0; i < 8; i++) {
        player.dimensions[DIMENSIONS_MULTI][i] = ENify(player.dimensions[DIMENSIONS_MULTI][i])
        player.dimensions_buymulti[i] = ENify(player.dimensions_buymulti[i])
        player.dimensions[DIMENSIONS_BOUGHT][i] = ENify(player.dimensions[DIMENSIONS_BOUGHT][i])
        player.dimensions[DIMENSIONS_POINTS][i] = ENify(player.dimensions[DIMENSIONS_POINTS][i])
        player.dimensions[DIMENSIONS_SCALE][i] = ENify(player.dimensions[DIMENSIONS_SCALE][i])

    }
}

function changeDisplayMode() {
    $("#dialog-place").html(`
    <p>修改数字显示方式：</p>
    <select id="select-display-mode">
        <option value=\"0\">重要单位</option>
        <option value=\"1\">总是以mm^4为单位</option> 
        <option value=\"2\">总是以mm^4为单位，使用K,M,B,T,...单位</option>
        <option value=\"3\">对数</option>
        <option value=\"4\">总是以m^4为单位，使用K,M,B,T,...单位</option>
        <option value=\"5\">总是以m^4为单位，使用Slow growing Hierarchy</option>
    </select>
    `)
    closeButton.setAttribute("onclick", `
    player.display_mode = Number($("#select-display-mode").val());
    modal.close();
    `);
    $("[data-ok-modal]").text("切换");
    modal.showModal();
}

function getAchievement(achi_id) {
    player.achieve[achi_id] = 1;
}

function redeem() {
    $("#dialog-place").html(`
    <p>输入兑换码</p>
    <input type="text" id="redeem-text">
    `)
    closeButton.setAttribute("onclick", `
    redeem = $("#redeem-text").val();
    if (redeem == "archive"){
        getAchievement(2);
    }
    modal.close();
    `);
    $("[data-ok-modal]").text("兑换");
    modal.showModal();
}

/*
function randomGain(a) {
    let result = Math.floor(Math.random() * 100 + 1)
    if (result == 8 || result == 9) {
        player.volumes = player.volumes.add("1e100");
        player.no_space_max = true;

    } else if ((a == undefined)) {
        $("#dialog-place").html(`
        <p>没抽到...</p>
        <p>惩罚: 所有维度被开10次方</p>
        `)
        closeButton.setAttribute("onclick", `
        modal.close();
        `);
        for (let i = 0; i < 8; i++) {
            player.dimensions[DIMENSIONS_POINTS][i] = player.dimensions[DIMENSIONS_POINTS][i].pow(0.1)

        }
        $("[data-ok-modal]").text("确定");
        modal.showModal();
    }
}*/


function load() {
    window.format4_numbers_tags = document.querySelectorAll("[to-format-4]");
    window.format4_numbers_orig = []
    for (const tags of format4_numbers_tags) {
        format4_numbers_orig.push(tags.innerHTML);
    }
    window.format5_numbers_tags = document.querySelectorAll("[to-format-5]");
    window.format5_numbers_orig = []
    for (const tags of format5_numbers_tags) {
        format5_numbers_orig.push(tags.innerHTML);
    }
    hard_reset();
    let loadplayer = JSON.parse(localStorage.getItem("volume-incremental"));
    if (loadplayer != null) {
        if (loadplayer.version != player.version){
            alert("游戏已更新")
        }
        Object.assign(player, loadplayer)
    }
    fix()
    main_option_ABCD.set_list([$("#page1")[0], $("#page2")[0], $("#page3")[0], $("#page4")[0]]);
    suboption_ABCD.set_list([$("#page2_save")[0], $("#page2_about")[0], $("#page2_visual")[0]]);

    setInterval(loop, fastly ? 1 : 1000 / 30);
    window.closeButton = document.querySelector("[data-ok-modal]")
    window.modal = document.querySelector("[data-modal]")
    $("#music")[0].loop = true;
    $("#music")[0].volume = 0.5;

    $("#music")[0].muted = false;
    window.news_text = document.getElementById('newsText');
    setTimeout(updatenews, 1000);
}

$(document).ready(load);