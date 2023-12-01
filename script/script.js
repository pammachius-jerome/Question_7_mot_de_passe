// Déclaration des variables globale
let niveauSecurite = 0;
let motDePasse = document.getElementById("motDePasse");
let reponse = document.getElementById("reponse");
// écoute de la frappe
motDePasse.addEventListener("keyup", evaluation, false);
function evaluation() {
    niveauSecurite = 0;
    motDePasse = document.getElementById("motDePasse").value;
    if (/[a-z]/.test(motDePasse)) {
        niveauSecurite++;
    };

    if (/[A-Z]/.test(motDePasse)) {
        niveauSecurite++;

    };
    if (motDePasse.length < 8) {
        niveauSecurite--;
    }
    if (/\W/.test(motDePasse)) {
        niveauSecurite++;
    };
    const minuscule = new RegExp("[a-z]");
    const majuscule = new RegExp("[A-Z]");
    const nombre = new RegExp("[0-9]")
    if (minuscule.test(motDePasse) || majuscule.test(motDePasse)) {
        if (nombre.test(motDePasse)) {
        niveauSecurite++;
        }
    }
    switch (niveauSecurite) {
        case 4:
            reponse.innerHTML = '<span class="text-success">Très sécurisé !</span>';
            break;
        case 3:
            reponse.innerHTML = '<span class="text-success">Sécurisé !</span>';
            break;
        case 2:
            reponse.innerHTML = '<span class="text-warning">Moyen !!</span>';
            break;
        case 1:
            reponse.innerHTML = '<span class="text-danger">Dangereux !!!</span>';
            break;
        case 0:
            reponse.innerHTML = '<span class="text-danger">Dangereux !!!</span>';
            break;
        default:
            reponse.innerHTML = '';
    }
}
