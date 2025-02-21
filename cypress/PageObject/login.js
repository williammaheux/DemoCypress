class Login{
    navigate(){
        cy.visit('https://facebook.com')
    
    }
    email(username) {
        cy.get('#email')
        .clear()
        .type(username);
        return this
        }
        password(username) {
        cy.get('#pass')
        .clear()
        .type (username);
        return this
        } 
        submit(){
        cy.get('#login').click()
        }
}  
    export default Login