import template from './login-popup.html'
export class LoginController {
    constructor($scope, ngDialog) {
        this.ngDialog = ngDialog;
        this.$scope = $scope;
        this.openLogin();
    }

    openLogin() {
        this.ngDialog.open({
            template: template,
            plain: true,
            width: '700',
            controller: function (LocalizationService, LoginData, $scope, ngDialog, $state) {
                this.LocalizationService = LocalizationService;
                this.LoginData = LoginData;
                this.ngDialog = ngDialog;
                this.$scope = $scope;
                $scope.loginForm = this.LoginData;

                LocalizationService.getAddressLocalization().then(response => {
                    this.LoginData.country = response.results[0].address_components[4].long_name
                })
                $scope.login = ()=> {
                    console.log(this.LoginData);
                    $state.go('trading');
                    $scope.closeThisDialog();
                }
            }

        });
    }

}