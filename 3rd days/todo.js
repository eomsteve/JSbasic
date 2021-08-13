const containerBox = document.querySelector("#containerBox"),
    contents = containerBox.querySelector("#contents"),
    list = contents.querySelector("#list"),
    inputList = document.querySelector(".inputlist"),
    listForm = inputList.querySelector("#listForm"),
    newbtn = document.querySelector("#newbtn"),
    input = listForm.querySelector("input");


let todo=[];

function saveItemLoacal(){
    localStorage.setItem("toto",JSON.stringify(todo)); //local storage : key가 "toto", value가 "todo List"로 들어가게 된다.
}

function editTodoList(text){
    const li = document.createElement('li');
    const div = document.createElement('div');
    const delbutton = document.createElement('button');
    const todoListid = todo.length+1;

    div.innerText=text;//  입력해서 어팬드 차일드
    delbutton.innerText ="delete"; // 삭제함수?

    list.appendChild(li);
    li.appendChild(div);
    li.appendChild(delbutton);
    delbutton.addEventListener("click",deleteItem);

    li.id =  todoListid; //삭제를 위해 리스트에 고유 id생성, == squence num
    const todoLsit={ //sqe 숫자와 list 내용을 묶어 객체로 생성,
        text: text,
        id : todoListid
    }
    todo.push(todoLsit); // 리스트에 저장한다.
    saveItemLoacal();// 리스트의 변경이 생겼으니 저장.
}

function handleSubmit(event){
    event.preventDefault(); //새로고침을 안함
    const currentValue = input.value; // 입력창에 입력된 값을 저장함
    editTodoList(currentValue);// 저장된 텍스트를 리스트 함수의 인자로 보냄
    input.value = ""; // 빈칸으로 초기화
}

function deleteItem(event){
    list.removeChild(event.target.parentNode);
    todo = todo.filter( (todo)=>{ // id와 비교하여 삭제된 id값이 다른 모든 리스트들을 반환 하여 리스트를 로드한다.
        return todo.id !== parseInt(event.target.parentNode.id);
    }); 
    saveItemLoacal();

}
function loadList(){ //리스트를 가져오는 함수,
    const loadedList = localStorage.getItem("toto"); //로컬 스토리지에 있는 key가 toto인 요소들을 가져옴(문자열)
    if(loadedList !== null){
        const parsedData = JSON.parse(loadedList); //문자열로 가져온 요소들을 객체로 변환
        parsedData.forEach(function(toDo){ //객체의 text들을 edittodolist 함수에 넣어 리스트를 가져옴
            editTodoList(toDo.text);
        });
    }
}
function init(){
    loadList(); // 새로고침시 저장된 리스트를 가져오기위해 함수를 사용함
    listForm.addEventListener("submit", handleSubmit); // 엔터시 리스트에 값을 추가하는 이벤트 리스너를 활성화 시킴
}
init(); // 페이지가 렌더링 되고 js실행시 항상 실행됨