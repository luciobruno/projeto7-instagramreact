import Sugestao from "./Sugestao";

export default function Sugestoes() {

    const listaSugestoes = [
        {src:"assets/img/bad.vibes.memes.svg",nome:"bad.vibes.memes"},
        {src:"assets/img/chibirdart.svg",nome:"chibirdart"},
        {src:"assets/img/razoesparaacreditar.svg",nome:"razoesparaacreditar"},
        {src:"assets/img/adorable_animals.svg",nome:"adorable_animals"},
        {src:"assets/img/smallcutecats.svg",nome:"smallcutecats"}
    ];

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {listaSugestoes.map(sugestao => Sugestao(sugestao))}
        </div>
    );
}