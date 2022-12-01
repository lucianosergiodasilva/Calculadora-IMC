// Selecionar elementos

let inputPeso = document.querySelector('#inputPeso')
let inputAltura = document.querySelector('#inputAltura')
let btnCalcular = document.querySelector('#btnCalcular')
let btnLimpar = document.querySelector('#btnLimpar')
let resultado = document.querySelector('#resultado')
let dados = document.querySelectorAll('.dados')
let esconder = document.querySelector('.esconder')

// Criar evento de click, pegar os elementos e calcular IMC
// Exibir os dados na página se os campos forem preenchidos

btnCalcular.addEventListener('click', function (e) {
    if (!inputPeso.value || !inputAltura.value) {
        console.log('Existem campos que precisam ser preenchidos!')
    } else {
        console.log('Campos preenchidos corretamente')

        let peso = inputPeso.value
        let altura = inputAltura.value
        let imc = (peso / (altura * altura)).toFixed(1)

        // inputImc.value = imc
        let sit = classificacao(imc)
        let pessoa = {
            peso: peso,
            altura: altura,
            sit: sit,
            imc: imc,
        }

        dados[0].innerText = pessoa.peso + ' kg'
        dados[1].innerText = pessoa.altura + ' m'
        dados[2].innerText = pessoa.imc
        dados[3].innerText = pessoa.sit
        // situacao.innerText = pessoa.sit

        esconder.classList.remove('esconder')

        e.preventDefault()
    }
})

// Criar evendo de click. Esconder resultado

btnLimpar.addEventListener('click', function () {
    esconder.classList.add('esconder')
})

// Condição para o resultado

function classificacao(imc) {
    let situacao = ''
    if (imc < 18.5) {
        situacao = 'Abaixo do peso'
    } else if (imc >= 18.5 && imc <= 24.9) {
        situacao = 'Peso normal'
    } else if (imc >= 25.0 && imc <= 29.9) {
        situacao = 'Pré-obesidade'
    } else if (imc >= 30.0 && imc <= 34.9) {
        situacao = 'Obesidade Grau 1'
    } else if (imc >= 35.0 && imc <= 39.9) {
        situacao = 'Obesidade Grau 2'
    } else if (imc > 40.0) {
        situacao = 'Obesidade Grau 3'
    } else {
        situacao = 'Informe um peso correto'
    }

    return situacao
}