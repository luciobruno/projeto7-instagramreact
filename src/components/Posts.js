import Post from "./Post";

export default function Posts() {

    const listaPosts = [
        {perfil:"assets/img/meowed.svg",img:"assets/img/gato-telefone.svg",alt:"gato-telefone",nome:"meowed",likes:"101523",perfilCurtiu:"respondeai",curtiu:"assets/img/respondeai.svg"},
        {perfil:"assets/img/barked.svg",img:"assets/img/dog.svg",alt:"dog",nome:"barked",likes:"99159",perfilCurtiu:"adorable_animals",curtiu:"assets/img/adorable_animals.svg"},
        {perfil:"assets/img/meowed.svg",img:"assets/img/gato-telefone.svg",alt:"gato-telefone",nome:"meowed1",likes:"101525",perfilCurtiu:"respondeai",curtiu:"assets/img/respondeai.svg"}
    ];

    return (
        <div className="posts">
            {listaPosts.map(post => Post(post))}
        </div>
    );
}
