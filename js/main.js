function imcCalcular(){
  var save = document.getElementById("texto");
  var peso = document.getElementById("kg").value;
  var estatura = document.getElementById("cm").value;
  var altura = Math.pow(estatura/100,2).toFixed(2);
  var imc = peso/altura;
  console.log(imc);
  save.innerHTML = "Tienes un índice de: "+ imc;
}
imcCalcular();

