

function buyMM5TowUpg(id) {
    let uid = Number(id)
    if (getUpgTow(uid).affordable && getUpgTow(uid).buyable && !hasMM5TowUpg(uid)) {
        shortcut.secu.towerUpgrades.push(id)
    }
}
function respecMM5TowUpg() {
    shortcut.secu.towerUpgrades = []
    doMM5reset()
}
function hasMM5TowUpg(id) {
    return shortcut.secu.towerUpgrades.includes(Number(id))
}/*
function getMM5TowUpgAffordable(uid){
    let check = /(!\d{2})|(\d{2})/g
    let row = Math.floor((uid / 10) - 1);
    let lie = uid % 10 - 1//列
    let upg = mm5_upg_tow[row][lie]
    console.log(upg.req)
    
}*/
const mm5_upg_tow = [
    [
        {
            id: 11,
            description: "这是一个升级塔，这个升级塔要从上往下升级，购买升级都需要一定的条件。",
            reqDesc: "",
            costDesc: "Cost: Nothing",
            get affordable() {
                return true
            },
            get buyable() {
                return true
            },
            refund() {

            }

        },
    ],
    [
        {
            id: 21,
            description: "mm<sup>4</sup> 体积获取×1.000e10000",
            reqDesc: "11",
            costDesc: "Require: 8192 secutitation points",
            get affordable() {
                return hasMM5TowUpg(11)
            },
            get buyable() {
                return shortcut.secu.points.gte(8192)
            }

        }

    ],
    [

        {
            id: 31,
            description: "8<sup>th</sup> 4D Dimension multiplier ×1e1000000",
            reqDesc: "21",
            costDesc: "Require: 10 mm<sup>5</sup> galaxies",
            get affordable() {
                return hasMM5TowUpg(21)
            },
            get buyable() {
                return shortcut.secu.mm5_volumes.galaxies.gte(10)
            }

        }
    ],
    [
        {
            id: 41,
            description: "mm<sup>5</sup> gain ×30",
            reqDesc: "31",
            costDesc: "Require: 25600 mm<sup>5</sup>",
            get affordable() {
                return hasMM5TowUpg(31) || hasMM5TowUpg(32)
            },
            get buyable() {
                return shortcut.secu.mm5_volumes.points.gte(25600)
            }
        },
    ],
    [
        {
            id: 51,
            description: "mm<sup>3</sup> gain ×1e10000",
            reqDesc: "41",
            costDesc: "Require: 131072 mm<sup>5</sup>",
            get affordable() {
                return hasMM5TowUpg(41)
            },
            get buyable() {
                return shortcut.secu.mm5_volumes.points.gte(131072)
            }
        }

    ],
    [
        {
            id: 61,
            additionHint: " 5C1",
            description: "Unlock 1<sup>st</sup> <abbr title=\"mm^5 challenge\">5C</abbr>",
            reqDesc: "51",
            get costDesc(){
                switch (getMM5ChalCompletionTimes(1)){
                    case 0:
                        return "Require: 32000 SP and 262144 mm<sup>5</sup>"
                        
                    default: 
                        return "Require: K9.007e15 SP and K9.007e15 mm<sup>5</sup>"
                    /*case 1:
                        return "Require: 64000 SP and 524288 mm<sup>5</sup>"
                    case 2:
                        return "Require: 128000 SP and 1048576 mm<sup>5</sup>"
                    case 3:
                        return "Require: 256000 SP and 2097152 mm<sup>5</sup>"
                    case 4:
                        return "Require: 512000 SP and 4194304 mm<sup>5</sup>"*/
                }
            },
            get affordable() {
                return hasMM5TowUpg(51)
            },
            get buyable() {
                switch( getMM5ChalCompletionTimes(1)){
                    case 0:
                        return shortcut.secu.points.gte(32000) && shortcut.secu.mm5_volumes.points.gte(262144)
                   /* case 1:
                        return shortcut.secu.points.gte(64000) && shortcut.secu.mm5_volumes.points.gte(524288)
                    case 2:
                        return shortcut.secu.points.gte(128000) && shortcut.secu.mm5_volumes.points.gte(1048576)
                    case 3:
                        return shortcut.secu.points.gte(256000) && shortcut.secu.mm5_volumes.points.gte(2097152)
                    case 4:
                        return shortcut.secu.points.gte(512000) && shortcut.secu.mm5_volumes.points.gte(4194304)
                    */default: 
                        return false
                }
            
            }
        }
    ],
    [
        {
            id: 71,
            additionHint: "",
            get description(){ 
                return "你通过了5维挑战1一次！接下来是2个分叉"
            },
            reqDesc: "5C1",
            costDesc: "Require: Nothing",
            get affordable() {
                return getMM5ChalCompletionTimes(1)
            },
            get buyable(){
                return true
            }
        }
    ],
    [
        {
            id: 81,
            additionHint: " 4D Dim",
            costDesc: "Weaker 1<sup>st</sup> mm<sup>4</sup> Upgrade formula, but remove softcap",
            reqDesc: "71&!82",
            get description() {
                return ""
            },
            get affordable() {
                return hasMM5TowUpg(71) && !hasMM5TowUpg(82)
            },
            get buyable() {
                return true
            }
        },
        {
            id: 82,
            additionHint: " 5D Dim",
            costDesc: "All 5D Dims multiplier ^1.3",
            reqDesc: "71&!81",
            get description() {
                return ""
            },
            get affordable() {
                return hasMM5TowUpg(71) && !hasMM5TowUpg(81)
            },
            get buyable() {
                return true
            }
        },
    ]
]
/*
Vue.component("upgradetower", {
    get template() {
        return `
`
    },
    props: ["hint", "uid"]
})*/
function getUpgTowClass(uid) {
    if (hasMM5TowUpg(uid)) {
        return "upgBoxBought"
    } else {
        if (getUpgTow(uid).affordable && getUpgTow(uid).buyable) {
            return "upgBoxBuyable"
        } else {
            return "upgBox"
        }
    }

}
function getUpgTow(uid) {
    let row = Math.floor((uid / 10) - 1);
    let lie = uid % 10 - 1//列
    return mm5_upg_tow[row][lie]

}
Vue.component("upgradetowers", {
    get template() {
        return (
            `
<div>
    <div v-for="row in mm5_upg_tow" style="display: flex">
        <div v-for="tow in row"  :class="getUpgTowClass(tow.id)" mm5>
            <div style="position: relative; top: -1.5rem; text-align: left; font-size: 16px;" v-html="getHintText(tow.id)"></div>
            <div  class="center" @click="buyMM5TowUpg(tow.id)" style="position: relative; top: -1.5rem; font-size: 10px; height: 100%; vertical-align: middle;">
                <br>
                <span v-html="getTowDescription(tow.id)"></span>
            </div>
        </div>
    </div>
</div>`
        );
    },
    data() {
        return {
            mm5_upg_tow
        }
    },
    methods: {
        getHintText(uid) {
            if (getUpgTow(uid).additionHint){
                return uid.toString()+getUpgTow(uid).additionHint
            }else{
                return uid.toString()
            }
        },
        getTowDescription(uid) {
            return getUpgTow(uid).description + "<br>" + getUpgTow(uid).reqDesc + "<br>" + getUpgTow(uid).costDesc
        }
    }
})