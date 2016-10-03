import angularRouter    from 'angular-ui-router';
import ngPlaces         from'./libs/mapApi/ngPlacesAutocomplete';

import ngDialog         from 'ng-dialog'
import AngularMaterial  from 'angular-material';
//modules
import Home             from './main/home.module';

let modules = [
    angularRouter,
    AngularMaterial,
    ngDialog,
    Home.name,
    'ngPlacesAutocomplete'
];

function configTranslation() {

    // var translations = {
    //     1: "Guest"
    //
    // };
    //
    // $translateProvider
    //     .translations('en', translations)
    //     .preferredLanguage('en');
}

angular.module('meetUpPlanner', modules)
    .config(configTranslation);

// Bootstrap in strictDI mode
angular.bootstrap(document, ['meetUpPlanner'], {});
