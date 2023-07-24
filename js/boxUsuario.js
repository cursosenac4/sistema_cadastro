const criarBoxUsuario = (element,data) => {
    
    data.map((usuario, index) => {
        const imgUsuario = document.createElement("img");
        imgUsuario.src = "../images/user_icon.jpg";
        imgUsuario.alt = "";

        const divboxUsuario = document.createElement("div");
        
        divboxUsuario.classList.add("boxUsuario")
        
        divboxUsuario.appendChild(imgUsuario);
        
        for( const info in usuario){
            const containerInfoUsuario = document.createElement("div");
            const pInfo = document.createElement("p");
            containerInfoUsuario.classList.add("containerInfoUsuario");
            pInfo.classList.add("infoUsuario");
            pInfo.textContent = usuario[info];
            
            containerInfoUsuario.appendChild(pInfo);
            divboxUsuario.appendChild(containerInfoUsuario);
        }

        const indexUser = document.createElement("button");
        indexUser.textContent = 'Excluir';
        indexUser.classList.add("btnExcluir");
        indexUser.addEventListener("click", (index) => {
            const data= JSON.parse(localStorage.getItem('usuarios'))
            if(data){
               data.splice(index, 1)
               localStorage.setItem('usuarios',JSON.stringify(data));
               divboxUsuario.style.display = 'none';
           }
       });
        divboxUsuario.appendChild(indexUser);


        
        element.appendChild(divboxUsuario);
    })

} 

