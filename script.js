
function converter() {
    /*adiciona na var= resul o valor do id=resultado*/
    let resul = document.getElementById("resultado")

   /*recebe o valor digitado com o ID=valor e coloca na var*/
    let valorEmDolar = document.getElementById("valor").value
    let dolarDoDia = 6

    let valorReal = valorEmDolar * dolarDoDia

    /*innerHTML adiciona na var= reultado*/
    resul.innerHTML = "R$ " + valorReal
    
    /*Exibe na tela o valer q foi digitado*/
    console.log(valorReal)
}


  
