export class TradingController {
    constructor($scope, $interval, RateInfo) {
        this.$scope = $scope;
        this.$interval = $interval;

        $scope.rateInfo = RateInfo;

    }
}
