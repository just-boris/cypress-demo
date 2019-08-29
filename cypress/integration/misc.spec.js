context("Misc", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/misc");
  });

  it("cy.focused() - get the DOM element that has focus", () => {
    cy.get(".misc-form")
      .find("#name")
      .click();
    cy.focused().should("have.id", "name");

    cy.get(".misc-form")
      .find("#description")
      .click();
    cy.focused().should("have.id", "description");
  });

  context("Cypress.Screenshot", function() {
    it("cy.screenshot() - take a screenshot", () => {
      allure.createStep('here will be screenshot', () => {})();
      // https://on.cypress.io/screenshot
      cy.screenshot("my-image");
    });

    it("Cypress.Screenshot.defaults() - change default config of screenshots", function() {
      Cypress.Screenshot.defaults({
        blackout: [".foo"],
        capture: "viewport",
        clip: { x: 0, y: 0, width: 200, height: 200 },
        scale: false,
        disableTimersAndAnimations: true,
        screenshotOnRunFailure: true,
        beforeScreenshot() {},
        afterScreenshot() {}
      });
    });
  });
});
