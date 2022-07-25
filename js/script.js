import { a, b} from "./vars.js";

console.log(a,b);

const ssylka = document.querySelector('.ssylka');
ssylka.addEventListener("click",f1);

function f1 () {
   ssylka.click()
   console.log("ssylka");
}

f1();