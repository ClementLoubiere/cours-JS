/**
 * Documentation
 * https://developer.mozilla.org/fr/docs/Web/API/WindowTimers/setInterval
 * https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random
 */

/**
 * Différence entre tableau et object JS
 **/

// let obj1 = { nom: "Loubière", prénom: "Clément" };
// let obj2 = { nom: "Léponge", prénom: "Bob" };
// let tab = [obj1, obj2];


/************************************* Exercie 1 : Caroussel *******************************************/
let imgCaroussel = [
    "http://www.pdgdesign.be/img/slides/02.png",
    "http://www.astrokiwi.com/files/stacks_image_21.jpg", "https://www.depancomputer.com/sugar/wp-content/uploads/2013/04/canada-alberta-banff-national-park-lac-louise-16-images-photo-originale-19-355-x-9-112-px.jpg"
];

function test() {
    console.info("Toto");
}

let occurrenceCaroussel = 0;

setInterval(function() {
    let img = document.querySelector('#slider img');
    // On définit que la source de l'image appel le tableau du Caroussel d'image en commençant par l'index 0 (donc la 1ere image)
    img.src = imgCaroussel[occurrenceCaroussel];
    // On incrémente
    occurrenceCaroussel++;
    // On définit une boucle pour indiquer que lorsque le Caroussel atteint le dernier index du tableau (.length) il recommence à 0
    if (occurrenceCaroussel == imgCaroussel.length) {
        occurrenceCaroussel = 0;
    }
}, 5000);

/***************************** Exercie 2: Créer des mots aléatoire via texte existant ***********************************/

/* 
 * randomText - Rend une chaine de caractère de manière aléatoire
 * @param text: String - Chaine de caractère à mélanger
 */
function randomText(text = "Mike le format' heure") {
    let tableau = text.split(""); // Convertir une chaine de caractères en un tableau de caractères
    tableau = arrayToStringRandom(tableau).join(''); // Appel de la fonction
    return tableau; // Retourne une string aléatoire
}

/**
 * arrayToStringRandom - Renvoi un nouveau tableau avec les éléments de l'ancien mais de manière aléatoire
 * @param {*} tab=[] - Tableau à mélanger
 * @return newArray - Un nouveau tableau
 **/
function arrayToStringRandom(tab = []) {

    //Les variables utilisées dans des boucles doivent être déclarées avant
    let tabRandom = []; // Tableau des entiers déjà récupérer - Eviter les doublosn de caractères
    let random, newArray = []; // Création de deux variables - random est la variable qui stockera le nb aléatoire - newArray sera le nouveau tableau créé à partir des nb aléatoires
    for (let i = 0; i < tab.length; i++) { // Permet de générer tous les caractères selon la taille du tableau 
        do {
            random = getRandomInt(0, tab.length); // Retourne un entier aléatoire compris entre 0 et la taille du tableau -tab-
        } while (tabRandom.includes(random)); // Vérifie si l'entier a déjà été récupérer, si oui il relance l'opération, si non, il s'arrête

        tabRandom.push(random); // Ajouter l'entier aléatoire dans le tableau -tabRandom-
        newArray.push(tab[random]); // Ajouter le caractère aléatoire dans le tableau -newArray-

        console.log(random);
    }

    return newArray; // Retourne le nouveau tableau
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let baliseA = document.querySelectorAll("#header > nav a");
for (let i = 0; i < baliseA.length; i++) {
    baliseA[i].innerHTML = randomText(baliseA[i].innerHTML); // Appel de la fonction
}
console.log(baliseA);

/*************************** Exercice 3: Cliquez sur 3 mages pour les changer en images différentes *****************************/

// Tableau des images
let imgClick = ["https://allfreshwallpapers.com/uploads/posts/wallpaper-wide-nature/thumb/main_wallpaper-wide-nature.jpg",
    "http://images4.fanpop.com/image/photos/20500000/Kuttanad-kerala-20552751-290-180.jpg",
    "https://allfreshwallpapers.com/uploads/posts/wallpaper-in-hd-of-nature/thumb/main_wallpaper-in-hd-of-nature.jpg"
];
// On récupère toutes nos images se trouvant dans l'id services
let change = document.querySelectorAll('#services img');
console.log(change);

for (let i = 0; i < change.length; i++) { // Boucle pour parcourir notre tableau d'img(dataImagesHtml) afin de mettre un évènement au click à chacunes d'entre elles  
    change[i].addEventListener('click', function() {
        change[i].src = imgClick[i]; // Modification de la source de l'img
    })
};

/********************************** Exercice 4: Ajouter du texte avec le Read More ************************************/

// let readMore = document.querySelector("#services a");
// let moreText = document.querySelector("#services p");
// let readLess = document.querySelector("#services a");

// console.log(moreText);

// readMore.addEventListener('click', function() {
//     moreText.textContent += "Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna.Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna.Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna.";
//     readMore.textContent = "";
//     readMore.textContent += "Read Less >>";

//     readLess.addEventListener('click', function() {
//         moreText.textContent = "Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna.";
//         readLess.textContent = "";
//         readLess.textContent += "Read More >>"
//     })
// })

/**************************** Exercice 4: Correction ********************************/

let readBaliseA = document.querySelectorAll("#services a")[0]; // Récupération des balises a dans l'id serviceset affectation de la 1ere balise a dans la variable (readBaliseA)
const textMoreLess = document.querySelectorAll("#services figcaption p")[0].innerHTML; // Sauvegarde du texte original de la balise p

readBaliseA.addEventListener("click", function() {
    event.preventDefault(); //Supprime l'évènement par défaut

    let paragrapheRead = document.querySelectorAll("#services figcaption p")[0];

    if (readBaliseA.innerHTML == "Read More »") { // Vérifie le texte de la balise a (readBaliseA). Si son texte est le texte d'originedans le fichier html, on rentre dans le if
        readBaliseA.innerHTML = "Read Less &raquo;"
        paragrapheRead.innerHTML += "Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna.Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna.Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna."

    } else { // SI la balise a (readBaliseA) affiche "Read Less", on rentre dans le else
        readBaliseA.innerHTML = "Read More »"
        paragrapheRead.innerHTML = textMoreLess
    }
})

/********************************* Exemple de création et d'utilisation d'objet avec date **************************************/

// let personne = {
//     nom: "LOUBIERE",
//     prenom: "Clément",
//     dateNaiss: "19 may 1990",
//     children: [{
//             nom: "LOUBIERE",
//             prenom: "Crid",
//             dateNaiss: "20 february 2020",
//             children: []
//         },
//         {
//             nom: "LOUBIERE",
//             prenom: "Cridounette",
//             dateNaiss: "10 october 2023",
//             children: []
//         },
//     ],
//     age: function() {
//         let anniversaire = new Date(this.dateNaiss); // On génère une date à partir d'une année ultérieure (ici la date de naissance) - getTime() => millisecondes depuis le 1er janvier 1970
//         return new Number((new Date().getTime() - anniversaire.getTime()) / 31536000000).toFixed(0) //On retourne un nombre ( ( la date d'aujourd'hui en millisecondes - dateNaiss en millisecondes )/ une année en millisecondes ) [On peut le faire avec l'année ou les heures ou les secondes etc]
//     }
// }
// console.log(personne)
// console.log(personne.age())