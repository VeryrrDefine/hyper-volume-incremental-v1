var achieves = [
    [
        {
            id: 1, label: "从哪里开始？", get unlock() {
                return getAchieve(1,player.dimensions[DIMENSIONS_POINTS][0].gt(0));
            }
        },
        {
            id: 2, label: "第四维度？", get unlock() {
                return getAchieve(2,player.dimensions[DIMENSIONS_POINTS][3].gt(0));
            }
        },
        {
            id: 3, label: "第六维度？", get unlock() {
                return getAchieve(3,player.dimensions[DIMENSIONS_POINTS][5].gt(0));
            }
        },
        {
            id: 4, label: "第八维度？", get unlock() {
                return getAchieve(4,player.dimensions[DIMENSIONS_POINTS][7].gt(0));
            }
        },
        {
            id: 5, label: "维度提升？？", get unlock() {
                return getAchieve(5,player.dim_boost.gt(3));
            }
        },
    ],
    [
        {
            id: 11, label: "我是谁？我在那？", get unlock() {
                return true;
            }
        },
    ],
]