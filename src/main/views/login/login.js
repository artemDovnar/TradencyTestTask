import template from './login-popup.html'
export class LoginController {
    constructor($scope, ngDialog, $log) {
        this.ngDialog = ngDialog;
        this.$scope = $scope;
        this.openLogin();
    }

    openLogin() {
        this.ngDialog.open({
            template: template,
            plain: true,
            width: '700',
            controller: function (LocalizationService, LoginData, $scope, ngDialog, $state, $log) {
                this.LocalizationService = LocalizationService;
                this.LoginData = LoginData;
                this.ngDialog = ngDialog;
                this.$log = $log;
                $scope.loginForm = this.LoginData;
                $scope.phonePattern = '[0-9()-+]{8,20}';

                LocalizationService.getAddressLocalization().then(response => {
                    this.LoginData.country = response.results[0].address_components[4].long_name
                })
                $scope.login = ()=> {
                    this.LoginData.loggedIn = true;
                    $log.info(this.LoginData);
                    $state.go('trading');
                    $scope.closeThisDialog();
                }
            }

        });
    }

}