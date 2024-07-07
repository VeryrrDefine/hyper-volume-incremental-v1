"use strict";

const VERSION = 10

function reverseString(input) {
    let charArray = input.split('');
    charArray.reverse();
    return charArray.join('');
}

function encodeBase64(input) {
    let str = typeof input === 'string' ? input : String(input);
    return btoa(unescape(encodeURIComponent(str)));
}

function decodeBase64(input) {
    var encoded = typeof input === 'string' ? input : String(input);
    return decodeURIComponent(escape(atob(encoded)));
}

function export_copy() {
    return navigator.clipboard.writeText(reverseString(encodeBase64(JSON.stringify(player))))

}

function export_file() {
    let str = reverseString(encodeBase64(JSON.stringify(player)))
    let file = new Blob([str], {type: "text/plain"})
    window.URL = window.URL || window.webkitURL;
    let a = document.createElement("a")
    a.href = window.URL.createObjectURL(file)
    a.download = "Volume Incremental Save - " + getCurrentBeijingTime() + ".txt"
    a.click()
    return navigator.clipboard.writeText(reverseString(encodeBase64(JSON.stringify(player))))

}

function getCurrentBeijingTime() {
    const now = new Date();
    const utcYear = now.getUTCFullYear();
    const utcMonth = String(now.getUTCMonth() + 1).padStart(2, '0');
    const utcDate = String(now.getUTCDate()).padStart(2, '0');
    const utcHours = now.getUTCHours();
    const utcMinutes = now.getUTCMinutes();
    const utcSeconds = now.getUTCSeconds();
    const utcMilliseconds = now.getUTCMilliseconds();
    let beijingHours = (utcHours + 8) % 24;
    if (beijingHours < 0) {
        now.setUTCDate(now.getUTCDate() + 1);
        beijingHours += 24;
    }

    return `${utcYear}-${utcMonth}-${utcDate} ${beijingHours.toString().padStart(2, '0')}:${utcMinutes.toString().padStart(2, '0')}:${utcSeconds.toString().padStart(2, '0')}.${utcMilliseconds.toString().padStart(3, '0')}`;
}

function handle_export(save2) {
    let importing_player = JSON.parse(decodeBase64(reverseString(save2)))
    transformToE(importing_player);
    Object.assign(player, importing_player)
    fix();
    console.clear()
}

function import_save() {
    handle_export(prompt("输入存档"));

}
function fast_hard_reset(){
    hard_reset();
    save();
    location.href = location.href;
}
function formated_hard_reset() {
    let redeem = prompt("您确定要硬重置吗？输入以下文字确认，此操作无法取消!："+
    "Did you think i am a sb?")
    if (redeem === "Did you think i am a sb?"){
        hard_reset();
        save();
        location.href = location.href;
    }

    /*$("[data-ok-modal]").text("确认");
    modal.showModal();*/
}

function import_file() {
    let a = document.createElement("input")
    a.setAttribute("type", "file")
    a.click()
    a.onchange = () => {
        let fr = new FileReader();
        fr.onload = () => {
            let save2 = fr.result
            let importing_player = JSON.parse(decodeBase64(reverseString(save2)))
            transformToE(importing_player);
            Object.assign(player, importing_player)
            fix();
            console.clear()
        }
        fr.readAsText(a.files[0]);
    }
}

function save() {
    localStorage.setItem("volume-incremental", JSON.stringify(player))
    localStorage.setItem("developerSettings", JSON.stringify(developer))
}
