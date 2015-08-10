/**
 * Created by admin on 8/5/15.
 */
app.controller('animationCtrl', function($scope,$state,$rootScope, $ionicModal, $timeout) {
    var animations = [
        'zoom-right',
        'zoom-left',
        'zoom-down',
        'zoom-up',
        'zoom-normal',
        'rotate-counterclock-up',
        'rotate-clock',
        'rotate-counterclock',
        'rotate-clock-left',
        'fade-normal',
        'fade-down',
        'fade-down-big',
        'fade-left',
        'fade-left-big',
        'fade-right',
        'fade-right-big',
        'fade-up',
        'fade-up-big',
        'bounce-normal',
        'bounce-down',
        'bounce-left',
        'bounce-up',
        'bounce-right'
    ];
    $scope.demoAnimations = animations;
    $scope.gotoAnimationItem = function (animation) {
        $state.go('app.animationItem',{animation : animation});
    }

});