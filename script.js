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
fastly = 0

E = ExpantaNum
function ENify(a){
    console.log(a)
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
		/*
		example : [
			document.querySelectorAll(".a")[0],document.querySelectorAll("#b")[0]
		]
		when execute show(1), id aaa show, other hide
		*/
		this.elementlist=a;
        this.show(1)

	}
	show(x){
		let q = x-1
		for (const l in this.elementlist){
            console.log(this.elementlist[l])
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
function display_volumes(a){
    
    if (player.display_mode==0){
        if (a.lt("1e4")){
            return `${format(a,5,false)} mm<sup>4</sup>`
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
            return `${format(a.div("1e36"),3,false)} Megametre<sup>4</sup>`
        }else if (a.lt("1e60")){
            return `${format(a.div("1e48"),3,false)} <abbr title="Megametre = 1.0000e6 m">Mm</abbr><sup>4</sup>`
        }else if (a.lt("1e63")){
            return `${format(a.div("1e60"),3,false)} <abbr title="Gigametre = 1.0000e9 m">Gm</abbr><sup>4</sup>`
        }else if (a.lt("1e7777777")){
            return `${format(a.div("7.98930938444449e63"),5,false)} ly<sup>4</sup>`
        }
    }
    if (player.display_mode == 1){
        return `${formatWhole(a)} mm<sup>4</sup>`
    }
    if (player.display_mode == 3){
        return `e${format(a.logarithm(10),4,true)} mm<sup>4</sup>`
    }
    if (player.display_mode==2){
        return `${formatWhole(a)} mm<sup>4</sup>`
    }
}

function maxDimensions(){
    for (let i = 1; i< 9;  i++){
        buydim(i,1);
    }
}
function breakSpaceMax(){
    if (player.volumes.gt("1.797e308") && !player.no_space_max){
        reset_dimensions()
        player.volumes = E("1e224");
        player.no_space_max = true
    }
}
function display(){
    
    
    $(".pts-dis").html(display_volumes(player.volumes))
   // $("#allmaxButton")[player.bh_i_times.gt(0) ? "show" : "hide"]()
   //$("#space_maxt")[(!player.no_space_max)? "show" : "hide"]()
    $("#space_max").html(display_volumes(player.space_max))
    //$("#bhi_times").html(`(${formatWhole(player.bh_i_times)}/5)`)
    $("#spacemax_levelup_need").html(`(${formatWhole(player.space_max_times)}/${player.space_max_timesm} 每次${display_volumes(player.space_max_need)})`)
   
    for (let i = 0; i< 8;  i++){
        $(`#d${i}`).text(formatWhole(player.dimensions[i]));
        if (player.dimensions[0].gte("1e10")){
            $(`#d1`).html(formatWhole(player.dimensions[0]) + "<span class='soft'>(受软上限限制)</span>");
        }else{
            $(`#d1`).text(formatWhole(player.dimensions[0]));
        }
        $(`#dm${i+1}`).text(formatWhole(player.dimensions_multi[i]));
        if ($(`#dbtn${i+1}`).html() != `价格：<span style="color: ${player.volumes.gte(player.dimensions_cost[i]) ? "#00ff00" : "white"}">` +(display_volumes(player.dimensions_cost[i])) + "</span>"){
            $(`#dbtn${i+1}`).html(`价格：<span style="color: ${player.volumes.gte(player.dimensions_cost[i]) ? "#00ff00" : "white"}">` +(display_volumes(player.dimensions_cost[i]))) + "</span>";
        }
        player.dimensions_multi[i] = player.dimensions_buymulti[i].pow(player.dimensions_bought[i]);

    }
}
class CheatError extends Error{
    constructor(message) {
        super(message);
        this.name = 'CheatError';
      }
}
function buydim(dim,max2){
    if (player.volumes.gte(player.dimensions_cost[dim-1])){
        player.volumes = player.volumes.sub(player.dimensions_cost[dim-1])
        player.dimensions_bought[dim-1] = player.dimensions_bought[dim-1].add(1);
        player.dimensions[dim-1] = player.dimensions[dim-1].add(10);
        return true
    }
    return false
    
    
}
function calculate_dim(){
    for (let i = 0; i < 7; i++) {
        if (i != 0){
            player.dimensions[i] = player.dimensions[i].add(player.dimensions[i+1].mul(player.dimensions_multi[i+1]).div(30));
        }
        if (i==0){
            if (player.dimensions[0].gte("1e10")){
                player.dimensions[0] = player.dimensions[0].add(player.dimensions[1].mul(player.dimensions_multi[1]).div(3000));

            }else{
                player.dimensions[0] = player.dimensions[0].add(player.dimensions[1].mul(player.dimensions_multi[1]).div(30));

            }
        }
    }
}
function reset_dimensions(){
    Object.assign(player,
        {
            dimensions: [ // 买要几point
                E(0), E(0), E(0), E(0), E(0), E(0), E(0), E(0)
            ],
            dimensions_multi: [
                E(1), E(1), E(1), E(1), E(1), E(1), E(1), E(1)
            ],
            dimensions_bought: [ // 买了几次
                E(0), E(0), E(0), E(0), E(0), E(0), E(0), E(0), 
            ],
            dimensions_cost: [ 
                E(10), E(100), E(1000), E(1e4), E(1e5), E(1e6), E(1e7), E(1e8)
            ],
            dimensions_scale: [
                E(10), E(100), E(1000), E(1e4), E(1e5), E(1e6), E(1e7), E(1e8)
            ]
        }
    )
}

function hard_reset(){
    player = {
        volumes: E(10),
        achive: new Array(200),
        space_max: E("1e6"),
        space_max_level: E(0),
        space_max_need: E(1e6),
        space_max_times: E(0),
        space_max_timesm: E(3),
        curpage: 1,
        display_mode: 0,
        no_space_max: false,
        notice: "",
        language: "en",
        upgrades: [
            0,0,0,0,0,0,0,0
        ],
        //blackhole_shield: false,
        dimensions_buymulti: [ 
            E(2), E(2), E(2), E(2), E(2), E(2), E(2), E(2)
        ],
        //blackhole_invasion: false,
       // bh_i_times : EN(0)
    }
    reset_dimensions()
}
var settings = {
}
function upgrade_space_max(){
    if (player.volumes.gte(player.space_max_need)){
        player.space_max_times = player.space_max_times.add(1);
        reset_dimensions();
        player.volumes = E(10);

    }
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
    player.volumes = player.volumes.add(player.dimensions[0].mul(player.dimensions_multi[0]).div(30));

    if (player.volumes.gt(player.space_max) && !player.no_space_max){
        player.volumes = player.space_max
        
    }
    /*if (player.volumes.gte(E("1.414092421672706e36")) && player.volumes.lt(E("1.414092421672706e39")) && player.blackhole_invasion==0){
        $("#notice").html("总觉得哪里不对劲...")
        $("body").addClass("corrupted")
    }

    if (player.volumes.gte(E("1.414092421672706e39")) && player.blackhole_invasion==0){
        
        player.blackhole_invasion = 1
    }
    if (player.blackhole_invasion == 1 && player.blackhole_shield==0){
        $("#notice").html("我嘞个大纲啊 黑洞来了！！！！！<br>DEBUFF: 维度增加的体积无效，且体积每秒减少"+display_volumes(E(1e37*30)))
        player.volumes = player.volumes.sub(E("1e37"))
        if (player.volumes.lt(0)){
            player.dimensions_buymulti[0] = player.dimensions_buymulti[0].mul(1.01);
            reset_dimensions();
            player.volumes=E(10);
            player.space_max = E(1e6);
            player.space_max_level = E(0);
            player.space_max_need =  E(1e6);
            player.space_max_times =  E(0);
            player.space_max_timesm =  E(2);
            player.bh_i_times = player.bh_i_times.add(1);
            player.blackhole_invasion = 0
            save();
            alert("你之前的进度被黑洞吞噬了, 不过,你获得了一个永久的buff:<br>维度1加成: x1.01")
            location.href = location.href
        }
    }*/
    calculate_dim()
    if (player.space_max_times.eq(player.space_max_timesm)){
        player.space_max_level = player.space_max_level.add(1);
        player.space_max_times = E(0)
        player.space_max = E("1e6").mul(E("1e4").pow(player.space_max_level))
        player.space_max_need = E("1e6").mul(E("1e4").pow(player.space_max_level))
        reset_dimensions()
        
    }
    for (let i = 0; i< 8;  i++){
        player.dimensions_multi[i] = player.dimensions_buymulti[i].pow(player.dimensions_bought[i]);
        player.dimensions_cost[i] = player.dimensions_scale[i].pow(player.dimensions_bought[i].add(1));
    }
    /*if (player.blackhole_invasion==2){
        player.space_max_timesm =  E(1);
    }*/
    save();
    display();
}
function fix(){
    player.volumes = ENify(player.volumes);
    player.space_max = ENify(player.space_max);
    player.space_max_level = ENify(player.space_max_level);
    player.space_max_need = ENify(player.space_max_need);
    player.space_max_times = ENify(player.space_max_times);
    player.space_max_timesm = ENify(player.space_max_timesm);
    //player.bh_i_times = ENify(player.bh_i_times);
    for (let i = 0; i< 8;  i++){
        player.dimensions_multi[i] = ENify(player.dimensions_multi[i])
        player.dimensions_buymulti[i] = ENify(player.dimensions_buymulti[i])
        player.dimensions_bought[i] = ENify(player.dimensions_bought[i])
        player.dimensions[i] = ENify(player.dimensions[i])
        player.dimensions_scale[i] = ENify(player.dimensions_scale[i])

    }
}
function changeDisplayMode(){
    $("#dialog-place").html(`
    <p>修改数字显示方式：</p>
    <select id="select-display-mode">
        <option value=\"0\">重要单位</option>
        <option value=\"1\">总是以mm^4为单位</option> 
        <option value=\"2\">总是以mm^4为单位</option>
        <option value=\"3\">对数</option>
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

function load() {
    //window.template = $("#app").html();
	hard_reset();
	let loadplayer = JSON.parse(localStorage.getItem("volume-incremental"));
	if (loadplayer != null) {
		Object.assign(player, loadplayer)
	}
    fix()
    main_option_ABCD.set_list([$("#page1")[0],$("#page2")[0],$("#page3")[0]]);
    suboption_ABCD.set_list([$("#page2_save")[0],$("#page2_about")[0],$("#page2_visual")[0]]);
    
    setInterval(loop,fastly ? 1 : 1000/30);
    window.closeButton = document.querySelector("[data-ok-modal]")
    window.modal = document.querySelector("[data-modal]")
    throw new ReferenceError("Cheater is not defined");
}
