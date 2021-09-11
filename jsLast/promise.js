'use strict';

//stat => pending  => 1. fulfilled 2. rejected(문제가 발생했을때)
//fulfilled => resolve, reject 

//producer vs consumer

// 1. producer
// 새로운 프로미스 (new Promise)를 만들때, 엑스큐터가 자동으로 실행되니 유의해서 생성해야한다.
// 프로미스 내부에서 네트워크 통신을하는 코드를 작성하면 실행이 자동으로 됨.

// const promise = new Promise((resolve,reject)=>{
//     console.log('doing .........something');
//     setTimeout(()=>{
//         // resolve('이진욱');
//         reject(new Error('no network'));
//     },2000)
// })


// //2. consumer : then, catch, finally
// promise
//     .then((value)=>{
//         console.log('value');
//     })
//     .catch(error =>{
//         console.log('error');
//     })
//     .finally(()=>{
//         console.log('finally');
//     })


//3. promise chaining
const fetchNumver = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(1),1000);
});

fetchNumver.then(num=>num*2)
            .then(num => num + 2)
            .then( num => {
                return new Promise((resovle,reject)=>{
                    setTimeout(()=> resovle(num -1),1000);
                })
            })
            .then(num => console.log(num));

//4. error handling

const getChicken = () => new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('chicken'),1000);
});

const getEgg = chicken => new Promise((resolve,reject)=>{
    setTimeout(()=>reject(new Error(`ERR! ${chicken} => egg`)),1000);
});

const cook = egg => new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(`${egg} => cook`)),1000
});


getChicken()
    .then(chicken => getEgg(chicken))
    // .catch(error =>{
    //     return 'trash';
    // })
    .then(egg => cook(egg))
    .then(meal => console.log(meal));