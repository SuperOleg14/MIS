
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
            $(parent).append('<span class="more-span"><input type="text" name="more-input" class="more-input" autofocus></span>');
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

    $('.toggle-add-info').click(function () {
        $(this).find('.btn-add-info').toggleClass('active');
       $('.modal-additional-info-hidden').slideToggle();
    });

    $('.tab-pane-appointment .reception-actions-block li').click(function () {
        $('.tab-pane-appointment .reception-appointment-all').fadeOut();
        $('.tab-pane-appointment .preparation-block').fadeIn();
    });

    $('.tab-pane-appointment .all_preparation-back').click(function () {
        $('.tab-pane-appointment .preparation-block').fadeOut();
        $('.tab-pane-appointment .reception-appointment-all').fadeIn();
        $('.tab-pane-appointment .reception-actions-block li').removeClass('add-active');
    });

    $('.tab-pane-documents .reception-actions-block li').click(function () {
        $('.tab-pane-documents .all_documents-back').fadeOut();
        $('.tab-pane-documents .preparation-block').fadeIn();
    });

    $('.tab-pane-documents .all_preparation-back').click(function () {
        $('.tab-pane-documents .preparation-block').fadeOut();
        $('.tab-pane-documents .all_documents-back').fadeIn();
        $('.tab-pane-documents .reception-actions-block li').removeClass('add-active');
    });

    //const  blockSelect = `<p class="modal-input-wrap"><select><option>Травми</option><option>Травми11</option></select></p>`;

    $('#personal-info .modal-add').click(function () {
       $(this).closest('.modal-block-item').last('.modal-input-item').after("<div class='modal-block-item'><div class=\"modal-item-left\"><p class=\"modal-input-wrap\"><input type=\"text\" class=\"modal-input\"></p></div><div class=\"modal-item-right display-flex\"><button type=\"button\" class=\"modal-remove\">&times;</button></div></div>");
    });

    $('#anamnesis-live .modal-add').click(function () {
       $(this).closest('.modal-block-item').last('.modal-input-item').after("<div class='modal-block-item'><div class=\"modal-item-left\"><p class=\"modal-input-wrap\"><select><option selected>Травми</option><option>Травми</option></select></p></div><div class=\"modal-item-right display-flex\"><button type=\"button\" class=\"modal-remove\">&times;</button></div></div>");
    });

    $('.modal-body').on('click', '.modal-remove', function () {
       $(this).closest('.modal-block-item').remove();
    });
});






