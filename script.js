function calcularIMC() {

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const resultado = document.getElementById('resultado');

    // VALIDAÇÃO
    if (!peso || !altura || peso <= 0 || altura <= 0) {

        resultado.classList.add('show');

        resultado.innerHTML = `
            <p style="color:#f87171;">
                Insira valores válidos.
            </p>
        `;

        return;
    }

    // CALCULO
    const imc = peso / (altura * altura);

    let classificacao = '';
    let cor = '';
    let progresso = 0;

    // CLASSIFICAÇÃO
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        cor = '#facc15';
        progresso = 25;

    } else if (imc < 24.9) {
        classificacao = 'Peso ideal';
        cor = '#22c55e';
        progresso = 50;

    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
        cor = '#fb923c';
        progresso = 70;

    } else if (imc < 34.9) {
        classificacao = 'Obesidade Grau I';
        cor = '#ef4444';
        progresso = 85;

    } else if (imc < 39.9) {
        classificacao = 'Obesidade Grau II';
        cor = '#dc2626';
        progresso = 92;

    } else {
        classificacao = 'Obesidade Grau III';
        cor = '#991b1b';
        progresso = 100;
    }

    // RESULTADO
    resultado.innerHTML = `
        <div>
            <h3 style="font-size: 42px; color:${cor};">
                ${imc.toFixed(1)}
            </h3>

            <p style="margin-top:8px;">
                ${classificacao}
            </p>

            <div class="barra-imc">
                <div 
                    class="progresso"
                    style="
                        width:${progresso}%;
                        background:${cor};
                    "
                ></div>
            </div>
        </div>
    `;

    resultado.classList.add('show');
}