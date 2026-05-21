/*Carrousel annonce*/
let conteneur = document.querySelectorAll('.carrou_track  span');
let track = document.querySelector('.carrou_track');
function carrou_add() {
    for (let i = 0; i < conteneur.length; i++) {
        let clone = conteneur[i].cloneNode(true);
        track.appendChild(clone);
    }
};
carrou_add();

/*-----------------------------------Carrousel Fleurs-----------------------------------*/
const blockDrFleurs = document.querySelector(".carrouFleurs .droite")
const blockGaFleurs = document.querySelector(".carrouFleurs .gauche")

let blockImgFle = document.querySelector(".carrouFleurs .carrouPdt img")
let blockNomFle = document.querySelector(".carrouFleurs .carrouPdt .bestNom")
let blockPrixFle = document.querySelector(".carrouFleurs .carrouPdt .bestPrix")
let blockDescFle = document.querySelector(".carrouFleurs .carrouPdt .bestDesc")

let heartFle = document.querySelector(".carrouFleurs .carrouPdtIcones .bi-heart");
let cartFle = document.querySelector(".carrouFleurs .carrouPdtIcones .bi-cart");


let imagesFleurs = ["images/fleurs/plumeria.png",
    "images/fleurs/anthurium.png",
    "images/fleurs/hibiscus.png",
    "images/fleurs/oiseau_paradis.png",
    "images/fleurs/ixora.png"
]

let nomFleurs = [
    'Plumeria',
    'Anthurium',
    'Hibiscus',
    'Oiseau du paradis',
    'Ixora'
]

let prixFleurs = [
    "15,47€",
    "18,66€",
    "25,98€",
    "25,99€",
    "14,98€"
]

let descriptionFleurs = [
    "Le plumeria (Plumeria sp.), également appelé frangipanier, est un arbuste tropical originaire des régions chaudes d'Amérique centrale et des Caraïbes, apprécié pour ses fleurs parfumées et colorées qui évoquent les paysages exotiques et ensoleillés.",
    "L'anthurium (Anthurium sp.) est une plante tropicale originaire d'Amérique du Sud, reconnaissable à ses fleurs brillantes en forme de cœur et sa longue floraison, idéale pour apporter une touche exotique en intérieur.",
    "L'hibiscus (Hibiscus sp.) est une plante à fleurs tropicale originaire des régions chaudes, connue pour ses grandes fleurs éclatantes aux couleurs vives et sa capacité à attirer les pollinisateurs comme les abeilles et les papillons.",
    "L'oiseau du paradis (Strelitzia reginae) est une plante vivace originaire d'Afrique du Sud, célèbre pour ses fleurs spectaculaires rappelant la forme d'un oiseau exotique, apportant une touche tropicale et élégante.",
    "L'ixora (Ixora sp.) est un arbuste tropical originaire d'Asie, caractérisé par ses grappes de petites fleurs colorées qui embellissent les jardins dans les climats chauds et humides."
]

let coeurFle = [
    "bi bi-heart",
    "bi bi-heart",
    "bi bi-heart",
    "bi bi-heart",
    "bi bi-heart"
]

let panierFle = [
    "bi bi-cart",
    "bi bi-cart",
    "bi bi-cart",
    "bi bi-cart",
    "bi bi-cart"
]

let i = 0;

function addFle() {
    if (i < imagesFleurs.length - 1) {
        i++
    } else {
        i = 0
    }
    blockImgFle.src = imagesFleurs[i]
    blockNomFle.textContent = nomFleurs[i]
    blockPrixFle.textContent = prixFleurs[i]
    blockDescFle.textContent = descriptionFleurs[i]

    heartFle.className = coeurFle[i]
    if (heartFle.className == "bi bi-heart-fill") {
        heartFle.style.color = "rgb(242, 37, 10)";
    }
    if (heartFle.className == "bi bi-heart") {
        heartFle.style.color = "black";
    }

    cartFle.className = panierFle[i];
    if (cartFle.className == "bi bi-cart-fill") {
        cartFle.style.color = "#1B4D2E";
    }
    if (cartFle.className == "bi bi-cart") {
        cartFle.style.color = "black";
    }
}

function moinsFle() {
    if (i > 0) {
        i--
    } else {
        i = imagesFleurs.length - 1
    }
    blockImgFle.src = imagesFleurs[i]
    blockNomFle.textContent = nomFleurs[i]
    blockPrixFle.textContent = prixFleurs[i]
    blockDescFle.textContent = descriptionFleurs[i]

    heartFle.className = coeurFle[i]
    if (heartFle.className == "bi bi-heart-fill") {
        heartFle.style.color = "rgb(242, 37, 10)";
    }
    if (heartFle.className == "bi bi-heart") {
        heartFle.style.color = "black";
    }

    cartFle.className = panierFle[i];
    if (cartFle.className == "bi bi-cart-fill") {
        cartFle.style.color = "#1B4D2E";
    }
    if (cartFle.className == "bi bi-cart") {
        cartFle.style.color = "black";
    }

}
blockDrFleurs.addEventListener("click", addFle);
blockGaFleurs.addEventListener("click", moinsFle);

function heartStyleFle() {
    if (heartFle.className == "bi bi-heart") {
        coeurFle.splice(i, 1, "bi bi-heart-fill");
        heartFle.classList.replace("bi-heart", "bi-heart-fill");
        heartFle.style.color = "rgb(242, 37, 10)";

    }
    else {
        coeurFle.splice(i, 1, "bi bi-heart");
        heartFle.classList.replace("bi-heart-fill", "bi-heart");
        heartFle.style.color = "black";
    }
}

function cartStyleFle() {
    if (cartFle.className == "bi bi-cart") {
        panierFle.splice(i, 1, "bi bi-cart-fill");
        cartFle.classList.replace("bi-cart", "bi-cart-fill");
        cartFle.style.color = "#1B4D2E";
    }
    else {
        panierFle.splice(i, 1, "bi bi-cart");
        cartFle.classList.replace("bi-cart-fill", "bi-cart");
        cartFle.style.color = "black";
    }
}
document.querySelector(".carrouFleurs .carrouPdtIcones .heart").addEventListener("click", heartStyleFle);
document.querySelector(".carrouFleurs .carrouPdtIcones .cart").addEventListener("click", cartStyleFle);

/*-----------------------------------Carrousel Plantes-----------------------------------*/
const blockDrPlantes = document.querySelector(".carrouPlantes .droite")
const blockGaPlantes = document.querySelector(".carrouPlantes .gauche")

let blockImgPla = document.querySelector(".carrouPlantes .carrouPdt img")
let blockNomPla = document.querySelector(".carrouPlantes .carrouPdt .bestNom")
let blockPrixPla = document.querySelector(".carrouPlantes .carrouPdt .bestPrix")
let blockDescPla = document.querySelector(".carrouPlantes .carrouPdt .bestDesc")

let heartPla = document.querySelector(".carrouPlantes .carrouPdtIcones .bi-heart");
let cartPla = document.querySelector(".carrouPlantes .carrouPdtIcones .bi-cart");


let imagesPlantes = ["images/plantes/monstera.png",
    "images/plantes/caillou.png",
    "images/plantes/maranta_lemon_lime.png",
    "images/plantes/caladium.png",
    "images/plantes/calathea.png"
]

let nomPlantes = [
    'Monstera',
    'Plante Caillou',
    "Maranta Lemon",
    "Caladium",
    "Calathea"

]

let prixPlantes = [
    "67,67€",
    "8,19€",
    "17,80€",
    "16,34€",
    "22,99€"
]

let descriptionPlantes = [

    "Le monstera (Monstera deliciosa) est une plante tropicale originaire des forêts d'Amérique centrale, appréciée pour ses grandes feuilles découpées qui apportent une ambiance exotique et décorative en intérieur.",
    "La plante caillou (Lithops sp.) est une plante vivace succulente originaire des zones rocheuses et semi-désertiques d'Afrique du Sud, qui imite les pierres pour se fondre dans son environnement et limiter la perte d'eau.",
    "La maranta Lemon Lime (Maranta leuconeura) est une plante tropicale originaire d'Amérique du Sud, caractérisée par son feuillage lumineux et ses feuilles qui se replient la nuit, lui valant le surnom de plante prière.",
    "Le caladium (Caladium bicolor), cultivé à partir de tubercules, est une plante tropicale originaire d'Amérique du Sud, reconnue pour son feuillage coloré aux motifs contrastés très décoratifs.",
    "La calathea orbifolia (Calathea orbifolia) est une plante tropicale originaire d'Amérique du Sud, appréciée pour ses grandes feuilles arrondies aux motifs élégants, idéale pour créer une atmosphère apaisante."
]
let coeurPla = [
    "bi bi-heart",
    "bi bi-heart",
    "bi bi-heart",
    "bi bi-heart",
    "bi bi-heart"
]

let panierPla = [
    "bi bi-cart",
    "bi bi-cart",
    "bi bi-cart",
    "bi bi-cart",
    "bi bi-cart"
]

let y = 0;

function addPla() {
    if (y < imagesPlantes.length - 1) {
        y++
    } else {
        y = 0
    }
    blockImgPla.src = imagesPlantes[y]
    blockNomPla.textContent = nomPlantes[y]
    blockPrixPla.textContent = prixPlantes[y]
    blockDescPla.textContent = descriptionPlantes[y]

    heartPla.className = coeurPla[y]
    if (heartPla.className == "bi bi-heart-fill") {
        heartPla.style.color = "rgb(242, 37, 10)";
    }
    if (heartPla.className == "bi bi-heart") {
        heartPla.style.color = "black";
    }

    cartPla.className = panierPla[y];
    if (cartPla.className == "bi bi-cart-fill") {
        cartPla.style.color = "#1B4D2E";
    }
    if (cartPla.className == "bi bi-cart") {
        cartPla.style.color = "black";
    }
}

function moinsPla() {
    if (y > 0) {
        y--
    } else {
        y = imagesPlantes.length - 1
    }
    blockImgPla.src = imagesPlantes[y]
    blockNomPla.textContent = nomPlantes[y]
    blockPrixPla.textContent = prixPlantes[y]
    blockDescPla.textContent = descriptionPlantes[y]

    heartPla.className = coeurPla[y]
    if (heartPla.className == "bi bi-heart-fill") {
        heartPla.style.color = "rgb(242, 37, 10)";
    }
    if (heartPla.className == "bi bi-heart") {
        heartPla.style.color = "black";
    }

    cartPla.className = panierPla[y];
    if (cartPla.className == "bi bi-cart-fill") {
        cartPla.style.color = "#1B4D2E";
    }
    if (cartPla.className == "bi bi-cart") {
        cartPla.style.color = "black";
    }


}
blockDrPlantes.addEventListener("click", addPla);
blockGaPlantes.addEventListener("click", moinsPla);

function heartStylePla() {
    if (heartPla.className == "bi bi-heart") {
        coeurPla.splice(y, 1, "bi bi-heart-fill");
        heartPla.classList.replace("bi-heart", "bi-heart-fill");
        heartPla.style.color = "rgb(242, 37, 10)";

    }
    else {
        coeurPla.splice(y, 1, "bi bi-heart");
        heartPla.classList.replace("bi-heart-fill", "bi-heart");
        heartPla.style.color = "black";
    }
}

function cartStylePla() {
    if (cartPla.className == "bi bi-cart") {
        panierPla.splice(y, 1, "bi bi-cart-fill");
        cartPla.classList.replace("bi-cart", "bi-cart-fill");
        cartPla.style.color = "#1B4D2E";
    }
    else {
        panierPla.splice(y, 1, "bi bi-cart");
        cartPla.classList.replace("bi-cart-fill", "bi-cart");
        cartPla.style.color = "black";
    }
}
document.querySelector(".carrouPlantes .carrouPdtIcones .heart").addEventListener("click", heartStylePla);
document.querySelector(".carrouPlantes .carrouPdtIcones .cart").addEventListener("click", cartStylePla);

