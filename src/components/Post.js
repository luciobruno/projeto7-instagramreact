export default function Post(props) {
    return (
        <div data-test="post" className="post" key={props.nome}>
            <div className="topo">
                <div className="usuario">
                    <img data-test="post-image" src={props.perfil} alt={props.nome} />
                    {props.nome}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.img} alt={props.alt} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon data-test="like-post" name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div data-test="save-post">
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.perfil} alt={props.perfilCurtiu} />
                    <div className="texto">
                        Curtido por <strong>{props.perfilCurtiu}</strong> e <strong>outras <strong data-test="likes-number">{props.likes}</strong> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};