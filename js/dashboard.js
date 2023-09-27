// login page ***************************
$(document).ready(function () {

    $('.project').slideUp()
    $('body').on("click", ".larg div h3", function () {
        if ($(this).children('span').hasClass('close')) {
            $(this).children('span').removeClass('close');
        }
        else {
            $(this).children('span').addClass('close');
        }
        $(this).parent().children('div').slideToggle(250);
    });
    $('body').on("click", "nav ul li a", function () {
        var title = $(this).data('title');
        $('.title').children('h2').html(title);
    });
    $('#team').click(function () {
        $('.larg').children('div').fadeOut('slow');
        $('.team-company-container').fadeIn('slow');
    })
    $('#products').click(function () {
        $('.larg').children('div').fadeIn('slow');
        $('.team-company-container').fadeOut('5');
        $('.aad-project').fadeOut('5');
    })
    $('#addProject').click(function () {
        $('div').fadeOut('slow');
        $('.larg').children('.aad-project').fadeIn('slow');
    })
    $('.project .edit').on('click', function () {
        $('body').append(`<div class="popup-container">
            <form action="">
<h2>تعديل مشروع</h2>
<hr>
<div><input type="text" placeholder="..اسم المشروع" id="username" required></div>
<div><input type="email" placeholder=".. العنوان" id="email" required></div>
<div><input type="text" placeholder=".. الوصف" id="password" required></div>
<input type="submit" value="اضافة " > 
</form>
<button onclick="close()">اغلاق </button>
</div>
            `)
    })
})

let mainImg = document.querySelector('#mainImg');
let smallImages = document.querySelectorAll('.images-small') ;
smallImages.forEach( (img) => {
    img.addEventListener('click', (e) => {
        console.log(e.target)
    })
})
