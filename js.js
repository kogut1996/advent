//OUT TIME


$(function(){
    $('.toggles button').click(function(){
        var get_id = this.id;
        var get_current = $('.posts .' + get_id);
        $('.post').not(get_current).hide(500);
        get_current.show(500).css({"display":"block"});
    });
    $('#all').click(function(){
        $('.post').show(500).css({"display":"block","margin":"7px"});
    });
});

//who_weARE


 $(".tabs .tab").after($(".tab_content .tab_item"));
$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
    $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").slideUp().eq($(this).index()).fadeIn();
})
    .eq(0).addClass("active");

//////  форма входа


$('#container').not("").hide();
$ (document).ready(function () {
    $('.popup').on('click',function () {
        $ ('#container').toggle();
    })
});
$(function(){
    $('.close').click(function(){
        $("#container").hide();
    });
});
var saveLogin = "admin";
var savePassword = "123";
var btn = document.querySelector('.dws-submit');
var message = document.getElementById('error');
btn.addEventListener('click', function () {
    var login = document.querySelector('[name = "login"]').value;
    var password = document.querySelector('[name = "password"]').value;
    if (login === saveLogin && password === savePassword) {
        alert('Welcome');
        $("#container").hide();
    }else {
        message.innerHTML = '<span style="color:red">login or password   invalid</span>';
    }
});
