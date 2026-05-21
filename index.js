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

/*Carrousel bestseller*/
const blockDroite = document.querySelector(".droite")
const blockGauche = document.querySelector(".gauche")

let blockImg = document.querySelector(".carrouPdt img")
let blockType = document.querySelector(".carrouPdtTexte .bestType")
let blockNom = document.querySelector(".carrouPdtTexte .bestNom")
let blockPrix = document.querySelector(".carrouPdtTexte .bestPrix")
let blockDesc = document.querySelector(".carrouPdtTexte .bestDesc")


let heart = document.querySelector(".carrouPdtIcones .bi-heart");
let cart = document.querySelector(".carrouPdtIcones .bi-cart");


let images = ["images/fleurs/oiseau_paradis.png",
    "images/fleurs/anthurium.png",
    "images/plantes/caillou.png",
    "images/fleurs/plumeria.png",
    "images/plantes/caladium.png",
]
let type = ['Fleur',
    'Fleur',
    'Plante',
    'Fleur',
    'Plante'
]

let nom = ['Oiseau paradis',
    'Anthurium',
    'Plantes-cailloux',
    'Plumeria',
    'Caladium-Tuber'
]

let prix = [
    "25,99€",
    "18,66€",
    "8,19€",
    "15,47€",
    "16,34€"
]

let description = [
    "L'oiseau du paradis (Strelitzia reginae) est une plante vivace originaire d'Afrique du Sud, célèbre pour ses fleurs spectaculaires rappelant la forme d'un oiseau exotique, apportant une touche tropicale et élégante.",
    "L'anthurium (Anthurium sp.) est une plante tropicale originaire d'Amérique du Sud, reconnaissable à ses fleurs brillantes en forme de cœur et sa longue floraison, idéale pour apporter une touche exotique en intérieur.",
    "La plante caillou (Lithops sp.) est une plante vivace succulente originaire des zones rocheuses et semi-désertiques d'Afrique du Sud, qui imite les pierres pour se fondre dans son environnement et limiter la perte d'eau.",
    "Le plumeria (Plumeria sp.), également appelé frangipanier, est un arbuste tropical originaire des régions chaudes d'Amérique centrale et des Caraïbes, apprécié pour ses fleurs parfumées et colorées qui évoquent les paysages exotiques et ensoleillés.",
    "Le caladium (Caladium bicolor), cultivé à partir de tubercules, est une plante tropicale originaire d'Amérique du Sud, reconnue pour son feuillage coloré aux motifs contrastés très décoratifs."
]

let coeur = [
    "bi bi-heart",
    "bi bi-heart",
    "bi bi-heart",
    "bi bi-heart",
    "bi bi-heart"
]

let panier = [
    "bi bi-cart",
    "bi bi-cart",
    "bi bi-cart",
    "bi bi-cart",
    "bi bi-cart"
]


let i = 0

function add() {
    if (i < images.length - 1) {
        i++
    } else {
        i = 0
    }
    blockImg.src = images[i]
    blockType.textContent = type[i]
    blockNom.textContent = nom[i]
    blockPrix.textContent = prix[i]
    blockDesc.textContent = description[i]

    heart.className = coeur[i]
    if (heart.className == "bi bi-heart-fill") {
        heart.style.color = "rgb(242, 37, 10)";
    }
    if (heart.className == "bi bi-heart") {
        heart.style.color = "black";
    }

    cart.className = panier[i];
    if (cart.className == "bi bi-cart-fill") {
        cart.style.color = "#1B4D2E";
    }
    if (cart.className == "bi bi-cart") {
        cart.style.color = "black";
    }

    console.log("add" + i)
}

function moins() {
    if (i > 0) {
        i--
    } else {
        i = images.length - 1
    }
    blockImg.src = images[i]
    blockType.textContent = type[i]
    blockNom.textContent = nom[i]
    blockPrix.textContent = prix[i]
    blockDesc.textContent = description[i]

    heart.className = coeur[i]
    if (heart.className == "bi bi-heart-fill") {
        heart.style.color = "rgb(242, 37, 10)";
    }
    if (heart.className == "bi bi-heart") {
        heart.style.color = "black";
    }

    cart.className = panier[i];
    if (cart.className == "bi bi-cart-fill") {
        cart.style.color = "#1B4D2E";
    }
    if (cart.className == "bi bi-cart") {
        cart.style.color = "black";
    }

    console.log("moins" + i)

}
blockDroite.addEventListener("click", add);
blockGauche.addEventListener("click", moins);

function heartStyle() {
    console.log("avent if et else : " + coeur);
    if (heart.className == "bi bi-heart") {
        coeur.splice(i, 1, "bi bi-heart-fill");
        heart.classList.replace("bi-heart", "bi-heart-fill");
        heart.style.color = "rgb(242, 37, 10)";

    }
    else {
        coeur.splice(i, 1, "bi bi-heart");
        heart.classList.replace("bi-heart-fill", "bi-heart");
        heart.style.color = "black";
    }
}

function cartStyle() {
    if (cart.className == "bi bi-cart") {
        panier.splice(i, 1, "bi bi-cart-fill");
        cart.classList.replace("bi-cart", "bi-cart-fill");
        cart.style.color = "#1B4D2E";
    }
    else {
        panier.splice(i, 1, "bi bi-cart");
        cart.classList.replace("bi-cart-fill", "bi-cart");
        cart.style.color = "black";
    }
}
document.querySelector(".carrouPdtIcones .heart").addEventListener("click", heartStyle);

document.querySelector(".carrouPdtIcones .cart").addEventListener("click", cartStyle);