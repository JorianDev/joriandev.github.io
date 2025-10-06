var countDownTime = new Date("Oct 29, 2025 06:30:00").getTime(); //6.30 is 7.30 NL tijd
var interval = setInterval(function(){

    var now = new Date().getTime();
    var distance = countDownTime - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor ((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = "Tijd tot verkiezingen: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "De tijd is om, de stembussen zijn geopend!"
    }
}, 1000);