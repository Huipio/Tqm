$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var message = $(".message");
    var btn_si = $("#si");
    var btn_no = $("#no");

    envelope.click(function() {
        open();
    });

    btn_open.click(function() {
        open();
    });

    btn_si.click(function() {
        Fiesta();
    });

    btn_no.mouseover(function() {
        moveNoButton();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        message.fadeIn();  // Mostrar el mensaje
    }

    function close() {
        envelope.addClass("close").removeClass("open");
        message.fadeOut();  // Ocultar el mensaje
        $("#video-container").hide();
        $("#youtube-video").attr("src", "");  // Detener el video
    }

    function Fiesta() {
        var videoID = "6q8jm0Lu7GU";  // Reemplaza esto con el ID de tu video
        $(".envlope-wrapper, .reset").fadeOut(function() {
            $("#video-container").fadeIn();
            $("#youtube-video").attr("src", "https://www.youtube.com/embed/" + videoID + "?autoplay=1");
            enterFullScreen(document.getElementById("video-container"));
        });
    }

    function moveNoButton() {
        var container = $(".respuesta");
        var containerWidth = container.width();
        var containerHeight = container.height();
        var btnWidth = btn_no.width();
        var btnHeight = btn_no.height();

        var maxLeft = containerWidth - btnWidth;
        var maxTop = containerHeight - btnHeight;

        var randomLeft = Math.random() * maxLeft;
        var randomTop = Math.random() * maxTop;

        btn_no.css({
            position: 'absolute',
            left: randomLeft + 'px',
            top: randomTop + 'px'
        });
    }

    function enterFullScreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { // Firefox
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { // Chrome, Safari, Opera
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // IE/Edge
            element.msRequestFullscreen();
        }
    }
});
