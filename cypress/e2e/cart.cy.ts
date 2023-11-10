beforeEach(() => {
  cy.visit('/')
})

describe('add product to cart', () => {
  beforeEach(() => {
    cy.get('a[href^="/product"]').first().click()
    cy.url().should('include', '/product')
  })

  it('should navigate to product page and add it to cart', () => {
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Cart 1').should('exist')
  })

  it('should not increase the cart when add same product twice', () => {
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Cart 1').should('exist')
  })

  it('should search for product and add it to cart', () => {
    cy.get('input[name="q"]').type('moletom').parent().submit()

    cy.get('a[href^="/product"]').first().click()
    cy.url().should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Cart 1').should('exist')
  })
})
