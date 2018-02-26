/* JS for displaying images text */


//initially hides all divs on images
$(".hidden").hide();

//brings up image div on click and rehides all other image div
$(".click_image").on("click", function () {
    $(".hidden").hide();
    $(this).siblings(".hidden").toggle();
})


//var description = $(this).siblings(".hidden");

// $(".click_image").on("click", function () {
//    if (description.is(:hidden)) {
//         description.show();
//    }
//     //$(this).siblings(".hidden").toggle();
// })

