import data from "../../fixtures/data.json";

const elements = {
  txtUsername: "*[data-test='username']",
  txtPassword: "*[data-test='password']",
  btnLogin: "*[data-test='login-button']",
};

export class LoginPage {
  navigate() {
    cy.visit("/");
  }

  login(username, password) {
    cy.shouldExistBeVisibleAndHaveValue(elements.btnLogin, data.btnLoginText);
    cy.shouldExistAndBeVisible(elements.txtUsername);
    cy.get(elements.txtUsername).type(username);
    cy.shouldExistAndBeVisible(elements.txtPassword);
    cy.get(elements.txtPassword).type(`${password}{enter}`);
  }
}
