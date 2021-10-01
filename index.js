document.querySelector("main").remove();
const newHeader = document.createElement('h1');
newHeader.id = "victory";
document.body.appendChild(newHeader);
newHeader.innerHTML = "Kyle is the champion";