var scroll_header = {
    init: function() {
        this.scrollmenu()
    },
    scrollmenu: function() {
        window.addEventListener('scroll', (function(e) {
            this.position = window.pageYOffset;
            this.topmenu = document.querySelector('.header-section');
            if (position > 10) {
                topmenu.classList.add('scroll_header')
            } else {
                topmenu.classList.remove('scroll_header')
            }
        }))
    }
}
scroll_header.init();