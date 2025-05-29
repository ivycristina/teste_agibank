import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given("eu acesso o blog da agibank", () => {
    cy.visitarPagina();
})

When("clicar na lupa e pesquisar a noticia", () => {
    cy.get('.ast-icon', { timeout: 10000 })
    .should('be.visible');
    cy.get('.search-field')
    .type('mudança no consignado{enter}', { force: true }, { delay: 100 });
})

Then("o blog exibirá os resultados encontrados com essa noticia informada", () =>{
    cy.get('.page-title').should('contain.text','Resultados encontrados para: mudança no consignado', { timeout: 5000});
   /// cy.get('.header-titulo').should('contain.text', 'Resultados encontrados para: mudança no consignado');
})



When("clicar no menu Serviços", () => {
    cy.get('#menu-item-3715 > .menu-link > .menu-text').should('be.visible').click();
})