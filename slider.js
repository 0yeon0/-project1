$.fn.imageSlider = function (object) {
    var width = object.width || 460;
    var height = object.height || 300;

    return this.each(function () {
        var current = 0;
        var $slider = $(this);
        var $images = $slider.find('.images');
        var $slide = $images.find('.image');
        var imageLength = $slide.length;

        function moveTo() {
            $images.animate({
                left: -current * width
            }, 1000);
        }

        $slide.each(function (index) {
            $('<button></button>')
                .attr('data-position', index)
                .text(index)
                .click(function () {
                    current = $(this).attr('data-position');
                    moveTo();
                })
                .insertBefore($slider);
        });

        $slider.css({
            position: 'relative',
            width: width,
            height: height,
            overflow: 'hidden'
        });

        $images.css({
            position: 'absolute',
            width: width * imageLength,
        });

        $slide.css({
            margin: 0,
            padding: 0,
            width: width,
            height: height,
            display: 'block',
            float: 'left'
        });

        setInterval(function () {
            current = (current + 1) % imageLength;
            moveTo();
        }, 3000);
    });
};