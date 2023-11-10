describe('search product', () => {
  it('should search for product', () => {
    cy.visit('/')
    cy.search('moletom')

    cy.location('pathname').should('eq', '/search')
    cy.location('search').should('eq', '?q=moletom')

    cy.get('a[href^="/product"]').should('exist')
  })

  it('should redirect to home page if search query is empty', () => {
    cy.on('uncaught:exception', () => false)
    cy.visit('/search?q=')

    cy.location('pathname').should('eq', '/')
  })
})
