const containerElement = document.querySelector(".container");
let count=0;
document.querySelector(".btn-add").addEventListener("click" , () => {
    if(!count) {
        add();
    }
    count++;
})

function add() {
    const prgBar = document.createElement("div");
    prgBar.classList.add("progress-bar");
    containerElement.appendChild(prgBar);
    setTimeout(() => {
        prgBar.style.width = "100%";
    },500);
    prgBar.addEventListener("transitionend" , () => {
        count--;
        if(count) {
            add();
        }
    });
}

