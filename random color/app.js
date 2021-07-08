let btn  =  document.querySelector("button");
let head = document.querySelector("h1");
function magic()
{
   let r =  Math.floor(Math.random() * 255);
   let g =  Math.floor(Math.random() * 255);
   let b =  Math.floor(Math.random() * 255);
   const newColor = `RGB(${r},${g},${b})`;
   head.innerText = newColor;
   document.body.style.backgroundColor = newColor;
}
btn.addEventListener('click', magic);
