//1 变量
var num = 10
var myAge = 18

//2 数据类型
/*
number 数值类型
string 文本类型
boolean true/false类型
null 空，用于清空变量内容
undefined 容器的默认值
*/
var myUn
console.log(myAge)
//window.alert(myUn)

//3 运算符
var sum = 1+2
var resultStr = '你好'+'JS'
console.log(sum)
console.log(resultStr)

console.log(2 === '2')

//4 语句的操作
if (true){
    console.log('执行')
}

if(false){

}
else{console.log('else执行')}

if(false){

}
else if(true){

}
else{}



// for(var i=0;i<10;i++){
//     console.log(i+1)
// }

//5 函数
function getSum(start,end){
    var sum = 0
    for(var i = start; i<=end; i++){
        sum += i
    } 
    return sum   
}
var s = getSum(100,200)
console.log(s)

// 数组Array
var myArr = [1,1,2,3]


myArr.push(100) // 末尾添加
myArr.unshift(99) // 开头添加
//console.log(myArr.length,myArr[0])

myArr.forEach(function(item,index){ // 函数表达式 function(a,b){return a+b}
    console.log(item,index)
})


// 对象
var obj = {
    name:'hxh',
    age:23
}

console.log(obj.name)

for(var k in obj){
    console.log(k,obj[k])
}