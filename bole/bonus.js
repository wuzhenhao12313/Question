// 搜狐2016招聘笔试题：发奖金

// 题目描述
//
// 狐进行了一次黑客马拉松大赛，全公司一共分为了N个组，每组一个房间排成一排开始比赛，比赛结束后没有公布成绩，
// 但是每个组能够看到自己相邻的两个组里比自己成绩低的组的成绩，比赛结束之后要发奖金，以1w为单位，
// 每个组都至少会发1w的奖金，另外，如果一个组发现自己的奖金没有高于比自己成绩低的组发的奖金，就会不满意，作为比赛的组织方，
// 根据成绩计算出至少需要发多少奖金才能让所有的组满意。

// 输入描述:
//
//     每组数据先输入N，然后N行输入N个正整数，每个数表示每个组的比赛成绩。
// 输出描述:
//
//     输出至少需要多少w的奖金
// 输入例子:
//
//     10
// 20
// 32
// 12
// 32
// 45
// 11
// 21
// 31
// 41
// 33
// 输出例子:

//    20

const bonus = ((n, arr) => {
    let [totalBonus, prevBonus] = [0, 0];
    arr.map((item, index) => {
            let [groupBonus, nextBonus] = [1, 0];
            if (index > 0) {
                groupBonus = item > arr[index - 1] ? groupBonus + prevBonus : groupBonus;
            }
            if (index < n - 1) {
                let temp = item;
                for (let i = index + 1; i < n - 1; i++) {
                    if (arr[i] < temp) {
                        nextBonus += 1;
                        temp = arr[i];
                    } else {
                        break;
                    }
                }
            }
            groupBonus=nextBonus>groupBonus?nextBonus+1:groupBonus;
            prevBonus = groupBonus;
            totalBonus += groupBonus;
        }
    );
    return totalBonus;
});

console.log("total: "+ bonus(10, [20, 32, 12, 32, 45, 11, 21, 31, 41, 33]));
console.log("total: "+ bonus(3, [10,20,10]));
console.log("total: "+ bonus(5, [10,10,10,10,10]));