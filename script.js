window.onload = function() {
    //Animation Open
    var contMain = document.getElementById('cont-main');
    var navbar = document.getElementById('navbar');
    var link = document.getElementById('cont-link');

    contMain.style.opacity = '0';
    navbar.style.opacity = '0';
    link.style.opacity = '0';

    contMain.style.animation = 'zoom 1s';

    contMain.onanimationend = () => {
        contMain.style.opacity = '1';
        navbar.style.animation = 'Turun 0.8s';
        navbar.style.opacity = '1';
        navbar.onanimationend = () => {
            link.style.animation = 'menuAnimation 0.8s';
            link.style.opacity = '1';
        }
    }

    //Toggle Dropdown
    var dropdownToggle = document.getElementById("drop-btn");

    dropdownToggle.onclick = function() {
        dropdown();
    };

    function dropdown() {
        var dropmenu = document.getElementById("drop");
        dropmenu.classList.toggle("show");
    };

    window.onclick = function(event) {

        //Close Dropdown
        if (!event.target.matches('#drop-btn')) {
            var dropdown = document.getElementsByClassName("drop-content");
            for (i = 0; i < dropdown.length; i++) {
                var openDropdown = dropdown[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        };

        // Close Modal
        if (event.target.matches('#imgModal')) {
            var modalLord = document.getElementById('modal');
            modalLord.style.display = 'none';

            if (document.documentElement.clientWidth > 950) {
                var navbar = document.getElementById('navbar');
                navbar.style.display = 'flex';
                navbar.style.animation = 'fadeIn 0.5s'
                navbar.onanimationend = () => {};
            }
        }

    };

    //Dynamic Scroll Content
    window.onscroll = function() {

        if (document.documentElement.clientWidth > 950) {
            var scrollHeightChrome = document.documentElement.scrollTop;
            var scrollHeight = document.body.scrollTop;

            var quotes = document.getElementById('quotesText');
            var profiles = document.getElementById('bothProfiles');
            var gallery = document.getElementById('container-gallery');

            if (scrollHeight >= 400 || scrollHeightChrome >= 400) {
                quotes.style.animation = 'zoomQuotes 0.8s'
                quotes.onanimationend = () => {
                    quotes.style.opacity = '1'
                }
            } else {
                quotes.style.animation = 'fadeOut 0.2s'
                quotes.onanimationend = () => {
                    quotes.style.opacity = '0'
                }
            };

            if (scrollHeight >= 900 || scrollHeightChrome >= 900) {
                profiles.style.animation = 'zoomQuotes 0.8s';
                profiles.onanimationend = () => {
                    profiles.style.opacity = '1'
                }
            } else {
                profiles.style.animation = 'fadeOut 0.2s'
                profiles.onanimationend = () => {
                    profiles.style.opacity = '0'
                }
            };

            if (scrollHeight >= 1600 || scrollHeightChrome >= 1600) {
                gallery.style.animation = 'zoomQuotes 0.8s';
                gallery.onanimationend = () => {
                    gallery.style.opacity = '1'
                }
            } else {
                gallery.style.animation = 'fadeOut 0.2s'
                gallery.onanimationend = () => {
                    gallery.style.opacity = '0'
                }
            };


        };

    };



}