const modal = document.getElementById("modal");
const closeBtn = document.getElementsByClassName("close-area");
const bitModal = document.getElementById("btn-modal");

const loremIpsum = document.getElementById("lorem-ipsum")
        fetch("https://baconipsum.com/api/?type=all-meat&paras=200&format=html")
            .then(response => response.text())
            .then(result => loremIpsum.innerHTML = result)

closeBtn.addEventListener("click", e => {
    if(e.target.classList.contains("modal-overlay")){
        modal.style.display = "none";
    }
})

window.addEventListener("keydown",e =>{
    const key = modal
})