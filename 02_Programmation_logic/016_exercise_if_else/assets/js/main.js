function calculaIMC() {
    let $form = document.querySelector("#form");
    let $divResultado = document.querySelector("#div-resultado");
    let $peso = 0;
    let $altura = 0;
    let $resultadoIMC;
    
    $form.addEventListener("submit", eventoForm);

    function eventoForm(evt) {
        evt.preventDefault();

        $peso = parseFloat(document.querySelector("#input-peso").value);
        $altura = parseFloat(document.querySelector("#input-altura").value);

        if (Number.isNaN($peso)) {
            $divResultado.innerHTML = "Peso inválido!"
        } else if (Number.isNaN($altura)) {
            $divResultado.innerHTML = "Altura inválido!"
        } else {
            $resultadoIMC = retornaIMC($peso, $altura);

            if ($resultadoIMC < 18.5) {
                mostrarResultado(`Seu IMC é ${$resultadoIMC.toFixed(2)} (Abaixo de peso)`);
            } else if ($resultadoIMC >= 18.5 && $resultadoIMC <= 24.9) {
                mostrarResultado(`Seu IMC é ${$resultadoIMC.toFixed(2)} (Peso normal)`);
            } else if ($resultadoIMC >= 25 && $resultadoIMC <= 29.9) {
                mostrarResultado(`Seu IMC é ${$resultadoIMC.toFixed(2)} (Sobrepeso)`);
            } else if ($resultadoIMC >= 30 && $resultadoIMC <= 34.9) {
                mostrarResultado(`Seu IMC é ${$resultadoIMC.toFixed(2)} (Obesidade grau 1)`);
            } else if ($resultadoIMC >= 35 && $resultadoIMC <= 39.9) {
                mostrarResultado(`Seu IMC é ${$resultadoIMC.toFixed(2)} (Obesidade grau 2)`);
            } else {
                mostrarResultado(`Seu IMC é ${$resultadoIMC.toFixed(2)} (Obesidade grau 3)`);
            }
        }

    }

    function mostrarResultado(texto){
        $divResultado.innerHTML = texto;
    };

    function retornaIMC(peso, altura){
        return peso / (altura * altura);
    }

}

calculaIMC();