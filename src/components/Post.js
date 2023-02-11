export default function Post(props) {
    return (
        <div className="post" key={props.nome}>
            <div className="topo">
                <div className="usuario">
                    <img src={props.perfil} alt={props.nome} />
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
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.perfil} alt={props.perfilCurtiu} />
                    <div className="texto">
                        Curtido por <strong>{props.perfilCurtiu}</strong> e <strong>outras {props.likes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};