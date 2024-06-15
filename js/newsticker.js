"use strict";

var textslength
var texts = {
    '0': {
        text: '为什么没有第九维度?',
    },
    '1': {
        text: '距离下一次更新只有114514小时了！',
    },
    '2': {
        get text() {
            return `你有${(1 / textslength * 100).toFixed(2)}%的概率看到这条新闻`
        }
    },
    '3': {
        get text() {
            return `本游戏共有${textslength}条滚动新闻`
        }
    },
    '4': {
        text: '什么?你问我维度提升在哪里?<del>在历史的垃圾堆里</del>就在下面啊'
    },
    '5': {
        text: '你制造了一mm<sup>4</sup>4维体积！！你知道这意味着什么吗?'
    },
    '6': {
        text: "| '0'''''1'''''2'''''3'''''4'''''4'''''4'''''4'''''4'''''4'''''4 | 是的，这是一把尺子，但<span style='color:red'>(受硬上限限制)</span>"
    },
    '7': {
        text: "到底要不要购买最大，这是一个问题"
    },
    '8': {
        text: `玩序数增量玩的 ————eferygrt`
    },
    '9': {
        text: `不会还有人认为${2n ** 128n}是无限吧`
    },
    '10': {
        text: `新闻播放顺序完全随机，你可能会一次看到两个一样的新闻`
    },
    '11': {
        text: `这条新闻是由第一新闻维度生产的`
    },
    '12': {
        text: `如何评价 ————eferygrt`
    },
    '13': {
        text: `这个游戏没有任何错误，它们是另类的成功`
    },
    '14': {
        text: `<a href="https://b23.tv/BV1GJ411x7h7" target="_blank">点我立即到达Endgame</a>`
    },
    '15': {
        text: `大型纪录片《质量增量重制版 0.8天价虫洞卖出了1024 archverses》给他一个时间速度加成，他敢把价格卖到<del>114514 lodeverses</del>114514 archs-metaverse. 近日有网友表示，在某增量游戏新闻播放器上看到一则重要到有时间旅行者提醒的新闻，由于虫洞质量不断扩大，粒子物理学研究员Pollux和粒子超理学研究员天才俱乐部#83黑塔通过虫洞在反物质宇宙相遇，物理学家建议创造更大的虫洞。某一数学家兼物理学家利用伽罗瓦理论庞加莱猜想的庞加莱回归定理和伽马函数算出了天价虫洞已经来到了1024 archverses，不过我们还是不知道他们两个是怎么掉进这么大的虫洞的，可能是被自动幽灵一脚踢进虫洞。据研究员Pollux报告，他先前由于某个由于机密不能披露的异常影响导致视觉能力严重下降，来到反物质宇宙后因为反物质的时间效应迅速恢复，他表示以后天体物理学研究要加紧研究虫洞。为此五星上将麦克阿瑟表示，要是我有这么大的虫洞，我当年的军衔一定不止五星，至少也得有50星，就连SCP-CN-1630都表示，这43年来，我天天被人注射记忆删除药剂，没得睡过一次好觉，要是我有这么大的虫洞一定得进去放个C类通道，然后在里面睡一觉，不仅可以体验相对论时间膨胀，还可以带薪休假。大型纪录片之《质量增量重制版 0.8天价虫洞卖出了1024 archverses》持续为您播放`
    },
    '16': {
        text: `0+0是宇宙万法的那个源头`
    },
    '17': {
        text: `削一下维度提升，谢谢`
    },
    '18': {
        text: `点击此新闻后什么也不会发生`
    },
    '19': {
        get text() {
            return `难不成我是傻逼？`
        }
    },
    '20': {
        text: '你看到这条新闻的概率是其它新闻的概率的1%',
        get unlocked() {
            return (Math.random() < 0.01)
        }
    },
    '21': {
        text: 'Uncaught ReferenceError: Cheater is not defined'
    },
    '22': {
        text: '听说有人把我给？？？了'
    },
    '23': {
        text: '更新进度：0/K9e15小时'
    },
    '24': {
        text: '错误404：未找到新闻'
    },
    '25': {
        text: '当你看这条新闻时，你就看过这条新闻了'
    },
    '26': {
        text: '这是一条无意义的新闻'
    },
    '27': {
        get text() {
            return `你说得对，但是我也不知道谁说的对`
        }
    },
    '28': {
        get text() {
            window.clicks = 0
            return `<button onclick='addClicks()' class=\'transparent-button\'>测手速时间到！你能点击此新闻多少次?当前：<span id="sp_new_clicks">${clicks}</span>次</button>`
        }
    },
    '29': {
        text: '请添加这一条新闻'
    },
    '30': {
        text: '什么bug? 这不是特性吗'
    },
    '31': {
        text: '本游戏中的数字全部采用科学计数法，如果有任何问题请拨打电话1.341e10'
    },
    '32': {
        text: '增量的反义词是减魖'
    },
    '33': {
        text: '1+1=3，这显然是错的'
    },
    '34': {
        text: "<span style='background: yellow;color: black'>要警惕新黄色新闻</span>"
    },
    '35': {
        text: "16-9，6-9不够，借一当十，16-9"
    },
    '36': {
        text: "最新的break_reality.js已在f<sub>Ω<sub>0</sub></sub>(114514)年发行，可以表示大小为BB(1.798e308)那么大的数字"
    },
    '37': {
        text: "这不是一条非滚动新闻"
    },
    '38': {
        text: "谁问你了?"
    },
    '39': {
        text: "这是本游戏的第40条新闻"
    },
    '40': {
        text: "这一切有什么意义？没有什么意义？没有没什么意义？"
    },
    '41': {
        text: "汉化版打开游戏就能找到句号。"
    },
    '42': {
        text: "你可能注意到，本游戏的表示法在H之后直接跳到了J，这是因为I被我<span class='corrupted'>???</span>了"
    },
    '43': {
        text: '游戏有bug怎么办?只有我们把代码删完，就没有bug了'
    },
    '44': {
        text: '可以搞个bug增量'
    },
    '45': {
        text: 'ExpantaNum最大支持10{{1}}9e15那么大的数，本游戏使用了ExpantaNum，那么本游戏的数值上限为10{{1}}1e15也很正常吧'
    },
    "46": {
        text: "我不睡了，我滿腦子都是嗯嗯👿滴嘚滴嘚😈"
    },
    '47': {
        text: "Tendou Arisu是谁？ 我怎么不知道"
    },
    '48': {
        text: "与众不同",
    },
    '49': {
        text: "来看看这是什么物业 78物业"
    },
    '50': {
        text: "我是geizong霸王，nein可以叫我kei王!"
    },
    '51': {
        text: "我与其他新闻与~~~~~~~众~~~~~~~不~~~~~~~同~~~~~~~",
    },
    '52': {
        text: "为什么第9维度不存在？因为 seven eight nine",
    },
    '53': {
        text: "Est-ce que je peux parler à...?", //
    },
    '54': {
        text: "如果我是bug的话那我写出的多维体积增量是什么，bug中之bug吗",
    },
    '55': {
        text: "Chipi chipi chapa chapa Dubi dubi daba daba Magico mi Dubi dubi 到底怎么读才是正确读法",
    },
    '56': {
        text: "那好吧，既然主人不爽，喵喵就勉为其难地踢他一脚好了（；′⌒`） @白露猫[AI] 再交给你一个任务：把清蒸羊头踢出群 好的主人，喵喵这就去把清蒸羊头踢出群！(*｀･∀･´*)ﾉ"
    },
    '57': {
        text: "曾经有一位流浪者在后室误入<a href=\"https://backrooms.fandom.com/zh/wiki/User:VeryRRDefine/Level_ZH_736\">Level ZH 736</a>，3月27日晚上9点左右Level ZH 736突然毁灭，原因不明，流浪者推测已死亡"
    },
    "58": {
        text: "45612456 12561256 16565424 12165421 | ↑ ↓↓ ↑ ↓↓ ↑↑ ↓↓ ↑↑ ↓↓ ↑ ↓↑ ↓ ↑ ↑ ↓↑ ↑↑"
    },
    "59": {
        text: "i tsu mo na↑ n↓ do demo yumeo i ka kou"
    },
    "60": {
        text: "/es ke kə ʒə pø paʁle a/"
    },
    "61": {
        get text() {
            let urls = [
                "https://www.bilibili.com/video/BV1jb4y1F7mg",
                "https://www.bilibili.com/video/BV1LN41167kb",
                "https://www.bilibili.com/video/BV1ss411z7ju",
                "https://www.bilibili.com/video/BV1KC41157zt",
                "https://www.bilibili.com/video/BV1UN4y1k7W7"
            ];
            let url = "";
            let urls_c = Math.floor(Math.random() * Object.keys(urls).length)
            url = urls[urls_c]
            return `推荐视频: <a href=${url}>点开</a>`
        }
    },
    "62": {
        text: "在2222年，风灵作成有高达1000个成就，6308个维度，75个阶层，并以5小时后更新的速度恒定更新"
    },
    "63": {
        text: "你说的对，但是《风灵作成》是由 6左爷6自主研发的一款全新开放世界增量游戏。游戏发生在一个被称作「风灵仙境」的幻想世界，在这里，被 6左爷6 选中的人将被授予「风元素」，导引扩散之力。你将扮演一位名为「砂糖」的神秘角色，在漫长的硬挂中邂逅条件各异、加成独特的升级们，和他们一起击败挑战，找回失散的朋友——同时，逐步发掘「生物炼金」的真相。"
    },
    "64": {
        text: "授人以鱼，不如授人以渔，不如授人以氵渔，不如授人以氵氵渔，不如授人以氵氵氵渔，不如授人以氵氵氵氵渔，不如授人以氵氵氵氵氵渔，…………"
    },
    "65": {
        text: "有些人成分复杂，比如我，总是要......一会再"
    },
    "66": {
        get text() {
            let gns = [
                "序数增量",
                "反物质维度",
                "点数增量",
                "点数增量重制版",
                "质量增量",
                "风灵作成",
                "bug增量",
            ];
            let gn = "";
            let gns_c = Math.floor(Math.random() * Object.keys(gns).length)
            gn = gns[gns_c]
            return `一种基于${gn}的彩六直播方法`
        }
    },
    "67": {
        text: 'g<sub>0</sub>(2) g<sub>1</sub>(2) g<sub>ω</sub>(2) g<sub>ω+1</sub>(2) g<sub>ε<sub>0</sub></sub>(2) g<sub>ε<sub>0</sub>+1</sub>(2) g<sub>ε<sub>0</sub>+ω</sub>(2) g<sub>ε<sub>0</sub>+ω+1</sub>(2) g<sub>ε<sub>0</sub>ω</sub>(2)'//ε
    },
    "68": {
        get text() {
            let noun_1 = Math.floor(Math.random() * Object.keys(noun).length)
            let noun_2 = Math.floor(Math.random() * Object.keys(noun).length)
            let verb_1 = Math.floor(Math.random() * Object.keys(verb).length)
            let adj_1 = Math.floor(Math.random() * Object.keys(adj).length)
            return `${adj[adj_1]}${noun[noun_1]}${verb[verb_1]}${noun[noun_2]}`
        }
    },
    "69": {
        text: "不管前方的路有多苦，只要走的方向正确。不管多么崎岖不平，都比站在原地更接近幸福。"
    },
    "70": {
        text: /*"人永远不知道，谁哪次不经意的跟你说了再见之后，就真的不会再见了。 要知道的是，再见可以分为再次 和 见到， 这两个词合起来就是以后再次见到你。 这个词语通常用于两个人离去的时候。 "
    */"我真是个初"
    },
    "71": {
        text: "读取 2085.txt 中...  从第98个字符开始读取...  C2 生存难度：  Class II  》不安全  》未勘探完全  》实体较少  Level ZH 736是后室ZH集群中已知的第737层。  注意：页面还没完成捏  描述 Level ZH 736是一个在2024/3/27发现的一个楼层，主体呈现为一个由灰色混凝土地板和许多个小房子构成的一个区域。 这些小房子有一些是破旧的，有一些是新建造的。 Level ZH 736在离中心越远的地方风级也会随之增大，据探测每50米风速增加1米每秒。 这个层级似乎在2024/3/27 21:23左右突然开始湮灭，原因未知，在2024/3/27 22:05左右重新生成。 建议不要进入里面黑暗的房子，里面可能有突然出现的实体。 房子0 房子0是流浪者在进入此楼层时通常会进入到的第一个房子。 房子0内部长5米，高3米，宽5米。 实体 本层级会出现实体，数量并不多。 一般会出现猎犬和窃皮者，有一些黑暗的房子里会出现笑魇。  发现 这个日志记录了2024/3/27 Level ZH 736中发生的事。  [探索日志 展开] [探索日志 收起] 目前还不知道为何Level ZH 736在2024/3/27会突然湮灭。   2024/3/27 21:00:00 A: B, 你准备好了深入探索这个楼层了吗？  B: 准备好了。   2024/3/27 21:01:50 B: 有小房子。其中一个里面黑的还有笑魇。  A: 再找找，还有没有更多房子。  B: 目前已经找到了不下10个了。   2024/3/27 21:10:50 B: 目前已经离中心大约860米了。这个楼层走的越远风速就越大，我身体好像快撑不住了。  B: 风速17.2米每秒！   2024/3/27 21:23:30 B: （一大堆爆炸声）  A: 发生什么事了？ B！ 你那边情况怎么样？  B: 这个楼层好像在湮灭中！  此后一大堆爆炸声在Level ZH 736内持续了约13分钟。   2024/3/27 21:36:00 B: 湮灭好像停止了。 大部分房子都被摧毁了。好险，我差点就没了。  A: 你没有事吧？  B: 没事，只不过是害怕过度了而已。  A: 现在楼层怎么样了？  B: 整个楼层就只有中心的一间小房子和周围约300平方米的空间了，外面全是虚空。   2024/4/27 09:07:47 B: 整个楼层似乎完全恢复了，特性和以前几乎一致。  B: 新的房子已经出现了。不过还有一些被切成两半的房子。    据点和前哨站 EF958A 前哨站 此前哨站于2024/03/31成立。 E5958A前哨站全称E5958AF09FA4AAEFBD9EE5958AF09FA4AAEFBD9EE5958AE592A6F09F98AC E5958AE592A6F09F98AC，是一个由5名流浪者组成的一个前哨站。 此前哨站对流浪者友好，经常会提供物资。  入口和出口 入口 可以在枢纽卡到一个上面写着E5958AF09FA4AAEFBD9EE5958AF09FA4AAEFBD9E的墙壁来进入此层级。 本层级的其他入口可能于楼层湮灭时消失了。 出口 在房子0内进入一个活板门可以进入Level 1。 进入一个上方有无限向上延长的线的屋子（房子3）可以进入Level ZH 736.1。 未知的，如果在本层级跨越了10km(风速200m/s)可以进入前室。"
    },
    "72": {
        text: "不是哥们"
    },
    "73": {
        text: "宇宙学部在此提醒：实验千万条，安全第一条，操作不规范，亲人两行"
    },
    "74": {
        text: "如果一个大数js库可以表示到f<sub>ε<sub>0</sub></sub>(10)的话，那么说明这个大数js库可以表示到g<sub>ψ<sub>0</sub>(Ω<sub>2</sub>)</sub>(10)"
    },
    /*
    "74": {
        text: "不要再玩日本游戏中二节奏了！每一台中二节奏里都有日本核废水！孩子玩了就会\u554a\u1f92a\uff5e\u554a\u1f92a\uff5e\u554a\u54a6\u1f62c\u554a\u54a6\u1f62c\u554a\u2192\u554a\u2191\u554a\u2193\u1f628\u554a\u1f630\uff5e\u55ef\u1f4a5\u54ce\u54ce\u1f917\u54ce\u54e6\u54ce\u55ef\u1f60b\uff5e\u54e6\u54ce\u1f973\u7231\u7231\u7231\u7231\u7231\u1f60d\u554a\u1f92a\uff5e\u554a\u1f92a\uff5e\u554a\u54a6\u1f62c\u554a\u54a6\u1f62c\u554a\u2192\u554a\u2191\u554a\u2193\u1f628\u554a\u1f630\uff5e\u55ef\u1f4a5\u55ef\u55ef\u1f47f\u6ef4\u561a\u6ef4\u561a\u1f608\u5514\u1f631\u561f\u2b05\ufe0f\u561f\u2196\ufe0f\u561f\u2b06\ufe0f\u561f\u2197\ufe0f\u561f\u27a1\ufe0f\u561f\u2198\ufe0f\u561f\u2b07\ufe0f"
    }*/
    /*"72":{

        
    }*/
    "75": {
        text: "我一个鸡砸，wtf"
    }
}
var adj = ["狂笑的", "开心的", "伤心的", "生气的", "悲伤的", ""]
var noun = ["我", "你", "鸟", "别人", "床", "蛇", "散文"]
var verb = ["吃", "吃了", "跳", "睡", "开发", "是", "将写"]
textslength = Object.keys(texts).length

function updatenews() {
    if (window.news_text === undefined){
        window.news_text = document.getElementById('newsText');

    }
    do {
        var rand = Math.floor(Math.random() * textslength)
    } while (checkRand(rand))
    //rand = 1
    let msg = texts[rand].text;
    if (first) {
        first = false;
        msg = now_news_version;
    }
    news_text.innerHTML = msg;
    let textWidth = news_text.clientWidth;
    let parentWidth = news_text.parentElement.clientWidth;
    news_text.style.transition = '';
    news_text.style.transform = 'translateX(' + (parentWidth + 10) + 'px)';
    let dist = parentWidth + news_text.clientWidth
    let rate = 100;
    let transformDuration = dist / rate;
    news_text.style.transition = 'transform ' + transformDuration + 's linear';
    news_text.style.transform = 'translateX(-' + (textWidth) + 'px)';
    setTimeout(updatenews, Math.ceil(transformDuration) * 1000);
}

function addClicks() {
    window.clicks++
    sp_new_clicks.innerHTML = clicks
}

window.now_news_version = "当前新闻版本: 1,一共有" + textslength.toString() + "条新闻"
window.first = true

function checkRand(rand) {

    if (texts[rand].unlocked === undefined) return false
    else return !texts[rand].unlocked;
}