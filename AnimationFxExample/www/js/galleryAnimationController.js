
app.controller('galleryAnimationCtrl', function ($scope) {

    ionic.material.ink.displayEffect();
    ionic.material.motion.fadeSlideInRight(
        {selector: '.animate-fade-slide-in .item'}
    );

});