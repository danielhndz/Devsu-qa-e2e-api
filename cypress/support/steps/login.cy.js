import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../pages/login.cy";

const loginPage = new LoginPage();

Given(
  "the user logs in with {word} and {word} as credentials",
  (username, password) => {
    cy.url().then(($url) => {
      if ($url != Cypress.config().baseUrl) {
        loginPage.navigate();
      }
    });
    loginPage.login(username, password);
  }
);
