// 华为2016校招：字符集合
// 04/25• chency •2 评论 • 华为 , 字符 , 笔试
//
// 题目描述
//
// 输入一个字符串，求出该字符串包含的字符集合
//
// 输入描述:
//
//     每组数据输入一个字符串，字符串最大长度为100，且只包含字母，不可能为空串，区分大小写。
// 输出描述:
//
//     每组数据一行，按字符串原有的字符顺序，输出字符集合，即重复出现并靠后的字母不输出。
// 输入例子:
//
//     abcqweracb
// 输出例子:
//
//     abcqwer


const charSet=(str)=>{
    let set=new Set();
    for(let char of str){
       set.add(char);
    }
    return [...set].join("");
}

let input="abcqweracb";

console.log(charSet(input));
