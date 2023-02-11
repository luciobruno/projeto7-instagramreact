export default function Storie(props) {
    return (
        <div className="story" key={props.usuario}>
            <div className="imagem">
                <img src={props.src} alt={props.usuario} />
            </div>
            <div className="usuario">
                {props.usuario}
            </div>
        </div>
    );
};