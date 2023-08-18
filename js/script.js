// start side navbar

$("#sideNav").click(function () {
    $(".navbar").animate({ width: "280px" }, 500);
    $(".text-home").animate({ marginLeft: "260px" }, 500);
    $("#sideNav").animate({ marginLeft: "-400px" }, 500);
});

$(".fa-regular").click(function () {
    $(".navbar").animate({ width: "0" }, 500);
    $(".text-home").animate({ marginLeft: "0" }, 500);
    $("#sideNav").animate({ marginLeft: "-600px" }, 500);
});
// End navbar

// start signers section
$(".slider1").click(function () {
    $(".sliderDown1").slideToggle()(500);
});
$(".slider2").click(function () {
    $(".sliderDown2").slideToggle(500);
});

$(".slider3").click(function () {
    $(".sliderDown3").slideToggle(500);
});

$(".slider4").click(function () {
    $(".sliderDown4").slideToggle(500);
});

// End signers section

// start counter

// window.onload = function() {   
//  countDownToTime("10 october 2020 9:56:00");
//   }
//   function countDownToTime(countTo) { 
//         let NewDate = new Date(countTo);
//     NewDate = (futureDate.getTime()/1000);

//     let timeNow = new Date();
//     now = (timeNow.getTime()/1000);

//   let  differenceTime = (newDate-timeNow);
        
//    let days = Math.floor(  differenceTime / (24*60*60));
//    let hours = Math.floor(( differenceTime - (days * (24*60*60))) / 3600);
//    let mins = Math.floor(( differenceTime - (days * (24*60*60)) - (hours * 3600 )) / 60);
//    let secs = Math.floor(( differenceTime- (days * (24*60*60)) - (hours * 3600) - (mins * 60)))

//     $(".days").html(`${days} D`);
//     $(".hours").html(`${hours} h`);
//     $(".minutes").html(`${ mins } m`);
//     $('.seconds').html(`${ secs} s`)
//     setInterval(function() {  countDownToTime(countTo); }, 1000);
//   }

window.onload = function() {
    displayTime("10 october 2021 12:15:00");
}
function displayTime(count) { 
        let newDate = new Date(count);
    newDate= (  newDate.getTime()/1000);

    let timeNow = new Date();
    timeNow = (  timeNow.getTime()/1000);

    differenceTime = (newDate-timeNow);
let days = Math.floor(  differenceTime / (24*60*60));
let hours = Math.floor(( differenceTime - (days * (24*60*60))) / 3600);
let mins = Math.floor(( differenceTime - (days * (24*60*60)) - (hours * 3600 )) / 60);
let secs = Math.floor(( differenceTime - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".day").html(`${days} D`);
    $(".hour").html(`${hours} h`);
    $(".minute").html(`${ mins } m`);
    $('.second').html(`${ secs} s`)

    setInterval(function() {  displayTime(count); }, 1000);
}

// End counter



//start contact section

let maxCharacter = 100;
$('textarea').keyup(function() {
let length = $(this).val().length;
let numOfChar = maxCharacter -length;
if(numOfChar<=0)
            {
            $("#character").text("Sorry..Your Available Character  Are Finished");
                
            }
        else{
        
        $("#character").text(numOfChar );
        }
});







// End contact section