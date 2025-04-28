function logar(event) {
    //event.preventDefault();

    var usuario = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;

    if (usuario == 'admin' && senha == 123) {
        Swal.fire({
            title: 'Login realizado!',
            text: 'Bem-vindo, ' + usuario + '!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            setTimeout(() => {
                location.href = "../html/admin.html";
            }, 100); 
        });}

        else if (usuario == 'user' && senha == 123) {
            Swal.fire({
                title: 'Login realizado!',
                text: 'Bem-vindo, ' + usuario + '!',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                setTimeout(() => {
                    location.href = "../index.html.html";
                }, 100); 
            });} 
        
        else {
        Swal.fire({
            title: 'Erro!',
            text: 'Usuário ou senha incorretos.',
            icon: 'error',
            confirmButtonText: 'Tentar novamente'
        });
    }
}

function cadastro(event) {
    //event.preventDefault();

    var usuario = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;
    var confirm = document.getElementById('confirmSenha').value;

    if (usuario == 'admin' && senha == 123 && senha == confirm) {
        Swal.fire({
            title: 'Cadastro realizado!',
            text: 'Bem-vindo, ' + usuario + '!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            setTimeout(() => {
                location.href = "../html/login.html";
            }, 100); 
        });}

        else if (usuario == 'user' && senha == 123 && senha == confirm) {
            Swal.fire({
                title: 'Cadastro realizado!',
                text: 'Bem-vindo, ' + usuario + '!',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                setTimeout(() => {
                    location.href = "../html/login.html";
                }, 100); 
            });} 
        
        else {
        Swal.fire({
            title: 'Erro!',
            text: 'Usuário ou senha incorretos.',
            icon: 'error',
            confirmButtonText: 'Tentar novamente'
        });
    }
}

function cadastroGame(event) {
    //event.preventDefault();

    var jogo = document.getElementById('nome-jogo').value;
    var contato = document.getElementById('email-dev').value;

    if (jogo != "" && contato != "") {
        Swal.fire({
            title: 'Jog Cadastrado!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            setTimeout(() => {
                location.href = "../html/admin.html";
            }, 100); 
        });}
        
        else {
        Swal.fire({
            title: 'Erro!',
            text: 'Jogo não cadastrado.',
            icon: 'error',
            confirmButtonText: 'Tentar novamente'
        });
    }
}