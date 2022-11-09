/// <reference types="Cypress"/>
import DB from '../fixtures/db.json'
import Product from '../support/product'
describe('EHS-Test', () => {
 
    let prodNum = 4 
    let stdNum = 'STD ' + prodNum
    let product =new Product(prodNum)

    it('Test01_checkListofItem', () => {

        cy.visit(Cypress.env("baseUrl"))  
        cy.get("#ListAllItemsButton").click()        
        cy.get("table tbody").should('be.visible')
        cy.get('tbody').find('tr').contains('EHS - All Items')
        Object.values(DB).forEach(val=>cy.get('tbody td').should('contain.text',val['Name']))
     
    })

    it('Test02_check-detail-information', () => {
        
        cy.get('tbody tr').eq(prodNum).then((colText)=>{
        const getcolText = colText.text()           
        cy.get('#OpenItem'+prodNum+'Button').click()
        cy.get("table tbody").should('be.visible')
        expect(getcolText).to.contains(DB[stdNum]['Name']) 
        product.fieldAssert()      
        
         })
    })

    it('Test03_searchProduct', () => {
        cy.visit(Cypress.env("baseUrl"))      
        cy.get("#ProductIdField").type(stdNum)
        cy.get("#FindItemButton").click()
        product.fieldAssert()
})

})