global.sequelizeDb = require('./sequelize').db;

var emailTemplates = require('./emailTemplate');

module.exports = {
    emailTemplate: {
        userResultSubject: emailTemplates.userResultSubject,
        usercredentailsEmailBody: emailTemplates.usercredentailsEmailBody,
        emailContainerHeaderString: emailTemplates.emailContainerHeaderString,
        emailContainerFooterString: emailTemplates.emailContainerFooterString
    },
};