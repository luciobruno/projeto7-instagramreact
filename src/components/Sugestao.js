export default function Sugestao(props) {
    return (
        <div className="sugestao" key={props.nome}>
            <div className="usuario">
                <img src={props.src} alt={props.nome}/>
                <div className="texto">
                    <div className="nome">{props.nome}</div>
                    <div className="razao">Segue você</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    );
};