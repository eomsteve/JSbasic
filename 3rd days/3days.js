// function hello(){
//     console.log("hello");
// }

// hello();


// function Hi(){
//     console.log("hi");
// }

// let hi2 = function(){
//     console.log("hi2");
// }

// Hi();
// console.log(hi2);
// hi2();

// let hi3 = function(){
//    console.log("hi");
// }
// let pow =()=>{
//     return h1;
// }

// function ask(question,yes,no){
//     if(question == "yes?") yes();
//     else no()
// }

// function test(){
//     for(let i=0; i<5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },0);
//     }
// }

// test();
// ()=>{};

// let gugu = () =>{
//     for(let i = 1; i <=9;i++){
//         for(let j =1; j<=9;j++){
//             console.log(`${i}*${j}=${i*j}`);
//         }
//     }
// }

// gugu();

//Object
let user = new Object();
let user2 = {};
user2["bird"]=true;

console.log(user);
console.log(user2);

let chk = (obj) =>{
    if(obj.age>40){
        obj.chk = true;
    }
    return obj;
}

let person = {name:"kim",age:50};

chk(person);
console.log(person);