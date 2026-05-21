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
let blockNom = document.querySelector(".carrouPdtTexte .bestNom")
let blockPrix = document.querySelector(".carrouPdtTexte .bestPrix")


let heart = document.querySelector(".carrouPdtIcones .bi-heart");
let cart = document.querySelector(".carrouPdtIcones .bi-cart");


let images = ["images/fleurs/oiseau_paradis.png",
    "images/plantes/caillou.png",
    "images/plantes/caladium.png",
    "images/accessoires/gants_v4.png",
    "images/nourriture_animaux/tournesol.png"
]


let nom = ['Oiseau paradis',
    'Plantes-cailloux',
    'Caladium-Tuber',
    'Gants de jardinage bleus',
    'Graines de tournesol'
]

let prix = [
    "25,99€",
    "8,19€",
    "16,34€",
    "6,23€",
    "8.09€"
]


let i = 0

function add() {
    if (i < images.length - 1) {
        i++
    } else {
        i = 0
    }
    blockImg.src = images[i]
    blockNom.textContent = nom[i]
    blockPrix.textContent = prix[i]

    console.log("add" + i)
}

function moins() {
    if (i > 0) {
        i--
    } else {
        i = images.length - 1
    }
    blockImg.src = images[i]
    blockNom.textContent = nom[i]
    blockPrix.textContent = prix[i]

    console.log("moins" + i)

}
blockDroite.addEventListener("click", add);
blockGauche.addEventListener("click", moins);



/* Onglets profil */
let boutonsOnglets = document.querySelectorAll('.tab-btn');
let panneauFavoris = document.getElementById('tab-favoris');
let panneauInfos = document.getElementById('tab-infos');
let panneauParams = document.getElementById('tab-params');

function enleverActif() {
    let boutons = document.querySelectorAll('.tab-btn');
    let panneaux = document.querySelectorAll('.tab-panel');

    for (let i = 0; i < boutons.length; i++) {
        boutons[i].classList.remove('active');
    }

    for (let y = 0; y < panneaux.length; y++) {
        panneaux[y].classList.remove('active');
    }
}

function ouvrirFavoris() {
    enleverActif();
    boutonsOnglets[0].classList.add('active');
    panneauFavoris.classList.add('active');
}

function ouvrirInfos() {
    enleverActif();
    boutonsOnglets[1].classList.add('active');
    panneauInfos.classList.add('active');
}

function ouvrirParams() {
    enleverActif();
    boutonsOnglets[2].classList.add('active');
    panneauParams.classList.add('active');
}

boutonsOnglets[0].addEventListener('click', ouvrirFavoris);
boutonsOnglets[1].addEventListener('click', ouvrirInfos);
boutonsOnglets[2].addEventListener('click', ouvrirParams);
