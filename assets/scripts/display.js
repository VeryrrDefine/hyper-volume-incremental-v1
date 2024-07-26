function boost_reward_desc() {
    if (player.dim_boost.eq(0)) {
        return "解锁维度5<br>维度1倍率x" + (hasMM3upgrade(22) ? "4" : "2") + "<br>需要20 维度4"
    }
    if (player.dim_boost.eq(1)) {
        return "解锁维度6<br>维度1-2倍率x" + (hasMM3upgrade(22) ? "4" : "2") + "<br>需要20 维度5"
    }
    if (player.dim_boost.eq(2)) {
        return "解锁维度7<br>维度1-3倍率x" + (hasMM3upgrade(22) ? "4" : "2") + "<br><br>需要20 维度6"
    }
    if (player.dim_boost.eq(3)) {
        return "解锁维度8<br>维度1-4倍率x" + ((hasMM3upgrade(22) ? "4" : "2")) + "<br><br>需要20 维度7"
    }
    if (player.dim_boost.eq(4)) {
        return "维度1-5倍率x" + (hasMM3upgrade(22) ? "4" : "2") + "<br><br>需要"+format(tmp.dimensionBoost.need_aft_4)+" 维度8"
    }
    if (player.dim_boost.eq(5)) {
        return "维度1-6倍率x" + (hasMM3upgrade(22) ? "4" : "2") + "<br><br>需要"+format(tmp.dimensionBoost.need_aft_4)+" 维度8"
    }
    if (player.dim_boost.eq(6)) {
        return "维度1-7倍率x" + (hasMM3upgrade(22) ? "4" : "2") + "<br><br>需要"+format(tmp.dimensionBoost.need_aft_4)+" 维度8"
    }
    if (player.dim_boost.gt(6)) {
        let n8d = tmp.dimensionBoost.need_aft_4;
        return `所有维度倍率x${(hasMM3upgrade(22)?"4":"2")}<br><br>需要${formatWhole(n8d)}${tmp.dimensionBoost.softcapped? `(+${format(tmp.dimensionBoost.softcap)})`: ""}维度8`
    }
}

function errorText(length,q) {
    let errorTexts = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢȣȤȥȦȧȨȩȪȫȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯʰʱʲʳʴʵʶʷʸʹʺʻʼʽʾʿˀˁ˂˃˄˅ˆˇˈˉˊˋˌˍˎˏːˑ˒˓˔˕˖˗˘˙˚˛˜˝˞˟ˠˡˢˣˤ˥˦˧˨˩˪˫ˬ˭ˮ˯˰˱˲˳˴˵˶˷˸˹˺˻˼˽˾˿̴̵̶̷̸̡̢̧̨̛̖̗̘̙̜̝̞̟̠̣̤̥̦̩̪̫̬̭̮̯̰̱̲̳̹̺̻̼͇͈͉͍͎̀́̂̃̄̅̆̇̈̉̊̋̌̍̎̏̐̑̒̓̔̽̾̿̀́͂̓̈́͆͊͋͌̕̚ͅ͏͓͔͕͖͙͚͐͑͒͗͛ͣͤͥͦͧͨͩͪͫͬͭͮͯ͘͜͟͢͝͞͠͡ͰͱͲͳʹ͵Ͷͷ͸͹ͺͻͼͽ;Ϳ΀΁΂΃΄΅Ά·ΈΉΊ΋Ό΍ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ΢ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϏϐϑϒϓϔϕϖϗϘϙϚϛϜϝϞϟϠϡϢϣϤϥϦϧϨϩϪϫϬϭϮϯϰϱϲϳϴϵ϶ϷϸϹϺϻϼϽϾϿЀЁЂЃЄЅІЇЈЉЊЋЌЍЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюяѐёђѓєѕіїјљњћќѝўџѠѡѢѣѤѥѦѧѨѩѪѫѬѭѮѯѰѱѲѳѴѵѶѷѸѹѺѻѼѽѾѿҀҁ҂҃҄҅҆҇҈҉ҊҋҌҍҎҏҐґҒғҔҕҖҗҘҙҚқҜҝҞҟҠҡҢңҤҥҦҧҨҩҪҫҬҭҮүҰұҲҳҴҵҶҷҸҹҺһҼҽҾҿӀӁӂӃӄӅӆӇӈӉӊӋӌӍӎӏӐӑӒӓӔӕӖӗӘәӚӛӜӝӞӟӠӡӢӣӤӥӦӧӨөӪӫӬӭӮӯӰӱӲӳӴӵӶӷӸӹӺӻӼӽӾӿԀԁԂԃԄԅԆԇԈԉԊԋԌԍԎԏԐԑԒԓԔԕԖԗԘԙԚԛԜԝԞԟԠԡԢԣԤԥԦԧԨԩԪԫԬԭԮԯ԰ԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆՇՈՉՊՋՌՍՎՏՐՑՒՓՔՕՖՙ՚՛՜՝՞՟աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆև։֊";
    if (q===1){
        errorTexts="!\"#$%&'()*+,-./0123456789:;<=>?[\\]^_`abcdefghijklmnopqrstuvwxyz{|}àáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿāăąćĉċčďđēĕėęěĝğġńņňŧũūŭůű"
    }
    let errorTextLength = errorTexts.length;
    let indexes = [];
    let result = "";
    for (let i = 0; i < length; i++) {
        indexes.push(Math.floor(Math.random() * errorTextLength));
    }
    for (let j = 0; j < length; j++) {
        result += (errorTexts[indexes[j]]);
    }
    return result

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

function getOpenClose(bool) {
    return bool ? "开" : "关"
}

function toggleNewsTicker() {
    player.options.showNewsTicker = !player.options.showNewsTicker
}

function toggleStickyDisplay() {
    player.options.stickyDisplay = !player.options.stickyDisplay
}

function getGalaxyText() {
    return `维度星系(${formatWhole(player.galaxy_count)})<br>` +
        `重置维度，tickspeed和维度提升<br>获得一个维度星系<br>将Tickspeed效果+0.05<br>需要<span>${formatWhole(tmp.galaxy.cost)}</span>维度8`
        + (!hasMM3upgrade(30) ? "和<span class='corrupted'>???</span>" : "")

}

var notify = document.getElementById('notify');

// 显示通知框
function showNotify(str) {
    notify.classList.remove('hide');
    notify.innerHTML = str
}

// 隐藏通知框
function hideNotify() {
    notify.classList.add('hide');
}

function addNotify(str) {
    showNotify(str)
    setTimeout(function () {
        hideNotify()
    }, 2000)
}




function display_volumes(a){

    if (a.lt("1e4")){
        return `${formatWhole(a)} mm<sup>4</sup>`
    }else if (a.lt("1e8")){
        return `${formatWhole(a.div("1e4"))} cm<sup>4</sup>`
    }else if (a.lt("1e12")){
        return `${formatWhole(a.div("1e8"))} dm<sup>4</sup>`
    }else if (a.lt("1e16")){
        return `${formatWhole(a.div("1e12"))} m<sup>4</sup>`
    }else if (a.lt("1e20")){
        return `${formatWhole(a.div("1e16"))} Dem<sup>4</sup>`
    }else if (a.lt("1e24")){
        return `${formatWhole(a.div("1e20"))} hm<sup>4</sup>`
    }else if (a.lt("1e36")){
        return `${format(a.div("1e24"),5,false)} km<sup>4</sup>`
    }else if (a.lt("1e48")){
        return `${format(a.div("1e36"),5,false)} Mm<sup>4</sup>`
    }else if (a.lt("1e60")){
        return `${format(a.div("1e48"),5,false)} Gm<sup>4</sup>`
    }else if (a.lt("1e63")){
        return `${format(a.div("1e60"),5,false)} Tm<sup>4</sup>`
    }else if (a.lt("ee8")){
        return `${formatWhole(a.div("7.98930938444449e63"),5,false)} ly<sup>4</sup>`
    }else if (a.lt("ee15")){
        return `${formatWhole(a.logarithm(10).div("1e9"))} mlt<sup>4</sup>`
    }
}

function getMM4UpgClassName(id) {
    let upgradeClassName = 'mm4_upg';
    if(hasMM4Upg(id)) {
        upgradeClassName += '_bought';
    }
    if(player.volumes.gte(mm4_upgrades[id - 1].cost) && !hasMM4Upg(id)) {
        upgradeClassName += '_buyable';
    }
        //if (typeof (mm4_upgrades[id-1].disableInChal5) == "boolean") upgradeClassName = "mm4_upg_disabled"
    upgradeClassName += " mm4_upg_"+id.toString()
    return upgradeClassName
}
function getMM4UpgText(){
    let b;
    if (app.hover_upg === 0) return;
    let a = "[mm<sup>4</sup> Upgrade "
    a = a.concat(app.hover_upg)
    a = a.concat("]<br>")
    a = a.concat(mm4_upgrades[app.hover_upg-1].desc)
    a = a.concat("<br>")
    a = a.concat("Cost: ")
    a = a.concat(mm4_upgrades[app.hover_upg-1].cost.format())
    a = a.concat(" mm<sup>4</sup>")
    if (player.options.percentUpg && !hasMM4Upg(app.hover_upg)){
        b = player.volumes.logarithm(10).div(mm4_upgrades[app.hover_upg-1].cost.logarithm(10)).mul(100);
        a = a.concat(" (")
        if (b.lt("100")){
            a = a.concat(b.format())
            a = a.concat("%")
        }else{
            a = a.concat("<span class='green'>Buyable</span>")
        }

        a = a.concat(")")
    }
    if (mm4_upgrades[app.hover_upg-1].effectDisplay !== void 0){
        a = a.concat("<br>")
        a = a.concat(`<span class="green">Currently: ${mm4_upgrades[app.hover_upg-1].effectDisplay}</span>`)
    }
    return a
}
function e114e514(){
    ExpantaNum.prototype.format = function (){
        if (this.gte("ee3") && this.lt("ee8")){
            let a = this.logarithm(10)
            let b = a.logarithm(10).floor()
            let c = a.div(E(10).pow(b));
            
            return `e${format(c)}e${format(b)}`;
        }else{
            return format(this)
        }
    }
    ExpantaNum.prototype.formatA = function (){
        if (this.gte("ee3") && this.lt("ee8")){
            let a = this.logarithm(10)
            let b = a.logarithm(10).floor()
            let c = a.div(E(10).pow(b));
            return `e${format(c)}e${format(b)}`;
        }else{
            return format(this)
        }
    }
}
function getGameSpeedText(){
    let temp = developer.timeboost * player.options.gamespeed * (player.inMM3Challenge===8 ? 0.001 : 1);
    if (temp===1){
        return "Game speed is unaltered: 1 second -> 1 second"
    }else{
        return `Game speed is altered: 1 second -> ${formatTime.fromSeconds(temp)}`
    }

}

function togglePercentUpg(){
    player.options.percentUpg = !player.options.percentUpg
}