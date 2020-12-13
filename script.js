console.log('JavaScript carregado');

function validaCpf(cpf){
    return false;
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