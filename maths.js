//var countDownTime = new Date("Oct 29, 2025 06:30:00").getTime(); //6.30 is 7.30 NL tijd
var countDownTime = new Date("2025-10-29T07:30:00+01:00").getTime();
var interval = setInterval(function(){

    var now = new Date().getTime();
    var distance = countDownTime - now;

    if (distance > 0) {
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor ((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = "Tijd tot verkiezingen: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    } else if (distance > -48600000) {
        document.getElementById("countdown").innerHTML = "De tijd is om, de stembussen zijn geopend!"
    } else {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "U kunt niet meer stemmen!"
    }

}, 1000);