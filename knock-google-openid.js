const openidSchema = require('knock-openid-schema');
const googleIssuerMetadata = require('./issuers/google-openid-configuration.json')

class googleSchema extends openidSchema {
    constructor(option) {
        option.state = true;
        option.csrfStateMechanism = true;
        option.oauthMode = false;
        option.scope = option.scope || "openid email";

        super({...option, issuer: googleIssuerMetadata});
        this.name = 'google oauth';
    }

    static async discovery(option) {
        return await super.discovery('https://accounts.google.com/.well-known/openid-configuration', option);
    }
}

module.exports = googleSchema
