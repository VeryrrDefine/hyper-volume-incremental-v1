
Vue.component("achievements", {
    template: `<div>
      <table>
        <tr v-for="achRow in achievements">
          <td v-for="achievement in achRow">
          <div :class="getAchClass(String(achRow.id)+achievement.id)" v-if="!achievement.secret || hasAch(Number(String(achRow.id)+achievement.id))" align="center">
            <span style="height: 70px;" v-html="achievement.title"></span>
            <div class="tooltip" v-html="achievement.tooltip()"></div>
          </div>
          <div :class="getAchClass(String(achRow.id)+achievement.id)" v-else :style="{background:
            '#222'}" align="center">
            <span style="height: 70px;">???</span>
            <div class="tooltip">???</div>
          </div>
          </td>
        </tr>
      </table>
    </div>`,
})
const achievements = [
    [
        { title: "Hello?", goal: "Buy 1<sup>st</sup> Dimensions" },
        { title: "Producing?", goal: "Buy 2<sup>nd</sup> Dimensions" },
        { title: "Dimension Boosting?", goal: "Buy 20 4<sup>th</sup> Dimensions" },
        { title: "Antimatter Galaxy?", goal: "Buy 80 8<sup>th</sup> Dimensions" },
        { title: "Point<sup>0.5</sup>?", goal: "Unlock mm<sup>3.5</sup>" },
        { title: "Infinite mm<sup>4</sup>",  get goal(){ return "Reach "+display_volumes(E("1.79e308"))} },
        { title: "Oh, no! My 4D dimensions!", goal: "Trigge dimension collapsing" },
        { title: "授人以鱼，不如授人以鱼限(Fishinity)", get goal(){ return "Buy 190 8<sup>th</sup> Dimensions"}},
    ],
    [
        { title: "授人以鱼，不如授人以鱼恒(Fishernity)", get goal(){ return "Reach 1.797e308 mm<sup>3</sup>" }},
        { title: "3D Volumes", goal: "Get 1 mm<sup>3</sup>"},
        { title: "Challenge Era", goal: "Unlock mm<sup>3</sup> challenge"},
        { title: "Hotkeys^_^", goal: "Press M", secret:true},
        { title: "Why does we cannot produce 8<sup>th</sup> Dimensions?", goal: "Press 9", secret: true},
        { 
            title: `啊${String.fromCodePoint(129322)}～啊${String.fromCodePoint(129322)}～啊咦${String.fromCodePoint(128556)}啊咦${String.fromCodePoint(128556)}`, 
            get goal(){
                return "Reach "+display_volumes(E("ee2085"))
            }    
        }, //30388636569473
        
        { title: "这软上限也太离谱了", goal: "Unlock 6<sup>th</sup> mm<sup>3</sup> challenge"},
        { title: "这mm<sup>4.5</sup>也太离谱了", goal: "Sacrifice 1000 times"}
    ],
    [
        { title: "Medusa", goal: "See the achievements page 5 minutes.", secret: true}
    ],
    [
        { title: "无尽能源", goal: "Reach e9.007e15 mm<sup>5</sup> energies"}
    ],
    [
        { title: "Save fixer 1", goal: "Try to import a save from Wind spirit creation", secret: true}
    ],

]
function updateAch(){
    if (player.dimensions[DIMENSIONS_BOUGHT][0].gte(1)){
        getAch(11)
    }
    if (player.dimensions[DIMENSIONS_BOUGHT][1].gte(1)){
        getAch(12)
    }
    if (player.dimensions[DIMENSIONS_BOUGHT][3].gte(20)){
        getAch(13)
    }
    if (player.dimensions[DIMENSIONS_BOUGHT][7].gte(80)){
        getAch(14)
    }
    if (player.dimensions[DIMENSIONS_BOUGHT][7].gte(190)){
        getAch(18)
    }
    if (player.mm35_volumes.unl){
        getAch(15)
    }
    if (player.volumes.gte("1.797e308")){
        getAch(16)
    }
    if (player.mm3_volumes.points.gte("1.797e308")){
        getAch(21)
    }
    if (player.mm3_volumes.unl || (
        !player.mm3_volumes.unl && player.mm35_volumes.points.gte("1e100")
    )){
        getAch(17)
    }
    if (player.volumes.gte("e9e15")){
        getAch(18)
    }
    if (player.volumes.gte("10^^9.007199254740992e15")){
        getAch(21)
    }
    if (player.mm3_volumes.points.gte(1)){
        getAch(22)
    }
    if (hasMM4Upg(8)){
        getAch(23)
    }
    if (player.volumes.gte("e30388636569473")){
        getAch(26)
    }
    if (mm3_challenges[5].unlocked){
        getAch(27)
    }
    if (player.mm3_volumes.sacrifice_times.gte(1000)){
        getAch(28)
    }
    if (app.tabShow=='26'){
        secret_achievement_data.medusa += global_diff
    }else{
        secret_achievement_data.medusa = 0
    }
    if (secret_achievement_data.medusa > 5*60){
        getAch(31)
    }
}

function hasAch(id) {
    return player.achievements.includes(id)
}
function getAch(id) {
    if (hasAch(id)) return
    player.achievements.push(id)
    let a = Math.floor(id / 10),
        b = id % 10
    addNotify(`Achievement ${a}${b}：${achievements[a - 1][b - 1].title} getted`)
}
let totalachievements = 0
for (let i in achievements) {
    achievements[i].id = parseInt(i) + 1
    for (let ii in achievements[i]) {
        achievements[i][ii].id = parseInt(ii) + 1
        achievements[i][ii].tooltip = function () {
            let tooltip = `Requirement: ${this.goal}`
            if (this.reward) tooltip += `<br>Reward: ${this.reward}`
            if (this.effectDisplay) tooltip += `<br>Currently: ${this.effectDisplay}`
            return tooltip
        }
    }
    totalachievements += achievements[i].length
}
let achData = {
    ach13timer: Array(8).fill(0)
}

function getAchClass(ach) {
    let name = "achi tooltipBox"
    ach = parseInt(ach)
    if (hasAch(ach)) name += " unlocked"
    return name
}