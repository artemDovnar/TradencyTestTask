import template from './rate.html'
import rateInfo from '../../models/rate-info'
import changeNameTemplate from './changeNameDialog.html'

export class RateDirective {
    constructor() {
        this.restrict = 'E';
        this.template = template;
        this.scope = {
            rateInfo: '=rateInfo'
        };
    }

    controller($scope, ngDialog) {
        $scope.changeInstrumentName = function (index) {
            ngDialog.open({
                template: changeNameTemplate,
                plain: true,
                width: '300',
                controller: ['$scope', function ($modalScope) {
                    $modalScope.name = $scope.rateInfo.getName(index);
                    $modalScope.ok = () => {
                        $scope.rateInfo.changeInstrumentName(index, $modalScope.name);
                        $modalScope.closeThisDialog();
                    }
                }]
            });
        };
    }

    link(scope, element, attrs) {

    }

    static directiveFactory() {
        RateDirective.instance = new RateDirective();
        return RateDirective.instance;
    }
}


