import template          from './trading.html';
import {TradingController} from './trading';

function tradingRoutes($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('trading', {
            url: '/trading',
            template: template,
            controller: 'TradingController',
            controllerAs: 'trading'
        });

    $urlRouterProvider.otherwise('/login');
}


export default angular.module('states.trading', [])
    .controller('TradingController', TradingController)
    .config(tradingRoutes)


