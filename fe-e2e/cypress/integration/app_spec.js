describe('My First Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    it('Check title', () => {
      cy.get('h1').then(e => {
          expect(e.text()).be.equal(' app is running!')
      })
    })

    it('Check title after click', () => {
        cy.get('h1').then(e => {
            expect(e.text()).be.equal(' app is running!')
        })

        cy.get('.btn').click()

        cy.get('h1').then(e => {
            expect(e.text()).be.equal('esf-e2e app is running!')
        })
      })
  })