// document.querySelectorAll = $()
$("#services a").click(function(e) {
    e.preventDefault()
    if ($(this).html() == "Read More »") {
        jQuery.data(
            $(this).parent().parent().children("p"),
            "text",
            $(this).parent().parent().children("p").text()
        )
        $(this).parent().parent().children("p").append("pfjapfha pfihpai paj fpaj jf pafjafi ajfihaf oaifh z uz uz uzhddddddddd zoij pf jfp ofj pofjpojfeopjf epojf pjf oezifhozihfeohf oefh meofh jh ofhs ff ùfopj pefja foef eùfiejf")
        $(this).html("Read Less &raquo;")
    } else {
        $(this).html("Read More »")
    }
})