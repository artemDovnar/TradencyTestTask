import {RateDirective} from './rate/rate.directive';

export default angular.module('meetUpPlanner.directives', [])
    .directive('rate', RateDirective.directiveFactory)

