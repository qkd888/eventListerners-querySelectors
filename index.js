/*const title = document.querySelector('#title');
console.log(title);

let para1 = document.querySelector(".para1");
console.log(para1);

let para1 = document.querySelectorAll(".para1");
console.log(para1);
*/
//para1.addEventListener(hover, hover) 

function makeHappy() {
    document.getElementById("face").src = "./images/happy.png";
    document.getElementById("attention").innerHTML = "thanks so much!!!";
}
function makeSad() {
    document.getElementById("face").src = "./images/sad.png";
    document.getElementById("attention").innerHTML = "gimme some attention!!!"
}
document.getElementById("face").addEventListener("mouseover", makeHappy);
document.getElementById("face").addEventListener("mouseout", makeSad);