const container = document.querySelector("#container");
function createDivSquare(){

        for(let i=0 ;i<(16*16);i++){
    const content = document.createElement("div");
    content.classList.add("grid-square");
    container.appendChild(content);
    }
 }
createDivSquare();