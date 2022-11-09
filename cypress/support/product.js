import DB from '../fixtures/db.json'

class Product {
    
    constructor(product_num){
        this.db=DB
        this.productId = 'STD '+ product_num
    }
    fieldAssert()
    {
       
        cy.get("#NameField").should('have.value',this.db[this.productId]['Name'])
        cy.get("#MaterialField").should('have.value',this.db[this.productId]['Material'])
        cy.get("#ManufacturerField").should('have.value',this.db[this.productId]['Manufacturer'])
        cy.get('#RetailPriceField').should('have.value',this.db[this.productId]['RetailPrice'])  
    }
}

export default Product