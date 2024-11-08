// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    msalConfig: {
        auth: {
            clientId: '30bb5101-8e15-40b4-95b6-97b067ee7562',
        }
    },
    apiConfig: {
        scopes: ['https://AgvDevParticipations.onmicrosoft.com/helloapi/demo.read'],
        uri: 'https://AgvDevParticipations.azurewebsites.net/hello'
    },
    b2cPolicies: {
        names: {
            signUpSignIn: 'B2C_1_signin',
            resetPassword: 'B2C_1_reset',
            editProfile: 'B2C_1_edit_profile'
        },
        authorities: {
            signUpSignIn: {
                authority: 'https://AgvDevParticipations.b2clogin.com/AgvDevParticipations.onmicrosoft.com/B2C_1_signin'
            },
            resetPassword: {
                authority: 'https://AgvDevParticipations.b2clogin.com/AgvDevParticipations.onmicrosoft.com/B2C_1_reset'
            },
            editProfile: {
                authority: 'https://AgvDevParticipations.b2clogin.com/AgvDevParticipations.onmicrosoft.com/B2C_1_edit_profile'
            }
        },
        authorityDomain: 'AgvDevParticipations.b2clogin.com'
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
