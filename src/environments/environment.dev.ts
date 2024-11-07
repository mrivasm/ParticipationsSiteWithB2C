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
                authority: "https://AgvDevParticipations.b2clogin.com/AgvDevParticipations.onmicrosoft.com/B2C_1_edit_profile"
            }
        },
        authorityDomain: 'AgvDevParticipations.b2clogin.com'
    }
};
