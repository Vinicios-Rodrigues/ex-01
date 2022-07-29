let body = document.querySelector("body");
let img = document.querySelector("img");

let data = new Date().getHours();
console.log(data);

if (data >= 18 && data <= 5) {
  body.style.background = "black";
  img.src = "./img/noite.jpg";
  console.log("noite");
} else if (data > 5 && data < 12) {
  console.log("manhã");
  img.src = "./img/manha.jpg";
  body.style.background = "blue";
} else {
  console.log("tarde");
  body.style.background = "yellow";
  img.src = "./img/tarde.jpg";
}
