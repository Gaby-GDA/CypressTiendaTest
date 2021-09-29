describe("SuiteName" , function(){
    it('Test1', () => {
        cy.visit("https://www.google.com");
        cy.get('.gLFyf').type('delarcaproducciones');
        cy.get('.gLFyf').type('{enter}');
         
    });
 
})