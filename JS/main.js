/* JS for displaying images text */

//initially hides all divs on images
$(".imgCaption").hide();

//brings up image caption on click and rehides all other image div

$(".click_image").on("click", function () {
    var $imgCaption = $(this).siblings(".imgCaption");
    if ($imgCaption.is(":hidden")) {
     $(".imgCaption").hide();
     $imgCaption.show();
    } else {
     $(".imgCaption").hide();
    }
 })


