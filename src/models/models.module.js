import {LoginData} from './login-data';
import {UserData}  from './user-data';
import {RateInfo}  from './rate-info';
import {Rate}      from './rate'

export default angular.module('meetUpPlanner.models', [])
    .service({
        LoginData,
        UserData,
        RateInfo,
        Rate
    })

