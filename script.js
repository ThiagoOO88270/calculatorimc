function calcularIMC() {
    // Obtém os elementos de entrada e a área de resultado
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const resultadoDiv = document.getElementById('resultado');

    // Converte os valores para números flutuantes (decimais)
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    // Validação simples para garantir que os dados foram preenchidos corretamente
    if (!peso || !altura || peso <= 0 || altura <= 0) {
        resultadoDiv.style.color = '#e74c3c';
        resultadoDiv.innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    // Cálculo do IMC: Peso dividido pela Altura ao quadrado
    const imc = peso / (altura * altura);
    
    // Determina a classificação com base no resultado do IMC
    let classificacao = '';
    resultadoDiv.style.color = '#333'; // Reseta a cor do texto para o padrão

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
        resultadoDiv.style.color = '#2ecc71'; // Verde para peso ideal
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = 'Obesidade Grau I';
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = 'Obesidade Grau II';
    } else {
        classificacao = 'Obesidade Grau III ou Mórbida';
        resultadoDiv.style.color = '#e74c3c'; // Vermelho para alerta
    }

    // Exibe o resultado formatado com duas casas decimais
    resultadoDiv.innerHTML = `Seu IMC é: ${imc.toFixed(2)}<br>(${classificacao})`;
}
