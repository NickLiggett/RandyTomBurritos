describe('Main Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should render all movies when the user vists the app', () => {
    cy.contains('Randy Tom\'s Burritos')
      .url().should('include', '/')
      .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 201
      })
      .get('#585244').should('have.css', 'background-image')
      .and('include', 'https://image.tmdb.org/t/p/original//dqA2FCzz4OMmXLitKopzf476RVB.jpg')
  })

  it('Should show an error message if the response is not ok', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 401
      })
      .get('h1').should('contain', 'Restuffing Burrito... sorry about that.')
  })

  it('Should be able to click on a movie card and display that movie\'s details', () => {
    cy.get('#694919').click()
      .url().should('include', '/694919')
  })
  
  it('Should be able to return to the main page when the user clicks the "return to all movies" button', () => {
    cy.get('#694919').click()
      .get('.view-all-button').click()
      .url().should('include', '/')
  })

})