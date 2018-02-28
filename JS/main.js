/* JS for displaying images text */

//initially hides all divs on images
$(".hidden").hide();

//brings up image div on click and rehides all other image div
// $(".click_image").on("click", function () {
//     $(".hidden").hide();
//     $(this).siblings(".hidden").toggle();
// })




$(".click_image").on("click", function () {
   if ($(this).siblings(".hidden").is(":hidden")) {
    $(".hidden").hide();
    $(this).siblings(".hidden").show();
   } else {
    $(".hidden").hide();
   }
})

