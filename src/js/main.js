
/*
 * Custom
 */
//= partials/app.js


$('document').ready(function(){
    $('.directory-list .main-list, .reception-actions-block li').click(function () {
        $(this).toggleClass('add-active');
    });

    $('.directory-list li .list-edit').click(function () {
        var parent = $(this).parents('.directory-list li');
        $(this).toggleClass('active');
        $(parent).toggleClass('more-info');
        if ($(parent).hasClass('more-info')) {
            $(parent).append('<span class="more-span"><input type="text" name="more-input" class="more-input"></span>');
            $(parent).addClass('add-active');
        } else{
            $('.more-span').remove();
        }
    });

   $('body,html').on('click', function (e) {
        if (!$(e.target).closest('.directory-list li').length){
            $('.more-span').remove();
            $('.directory-list li').removeClass('more-info');
            $('.directory-list li .list-edit').removeClass('active');
        }
    });


});






