const elements = {
  txtUsername: "*[data-test='username']",
  txtPassword: "*[data-test='password']",
};

export class LoginPage {
  navigate() {
    cy.visit("/");
  }

  login(username, password) {
    cy.get(elements.txtUsername).type(username);
    cy.get(elements.txtPassword).type(`${password}{enter}`);
  }
}
