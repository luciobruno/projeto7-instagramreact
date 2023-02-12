import React from "react";

export default function Usuario() {

    const [imagem,setImagem] = React.useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png");
    const [nomeDeUsuario,setNomeDeUsuario] = React.useState("user_name");

    function trocarImagem(){
        const novaFoto = prompt("Insira o link da sua nova foto");

        if(novaFoto !== "" && novaFoto !== null && novaFoto !== undefined){
            setImagem(novaFoto);
        }
    }

    function trocarNomeDeUsuario(){
        const novoNome = prompt("Insira seu nome de usuário");
        if(novoNome !== "" && novoNome !== null && novoNome !== undefined){
            setNomeDeUsuario(novoNome);
        }
    }

    return (
        <div className="usuario">
            <img data-test="profile-image" onClick={trocarImagem} src={imagem} alt="imagem de perfil" />
            <div className="texto">
                <span>
                    <strong data-test="name">{nomeDeUsuario}</strong>
                    <ion-icon data-test="edit-name" onClick={trocarNomeDeUsuario} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}