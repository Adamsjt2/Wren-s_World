/* JS for displaying images text */

//initially hides all divs on images
$(".hidden").hide();

//brings up image div on click and rehides all other image div

$(".click_image").on("click", function () {
    var $imgCaption = $(this).siblings(".hidden");
    if ($imgCaption.is(":hidden")) {
     $(".hidden").hide();
     $imgCaption.show();
    } else {
     $(".hidden").hide();
    }
 })


