"use strict";

const offsets_1 = [
    "", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc",
    "UDc", "DDc", "TDc", "QaDc", "QiDc", "SxDc", "SpDc", "OcDc", "NoDc", "Vg",
    "UVg", "DVg", "TVg", "QaVg", "QiVg", "SxVg", "SpVg", "OcVg", "NoVg", "Tg",
    "UTg", "DTg", "TTg", "QaTg", "QiTg", "SxTg", "SpTg", "OcTg", "NoTg", "Vg<sup>3</sup>",

]
var displays = [() => {
}]

function display_volumes(a, b) {
    return (() => {
        if (player.display_mode === 0) {
            if (a.lt("1e4")) {
                return `${format(a, 3, false)} mm<sup>4</sup>`
            } else if (a.lt("1e8")) {
                return `${format(a.div("1e4"), 3, false)} cm<sup>4</sup>`
            } else if (a.lt("1e12")) {
                return `${format(a.div("1e8"), 3, false)} dm<sup>4</sup>`
            } else if (a.lt("1e16")) {
                return `${format(a.div("1e12"), 3, false)} m<sup>4</sup>`
            } else if (a.lt("1e20")) {
                return `${format(a.div("1e16"), 3, false)} Dm<sup>4</sup>`
            } else if (a.lt("1e24")) {
                return `${format(a.div("1e20"), 3, false)} hm<sup>4</sup>`
            } else if (a.lt("1e36")) {
                return `${format(a.div("1e24"), 3, false)} km<sup>4</sup>`
            } else if (a.lt("1e48")) {
                return `${format(a.div("1e36"), 3, false)} <abbr title="Megametre = 1.000e6 m">Mm</abbr><sup>4</sup>`
            } else if (a.lt("1e60")) {
                return `${format(a.div("1e48"), 3, false)} <abbr title="Gigametre = 1.000e9 m">Gm</abbr><sup>4</sup>`
            } else if (a.lt("7.98930938444449e63")) {
                return `${format(a.div("1e60"), 3, false)} <abbr title="Terametre = 1.000e12 m">Tm</abbr><sup>4</sup>`
            } else if (a.lt("9.041324011762711e89")) {
                return `${format(a.div("7.98930938444449e63"), 3, false)} ly<sup>4</sup>`
            } else if (a.lt("9.041324011762711e101")) {
                return `${format(a.div("9.041324011762711e89"), 3, false)} kpc<sup>4</sup>`
            } else if (a.lt("9.041324011762711e113")) {
                return `${format(a.div("9.041324011762711e101"), 3, false)} Mpc<sup>4</sup>`
            } else if (a.lt("9.041324011762711e125")) {
                return `${format(a.div("9.041324011762711e113"), 3, false)} Gpc<sup>4</sup>`
            } else {
                return `${format(a.div("9.041324011762711e125"), 3, false)} Tpc<sup>4</sup>`
            }
        }
        if (player.display_mode === 1) {
            return `${formatWhole(a)} mm<sup>4</sup>`
        }
        if (player.display_mode === 2) {
            return `${to_offsets(a)} mm<sup>4</sup>`
        }
        if (player.display_mode === 3) {
            return `e${format(a.logarithm(10), 3, true)} mm<sup>4</sup>`
        }
        if (player.display_mode === 4) {
            return `${to_offsets(a.div("1e12"))} m<sup>4</sup>`
        }
        if (player.display_mode === 5) {
            window.turn_max = 0
            return `g<sub>${supsubtransfer(parser(a.floor()))}</sub>(3) mm<sup>4</sup>`
        }

    })().replaceAll("<sup>4</sup>", b ? "^4" : "<sup>4</sup>")
}

function parser(a) {
    if (a.lt(3)) {
        return formatWhole(a);
    } else if (a.lt(7625597484987)) {
        if (turn_max >= 5) {
            return "..."
        }
        let sup = a.logarithm().div(EN(3).logarithm()).floor();
        let double_w = true;
        let sup_parsed = parser(sup);
        turn_max += 1
        if (
            a.sub(EN(3).pow(sup)) < EN(3).pow(sup)
        ) double_w = false;
        if (double_w) {
            if (sup.eq(1)) {
                return "ω2" + (a.mod(EN(3).pow(sup)).eq(0) ? "" : "+" + parser(a.mod(EN(3).pow(sup))))
            } else {
                return "ω^{" + sup_parsed + "}2" + (!(a.mod(EN(3).pow(sup)).eq()) ? "+" + parser(a.mod(EN(3).pow(sup))) : "")

            }
        } else {
            if (sup.eq(1)) {
                return "ω" + (a.mod(EN(3).pow(sup)).eq(0) ? "" : "+" + parser(a.mod(EN(3).pow(sup))))
            } else {
                return "ω^{" + sup_parsed + "}" + (!(a.mod(EN(3).pow(sup)).eq()) ? "+" + parser(a.mod(EN(3).pow(sup))) : "")

            }
        }

    }

}

function to_offsets(a) {
    return `${format(a.div(E(1000).pow(E.floor(a.logarithm(1000)))), 3, true)} ${offsets_1[E.floor(a.logarithm(1000))]}`
}

function getUndulatingColor(period = Math.sqrt(760)) {
    let t = new Date().getTime()
    let a = Math.sin(t / 1e3 / period * 2 * Math.PI)
    let b = Math.sin(t / 1e3 / period * 2 * Math.PI + 2)
    let c = Math.sin(t / 1e3 / period * 2 * Math.PI + 4)
    a = convertToB16(Math.floor(a * 128) + 128)
    b = convertToB16(Math.floor(b * 128) + 128)
    c = convertToB16(Math.floor(c * 128) + 128)
    return "#" + String(a) + String(b) + String(c)
}

function convertToB16(n) {
    let codes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    let x = n % 16
    return codes[(n - x) / 16] + codes[x]
}

function boost_reward_desc() {
    if (player.dim_boost.eq(0)) {
        return "解锁维度5<br>需要20 维度4"
    }
    if (player.dim_boost.eq(1)) {
        return "解锁维度6<br>需要20 维度5"
    }
    if (player.dim_boost.eq(2)) {
        return "解锁维度7<br>需要20 维度6"
    }
    if (player.dim_boost.eq(3)) {
        return "解锁维度8<br>需要20 维度7"
    }
    if (player.dim_boost.eq(4)) {
        return "增加维度1 倍数x0.1<br>需要20 维度8"
    }
    if (player.dim_boost.gte(5)) {
        let moreinfo = "";
        if (player.dim_boost.eq(5)) {
            moreinfo = "解锁3维空间"
        }
        return `增加维度倍数x0.1<br>${moreinfo}<br>需要${formatWhole(player.dim_boost.sub(2).mul(10))} 维度8`
    }
}

function display() {
    $("#reset-dialog-mm3").html()
    $("#upgrade-button")[player.mm3_volumes.unl ? "show" : "hide"]();
    $("#boost-reward").html(boost_reward_desc());
    //$("#_5-dimension-volumes").html(`${format(player.mm5_volumes, 3, 0)}`)
    $("#d-boosts").html(formatWhole(player.dim_boost));
    $("#notice").html(`
    每秒增加 ${display_volumes(player.dimensions[DIMENSIONS_POINTS][0].mul(player.dimensions[DIMENSIONS_MULTI][0]))}体积<br>
    每分钟增加 ${display_volumes(player.dimensions[DIMENSIONS_POINTS][0].mul(player.dimensions[DIMENSIONS_MULTI][0]).mul(60))}体积<br>
    每小时增加 ${display_volumes(player.dimensions[DIMENSIONS_POINTS][0].mul(player.dimensions[DIMENSIONS_MULTI][0]).mul(3600))}体积<br>
    
    `)
    $("#page3_3dimension").html(formatWhole(player.mm3_volumes.points));
    for (const func of displays) {
        func();
    }
    /*hang            lie           button  */
    //$("#achieves").children().children()[0   ].children[ 0   ].children[ 0   ]
    for (const index in player.achieve) {
        if (index >= 20) {
            break;
        } else {
            let hang = Math.floor(index / 10);
            let lie = index % 10
            let btn = $("#achieves").children().children()[hang].children[lie].children[0];
            if (secret_achieves.indexOf(Number(index)) !== -1) {
                btn.style.color = getUndulatingColor(1);
            }
            if (player.achieve[index]) {
                btn.style.background = "#00aa00";

                if (secret_achieves.indexOf(Number(index)) !== -1) {
                    btn.innerHTML = secret_achieves_information[secret_achieves.indexOf(Number(index))]
                }
            }
        }
    }
    $(".pts-dis").html(display_volumes(player.volumes))
    for (let i = 0; i < 8; i++) {
        if (player.dim_boost.add(4).lte(i)) {
            $(`#dim${i + 1}`).hide()
        } else {
            $(`#dim${i + 1}`).show()
        }
        $(`#d${i + 1}`).text(formatWhole(player.dimensions[DIMENSIONS_POINTS][i]));
        $(`#dm${i + 1}`).text(formatWhole(player.dimensions[DIMENSIONS_MULTI][i]));
        if ($(`#dbtn${i + 1}`).html() !== `价格：<span style="color: ${player.volumes.gte(player.dimensions[DIMENSIONS_COST][i]) ? "#00ff00" : "white"}">` + (display_volumes(player.dimensions[DIMENSIONS_COST][i])) + "</span>") {
            $(`#dbtn${i + 1}`).html(`价格：<span style="color: ${player.volumes.gte(player.dimensions[DIMENSIONS_COST][i]) ? "#00ff00" : "white"}">` + (display_volumes(player.dimensions[DIMENSIONS_COST][i]))) + "</span>";
        }
        player.dimensions[DIMENSIONS_MULTI][i] = player.dimensions_buymulti[i].pow(player.dimensions[DIMENSIONS_BOUGHT][i]);

    }
    for (const index in format4_numbers_tags) {
        if (isNaN(index)) {
            continue;
        }
        try {
            format4_numbers_tags[index].innerHTML = display_volumes(E(format4_numbers_orig[index]));

        } catch (e) {
            console.error(e, index, "how?")
        }
    }
    for (const index in format5_numbers_tags) {
        if (isNaN(index)) {
            continue;
        }
        try {
            format5_numbers_tags[index].innerHTML = format(format5_numbers_orig[index], 3, 0) + " mm<sup>5</sup>";

        } catch (e) {
            console.error(e, index, "how?")
        }

    }
}

function rainbowText(elem, text) {
    return "<" + elem + " style='color:" + getUndulatingColor() + ";text-shadow:0px 0px 10px;'>" + text + "</" + elem + ">"
}
