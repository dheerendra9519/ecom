$(document).ready(function() {
    var cartCountValue = 0;
    var cartCount = $('.cart .count');
    $(cartCount).text(cartCountValue);
    $('btn crt-btn').on('click',function() {
        var cartbtn = this;
        var cartcountPos = $(cartCount).offset();
        var btnpos = $(this).offset();
        var leftPos = cartcountPos.left<btnpos.left ? cartcountPos.left - (btnpos.left - cartcountPos.left) 
        : cartcountPos.left;
var topPos = cartcountPos.top<btnpos.top?cartcountPos.top : cartcountPos.top;
$(cartbtn)
append("<span> class = 'count'>1</span>");
$(cartbtn).find(".count").each(function(i,count){
    $(count).offset({
        left: leftPos,
        top:topPos
    })
    .animate(
        {
            opcity:0

        },
        800,
        function(){
            $(this).remove();
            cartCountValue++;
            $(cartCount).text(cartCountvalue);


        }
    );

});
         });

});