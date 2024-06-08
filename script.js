VERSION = "v1.0.0-pre8"
function reverseString(input) {
    var charArray = input.split('');
    charArray.reverse();
    var reversedString = charArray.join('');
    return reversedString;  
}
function encodeBase64(input) {
    var str = typeof input === 'string' ? input : String(input);
    var encoded = btoa(unescape(encodeURIComponent(str)));
    return encoded;  
} 
function decodeBase64(input) {
    var encoded = typeof input === 'string' ? input : String(input);
    var decoded = decodeURIComponent(escape(atob(encoded)));
    return decoded;  
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
        a.download = "Volume Incremental Save - "+getCurrentBeijingTime()+".txt"
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
      
    const beijingTime = `${utcYear}-${utcMonth}-${utcDate} ${beijingHours.toString().padStart(2, '0')}:${utcMinutes.toString().padStart(2, '0')}:${utcSeconds.toString().padStart(2, '0')}.${utcMilliseconds.toString().padStart(3, '0')}`;  
    return beijingTime;  
}
function handle_export(save2){
    importing_player = JSON.parse(decodeBase64(reverseString(save2)))
    transformToE(importing_player);
    Object.assign(player, importing_player)
    fix();
    console.clear()
}
function import_save() {
    $("#dialog-place").html(`
    <p>输入存档:</p>
    <input type="text" id="redeem-text">
    `)
    closeButton.setAttribute("onclick",`
    redeem = $("#redeem-text").val();
    handle_export(redeem);
    modal.close();
    `);
    $("[data-ok-modal]").text("确认");
    modal.showModal();
    
}
function formated_hard_reset() {
    $("#dialog-place").html(`
    <p>您确定要硬重置吗？输入以下文字确认，此操作无法取消!：</p>
    <p>Did you think i am a sb?</p>
    <input type="text" id="redeem-text">
    `)
    closeButton.setAttribute("onclick",`
    redeem = $("#redeem-text").val();
    if (redeem == "Did you think i am a sb?"){
        hard_reset()
    }
    modal.close();
    `);
    $("[data-ok-modal]").text("确认");
    modal.showModal();
}
function import_file() {
let a = document.createElement("input")
a.setAttribute("type", "file")
a.click()
a.onchange = () => {
    let fr = new FileReader();
    fr.onload = () => {
    let save2 = fr.result
    importing_player = JSON.parse(decodeBase64(reverseString(save2)))
    transformToE(importing_player);
    Object.assign(player, importing_player)
    fix();
    console.clear()
    }
    fr.readAsText(a.files[0]);
    }   
}
fastly = location.host=="veryrrdefine.github.io"? 0 : 1

E = ExpantaNum
function ENify(a){
    b = new ExpantaNum(0);
    if (a !== undefined){
        b.array = a.array;
        b.layer = a.layer;
        b.sign = a.sign;
    }
    return b
}
class ABCD{
	elementlist= []
	showing= 0
    constructor (){

    }
	set_list(a){
		
		this.elementlist=a;
        this.show(1)

	}
	show(x){
		let q = x-1
		for (const l in this.elementlist){
			if (l==q){
				this.elementlist[l].style.display="block";
			}else{
				this.elementlist[l].style.display="none";
			}
		}
		this.showing = q;
	}
	getId(x){
		return document.getElementById(x);
	}
}

function switchpage(page) {
    player.curpage = page
}
function display_volumes(a,b){
    return (()=>{
    if (player.display_mode==0){
        if (a.lt("1e4")){
            return `${format(a,3,false)} mm<sup>4</sup>`
        }else if (a.lt("1e8")){
            return `${format(a.div("1e4"),3,false)} cm<sup>4</sup>`
        }else if (a.lt("1e12")){
            return `${format(a.div("1e8"),3,false)} dm<sup>4</sup>`
        }else if (a.lt("1e16")){
            return `${format(a.div("1e12"),3,false)} m<sup>4</sup>`
        }else if (a.lt("1e20")){
            return `${format(a.div("1e16"),3,false)} Dm<sup>4</sup>`
        }else if (a.lt("1e24")){
            return `${format(a.div("1e20"),3,false)} hm<sup>4</sup>`
        }else if (a.lt("1e36")){
            return `${format(a.div("1e24"),3,false)} km<sup>4</sup>`
        }else if (a.lt("1e48")){
            return `${format(a.div("1e36"),3,false)} <abbr title="Megametre = 1.000e6 m">Mm</abbr><sup>4</sup>`
        }else if (a.lt("1e60")){
            return `${format(a.div("1e48"),3,false)} <abbr title="Gigametre = 1.000e9 m">Gm</abbr><sup>4</sup>`
        }else if (a.lt("7.98930938444449e63")){
            return `${format(a.div("1e60"),3,false)} <abbr title="Terametre = 1.000e12 m">Tm</abbr><sup>4</sup>`
        }else if (a.lt("9.041324011762711e89")){
            return `${format(a.div("7.98930938444449e63"),3,false)} ly<sup>4</sup>`
        }else if (a.lt("9.041324011762711e101")){
            return `${format(a.div("9.041324011762711e89"),3,false)} kpc<sup>4</sup>`
        }else if (a.lt("9.041324011762711e113")){
            return `${format(a.div("9.041324011762711e101"),3,false)} Mpc<sup>4</sup>`
        }else if (a.lt("9.041324011762711e125")){
            return `${format(a.div("9.041324011762711e113"),3,false)} Gpc<sup>4</sup>`
        }else{
            return `${format(a.div("9.041324011762711e125"),3,false)} Tpc<sup>4</sup>`
        }
    }
    if (player.display_mode == 1){
        return `${formatWhole(a)} mm<sup>4</sup>`
    }
    if (player.display_mode==2){
        return `${to_offsets(a)} mm<sup>4</sup>`
    }
    if (player.display_mode == 3){
        return `e${format(a.logarithm(10),3,true)} mm<sup>4</sup>`
    }
    if (player.display_mode==4){
        return `${to_offsets(a.div("1e12"))} m<sup>4</sup>`
    }})().replaceAll("<sup>4</sup>",b?"^4":"<sup>4</sup>")
}
function to_offsets(a){
    return `${format(a.div(E(1000).pow(E.floor(a.logarithm(1000)))),3,true)} ${offsets_1[E.floor(a.logarithm(1000))]}`
}
const offsets_1=[
    "","K","M","B","T","Qa","Qi","Sx","Sp","Oc","No","Dc",
    "UDc","DDc","TDc","QaDc", "QiDc","SxDc","SpDc","OcDc", "NoDc","Vg",
    "UVg","DVg","TVg","QaVg", "QiVg","SxVg","SpVg","OcVg", "NoVg","Tg",
    "UTg","DTg","TTg","QaTg", "QiTg","SxTg","SpTg","OcTg", "NoTg","Vg<sup>3</sup>",
    
]
const LY = E("7.98930938444449e63")
function gainMM5(){
    if (player.volumes.gte("1e100")){
        player.mm5_volumes = player.mm5_volumes.add(E.floor(player.volumes.div("1e99").logarithm("10")))
        player.upgrades[0]=0;
        player.dimensions_buymulti[0] = E(1.8)
        player.volumes = E(10);
        reset_dimensions();


    }
}
function buyAll(){
    buydim(1);
    buydim(2);
    buydim(3);
    buydim(4);
    buydim(5);
    buydim(6);
    buydim(7);
    buydim(8);
}
function buyUpgrade(a){
    switch(a){
        case 1:
            if (player.volumes.gte(LY) && !player.upgrades[0]){
                player.volumes = player.volumes.sub(LY);
                player.upgrades[0] = 1;
                player.dimensions_buymulti[0]=player.upgrades[3] ? E(7) : E(2.5);
            }
            break;
        case 2:
            if (player.mm5_volumes.gte(1) && !player.upgrades[1]){
                player.mm5_volumes = player.mm5_volumes.sub(1);
                player.upgrades[1] = 1;
                player.dimensions_buymulti[1]=E(2.5);
            }
            break;
        case 3:
            if (player.mm5_volumes.gte(10) && !player.upgrades[2]){
                player.mm5_volumes = player.mm5_volumes.sub(10);
                player.upgrades[2] = 1;
                player.dimensions_buymulti[2]=E(3);
            }
            break;
        case 114514:
            if (player.mm5_volumes.gte("1e3") && !player.upgrades[3]){
                player.mm5_volumes = player.mm5_volumes.sub("1e3");
                player.upgrades[3] = 1;
                player.dimensions_buymulti[0]=E(7);
            }
            break;
        case 114515:
            if (player.mm5_volumes.gte("1e4") && !player.upgrades[4]){
                player.mm5_volumes = player.mm5_volumes.sub("1e4");
                player.upgrades[4] = 1;
                player.dimensions_buymulti[0]=E(10);
            }
            break;
    }
    
}
function maxDimensions(){
    for (let i = 1; i< 9;  i++){
        buydim(i,1);
    }
}
function display(){
    document.title=`多维体积增量: 你有 ${display_volumes(player.volumes,1)}体积`
    $("#_5-dimension-volumes").html(`${format(player.mm5_volumes,3,0)}`)
    $("#notice").html(`
    每秒增加 ${display_volumes(player.dimensions[DIMENSIONS_POINTS][0].mul(player.dimensions[DIMENSIONS_MULTI][0]))}体积<br>
    每分钟增加 ${display_volumes(player.dimensions[DIMENSIONS_POINTS][0].mul(player.dimensions[DIMENSIONS_MULTI][0]).mul(60))}体积<br>
    每小时增加 ${display_volumes(player.dimensions[DIMENSIONS_POINTS][0].mul(player.dimensions[DIMENSIONS_MULTI][0]).mul(3600))}体积<br>
    
    `)
    $(".pts-dis").html(display_volumes(player.volumes))
   
    for (let i = 0; i< 8;  i++){
        $(`#d${i+1}`).text(formatWhole(player.dimensions[DIMENSIONS_POINTS][i]));
        $(`#dm${i+1}`).text(formatWhole(player.dimensions[DIMENSIONS_MULTI][i]));
        if ($(`#dbtn${i+1}`).html() != `价格：<span style="color: ${player.volumes.gte(player.dimensions[DIMENSIONS_COST][i]) ? "#00ff00" : "white"}">` +(display_volumes(player.dimensions[DIMENSIONS_COST][i])) + "</span>"){
            $(`#dbtn${i+1}`).html(`价格：<span style="color: ${player.volumes.gte(player.dimensions[DIMENSIONS_COST][i]) ? "#00ff00" : "white"}">` +(display_volumes(player.dimensions[DIMENSIONS_COST][i]))) + "</span>";
        }
        player.dimensions[DIMENSIONS_MULTI][i] = player.dimensions_buymulti[i].pow(player.dimensions[DIMENSIONS_BOUGHT][i]);

    }
    for (const index in format4_numbers_tags){
        format4_numbers_tags[index].innerHTML = display_volumes(E(format4_numbers_orig[index]));
    }
    for (const index in format5_numbers_tags){
        format5_numbers_tags[index].innerHTML = format(format5_numbers_orig[index],3,0)+" mm<sup>5</sup>";
    }
}
class CheatError extends Error{
    constructor(message) {
        super(message);
        this.name = 'CheatError';
      }
}
function buydim(dim,max2){
    if (player.volumes.gte(player.dimensions[DIMENSIONS_COST][dim-1])){
        player.volumes = player.volumes.sub(player.dimensions[DIMENSIONS_COST][dim-1])
        player.dimensions[DIMENSIONS_BOUGHT][dim-1] = player.dimensions[DIMENSIONS_BOUGHT][dim-1].add(1);
        player.dimensions[DIMENSIONS_POINTS][dim-1] = player.dimensions[DIMENSIONS_POINTS][dim-1].add(10);
        return true
    }
    return false
    
    
}
function calculate_dim(){
    for (let i = 0; i < 7; i++) {
        if (i != 0){
            player.dimensions[DIMENSIONS_POINTS][i] = player.dimensions[DIMENSIONS_POINTS][i].add(player.dimensions[DIMENSIONS_POINTS][i+1].mul(player.dimensions[DIMENSIONS_MULTI][i+1]).div(30));
        }
        if (i==0){
            player.dimensions[DIMENSIONS_POINTS][0] = player.dimensions[DIMENSIONS_POINTS][0].add(player.dimensions[DIMENSIONS_POINTS][1].mul(player.dimensions[DIMENSIONS_MULTI][1]).div(30));

        }
    }
}
function reset_dimensions(){
    Object.assign(player,
        {
            dimensions:[
            [E(0),E(0),E(0),E(0),E(0),E(0),E(0),E(0)], //dimensions
            [E(1),E(1),E(1),E(1),E(1),E(1),E(1),E(1)], //dimensions_multi
            [E(0),E(0),E(0),E(0),E(0),E(0),E(0),E(0)], // dimensions_bought
            [E(10), E(100), E(1000), E(1e4), E(1e5), E(1e6), E(1e7), E(1e8)],// dim_cost
            [E(10), E(100), E(1000), E(1e4), E(1e5), E(1e6), E(1e7), E(1e8)],// dim_scale
            ]
        }
    )
}
const DIMENSIONS_POINTS = 0;
const DIMENSIONS_MULTI = 1;
const DIMENSIONS_BOUGHT = 2;
const DIMENSIONS_COST = 3;
const DIMENSIONS_SCALE = 4;
function hard_reset(){
    player = {
        volumes: E(10),
        mm5_volumes: E(0),
        achive: new Array(200),
        version: "v1.0.0-pre7",
        curpage: 1,
        display_mode: 0,
        notice: "",
        language: "en",
        upgrades: [
            0,0,0,0,0,0,0,0
        ],
        dimensions_buymulti: [ 
            E(1.8), E(1.8), E(1.8), E(1.8), E(1.8), E(1.8), E(1.8), E(1.8)
        ],

    }
    reset_dimensions()
}
var settings = {
}
function save() {
	localStorage.setItem("volume-incremental", JSON.stringify(player))
}
main_option_ABCD = new ABCD();
volume_ABCD = new ABCD();
suboption_ABCD = new ABCD();
function transformToE(object) {
    for (let key in object) {
        if (typeof object[key] === "string" && !new E(object[key]).isNaN()) {
            object[key] = new E(object[key]);
            console.debug(object[key],"translated")
        }
        if (typeof object[key] === "object") {
            transformToE(object[key]);
            console.debug(object[key],"is a object")
        }
    }
}
function loop() {
    player.volumes = player.volumes.add(player.dimensions[DIMENSIONS_POINTS][0].mul(player.dimensions[DIMENSIONS_MULTI][0]).div(30));

    
    calculate_dim()
    
    for (let i = 0; i< 8;  i++){
        player.dimensions[DIMENSIONS_MULTI][i] = player.dimensions_buymulti[i].pow(player.dimensions[DIMENSIONS_BOUGHT][i]);
        player.dimensions[DIMENSIONS_COST][i] = player.dimensions[DIMENSIONS_SCALE][i].pow(player.dimensions[DIMENSIONS_BOUGHT][i].add(1));
    }
    /*if (player.blackhole_invasion==2){
        player.space_max_timesm =  E(1);
    }*/
    save();
    display();
}
function fix(){
    player.volumes = ENify(player.volumes);
    player.mm5_volumes = ENify(player.mm5_volumes);
   
    for (let i = 0; i< 8;  i++){
        player.dimensions[DIMENSIONS_MULTI][i] = ENify(player.dimensions[DIMENSIONS_MULTI][i])
        player.dimensions_buymulti[i] = ENify(player.dimensions_buymulti[i])
        player.dimensions[DIMENSIONS_BOUGHT][i] = ENify(player.dimensions[DIMENSIONS_BOUGHT][i])
        player.dimensions[DIMENSIONS_POINTS][i] = ENify(player.dimensions[DIMENSIONS_POINTS][i])
        player.dimensions[DIMENSIONS_SCALE][i] = ENify(player.dimensions[DIMENSIONS_SCALE][i])

    }
}
function changeDisplayMode(){
    $("#dialog-place").html(`
    <p>修改数字显示方式：</p>
    <select id="select-display-mode">
        <option value=\"0\">重要单位</option>
        <option value=\"1\">总是以mm^4为单位</option> 
        <option value=\"2\">总是以mm^4为单位，使用K,M,B,T,...单位</option>
        <option value=\"3\">对数</option>
        <option value=\"4\">总是以m^4为单位，使用K,M,B,T,...单位</option>
    </select>
    `)
    closeButton.setAttribute("onclick",`
    player.display_mode = Number($("#select-display-mode").val());
    modal.close();
    `);
    $("[data-ok-modal]").text("切换");
    modal.showModal();
}
function getAchievement(achi_id){

}
function redeem(){
    $("#dialog-place").html(`
    <p>输入兑换码</p>
    <input type="text" id="redeem-text">
    `)
    closeButton.setAttribute("onclick",`
    redeem = $("#redeem-text").val();
    if (redeem == "畜生"){
        getAchievement(100);
    }
    modal.close();
    `);
    $("[data-ok-modal]").text("兑换");
    modal.showModal();
}
function randomGain(a){
    result = Math.floor(Math.random()*100+1)
    if (result == 8 || result == 9) {
        player.volumes = player.volumes.add("1e100");
        player.no_space_max = true;

    }else if ((a==undefined)){
        $("#dialog-place").html(`
        <p>没抽到...</p>
        <p>惩罚: 所有维度被开10次方</p>
        `)
        closeButton.setAttribute("onclick",`
        modal.close();
        `);
        for (i=0 ;  i<8; i++){
            player.dimensions[DIMENSIONS_POINTS][i] = player.dimensions[DIMENSIONS_POINTS][i].pow(0.1)

        }
        $("[data-ok-modal]").text("确定");
        modal.showModal();
    }
}
function load() {
    window.format4_numbers_tags = document.querySelectorAll("[to-format-4]");
    window.format4_numbers_orig = []
    for (const tags of format4_numbers_tags){
        format4_numbers_orig.push(tags.innerHTML);
    }
    window.format5_numbers_tags = document.querySelectorAll("[to-format-5]");
    window.format5_numbers_orig = []
    for (const tags of format5_numbers_tags){
        format5_numbers_orig.push(tags.innerHTML);
    }

	hard_reset();
	let loadplayer = JSON.parse(localStorage.getItem("volume-incremental"));
	if (loadplayer != null) {
		Object.assign(player, loadplayer)
	}
    fix()
    main_option_ABCD.set_list([$("#page1")[0],$("#page2")[0],$("#page3")[0],$("#page4")[0]]);
    suboption_ABCD.set_list([$("#page2_save")[0],$("#page2_about")[0],$("#page2_visual")[0]]);
    
    setInterval(loop,fastly ? 1 : 1000/30);
    window.closeButton = document.querySelector("[data-ok-modal]")
    window.modal = document.querySelector("[data-modal]")
    $("#music")[0].loop = true;
    $("#music")[0].volume = 0.5;
    
    $("#music")[0].muted = true;
    throw new ReferenceError("Cheater is not defined");
}
