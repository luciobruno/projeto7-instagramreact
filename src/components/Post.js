import React from "react";

export default function Post(props) {

    const [salvarPost,setSalvarPost] = React.useState("");
    const [tirarSalvo, setTirarSalvo] = React.useState("hidden");

    const [colocarLike,setColocarLike] = React.useState("");
    const [tirarLike,setTirarLike] = React.useState("hidden");

    const [numeroLike, setNumeroLike] = React.useState(Number(props.likes));

    function salvaPost(){
        if(salvarPost === ""){
            setTirarSalvo("");
            setSalvarPost("hidden");
        }else{
            setSalvarPost("");
            setTirarSalvo("hidden");
        }
    }

    function like(){  
        if(colocarLike === ""){
            setColocarLike("hidden");
            setTirarLike("");
            setNumeroLike(numeroLike+1);
        }else{
            setColocarLike("");
            setTirarLike("hidden");
            setNumeroLike(numeroLike-1);
        }
    }

    function likeImagem(){

        if(colocarLike===""){
            setColocarLike("hidden");
            setTirarLike("");
            setNumeroLike(numeroLike+1);
        }
    }

    return (
        <div data-test="post" className="post" key={props.nome}>
            <div className="topo">
                <div className="usuario">
                    <img src={props.perfil} alt={props.nome} />
                    {props.nome}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div onDoubleClick={likeImagem} data-test="post-image" className="conteudo">
                <img src={props.img} alt={props.alt} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div className="icons">
                        <div onClick={like} data-test="like-post">
                            <div className={colocarLike}><ion-icon name="heart-outline"></ion-icon></div>
                            <div className={`${tirarLike} red`}><ion-icon name="heart"></ion-icon></div>
                        </div>
                        <div><ion-icon name="chatbubble-outline"></ion-icon></div>
                        <div><ion-icon name="paper-plane-outline"></ion-icon></div>
                    </div>
                    <div data-test="save-post" onClick={salvaPost}>
                        <div className={`${salvarPost} center-1`}><ion-icon name="bookmark-outline"></ion-icon></div>
                        <div className={tirarSalvo}><ion-icon name="bookmark"></ion-icon></div>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.perfil} alt={props.perfilCurtiu} />
                    <div className="texto">
                        Curtido por <strong>{props.perfilCurtiu}</strong> e <strong>outras <strong data-test="likes-number">{numeroLike}</strong> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}