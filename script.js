console.log('JavaScript carregado');

function validaCpf(cpf){
    console.log(cpf.length);
    if(cpf.length != 11){
        return false;
    }
    else{
        var numeros = cpf.substring(0,9);
       // console.log(numeros);
            var digitos = cpf.substring(9);
          /// console.log("numeros do CPF " + numeros);
          //  console.log("digito do CPF " + digitos);
          var soma = 0;
          for (var i = 10; i>1; i--){
            soma += numeros.charAt(10-i)*i;
          }
          console.log(soma);
          var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11); //oprador ternário no lugar de if else

         // Validação do primeiro digito
          if (resultado != digitos.charAt(0)){
            return false;
          }
          console.log(digitos.charAt(0) + " é a primeira posição da variavel soma")
        return true;
    }
}

function validacao(){
    console.log('Iniciando Validação CPF');

    var cpf = document.getElementById('cpf_digitado').value;

    var resultadoValidacao = validaCpf(cpf);

    if (resultadoValidacao){
        document.getElementById('success').style.display = 'block';
    }
    else{
        document.getElementById('error').style.display = 'block';
    }
}