// cypress/e2e/example.cy.ts
describe('My First E2E Test', () => {
  it('should visit the homepage', () => {
    cy.visit('/');
    cy.contains('Bienvenue'); // Change 'Bienvenue' par un texte que tu as sur ta page d'accueil
  });
});
