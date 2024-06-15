"use strict";
function buyMM3Upgrade(a) {
    switch (a) {
        case 1:
            if (player.mm3_volumes.points.gte(10) && !player.upgrades[0]) {
                player.upgrades[0] = true;
                player.mm3_volumes.points = player.mm3_volumes.points.sub(10);
            }
    }
}
function gainMM3() {
    player.mm3_volumes.points = player.mm3_volumes.points.add(calcMM3());
    reset_dimensions(true);
    player.mm3_volumes.unl = true;

}

function formatted_gainMM3() {
    if (calcMM3().eq(0)){
        return;
    }
    $("#dialog-place").html(`
    <p>你确定要mm<sup>3</sup>重置吗？</p>
    <p>重置后可获得<span id="reset-dialog-mm3"></span> mm<sup>3</sup> 体积</p>
    `)
    closeButton.setAttribute("onclick", `
    gainMM3();
    modal.close();
    `);
    $("[data-ok-modal]").text("切换");
    modal.showModal();
}
function calcMM3(){
    if (player.volumes.gte("1e50")){
        return player.volumes.logarithm("10").minus("40").div(10).floor();
    }else{
        return E("0");
    }
}
displays.push(function(){
    $("#reset-dialog-mm3").html(formatWhole(calcMM3()));
    player.upgrades[0] && $("#upgrade1").attr("disabled","");
})

if(false){
    gainMM3(); //unreachable
}