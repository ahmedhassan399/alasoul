//
let btnTamlek = document.getElementById("btn-tamlek");
let btnEgar = document.getElementById("btn-egar");
$(btnEgar).click(function () {
    $(".to-le.container").slideUp(50);
    $(".to-re.container").slideToggle(300);

});
$(btnTamlek).click(function () {
    $(".to-re.container").slideUp(50);
    $(".to-le.container").slideToggle(300);
});
// ********************************
