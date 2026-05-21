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

let blockImg = document.querySelector(".carrouPdtAccessoire img")
let blockNom = document.querySelector(".carrouPdtTexte .bestNom")
let blockPrix = document.querySelector(".carrouPdtTexte .bestPrix")
let blockDesc = document.querySelector(".carrouPdtTexte .bestDesc")


let heart = document.querySelector(".carrouPdtIcones .bi-heart");
let cart = document.querySelector(".carrouPdtIcones .bi-cart");

let choixCouleur = document.getElementsByName("color");
let fieldset = document.querySelector("fieldset");

let images = ["images/accessoires/gants_v1.png",
    "images/accessoires/arrosoir.png",
    "images/accessoires/set_jardinage.png"]

let nom = [
    'Les gants de jardinage',
    'Arrosoir',
    'Kit à outils de jardinages']

let prix = [
    "6,23€",
    "9,99€",
    "25.09€"
]

let description =




[
    "Les gants de jardinage sont des accessoires indispensables conçus pour protéger les mains lors des travaux extérieurs, évitant coupures et irritations tout en assurant confort et précision.",
    "L'arrosoir est un outil essentiel permettant d''apporter de l''eau de manière douce et contrôlée aux plantes, favorisant un arrosage précis adapté à leurs besoins.",
    "Le kit d'outils de jardinage (9 pièces) est un ensemble complet permettant de réaliser les tâches essentielles comme planter, rempoter et entretenir les plantes avec efficacité."
]

let coeur = [
    "bi bi-heart",
    "bi bi-heart",
    "bi bi-heart"
]

let panier = [
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

    if (i==0){ /*Affiche les btn radio si c'est des gants*/
        fieldset.style.display = "block";
    }
    else{
        fieldset.style.display = "none";
    }
    blockImg.src = images[i]
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

    if (i==0){ /*Affiche les btn radio si c'est des gants*/
        fieldset.style.display = "block";
    }
    else{
        fieldset.style.display = "none";
    }
    blockImg.src = images[i]
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




    document.querySelector("#green").addEventListener("change", function () {
        blockImg.src = "images/accessoires/gants_v1.png";
    });

    document.querySelector("#red").addEventListener("change", function () {
        blockImg.src = "images/accessoires/gants_v2.png";
    });

    document.querySelector("#yellow").addEventListener("change", function () {
        blockImg.src = "images/accessoires/gants_v3.png";
    });


    document.querySelector("#blue").addEventListener("change", function () {
        blockImg.src = "images/accessoires/gants_v4.png";
    });




// var radios = document.getElementsByName('choix');
// var valeur;
// for(var i = 0; i < boutons.length; i++){
//  if(boutons[i].checked){
//  valeur = boutons[i].value;
//  }


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