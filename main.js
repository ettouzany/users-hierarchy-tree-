$(function () {
    $('.user-tree ul').hide();
    $('.user-tree>ul').show();
    $('.user-tree ul.active').show();
    $('.user-tree li').on('click', function (e) {
        var children = $(this).find('> ul');
        if (children.is(":visible")) children.hide('fast').removeClass('active');
        else children.show('fast').addClass('active');
        e.stopPropagation();
    });
});