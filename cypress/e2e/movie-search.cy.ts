// cypress/e2e/movie-search.cy.ts

describe('Test de recherche de films', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200'); // Remplacez par l'URL de votre application
  });

  it('Devrait afficher les films populaires au chargement', () => {
    cy.contains('Films Populaires'); // Vérifie que la section des films populaires s'affiche
    cy.get('.popular-movie').should('have.length.greaterThan', 0); // Vérifie qu'il y a au moins un film populaire
  });

  it('Devrait afficher les résultats de recherche', () => {
    cy.get('input[placeholder="Rechercher un film..."]').type('Avengers');
    cy.get('button').contains('Rechercher').click();

    cy.get('.search-results').should('exist'); // Vérifie que les résultats s'affichent
    cy.get('.search-results .movie-item').should('have.length.greaterThan', 0);
  });

  it('Devrait afficher un message d\'erreur si la recherche échoue', () => {
    cy.intercept('GET', '**/search**', {
      statusCode: 500,
    }).as('searchError');

    cy.get('input[placeholder="Rechercher un film..."]').type('Erreur');
    cy.get('button').contains('Rechercher').click();

    cy.wait('@searchError');
    cy.contains('Erreur lors de la récupération des films.');
  });
});
