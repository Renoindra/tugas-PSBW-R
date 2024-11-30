var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

//check lebar
$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
        //display:block
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

//efek scroll 
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        } else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
});

function showPopup() {
    document.getElementById("popupMessage").style.display = "block";
}

function closePopup() {
    document.getElementById('popupMessage').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        showPopup();
        const responseMessage = document.getElementById("responseMessage");
        responseMessage.textContent = "Terima kasih! Pesan Anda telah diterima.";
        this.reset();
    });
});