const form = document.querySelector("#formBuscaCep");
const btnConsulta = document.querySelector("#btnConsulta");

form.addEventListener("submit",(e)=>{
    e.preventDefault(); 
})

btnConsulta.addEventListener("click",()=>{
    var cep = document.getElementById("cep").value.replace(/\D/g,'');
    let minhaUrl = 'https://viacep.com.br/ws/' + cep + '/json/';

    fetch(minhaUrl).then(function(response) {

    return response.json();

    }).then(function(data) {
        document.querySelector('.Result').innerHTML = 'Cidade/UF: ' + data.localidade + '/' + data.uf + '<br>' + 'Bairro: ' + data.bairro + '<br>' + 'Rua: ' + data.logradouro;

    }).catch(function() {

        document.querySelector('.Result').innerHTML ="CEP invalido!";

    });
});
