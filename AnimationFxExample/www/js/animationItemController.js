/**
 * Created by admin on 8/5/15.
 */
app.controller('animationItemCtrl', function ($scope, $stateParams, $interval, $ionicModal, $timeout) {
    $scope.newCars = ['Mercedes','Toyota','Honda','Huyndai', 'Lamborghini','lexus','Macdaz' ,'BMV' ,'Ferary','Civic','Camry'];
    var cars = [
        {
            pictureCar: 'images/imageCars/Bugati.jpg',
            descriptionCar: 'Mercedes too fast'
        },
        {
            pictureCar: 'images/imageCars/BMV.jpg',
            descriptionCar: 'Toyota too fast'
        },
        {
            pictureCar: 'images/imageCars/camry.jpg',
            descriptionCar: 'Huyndai too fast'
        },
        {
            pictureCar: 'images/imageCars/coengnessces.jpg',
            descriptionCar: 'Lamborghini too fast'
        },
        {
            pictureCar: 'images/imageCars/ferrari.jpg',
            descriptionCar: 'lexus too fast'
        },
        {
            pictureCar: 'images/imageCars/lamboghini.jpg',
            descriptionCar: 'Macdaz too fast'
        },
        {
            pictureCar: 'images/imageCars/lexus.jpg',
            descriptionCar: 'BMV too fast'
        },
        {
            pictureCar: 'images/imageCars/motang.jpg',
            descriptionCar: 'Ferrari too fast'
        },
        {
            pictureCar: 'images/imageCars/Bugati.jpg',
            descriptionCar: 'Civic too fast'
        }
    ];

    var speed = 500;
    $scope.returnAnimation = function () {
        var typeAnimation = $stateParams.animation;
        var classReturn = 'fx-' + typeAnimation + " " + 'fx-speed-' + speed;
        return classReturn;
    };
    $scope.returnAnimationCar = function () {
        var classReturnCar = 'fx-fade-right-big fx-speed-200';
        $timeout(function () {
            return classReturnCar;
        }, 500);
    }

    $scope.carsDemo = [];
    $scope.showAnimation = function () {
        var index = 0;
        var interval = $interval(function () {
            $scope.carsDemo.push(cars[index]);
            index++;
            if (index == cars.length) {
                $interval.cancel(interval);
            }
        }, 300);
    };
    $scope.showAnimation();
});