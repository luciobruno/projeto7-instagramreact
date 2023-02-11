export default function Usuario() {
    return (
        <div className="usuario">
            <img data-test="profile-image" src="assets/img/catanacomics.svg" alt="imagem de perfil" />
            <div className="texto">
                <span>
                    <strong data-test="name">catanacomics</strong>
                    <ion-icon data-test="profile-image" name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
};