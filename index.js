'use strict';

function configureApp($mdIconProvider) {
    $mdIconProvider.iconSet('icons', 'images/icons.svg', 512);
}

function pipSampleController($scope, $timeout, pipShortcuts) {
    $timeout(() => {
        $($('[pip-focused]').get(0)).find('.pip-focusable').get(0).focus();
    }, 100);

    $scope.collection = [
        {
            id: 1,
            text: 'Element 1'
        },
        {
            id: 2,
            text: 'Element 2'
        },
        {
            id: 3,
            text: 'Element 3'
        },
        {
            id: 4,
            text: 'Element 4'
        },
        {
            id: 5,
            text: 'Element 5'
        },   
        {
            id: 6,
            text: 'Element 6'
        }     
    ];

    $scope.chooseElement = function(item) {
        console.log('chooseElement');
    }

    $scope.onKeyPress = function(event, action) {
        if (event.keyCode === 13) {
            console.log('onKeyPress', action);
        } 
    }    
   
}


angular
    .module('appBehaviors', [
        'ngMaterial',

        'pipBehaviors',
    ])
    .config(configureApp)
    .controller('pipSampleController', pipSampleController);