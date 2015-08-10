var app = angular.module('starter.controllers', [])

app.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
        $scope.loginData = {};

        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.closeLogin = function () {
            $scope.modal.hide();
        };

        $scope.login = function () {
            $scope.modal.show();
        };

        $scope.doLogin = function () {
            console.log('Doing login', $scope.loginData);

            $timeout(function () {
                $scope.closeLogin();
            }, 1000);
        };
    }
);
