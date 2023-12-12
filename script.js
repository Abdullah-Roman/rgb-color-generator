// window.onload=()=>{

// }

let parent = document.querySelector(".parent");
let generate = document.querySelector(".generate");
let para = document.querySelector(".para");
let btn = document.querySelector(".btn");
let input = document.querySelector("input");
const color = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let rgb = `rgb(${red},${green},${blue})`;
  return rgb;
};

generate.addEventListener("click", () => {
  parent.style.backgroundColor = color();
  input.value = color();
});

btn.addEventListener("click", () => {
  navigator.clipboard.writeText(input.value);
  para.innerHTML = "Copied!";
});
