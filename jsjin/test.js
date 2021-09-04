// var obj1={
//     data :{
//         fun : function(){console.log(this);}
//     }

// };

// obj1.data.fun();
// console.log(obj1.data);

// function heek(){console.log(this)}
// heek();

// "use strict"
// function heek2(){console.log(this)}
// heek2();

// function machine(){
//     this.name ="Lee";
    
// }
// let obj = new machine();
// console.log(obj);

// document.getElementById('bts').addEventListener('click',function(e){
//     var arr =[1,2,3];
//     arr.forEach(function(){
//         console.log(this)
//         }
//     )
// })

// var obj ={
//     a:console.log(this),
//     fn:function(){
//         console.log(this);
//         function fn(){
//             console.log(this);
//         }
//         fn()
//     }
// }

// obj.a;
// obj.fn();
// var obj = {
//     fn : function(){
//         console.log(this);
//     }
// }

// obj.fn();
// var obj2 = {
//     fn : ()=>{
//         console.log(this);
//     }
// }

// obj2.fn();

// var person = {
//     name : 'John',
//     sayHi : function(){
//         console.log(`hi i'm ${this.name}`);
//     }
// }
// person.sayHi();

var data ={
    data : [1,2,3,4,5],
}

data.plue = function(){
    let a=0;
    this.data.forEach(function(e){
        a = a + e;
    })
    return console.log(a);
}
data.plue();