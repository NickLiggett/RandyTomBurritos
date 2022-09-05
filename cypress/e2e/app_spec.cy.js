describe('Main Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should render all movies when the user visits the app', () => {
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
      .get('.details').should('contain','MONEY PLANE')
  })

  it('When a movie\'s details are displayed, none of the other movies will be visible', () => {
    cy.get('#694919').click()
      .url().should('include', '/694919')
      .get('.details').should('not.exist','I STILL BELIEVE')
  })

  it('Should be able to click on the View Trailer button and be taken to a page with that movie\'s trailer', () => {
    cy.get('#694919').click()
      .get('.trailer-button').click()
      .url().should('include', '/694919/videos')
      .get('iframe').should('have.attr', 'src').should('include', 'https://www.youtube.com/embed/aETz_dRDEys')
  })
  
  it('Should be able to return to the main page when the user clicks the "return to all movies" button', () => {
    cy.get('#694919').click()
      .get('.home-button').click()
      .url().should('include', '/')
  })

  it('Should be able to click the browser back and forward buttons to navigate between pages', () => {
    cy.get('#694919').click()
      .get('.details').should('contain','MONEY PLANE')
      .go('back')
      .url().should('include', '/')
      .get('#585244').should('have.css', 'background-image')
      .and('include', 'https://image.tmdb.org/t/p/original//dqA2FCzz4OMmXLitKopzf476RVB.jpg')
      .go('forward')
      .url().should('include', '/694919')
      .get('.details').should('contain','MONEY PLANE')
  })

})