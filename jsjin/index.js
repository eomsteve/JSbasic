const divHi= document.querySelector(`#hi`),
    btn = document.querySelector(`#btn`);

btn.addEventListener("click",(e)=>{
    divHi.innerHTML ="bye";
});

document.getElementById('bts').addEventListener('click',function(e){
    var arr =[1,2,3];
    arr.forEach(function(){console.log(this)})
})