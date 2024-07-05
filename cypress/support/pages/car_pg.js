import data from "../../fixtures/data.json";

const elements = {
  btnGoToCart: "*[data-test='shopping-cart-link']",
  btnCheckout: "*[data-test='checkout']",
  txtFirsName: "*[data-test='firstName']",
  txtLastName: "*[data-test='lastName']",
  txtPostalCode: "*[data-test='postalCode']",
  btnContinue: "*[data-test='continue']",
  btnComplete: "*[data-test='finish']",
  ponyExpress: "*[data-test='pony-express']",
  completeHeader: "*[data-test='complete-header']",
  completeText: "*[data-test='complete-text']",
  btnBackHome: "*[data-test='back-to-products']",
};

export class CartPage {
  goToCart() {
    cy.get(elements.btnGoToCart).click();
  }

  goToCheckout() {
    cy.get(elements.btnCheckout).click();
  }

  fillOutYourInfoForm() {
    cy.get(elements.txtFirsName).type(data.firstName);
    cy.get(elements.txtLastName).type(data.lastName);
    cy.get(elements.txtPostalCode).type(data.postalCode);
    cy.get(elements.btnContinue).click();
  }

  completePurchase() {
    cy.get(elements.btnComplete).click();
  }

  verifyPurchaseConfirmationMsg() {
    cy.get(elements.ponyExpress).should("be.visible");
    cy.get(elements.completeHeader).should("contain.text", data.completeHeader);
    cy.get(elements.completeText).should("contain.text", data.completeText);
    cy.get(elements.btnBackHome).should("be.visible");
    cy.get(elements.btnBackHome).should("contain.text", data.backHomeText);
  }
}
