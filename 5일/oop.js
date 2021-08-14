// let user = {
//     name: 'kim'
//     //writable : 사용
//     // eumerable : 순환
//     // configurable  : 플레그 값삭제나 수정이 가능 

// };

// user.name = "lee"

// let des = Object.getOwnPropertyDescriptor(user,"name");


// Object.defineProperty(user,"name",{
//     writable : false
// })

// Object.defineProperty(user,"name",{
//     configurable : false
// })



// console.log(des);



// // 접근자 프로퍼티 getter, setter 
// let user = {
//     name : "kim",
//     subname: "eoom",
//     get fullname(){
//         return `${this.name} ${this.subname}`
//     }
//     ,set fullname2(value){
//         [this.name, this.subname] =value.split(" ");
//     }
// }

// user.fullname2 = "김볶빡"
// console.log(user.fullname);

// function user(name,birthday){
//     this.name = name;
//     this.birthday = birthday;

//     Object.defineProperty(this,"age",{
//         get(){
//             let todayYear = new Date().getFullYear();
//             return todayYear - this.birthday.getFullYear();
//         },

//     });
//     Object.defineProperty(this,"name",{
//         writable : false
//     })
// }

// let eom = new user("eom",new Date(2000,8,7));

// console.log(eom.age);

// let animal  = {
//     eats : true,
//     walk(){
//         console.log(`${this.eats} walk`);
//     }
// }

// let cat = {
//     eats : true, 
// }

// let chicken ={
//     eats : false,
//     fly:true ,
//     __proto__:animal
// }
// chicken.walk();
// chicken.eats  = false;
// console.log(chicken);


// class Animal{
//     constructor(){
//         this.eats = true;
//     }
//     walk(){
//         console.log(`${this.eats} walk`);
//     }    
// }

// let ani = new Animal();
// console.log(ani.walk());


// function User2(name){
//     this.name = name;
//     this.walk = ()=> {
//         console.log("qq");
//     };
// }
// let user3 = new User2("eom");
// user3.walk();

// class Attend{
//     constructor(name,profile) { // 생성자 인자와 get, set 변수를 같게 해줘야 적용이된다.
//         this.name = name;
//         this.profile = profile;
//     }
//     get gender(){
//         return this.gender;
//     }

//     set gender(value){
//         console.log(value);
//         if(value === "male"){
//             console.log("참여가 안됩니다.");
//             return
//         }

//         this.gender = value
//     }
    
// }

// let user = new Attend("eom","male");

// console.log(user);

// class User{
//     constructor(params) {
//         this.name = params;
//     }
//     get name(){
//         return console.log(this.name);
//     }
//     set name(value){
//         if(value  ==="eom"){
//             console.log("hi");
//             return
//         }
//         this.name = value;
//     }
// }

// let user = new User("eom");
// console.log(user);