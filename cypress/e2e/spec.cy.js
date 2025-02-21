// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://only-testing-blog.blogspot.com/2014/01/textbox.html?')
//   })
// })

const { beforeEach } = require("mocha")


describe('test suite', () => {

let firstName, lastName, toHide, hidden;

  beforeEach(() => {

    // Mes valeur de formulaire
    firstName = "John";
    toHide = "test du champs To Hide"; 
    lastName = "Doe";
    hidden = "Hidden field"; 


    cy.log('Je fais cela avant chaque test dans chaque fichier sepc !!!')
    cy.visit('/')
    cy.get("#cookieChoiceDismiss").click()
  })

  // //Test du champs prénom
  // it('Test First name', ()=> {

 

  // ************************* Exo Précédent **************************
  //   cy.get('#text1').type(firstName)
  //   cy.wait(15000)
  //   cy.get('#text2').type(lastName)

  // })

  // it('Test First name', ()=> {
    
  //   let toHide = "test du champs To Hide"
  //   cy.get('#text1').type(toHide)
  
  // })

// })

// Test du champ prénom v2

it('Test First name', () => {

  cy.get("#text1").should('be.visible').type(firstName).should('have.value', firstName)
  cy.get("#text4").should('be.visible').type(toHide).should('have.value', toHide)
  cy.get("#text2").should('be.visible').type(lastName).should('have.value', lastName)
  cy.get("#text3").should('be.visible').type(hidden).should('have.value', hidden)

  // Sélectionne les checkbox
  cy.get('#check1').check()
  cy.get('#check2').check()
})

})

