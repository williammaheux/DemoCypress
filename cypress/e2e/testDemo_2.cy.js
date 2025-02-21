import Login from "../PageObjec/login.js"

describe('Cypress POM test', () => {

    it('Login avec un mail et un mot de passe valide', () => {
        const loginpage = new Login();
        loginpage.navigate();
        loginpage.cookiesValidate();
        loginpage.email('john.doe@testeur.com');
        loginpage.password('motdepasse');
        loginpage.submit();
        cy.url().should('be.equal', 'https://facebook.com//')
    })
})