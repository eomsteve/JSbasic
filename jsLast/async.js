// async & away : 프로미스 체인들을 좀더 편하게 동기적으로 움직이는 것처럼 작동 시키기 위해 필요한 문법

//1. async 
//동기적으로 실행

// function fetchUser(){
//     return 'eom';
// }

// const user = fetchUser();
// console.log(user);

// 비동기적으로 실행
// 만ㄴ약 10초이상 걸리는 코드라면 -> 클라이언트는 오래걸리는 시간동안 빈 화면 밖에 보이지 않는다.

// function fetchUser(){
//     return new Promise((resolve,reject) => {
//         return 'kim'
//     });
// }

// const user = fetchUser();
// console.log(user);

//async 를 사용하면 코드가 상당히 간결해진다.

async function fetchUser(){
    return "lee";
}

const user = fetchUser();
user.then(console.log)
console.log(user);

//프로미스 객체를 쓰지않고 then을 사용해 팬딩을 고려하지 않아도 된다.

//await

function delay(ms) {
    return new Promise((resolve => setTimeout(resolve, ms)));
}

async function getApple(){
    await delay(1000);
    return 'apple';
}

async function getBanana(){
    await delay(1000);
    return 'banana';
}

// function pickFruit(){
//     return getApple()
//             .then(apple =>{
//                 return getBanana().then(banana =>`${banana} and ${apple}`)})
// }

// pickFruit.then(console.log)


async function pickFruit(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;

    return `${apple} and ${banana}`;
}

pickFruit.then(console.log)

//프로미스 체이닝을 계속하다보면 코드의 가독성이 떨어진다.
//async 와 await를 사용하여 promise를 간편하게 동기적으로 실행되는것 처럼 보이게 만들어주는 api
// 새로운게 아닌 기존에 존재하는 프로미스 위에 조금 더 간편한 api를 제공함
// 이런걸 syntatic sugar라고 부른다.