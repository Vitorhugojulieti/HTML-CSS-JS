const Real = {
    cotDolar:0.20,//1 real equivale a 0.20 dolar
    cotEuro:0.19,
    cotIene:29.82,
    cotYuan:1.44,
    converteReal: function (moedaDestino,quantidade){
        if(moedaDestino == "usd"){
            return (Real.cotDolar * quantidade).toFixed(2);
        }else if(moedaDestino == "eur"){
            return (Real.cotEuro * quantidade).toFixed(2);
        }else if(moedaDestino == "jpy"){
            return (Real.cotIene * quantidade).toFixed(2);
        }else if(moedaDestino == "cny"){
            return (Real.cotYuan * quantidade).toFixed(2);
        }
    }
}

const Dolar = {
    cotReal: 4.92,//1 dolar equivale a 4.92 reais
    cotEuro:0.92,
    cotIene:146.78,
    cotYuan:7.07,
    converteDolar: function (moedaDestino,quantidade){
        if(moedaDestino == "real"){
            return (Dolar.cotReal * quantidade).toFixed(2);
        }else if(moedaDestino == "eur"){
            return (Dolar.cotEuro * quantidade).toFixed(2);
        }else if(moedaDestino == "jpy"){
            return (Dolar.cotIene * quantidade).toFixed(2);
        }else if(moedaDestino == "cny"){
            return (Dolar.cotYuan * quantidade).toFixed(2);
        }
    }
}

const Iene = {
    cotReal:0.034,//1 iene equivale a 0.034 reais
    cotDolar:0.0068,
    cotEuro:0.0063,
    cotYuan:0.048,
    converteIene: function (moedaDestino,quantidade){
        if(moedaDestino == "real"){
            return (Iene.cotReal * quantidade).toFixed(2);
        }else if(moedaDestino == "eur"){
            return (Iene.cotEuro * quantidade).toFixed(2);
        }else if(moedaDestino == "usd"){
            return (Iene.cotDolar * quantidade).toFixed(2);
        }else if(moedaDestino == "cny"){
            return (Iene.cotYuan * quantidade).toFixed(2);
        }
    }
}

const Yuan = {
    cotReal:0.69,//1 yuan equivale a 0.69 reais
    cotDolar:0.14,
    cotEuro:0.13,
    cotIene:20.75,
    converteYuan: function (moedaDestino,quantidade){
        if(moedaDestino == "usd"){
            return (Yuan.cotDolar * quantidade).toFixed(2);
        }else if(moedaDestino == "eur"){
            return (Yuan.cotEuro * quantidade).toFixed(2);
        }else if(moedaDestino == "jpy"){
            return (Yuan.cotIene * quantidade).toFixed(2);
        }else if(moedaDestino == "real"){
            return (Yuan.cotReal * quantidade).toFixed(2);
        }
    }
}

//elementos html
const selectMoedaOrigem = document.querySelector("#moedaOrigin");
const selectMoedaDestino = document.querySelector("#moedaDestino");
const inputQuantidade = document.querySelector("#inputQuantidade");
const formConversor = document.querySelector(".formConversor");
const btnConverter = document.querySelector("#btnConverter");
const resultado = document.querySelector(".content-result > h2");
const optionsMoedaOrigen = document.querySelectorAll('#moedaOrigin > option');
const optionsMoedaDestino = document.querySelectorAll('#moedaDestino >option');
console.log(document.getElementById("formConversor"));

formConversor.addEventListener("submit",(e)=>{
    e.preventDefault();
});

btnConverter.addEventListener("click",()=>{
    let moedaOrigem = selectMoedaOrigem.value;
    let moedaDestino = selectMoedaDestino.value;
    let quantidade = inputQuantidade.value;

    if(moedaOrigem == "real"){
        resultado.innerText = "Resultado da conversão:"+ Real.converteReal(moedaDestino,quantidade)+ " " + moedaDestino;
    }else if(moedaOrigem == "usd"){
        resultado.innerText = "Resultado da conversão:"+ Dolar.converteDolar(moedaDestino,quantidade)+ " " + moedaDestino;
    }else if(moedaOrigem == "jpy"){
        resultado.innerText = "Resultado da conversão:"+ Iene.converteIene(moedaDestino,quantidade)+ " " + moedaDestino;
    }else if(moedaOrigem == "cny"){
        resultado.innerText = "Resultado da conversão:"+ Yuan.converteYuan(moedaDestino,quantidade)+ " " + moedaDestino;
    }
});

//desabilitar option select para nao deixar moedas iguais nos dois select
    selectMoedaOrigem.addEventListener("change", function(){
        disableOption(optionsMoedaDestino, selectMoedaOrigem.value);
    });
    

    function disableOption(options, value){
        options.forEach(option => {
            if(option.value == value){
                option.disabled  = true;
            }else{
                option.disabled  = false; 
            }
        });
    }