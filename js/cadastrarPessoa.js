const cadastrar = (nome, email, funcao) => {
    let usuario = JSON.parse(localStorage.getItem('usuarios'));
    console.log(usuario);
    if(usuario){
        usuario.push({
            nome: nome,
            email: email,
            funcao: funcao
        })
        localStorage.setItem('usuarios',JSON.stringify(usuario))
    }
    else{
        localStorage.setItem('usuarios',JSON.stringify([{
            nome: nome,
            email: email,
            funcao: funcao
        }]));  
    }



}