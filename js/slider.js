var Main = Main || {};

jQuery(window).load(function () {
    window.responsiveFlag = jQuery('#responsiveFlag').css('display');
    Main.gallery = new Gallery();

    jQuery(window).resize(function () {
        Main.gallery.update();
    });
});

function Gallery() {
    var self = this,
        container = jQuery('.flexslider'),
        clone = container.clone(false);

    this.init = function () {
        if (responsiveFlag == 'block') {
            var slides = container.find('.slides');

            slides.kwicks({
                max: 500,
                spacing: 0
            }).find('li > a').click(function () {
                return false;
            });
        } else {
            container.flexslider();
        }
    }
    this.update = function () {
        var currentState = jQuery('#responsiveFlag').css('display');

        if (responsiveFlag != currentState) {

            responsiveFlag = currentState;
            container.replaceWith(clone);
            container = clone;
            clone = container.clone(false);

            this.init();
        }
    }

    this.init();
}
