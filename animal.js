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

/*-----------------------------------Carrousel Oiseaux-----------------------------------*/const blockDrOiseau = document.querySelector(".carrouOiseaux .droite")
const blockGaOiseau = document.querySelector(".carrouOiseaux .gauche")

let blockImgOis = document.querySelector(".carrouOiseaux .carrouPdt img")
let blockNomOis = document.querySelector(".carrouOiseaux .carrouPdt .bestNom")
let blockPrixOis = document.querySelector(".carrouOiseaux .carrouPdt .bestPrix")
let blockDescOis = document.querySelector(".carrouOiseaux .carrouPdt .bestDesc")

let heartOis = document.querySelector(".carrouOiseaux .carrouPdtIcones .bi-heart");
let cartOis = document.querySelector(".carrouOiseaux .carrouPdtIcones .bi-cart");


let imagesOiseaux = ["images/nourriture_animaux/melange_oiseau.png",
    "images/nourriture_animaux/tournesol.png"
]

let nomOiseaux = [
    'Mélange graines',
    'Graines de tournesol']

let prixOiseaux = [
    "5,99€",
    "8.09€"
]

let descriptionOiseaux = [
    "Mélange équilibré de graines pour l'alimentation complète des oiseaux.",
    "Graines premium pour oiseaux sauvages et domestiques, riches en nutriments.",
]
let coeurOis = [
    "bi bi-heart",
    "bi bi-heart"
]

let panierOis = [
    "bi bi-cart",
    "bi bi-cart"
]

let i = 0;

function addOis() {
    if (i < imagesOiseaux.length - 1) {
        i++
    } else {
        i = 0
    }
    blockImgOis.src = imagesOiseaux[i]
    blockNomOis.textContent = nomOiseaux[i]
    blockPrixOis.textContent = prixOiseaux[i]
    blockDescOis.textContent = descriptionOiseaux[i]

    heartOis.className = coeurOis[i]
    if (heartOis.className == "bi bi-heart-fill") {
        heartOis.style.color = "rgb(242, 37, 10)";
    }
    if (heartOis.className == "bi bi-heart") {
        heartOis.style.color = "black";
    }

    cartOis.className = panierOis[i];
    if (cartOis.className == "bi bi-cart-fill") {
        cartOis.style.color = "#1B4D2E";
    }
    if (cartOis.className == "bi bi-cart") {
        cartOis.style.color = "black";
    }
}

function moinsOis() {
    if (i > 0) {
        i--
    } else {
        i = imagesOiseaux.length - 1
    }
    blockImgOis.src = imagesOiseaux[i]
    blockNomOis.textContent = nomOiseaux[i]
    blockPrixOis.textContent = prixOiseaux[i]
    blockDescOis.textContent = descriptionOiseaux[i]

    heartOis.className = coeurOis[i]
    if (heartOis.className == "bi bi-heart-fill") {
        heartOis.style.color = "rgb(242, 37, 10)";
    }
    if (heartOis.className == "bi bi-heart") {
        heartOis.style.color = "black";
    }

    cartOis.className = panierOis[i];
    if (cartOis.className == "bi bi-cart-fill") {
        cartOis.style.color = "#1B4D2E";
    }
    if (cartOis.className == "bi bi-cart") {
        cartOis.style.color = "black";
    }

}
blockDrOiseau.addEventListener("click", addOis);
blockGaOiseau.addEventListener("click", moinsOis);

function heartStyleOis() {
    if (heartOis.className == "bi bi-heart") {
        coeurOis.splice(i, 1, "bi bi-heart-fill");
        heartOis.classList.replace("bi-heart", "bi-heart-fill");
        heartOis.style.color = "rgb(242, 37, 10)";

    }
    else {
        coeurOis.splice(i, 1, "bi bi-heart");
        heartOis.classList.replace("bi-heart-fill", "bi-heart");
        heartOis.style.color = "black";
    }
}

function cartStyleOis() {
    if (cartOis.className == "bi bi-cart") {
        panierOis.splice(i, 1, "bi bi-cart-fill");
        cartOis.classList.replace("bi-cart", "bi-cart-fill");
        cartOis.style.color = "#1B4D2E";
    }
    else {
        panierOis.splice(i, 1, "bi bi-cart");
        cartOis.classList.replace("bi-cart-fill", "bi-cart");
        cartOis.style.color = "black";
    }
}
document.querySelector(".carrouOiseaux .carrouPdtIcones .heart").addEventListener("click", heartStyleOis);
document.querySelector(".carrouOiseaux .carrouPdtIcones .cart").addEventListener("click", cartStyleOis);

/*-----------------------------------Carrousel Poissons-----------------------------------*/
const blockDrPoissons = document.querySelector(".carrouPoissons .droite")
const blockGaPoissons = document.querySelector(".carrouPoissons .gauche")

let blockImgPoi = document.querySelector(".carrouPoissons .carrouPdt img")
let blockNomPoi = document.querySelector(".carrouPoissons .carrouPdt .bestNom")
let blockPrixPoi = document.querySelector(".carrouPoissons .carrouPdt .bestPrix")
let blockDescPoi = document.querySelector(".carrouPoissons .carrouPdt .bestDesc")

let heartPoi = document.querySelector(".carrouPoissons .carrouPdtIcones .bi-heart");
let cartPoi = document.querySelector(".carrouPoissons .carrouPdtIcones .bi-cart");


let imagesPoissons = ["images/nourriture_animaux/granule_poisson.png",
    "images/nourriture_animaux/flocon_poisson.png"
]

let nomPoissons = [
    'Granules pour poissons',
    'Flocons pour poissons']

let prixPoissons = [
    "5,47€",
    "6,70€"
]

let descriptionPoissons = [
    "Granules nutritifs pour poissons d''aquarium, riche en protéines.",
    "Flocons complets pour poissons tropicaux et eau froide.",
]
let coeurPoi = [
    "bi bi-heart",
    "bi bi-heart"
]

let panierPoi = [
    "bi bi-cart",
    "bi bi-cart"
]

let y = 0;

function addPoi() {
    if (y < imagesPoissons.length - 1) {
        y++
    } else {
        y = 0
    }
    blockImgPoi.src = imagesPoissons[y]
    blockNomPoi.textContent = nomPoissons[y]
    blockPrixPoi.textContent = prixPoissons[y]
    blockDescPoi.textContent = descriptionPoissons[y]

    heartPoi.className = coeurPoi[y]
    if (heartPoi.className == "bi bi-heart-fill") {
        heartPoi.style.color = "rgb(242, 37, 10)";
    }
    if (heartPoi.className == "bi bi-heart") {
        heartPoi.style.color = "black";
    }

    cartPoi.className = panierPoi[y];
    if (cartPoi.className == "bi bi-cart-fill") {
        cartPoi.style.color = "#1B4D2E";
    }
    if (cartPoi.className == "bi bi-cart") {
        cartPoi.style.color = "black";
    }
}

function moinsPoi() {
    if (y > 0) {
        y--
    } else {
        y = imagesPoissons.length - 1
    }
    blockImgPoi.src = imagesPoissons[y]
    blockNomPoi.textContent = nomPoissons[y]
    blockPrixPoi.textContent = prixPoissons[y]
    blockDescPoi.textContent = descriptionPoissons[y]

    heartPoi.className = coeurPoi[y]
    if (heartPoi.className == "bi bi-heart-fill") {
        heartPoi.style.color = "rgb(242, 37, 10)";
    }
    if (heartPoi.className == "bi bi-heart") {
        heartPoi.style.color = "black";
    }

    cartPoi.className = panierPoi[y];
    if (cartPoi.className == "bi bi-cart-fill") {
        cartPoi.style.color = "#1B4D2E";
    }
    if (cartPoi.className == "bi bi-cart") {
        cartPoi.style.color = "black";
    }


}
blockDrPoissons.addEventListener("click", addPoi);
blockGaPoissons.addEventListener("click", moinsPoi);

function heartStylePoi() {
    if (heartPoi.className == "bi bi-heart") {
        coeurPoi.splice(y, 1, "bi bi-heart-fill");
        heartPoi.classList.replace("bi-heart", "bi-heart-fill");
        heartPoi.style.color = "rgb(242, 37, 10)";

    }
    else {
        coeurPoi.splice(y, 1, "bi bi-heart");
        heartPoi.classList.replace("bi-heart-fill", "bi-heart");
        heartPoi.style.color = "black";
    }
}

function cartStylePoi() {
    if (cartPoi.className == "bi bi-cart") {
        panierPoi.splice(y, 1, "bi bi-cart-fill");
        cartPoi.classList.replace("bi-cart", "bi-cart-fill");
        cartPoi.style.color = "#1B4D2E";
    }
    else {
        panierPoi.splice(y, 1, "bi bi-cart");
        cartPoi.classList.replace("bi-cart-fill", "bi-cart");
        cartPoi.style.color = "black";
    }
}
document.querySelector(".carrouPoissons .carrouPdtIcones .heart").addEventListener("click", heartStylePoi);
document.querySelector(".carrouPoissons .carrouPdtIcones .cart").addEventListener("click", cartStylePoi);



/*-----------------------------------Carrousel Reptile-----------------------------------*/
const blockDrRep = document.querySelector(".carrouReptiles .droite")
const blockGaRep = document.querySelector(".carrouReptiles .gauche")

let blockImgRep = document.querySelector(".carrouReptiles .carrouPdt img")
let blockNomRep = document.querySelector(".carrouReptiles .carrouPdt .bestNom")
let blockPrixRep = document.querySelector(".carrouReptiles .carrouPdt .bestPrix")
let blockDescRep = document.querySelector(".carrouReptiles .carrouPdt .bestDesc")

let heartRep = document.querySelector(".carrouReptiles .carrouPdtIcones .bi-heart");
let cartRep = document.querySelector(".carrouReptiles .carrouPdtIcones .bi-cart");


let imagesReptiles = ["images/nourriture_animaux/aliments_sec_reptile.png",
    "images/nourriture_animaux/insects_melange_reptile.png"
]

let nomReptiles = [
    'Insectes pour reptiles',
    'Herbe pour reptiles'
]

let prixReptiles = [
    "12,34€",
    "9,62€"
]

let descriptionReptiles = [
    "Insectes séchés nutritifs pour reptiles carnivores..",
    "Mélange d'herbes de toutes sortes et légumes déshydratés pour reptiles herbivores.",
]
let coeurRep = [
    "bi bi-heart",
    "bi bi-heart"
]

let panierRep = [
    "bi bi-cart",
    "bi bi-cart"
]

let x = 0;

function addRep() {
    
    if (x < imagesReptiles.length - 1) {
        x++;
    } else {
        x = 0
    }
    blockImgRep.src = imagesReptiles[x]
    blockNomRep.textContent = nomReptiles[x]
    blockPrixRep.textContent = prixReptiles[x]
    blockDescRep.textContent = descriptionReptiles[x]
 
    heartRep.className = coeurRep[x]
    if (heartRep.className == "bi bi-heart-fill") {
        heartRep.style.color = "rgb(242, 37, 10)";
       
    }
    if (heartRep.className == "bi bi-heart") {
        heartRep.style.color = "black";
    }

    cartRep.className = panierRep[x];
    if (cartRep.className == "bi bi-cart-fill") {
        cartRep.style.color = "#1B4D2E";
    }
    if (cartRep.className == "bi bi-cart") {
        cartRep.style.color = "black";
    }
}

function moinsRep() {
    if (x > 0) {
        x--
    } else {
        x = imagesReptiles.length - 1
    }
    blockImgRep.src = imagesReptiles[x]
    blockNomRep.textContent = nomReptiles[x]
    blockPrixRep.textContent = prixReptiles[x]
    blockDescRep.textContent = descriptionReptiles[x]

    heartRep.className = coeurRep[x]
    if (heartRep.className == "bi bi-heart-fill") {
        heartRep.style.color = "rgb(242, 37, 10)";
    }
    if (heartRep.className == "bi bi-heart") {
        heartRep.style.color = "black";
    }

    cartRep.className = panierRep[x];
    if (cartRep.className == "bi bi-cart-fill") {
        cartRep.style.color = "#1B4D2E";
    }
    if (cartRep.className == "bi bi-cart") {
        cartRep.style.color = "black";
    }
}

blockDrRep.addEventListener("click", addRep);
blockGaRep.addEventListener("click", moinsRep);

function heartStyleRep() {
    if (heartRep.className == "bi bi-heart") {
        coeurRep[x] = "bi bi-heart-fill";
        heartRep.classList.replace("bi-heart", "bi-heart-fill");
        heartRep.style.color = "rgb(242, 37, 10)";

    }
    else {
        coeurRep[x] = "bi bi-heart";
        heartRep.classList.replace("bi-heart-fill", "bi-heart");
        heartRep.style.color = "black";
    }
}

function cartStyleRep() {
    if (cartRep.className == "bi bi-cart") {
        panierRep[x] = "bi bi-cart-fill";
        cartRep.classList.replace("bi-cart", "bi-cart-fill");
        cartRep.style.color = "#1B4D2E";
    }
    else {
        panierRep[x] = "bi bi-cart";
        cartRep.classList.replace("bi-cart-fill", "bi-cart");
        cartRep.style.color = "black";
    }
}
document.querySelector(".carrouReptiles .carrouPdtIcones .heart").addEventListener("click", heartStyleRep);
document.querySelector(".carrouReptiles .carrouPdtIcones .cart").addEventListener("click", cartStyleRep);
