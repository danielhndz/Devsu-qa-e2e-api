import data from "../../fixtures/data.json";
import { getCarSize } from "../steps/common_steps";
import { ProductListPage } from "./product_list_pg";

const elements = {
  btnGoToCart: "*[data-test='shopping-cart-link']",
  btnCheckout: "*[data-test='checkout']",
  btnCheckoutText: "Checkout",
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

const productListPage = new ProductListPage();

export class CartPage {
  goToCart() {
    cy.get(elements.btnGoToCart).click();
    cy.shouldExistBeVisibleAndHaveLength(
      productListPage.getElements().itemName,
      getCarSize()
    );
    cy.shouldExistBeVisibleAndHaveLength(
      productListPage.getElements().itemDescription,
      getCarSize()
    );
    cy.shouldExistBeVisibleAndHaveLength(
      productListPage.getElements().itemPrice,
      getCarSize()
    );
    cy.shouldExistBeVisibleAndHaveLength(
      productListPage.getElements().btnRemove,
      getCarSize()
    );
    for (let i = 0; i < getCarSize(); i++) {
      cy.shouldExistBeVisibleAndNotBeEmpty(
        productListPage.getElements().itemName,
        i
      );
      cy.shouldExistBeVisibleAndNotBeEmpty(
        productListPage.getElements().itemDescription,
        i
      );
      cy.shouldExistBeVisibleAndNotBeEmpty(
        productListPage.getElements().itemPrice,
        i
      );
      cy.shouldExistBeVisibleAndHaveText(
        productListPage.getElements().btnRemove,
        productListPage.getElements().removeText,
        i
      );
    }
  }

  goToCheckout() {
    cy.shouldExistBeVisibleAndHaveText(
      elements.btnCheckout,
      elements.btnCheckoutText
    );
    cy.get(elements.btnCheckout).click();
  }

  fillOutYourInfoForm() {
    cy.shouldExistAndBeVisible(elements.txtFirsName);
    cy.get(elements.txtFirsName).type(data.firstName);
    cy.shouldExistAndBeVisible(elements.txtLastName);
    cy.get(elements.txtLastName).type(data.lastName);
    cy.shouldExistAndBeVisible(elements.txtPostalCode);
    cy.get(elements.txtPostalCode).type(data.postalCode);
    cy.shouldExistAndBeVisible(elements.btnContinue);
    cy.get(elements.btnContinue).click();
  }

  completePurchase() {
    cy.shouldExistAndBeVisible(elements.btnComplete);
    cy.get(elements.btnComplete).click();
  }

  verifyPurchaseConfirmationMsg() {
    cy.shouldExistAndBeVisible(elements.ponyExpress);
    cy.shouldExistBeVisibleAndContainText(
      elements.completeHeader,
      data.completeHeader
    );
    cy.shouldExistBeVisibleAndContainText(
      elements.completeText,
      data.completeText
    );
    cy.shouldExistAndBeVisible(elements.btnBackHome);
    cy.shouldExistBeVisibleAndContainText(
      elements.btnBackHome,
      data.backHomeText
    );
  }
}
