$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var message = $(".message");
    var btn_si = $("#si");
    var btn_no = $("#no");

    envelope.click(function() {
        open();
    });

    btn_open.click(function() {
        open();
    });

    btn_reset.click(function() {
        close();
    });

    btn_si.click(function() {
        Fiesta();
    });

    btn_no.click(function() {
        btn_no.text('Sí');
        Fiesta();
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
        var videoID = "tSSfRjzYkxo";  // Reemplaza esto con el ID de tu video
        $(".envlope-wrapper, .reset").fadeOut(function() {
            $("#video-container").fadeIn();
            $("#youtube-video").attr("src", "https://www.youtube.com/embed/" + videoID + "?autoplay=1");
            enterFullScreen(document.getElementById("video-container"));
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
