$('.carousel').carousel({
    interval: 2000
})


// document.querySelectorAll = $()
$("#services a").click(function(e) {
    e.preventDefault()
    if ($(this).html() == "Read More »") {
        // $(this).parent().parent().children("p").data("text", $(this).parent().parent().children("p").text())
        $(this).parent().parent().children("p").append("pfjapfha pfihpai paj fpaj jf pafjafi ajfihaf oaifh z uz uz uzhddddddddd zoij pf jfp ofj pofjpojfeopjf epojf pjf oezifhozihfeohf oefh meofh jh ofhs ff ùfopj pefja foef eùfiejf")
        $(this).html("Read Less &raquo;")
    } else {
        $(this).html("Read More »")
            // $(this).parent().parent().children("p").data("text", $(this).parent().parent().children("p").text())
    }
})

/******************* faire apparaitre une image au survol de la souris **********************/
$("#intro img").mouseenter(function() {
    $(this).attr("src", "https://sophie-g.net/photo/nature/pct/chat04.jpg")
})

$("#intro img").mouseleave(function() {
    $(this).attr("src", "images/demo/450x250.gif")
})

/*****************************************/

$("#footer li").on("click", function(e) {
    e.preventDefault()
    $(this).hide() // $(this).css("display", "none")
})

// $(".one_quarter h2").on("click", function() {
//     $(this).parent(section).children("a").show()
// })

$("#footer .title").click(function() {
    $(this).next().find("li").show() //.next() = frères et soeurs suivant  .prev() = frères et soeurs précédent
})

/***************************************************/


let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
let date1 = new Date()

date1 = date1.toLocaleString('fr-FR', options) + " " + date1.getHours() + ":" + date1.getMinutes() + ":" + date1.getSeconds()

let date2 = new Date()

date2 = date2.toLocaleString('en-EN', options) + " " + date2.getHours() + ":" + date2.getMinutes() + ":" + date2.getSeconds()


$("#copyright .fl_left").text("Copyright © " + date1 + " - All Rights Reserved - Domain Name")

let isFrench = true
$("#copyright .fl_left").click(function() {
    if (isFrench) {
        $("#copyright .fl_left").text("Copyright © " + date2 + " - All Rights Reserved - Domain Name")
        isFrench = false
    } else {
        $("#copyright .fl_left").text("Copyright © " + date1 + " - All Rights Reserved - Domain Name")
        isFrench = true
    }

    // Ternaire : (isFrench) ? $("#copyright .fl_left").text("Copyright © " + date2 + " - All Rights Reserved - Domain Name") : $("#copyright .fl_left").text("Copyright © " + date1 + " - All Rights Reserved - Domain Name")
    // isFrench = (isFrench) ? false : True

})

/********************************************************/

// $(".form-group #button1id").on('click', function(e) {
//     e.preventDefault()
//     $(".form-group #textinput").val("J'ai mis du texte")
//     $(".form-group #textarea").val("J'ai encore mis du texte")
//     $("#selectbasic").val(2)
//     $("#selectmultiple").val(2)
//     $('.form-group #radios-1').attr("checked", true)
//     $('.form-group #checkboxes-1').attr("checked", true)
// })


// Correction
// $("form").submit(function(e) {
//     e.preventDefault()
//     $("#textinput").val("J'ai mis du texte")
//     $("#textarea").text("J'ai encore mis du texte")
//     $("#selectbasic").val("2")
//     $("#selectmultiple").val("2")
//     $('input[name=radios]').prop("checked", false)
//     $('input[name=radios]').eq(1).prop("checked", true)
//     $("input[name=checkboxes]").prop("checked", false)
//     $("input[name=checkboxes]").eq(1).prop("checked", true)
// })

/******************** Carroussel de 3 images différentes ******************************/

// let img = ["http://wallpaperstorage.com/uploads/posts/sci-fi-wallpaper-high-resolution/thumb/main_sci-fi-wallpaper-high-resolution.jpg",
//     "https://cdn.travelpulse.com/images/37abedf4-a957-df11-b491-006073e71405/2ead3920-3735-449a-9a76-0805ca78f0cc/290x180.jpeg",
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/65_HP_13_9763.jpg/291px-65_HP_13_9763.jpg"
// ]

// let img1 = $("#services .one_third:first-child img").attr('src', img[0])
// let img2 = $("#services .marre").attr('src', img[1])
// let img3 = $("#services .lastbox img").attr('src', img[2])

// $("#services img").on("click", function() {

// })

//Correction

$("#services img").eq(0).attr('src', "http://wallpaperstorage.com/uploads/posts/sci-fi-wallpaper-high-resolution/thumb/main_sci-fi-wallpaper-high-resolution.jpg")
$("#services img").eq(1).attr('src', "https://cdn.travelpulse.com/images/37abedf4-a957-df11-b491-006073e71405/2ead3920-3735-449a-9a76-0805ca78f0cc/290x180.jpeg")
$("#services img").eq(2).attr('src', "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/65_HP_13_9763.jpg/291px-65_HP_13_9763.jpg")

$("#services img").on('click', function() {
    let stockage = $("#services img").eq(0).attr('src')
    $("#services img").eq(0).attr('src', $("#services img").eq(2).attr('src'))
    $("#services img").eq(2).attr('src', $("#services img").eq(1).attr('src'))
    $("#services img").eq(1).attr('src', stockage)
})

/*************************************************/

// let imgSwitch = ["https://www.autohaus.de/sixcms/media.php/3295/ferrari_458_italia.jpg",
//     "https://secure.i.telegraph.co.uk/multimedia/archive/00830/motoring-graphics-2_830128a.jpg",
//     "https://secure.i.telegraph.co.uk/multimedia/archive/00830/motoring-graphics-2_830530a.jpg"
// ]

// let isImg = true;
// $("#services .more").on("mouseenter", function(e) {
//     $("#services img").eq(0).attr('src', imgSwitch[0])
//     $("#services img").eq(1).attr('src', imgSwitch[1])
//     $("#services img").eq(2).attr('src', imgSwitch[2])
// })

// Correction

let isOriginal = true;
let arrayOrigin = [];

$(".one_third a").mouseenter(function() {
    // Sauvegarde de l'état actuel du tableau
    if (isOriginal == true) {
        arrayOrigin.push($("#services img").eq(0).attr('src')) // Veut dire que cette image est stocké dans le tableau arrayOrigin en position 0
        arrayOrigin.push($("#services img").eq(1).attr('src')) // Veut dire que cette image est stocké dans le tableau arrayOrigin en position 1
        arrayOrigin.push($("#services img").eq(2).attr('src')) // Veut dire que cette image est stocké dans le tableau arrayOrigin en position 2
            // Change les images par de nouvelles
        $("#services img").eq(0).attr("src", "https://www.autohaus.de/sixcms/media.php/3295/ferrari_458_italia.jpg")
        $("#services img").eq(1).attr("src", "https://secure.i.telegraph.co.uk/multimedia/archive/00830/motoring-graphics-2_830128a.jpg")
        $("#services img").eq(2).attr("src", "https://secure.i.telegraph.co.uk/multimedia/archive/00830/motoring-graphics-2_830530a.jpg")
    } else {
        // Rappel des images originales à leur position initiales quand elles ont été stockées
        $("#services img").eq(0).attr('src', arrayOrigin[0])
        $("#services img").eq(1).attr('src', arrayOrigin[1])
        $("#services img").eq(2).attr('src', arrayOrigin[2])
            // On vide le tableau
        arrayOrigin = []
    }

    isOriginal = (isOriginal) ? false : true // Condition pour alterner la condition true / false
})


/*******************************************************/

$("form").submit(function(e) {
    e.preventDefault()
    let textinput = $("#textinput").val().trim(); // .trim() permet de supprimer les espaces
    if (textinput.length < 1) { // textinput == "" fonctionne également
        $("#textinput").css("border-color", "red")
        $("#textinputerror").show()
    } else {
        $("#textinput").css("border-color", "green")
        $("#textinputerror").hide()
    }

    let textarea = $("#textarea").val().trim();
    (textarea == "") ? $("#textarea").css("border-color", "red"): $("#textarea").css("border-color", "green")

    let selectbasic = $("#selectbasic").val().trim();
    if (selectbasic == "") {
        $("#selectbasic").css("border-color", "red")
    } else {
        $("#selectbasic").css("border-color", "green")
    }

    let selectmultiple = $("#selectmultiple").val();
    (selectmultiple == "") ? $("#selectmultiple").css("border-color", "red"): $("#selectmultiple").css("border-color", "green")

    let formcomplete = textinput && textarea && selectbasic && selectmultiple;
    (formcomplete == true) ? $("form").hide(): $("form").show()
    localStorage.setItem("data-squetuveux", $("form").serialize()) //Sauvegarde les données dans le navigateur en local Storage (sessionStorage existe également)
        // .serialize() permet de récupérer toutes les données D'UN FORMULAIRE et les convertis en une chaine de caractère
})


/*********************** Utiliser les animations css via CDN ***************************/

$("#header li").mouseenter(function() {

    // $(this) renvoie un Object JQuery avec une taille (length) qui peut être considérée comme un array
    // $(this)[0] renvoit la balise clicker (ex : <li>...</li>)

    switch ($(this)[0]) {
        case $("#header li").eq(0)[0]:
            $(this).addClass("animated  bounceOutLeft slow")
            break;
        case $("#header li").eq(1)[0]:
            $(this).addClass("animated flash slow")
            break;
        case $("#header li").eq(2)[0]:
            $(this).addClass("animated  rotateIn slower")
            break;
        case $("#header li").eq(3)[0]:
            $(this).addClass("animated  lightSpeedIn slow")
            break;
        case $("#header li").eq(4)[0]:
            $(this).addClass("animated  zoomIn slow")
            break;
        default:
            console.log("sorry")
    }
})

/********************************** Animations ******************************************/

// https://www.w3schools.com/jquery/eff_animate.asp

// $("#services h2").click(function() {
//     $(this).animate({
//         opacity: 0.5,
//         marginLeft: "65%",
//     }, 2500, function() {
//         $(this).animate({
//             opacity: 1,
//             marginLeft: "0%",
//             wordSpacing: "-=22px"
//         }, 2500)
//     })
// })

/****** Autre façon de l'écrire ******/

$("#services h2").click(function() {
    let option = { opacity: 0.5, marginLeft: "65%", wordSpacing: "+=22px" }
    $(this).animate(option, 2500, function() {
        optionOrigine = { opacity: 1, marginLeft: "0%", wordSpacing: "-=22px" }
        $(this).animate(optionOrigine, 2500)
    })
})

/*******/

$("h1").click(function(e) {
    e.preventDefault();
    $("#header h1").animate({
        wordSpacing: "+=314px"
    }, 3000, function() {
        $("#header h1").animate({
            wordSpacing: "-=314px"
        }, 3000)
    })
})

// Autre moyen

// $("h1").click(function() {
//     $(this).html('<a href="#">Basic <span>88</span></a>')
//     $("h1 span").animate({
//         marginLeft: "+=314px"
//     }, 2500, function() {
//         $(this).animate({
//             marginLeft: "-=314px"
//         }, 2500)
//     })
// })

/*************************/

$("#header h2").click(function() {
    $(this).html('<span class="first">Free HTML5</span> <span class="second" style=" position: absolute; ">Website Template</span>')
    $("#hgroup h2 .first").animate({
        marginLeft: "+=310px"
    }, 3000, function() {
        $(this).animate({
            marginLeft: "-=310px"
        }, 3000)
    })
})
$("#header h2").click(function() {
    $("#hgroup h2 .second").animate({
        right: "+=150px"
    }, 3000, function() {
        $(this).animate({
            right: "-=150px"
        }, 3000)
    })
})