$(document).ready(function(){

    $('#peso').mask('000')
    $('#altura').mask('000')
    $('#idade').mask('000')
    $('#quantidade').mask('00000')
    $('#calorias').mask('00000')

    $('#form-tmb').on('submit', function(e){
        e.preventDefault();
        const nome = $('#nome').val();
        const peso = parseFloat($('#peso').val());
        const altura = parseFloat($('#altura').val());
        const idade = parseFloat($('#idade').val());
        const genero = $('input[name="sexo"]:checked').val();
        const div = $('#resposta-calculo');

        div.empty();

        if(genero == 'homem'){
            const resultadoH = parseFloat(66 + (13.8 * peso) + (5 * altura) - (6.8 * idade)).toFixed(2);
        $(`<p>Olá ${nome} sua TMB é de ${resultadoH}</p>`).appendTo(div);
        }else if(genero == 'mulher'){
            const resultadoM = parseFloat((10 * peso) + (6.25 * altura) - (5 * idade) + 5).toFixed(2);
            $(`<p>Olá ${nome} sua TMB é de ${resultadoM}</p>`).appendTo(div);
        }else{
            $('<p>Coloque o sexo!</p>').appendTo(div);
        };
    });

    $('#peso-imc').mask('000');
    $('#altura-imc').mask('0.00')

    $('#form-imc').on('submit', function(e){
        e.preventDefault();
        const pesoImc = $('#peso-imc').val();
        const alturaImc = parseFloat($('#altura-imc').val());
        const resultadoImc = (pesoImc / (alturaImc * alturaImc)).toFixed(2);
        const divImc = $('#resposta-calculo-imc');

        divImc.empty();

        if(resultadoImc <= 18.4){
            $(`<p>seu imc é de ${resultadoImc}, sua classificação é igual a: Magreza</p>`).appendTo(divImc);
        }else if(resultadoImc <= 24.9){
            $(`<p>seu imc é de ${resultadoImc}, sua classificação é igual a: Normal</p>`).appendTo(divImc);
        }else if(resultadoImc <= 29.9){
            $(`<p>seu imc é de ${resultadoImc}, sua classificação é igual a: Sobrepeso</p>`).appendTo(divImc);
        }else if(resultadoImc <= 39.9){
            $(`<p>seu imc é de ${resultadoImc}, sua classificação é igual a: Obesidade</p>`).appendTo(divImc);
        }else{
            $(`<p>seu imc é de ${resultadoImc}, sua classificação é igual a: Obesidade Grave</p>`).appendTo(divImc);
        }

    });

    $('#form-dieta').on('submit', function(e){
        e.preventDefault();
        const divCafeDaManha = $('#div-cafedamanha');
        const divLanche = $('#div-lanche');
        const divAlmoco = $('#div-almoco');
        const divLancheDaTarde = $('#div-lanchedatarde');
        const divJanta = $('#div-janta');
        const divLancheDaNoite = $('#div-lanchedanoite');
        const alimento = $('#alimento').val();
        const quantidade = $('#quantidade').val();
        const calorias = $('#calorias').val();
        const refeicao = $('input[name="vbtn-radio"]:checked').val();
        
        if(refeicao == 'cafedamanha'){
            $(`<p>${alimento}/${quantidade}g: ${calorias} kcal</p>`).appendTo(divCafeDaManha);
        }else if(refeicao == 'lanche'){
            $(`<p>${alimento}/${quantidade}g: ${calorias} kcal</p>`).appendTo(divLanche);
        }else if(refeicao == 'almoco'){
            $(`<p>${alimento}/${quantidade}g: ${calorias} kcal</p>`).appendTo(divAlmoco);
        }else if(refeicao == 'lanchedatarde'){
            $(`<p>${alimento}/${quantidade}g: ${calorias} kcal</p>`).appendTo(divLancheDaTarde);
        }else if(refeicao == 'janta'){
            $(`<p>${alimento}/${quantidade}g: ${calorias} kcal</p>`).appendTo(divJanta);
        }else if(refeicao == 'lanchedanoite'){
            $(`<p>${alimento}/${quantidade}g: ${calorias} kcal</p>`).appendTo(divLancheDaNoite);
        }

    });
});