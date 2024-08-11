records = [
    {
        name: "#1 Unknown 4D Volumes?",
        id: "1",
        date: "2022/8/24 08:00",
        desc: "我们貌似发现了一种新的体积，在1维（线） 2维（面） 3维（体） 以外的。<br>",
        get unlocked() {
            return true
        }
    },
    {
        name: "#2 1个维度？",
        id: "2",
        date: "2022/8/24 08:03",
        desc: "我们还发现了1个生产4维体积的生产器。也许是Dimensions？",
        get unlocked() {
            return true
        }
    },
    {
        name: "#3 8个维度？",
        id: "3",
        date: "2022/8/24 08:32",
        desc: "我们发现了8个生产器，似乎有规律，我们将其按照生产顺序组成了8个生产器。第8个生产器生产第7个生产器，第7个生产器生产第6个生产器，以此类推。",
        get unlocked() {
            return player.dimensions[DIMENSIONS_POINTS][7].gte(1);
        }
    },
    {
        name: "#4 新的加成？",
        id: "4",
        date: "2022/8/25 03:42",
        desc: "我们似乎发现了一个加成器，但需要消耗4维体积。",
        get unlocked() {
            return player.volumes.gte("1e75")
        }
    }
    
    /*,
    {
        name: "The destruction",
        id: "666",
        date: "2024/3/27 21:30",
        desc: "意外还是发生了。4维体积过多导致了一场大爆炸点為炻炼炽锟斤拷锟斤拷烫烫烫烫烫烫",
        get unlocked() {
            return false
        }
    }*/
]
window["Vue"].component("exprecord", {
    name: "exprecord",
    data () {
        return {
            records
        }
    },
    template: `
    <div>
        <h1>Experimental records</h1>
        <p>下列是一系列实验记录，从2022/8/24开始到锟斤拷烫烫ElV  In   a ֱ        ߈烫烫结束</p>
        <div v-for="record in records" :key="record.id"  v-if="record.unlocked">
            
            <h3 v-html="record.name"></h3>
            <p v-html="record.date"></p>
            <div v-html="record.desc"></div>
        </div>
        <p class="adventuring"><i>Adventuring....</i></p>
    </div>
    `
})