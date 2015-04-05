//Regions
var london = $('#london');
var westMidlands = $('#westMidlands');
var eastMidlands = $('#eastMidlands');
var eastEngland = $('#eastEngland');

//collection of my images in the various locations
var images = {
    london: ['met','tower'],
    westMidlands: [23,4,35,],
    eastEngland: [true],
    eastMidlands: [23,'Why',0.35],
};

//navigation button controls
$('#hambuger').click(function() {
    $('nav').toggleClass('open');
});

//image filtering
images.click(function() {
    console.log('hello');
});


