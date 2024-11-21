const container = document.querySelector("#container");
let size=16;
const button= document.querySelector("#btn");
function createDivSquare(size){
    
        for(let i=0 ;i<(size*size);i++){
    const content = document.createElement("div");
    content.classList.add("grid-square");
    container.appendChild(content);
    }
 }  
createDivSquare(size);
button.addEventListener("click", () => {
    size=prompt("Dame un tamaño");  
    createDivSquare(size);
});