let body = document.querySelector("body");
let img = document.querySelector(".img");
let p = document.querySelector("p");

let hora = new Date().getHours();
console.log(hora);

if (hora >= 5 && hora < 12) {
  body.style.background = "blue";
  img.src = "./img/manha.jpg";
  p.innerText = `Bom dia, são ${hora} horas, e ainda esta os pela manhã`;
} else if (hora >= 12 && hora < 18) {
  body.style.background = "orange";
  img.src = "./img/tarde.jpg";
  p.innerText = `Boa tarde, são ${hora} horas, e já estamos na parte da tarde.`;
} else {
  body.style.background = "black";
  img.src = "./img/noite.jpg";
  p.innerText = `Boa noite, já são ${hora} horas, e logo iremos dormir.`;
}
