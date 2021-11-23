jQuery.fn.isChildAndSelfOf = function(b) { return (this.closest(b).length > 0); };
setTimeout(function() {
    var location_i = $("#location_i").val();
    $("html,body").animate({ scrollTop: $("#" + location_i).offset().top }, 1000);
}, 1000);
$(document).click(function(event) {
    if (!$(event.target).isChildAndSelfOf('.select-memu')) {
        if ($('.select-memu').hasClass('active')) {
            $('.select-memu').removeClass('active');
            $("#menu_div").find("a").eq(0).click();
        }
    }
});
//事项类型下拉菜单
$('.select-memu').on('click', function() {
    $(this).toggleClass('active');
})