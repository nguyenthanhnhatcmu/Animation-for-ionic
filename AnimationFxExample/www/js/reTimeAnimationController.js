
app.controller('reTimeAnimationCtrl', function ($scope , $timeout) {
    ionic.material.ink.displayEffect();
    ionic.material.motion.fadeSlideInRight(
        {selector: '.animate-fade-slide-in .item'}
    );
    $scope.showContent = false;
    $scope.showContent1 = false;
    $scope.showChangeView = false;
    $scope.showImage = false;
    $scope.showLikeLine = false;
    $scope.showUnLikeLine = false;
    $scope.temp = true;
    $scope.showContentAnimation = function () {
        if($scope.temp == true){
            $timeout(function () {
                $scope.showContent = true;
            },1000);
        }

    };
    $scope.changeView = function () {
            $scope.showChangeView = true;
            $scope.showContent = false;
            $scope.temp = false;
    }
    $scope.showContentAnimation1 = function () {
        $timeout(function () {
            $scope.showContent1 = true;
        },2000);
    };

    $scope.showImageAnimation = function () {
        $timeout(function () {
           $scope.showImage = true;
       },500);
        return 'animated infinite bounceOutUp';
    };

    $scope.showLikeLineAnimation = function () {
        $timeout(function () {
            $scope.showLikeLine = true;
        },1000);
        return 'animated infinite bounceOutRight';
    };

    $scope.showUnLikeLineAnimation = function () {
        $timeout(function () {
            $scope.showUnLikeLine = true;
        },1500);
        return 'animated infinite bounceOutLeft';
    };

    $scope.showImageAnimation();
    $scope.showLikeLineAnimation();
    $scope.showUnLikeLineAnimation();
    $scope.showContentAnimation();
    //$scope.changeView();
    //$scope.showContentAnimation1();

});