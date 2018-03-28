/* JS for displaying images text */

//initially hides all divs on images
$(".imgCaption").addClass("imgCaptionHide");

//starts a click event
$(".click_image").on("click", function () {
// declares my variable that selects the .imgCaption class that's a sibling of the element you clicked
    var $imgCaption = $(this).siblings(".imgCaption");
//checks if the selected class is hidden    
    if ($imgCaption.is(":hidden")) {
//the first line makes sure that all .imgCaption classes are hidden and the next line shows the selected .imgCaption class      
     $(".imgCaption").hide();
     $imgCaption.show();
//the else part hides the selected .imgCaption class if it's already shown    
    } else {
     $(".imgCaption").hide();
    }
 })

 //Getting navbar links to open image captions
$("#newBornLink").on("click", function () {
    $(".imgCaption").hide();
    $("#newBornCaption").show();
 })
 
$("#firstStepsLink").on("click", function () {
    $(".imgCaption").hide();
    $("#firstStepsCaption").show();
 })  

$("#recentLink").on("click", function () {
    $(".imgCaption").hide();
    $("#recentCaption").show();
 })

$(".broken").on("click", function() {
    alert("Sorry, this link seems to lead nowhere")
}) 
