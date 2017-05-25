// 美团2016校招：棋子翻转
//
// 题目描述
//
// 在4×4的棋盘上摆满了黑白棋子，黑白两色的位置和数目随机其中左上角坐标为(1,1),右下角坐标为(4,4),现在依次有一些翻转操作，要对
//
// 一些给定支点坐标为中心的上下左右四个棋子的颜色进行翻转，请计算出翻转后的棋盘颜色。
//
// 给定两个数组A和f,分别为初始棋盘和翻转位置。其中翻转位置共有3个。请返回翻转后的棋盘。
//
// 测试样例：
//
// [[0,0,1,1],[1,0,1,0],[0,1,1,0],[0,0,1,0]],[[2,2],[3,3],[4,4]]
// 返回：
//
// [[0,1,1,1],[0,0,1,0],[0,1,1,0],[0,0,1,0]]

const flagFlip = (x, y) => {
    let coordinateSet = new Set();
    y.map((arr) => {
        let [top, right, bottom, left] = [[], [], [], []];
        top = arr[1] > 1 ? [arr[0], arr[1] - 1] : [];
        right = arr[0] <= 3 ? [arr[0] + 1, arr[1]] : [];
        bottom = arr[1] <= 3 ? [arr[0], arr[1] + 1] : [];
        left = arr[0] > 1 ? [arr[0] - 1, arr[1]] : [];
        if (top.length !== 0) {
            x[top[0] - 1][top[1] - 1] = !x[top[0] - 1][top[1] - 1] ? 1 : 0;
        }
        if (right.length !== 0) {
            x[right[0] - 1][right[1] - 1] = !x[right[0] - 1][right[1] - 1] ? 1 : 0;
        }
        if (bottom.length !== 0) {
            x[bottom[0] - 1][bottom[1] - 1] = !x[bottom[0] - 1][bottom[1] - 1] ? 1 : 0;
        }
        if (left.length !== 0) {
            x[left[0] - 1][left[1] - 1] = !x[left[0] - 1][left[1] - 1] ? 1 : 0;
        }
    });
    return x;
}

let input_x = [[0, 0, 1, 1], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 1, 0]];
let input_y = [[2, 2], [3, 3], [4, 4]];

console.log(flagFlip(input_x, input_y));
