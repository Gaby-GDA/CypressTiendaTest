describe ('Search Element' , ()=> {
    beforeEach(()=>{
    cy.visit('./');
    })
    it('search for element with multiple results', ()=> {
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('dress');
            cy.get(index.searchButton).type('{enter}');
        }) 
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.title).should('contain', 'dress');

        })
    })
    it('search for element with no results', ()=> {
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('qwerty');
            cy.get(index.searchButton).type('{enter}');
        })
        cy.fixture('searchResult').then((searchResult)=>{
            //cy.get(searchResult.alert).should('contain', 'No result were found for your search');
            cy.get(searchResult.alert).should('contain', 'No results were found for your search');
        })    
    })
}) 