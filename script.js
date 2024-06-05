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
function import_save() {
    save2 = prompt('请输入您的存档');
    importing_player = JSON.parse(decodeBase64(reverseString(save2)))
    transformToE(importing_player);
    Object.assign(player, importing_player)
    fix();
    console.clear()
}
function formated_hard_reset() {
    prompt_text = `您确定要硬重置吗？输入以下文字确认，此操作无法取消!：
    Did you think i am a sb?`
    let promption = prompt(prompt_text);
    if (promption === "Did you think i am a sb?") {
        hard_reset()
    }
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
            return `${formatWhole(a)} mm<sup>4</sup>`
        }else if (a.lt("1e8")){
            return `${formatWhole(a.div("1e4"))} cm<sup>4</sup>`
        }else if (a.lt("1e12")){
            return `${formatWhole(a.div("1e8"))} dm<sup>4</sup>`
        }else if (a.lt("1e16")){
            return `${formatWhole(a.div("1e12"))} m<sup>4</sup>`
        }else if (a.lt("1e20")){
            return `${formatWhole(a.div("1e16"))} Dm<sup>4</sup>`
        }else if (a.lt("1e24")){
            return `${formatWhole(a.div("1e20"))} hm<sup>4</sup>`
        }else if (a.lt("1e36")){
            return `${format(a.div("1e24"),5,false)} km<sup>4</sup>`
        }else if (a.lt("1e48")){
            return `${format(a.div("1e36"),5,false)} Megametre<sup>4</sup>`
        }else if (a.lt("1e60")){
            return `${format(a.div("1e48"),5,false)} <abbr title="Megametre = 1.0000e6 m">Mm</abbr><sup>4</sup>`
        }else if (a.lt("1e63")){
            return `${format(a.div("1e60"),5,false)} <abbr title="Gigametre = 1.0000e9 m">Gm</abbr><sup>4</sup>`
        }else if (a.lt("1e7777777")){
            return `${formatWhole(a.div("7.98930938444449e63"),5,false)} ly<sup>4</sup>`
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
    for (let i = 1; i<= 8;  i++){
        buydim(i,true);
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
        $(`#d${i+1}`).text(formatWhole(player.dimensions[i]));
        $(`#dm${i+1}`).text(formatWhole(player.dimensions_multi[i]));
        if ($(`#dbtn${i+1}`).html() != "价格：" +(display_volumes(player.dimensions_cost[i]))){
            $(`#dbtn${i+1}`).html("价格：" +(display_volumes(player.dimensions_cost[i])));
        }
        player.dimensions_multi[i] = player.dimensions_buymulti[i].pow(player.dimensions_bought[i]);

    }
}
function buydim(dim,max2){
    if (max2==0){
        if (player.volumes.gte(player.dimensions_cost[dim-1])){
            player.dimensions_bought[dim-1] = player.dimensions_bought[dim-1].add(1);
            player.dimensions[dim-1] = player.dimensions[dim-1].add(10);
            player.volumes = player.volumes.sub(player.dimensions_cost[dim-1])
        }
    }
    else{
        a = 0
        while (player.volumes.gte(player.dimensions_cost[dim-1]) && a < 500){
            if (player.volumes.gte(player.dimensions_cost[dim-1])){
                player.volumes = player.volumes.sub(player.dimensions_cost[dim-1])
                player.dimensions_bought[dim-1] = player.dimensions_bought[dim-1].add(1);
                player.dimensions[dim-1] = player.dimensions[dim-1].add(10);
                if (player.dimensions_cost[dim-1].gt(player.space_max)){
                    break;
                }
            }else{
                break;
            }
            a+= 1
        }
    }
    
}
function calculate_dim(){
    for (let i = 0; i < 7; i++) {
        player.dimensions[i] = player.dimensions[i].add(player.dimensions[i+1].mul(player.dimensions_multi[i+1]).div(30));
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
    /*if (player.blackhole_shield || player.blackhole_invasion != 1){
        player.volumes = player.volumes.add(player.dimensions[0].mul(player.dimensions_multi[0]).div(30));
    }*/
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
        player.space_max = E("1e6").mul(E("1e3").pow(player.space_max_level))
        player.space_max_need = E("1e6").mul(E("1e3").pow(player.space_max_level))
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
function load() {
    //window.template = $("#app").html();
	hard_reset();
	let loadplayer = JSON.parse(localStorage.getItem("volume-incremental"));
	if (loadplayer != null) {
		Object.assign(player, loadplayer)
	}
    fix()
    main_option_ABCD.set_list([$("#page1")[0],$("#page2")[0]]);
    suboption_ABCD.set_list([$("#page2_save")[0],$("#page2_about")[0]]);
    
    setInterval(loop,fastly ? 1 : 1000/30);
}