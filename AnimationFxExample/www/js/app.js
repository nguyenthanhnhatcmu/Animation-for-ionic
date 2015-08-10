angular.module('starter', ['ionic', 'ngFx', 'ngAnimate', 'starter.controllers'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })
            .state('app.animation', {
                url: '/animation',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/animation.html',
                        controller: 'animationCtrl'
                    }
                }
            })
            .state('app.animationItem', {
                url: '/animationItem/:animation',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'templates/animationItem.html',
                        controller: 'animationItemCtrl'
                    }
                }
            })

            .state('app.searchAnimation', {
                url: '/searchAnimation',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'templates/searchAnimation.html',
                        controller: 'animationItemCtrl'
                    }
                }
            })
            .state('app.galleryAnimation', {
                url: '/galleryAnimation',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home.html',
                        controller: 'galleryAnimationCtrl'
                    }
                }
            })
            .state('app.reTimeAnimation', {
                url: '/reTimeAnimation',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'templates/reTimeAnimation.html',
                        controller: 'reTimeAnimationCtrl'
                    }
                }
            })
            .state('app.listItemAnimation', {
                url: '/listItemAnimation',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'templates/listItemAnimation.html',
                        controller: 'listItemAnimationCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise('/app/listItemAnimation');
    });
