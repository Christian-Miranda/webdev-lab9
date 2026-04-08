function init(){
  var buttonpress = document.getElementById('entrybutton');

function showtext() {
  var text = document.getElementById('entryinput');
  document.getElementById('textoutput').innerHTML = text.value;
  alert("Christian Miranda Canchola:" + text.value);
}

buttonpress.addEventListener('click', showtext);
}





window.addEventListener('load', init);
