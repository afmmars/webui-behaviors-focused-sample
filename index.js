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
            text: '1'
        },
        {
            id: 2,
            text: '2'
        },
        {
            id: 3,
            text: '4'
        },
    ];
}


angular
    .module('appBehaviors', [
        'ngMaterial',

        'pipBehaviors',
    ])
    .config(configureApp)
    .controller('pipSampleController', pipSampleController);