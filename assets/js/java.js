document.getElementById('clickButton').onclick  =showAlert;
document.getElementById('clickbutton').onclick =showAlert;
function showAlert(){
    var dividende = document.getElementById('dividende').Value;
    var diviseur = document.getElementById('diviseur').Value;
    var result = (dividende%diviseur);

    alert('reste de la division :' +result);
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var resultat = ( num1%num2 )
    alert('Reste' + resultat);
}