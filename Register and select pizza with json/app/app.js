var app = angular.module('app',
    [
        'ngResource',
        'registrationService'
    ]
);
// set the ng-required attribute for the phone field equal to "!model.email" and ng-required for email equal to "!model.phone"