// 콜백, 프로미스, async
'use strict';

// ------------------------------------------------
/*
 자바스크립트는 동기적 언어이다. =>  호이스팅이 된 후부터 
 코드가 작성된 순서대로 동기적으로 실행된다.
 호이스팅 -> var function declaration
*/
// console.log("1");
// console.log("2");
// console.log("3");
// setTimeout(()=>{console.log('setTimeout')},1000);

// //callback : 나중에 실행됨

// //동기적 콜백
// function printA(print){
//     print();
// }

// printA(()=>{console.log('hello world!')});

// //비동기적 콜백
// function printB(print, timeout){
//     setTimeout(print,timeout);
// }

// printB(()=>{console.log('hello world! set time out')},2000);

//!콜백지옥
//백엔드와 연결이 되었다는 가정을하고 작성
//id,pw를 입력하고 성공하면 onSuccess 실패하면, onError가 나오게

class UserStorage{
    loginUser(id,pw,onSuccess,onError){
        setTimeout(()=>{
            if((id === 'eom' && pw === '1234') || (id === 'kim' && pw === '1111')){
                onSuccess(id);
            }else{
                onError(new Error('not Found'));
            }
        },2000);
    }
    getRoles(user,onSuccess,onError){
        setTimeout(()=>{
            if((user === 'kim')){
                onSuccess({name:'kim', role :'대학원생'});
            }else{
                onError(new Error('not Human'));
            }
        },1000);
    }
}
//!------------------------------------------------------------------------------------------------
class USerStorePromise{
    loginUser(id,pw){
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                if((id === 'eom' && pw === '1234') || (id === 'kim' && pw === '1111')){
                    resolve(id);
                }else{
                    reject(new Error('not Found'));
                }
            },2000)
        });
    }
    getRoles(user){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if((user === 'kim')){
                    resolve({name:'kim', role :'대학원생'});
                }else{
                    reject(new Error('not Human'));
                }
        },2000);
        })
    }
}

const UserStorage2 = new UserStorage();
const id = prompt('Enter your id:) ');
const pw = prompt('Enter your password:) ');
UserStorage2.then();

//!------------------------------------------------------------------------------------------------

const userStorage = new UserStorage();
// const id = prompt('Enter your id:) ');
// const pw = prompt('Enter your password:) ');
userStorage.loginUser(
    id,
    pw,
    (user) => {
        userStorage.getRoles(
            user,UserWithRole =>{
                alert(`안녕 너는 ${userWithRole.name}, 너는 현재 ${userWithRole.role}`);
            },
            error => {
                alert(error);
            }
        )
    },
    error => {
        alert(error);
    }
)