let boton=document.getElementById('cambioColor');
let exadecimal=document.getElementById('exadecimal')

let colorExadecimalRandom=()=>{

  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  
  var colorHexadecimal = "#" + 
    r.toString(16).padStart(2, '0') + 
    g.toString(16).padStart(2, '0') + 
    b.toString(16).padStart(2, '0');


  exadecimal.innerText=colorHexadecimal.toUpperCase();

  document.body.style.backgroundColor=colorHexadecimal;
}
boton.addEventListener('click',colorExadecimalRandom);

