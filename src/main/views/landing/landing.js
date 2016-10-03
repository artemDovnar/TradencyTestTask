export class LandingController {
    constructor(LocalizationService, UserData, $scope) {

        this.LocalizationService = LocalizationService;
        this.UserData = UserData;
        this.$scope = $scope;
        this.query = "";
        this.paOptions = {
            updateModel: true
        };
        this.paTrigger = {};
        $scope.paDetails = {};
        this.setWatchOnExecutionMode();

        this.placesCallback = function (error, details) {

            let adressItem = {
                houseNumber: details.address_components[0],
                streetName: details.address_components[1],
                cityName: details.address_components[2],
                countryName: details.address_components[5]
            };
            if (error) {
                return console.error(error);
            }
            $scope.paDetails = adressItem;
            //this.UserData.setAdress(details);
        }
    }

    setWatchOnExecutionMode() {
        this.$scope.$watch(
            () => this.$scope.paDetails,
            () => {
                this.UserData.setAddress(this.$scope.paDetails);

            }
        )
    }


}