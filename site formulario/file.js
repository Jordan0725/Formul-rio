let Termos = document.querySelector("input[name='aceito']:cheked").value

function enviar(){
    let user = document.getElementById('User').value
    let password = document.getElementById('Password').value
    let cidade = document.getElementById('Cidade').value
    let endereco = document.getElementById('Endereco').value
    let genero = document.querySelector("input[name='genero']:checked").value

    alert('User: '+user+'\n Password: '+password+'\n Cidade: '+cidade+'\n Endereço: '+endereco+'\n Gênero: '+genero)

}
