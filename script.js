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
        disableNoButton();
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
        $("#video-container").show();
        $("#youtube-video").attr("src", "https://www.youtube.com/embed/" + videoID + "?autoplay=1");
    }

    function disableNoButton() {
        btn_no.prop("disabled", true).text("No disponible");
    }
});
