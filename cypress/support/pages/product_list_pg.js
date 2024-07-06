import { getRandomIntBetween1AndN, setCarSize } from "../steps/common_steps";

const elements = {
  itemName: "*[data-test='inventory-item-name']",
  itemDescription: "*[data-test='inventory-item-desc']",
  itemImg: "*[data-test^='inventory-item-'][data-test$='-img']",
  itemPrice: "*[data-test='inventory-item-price']",
  btnAddToCart: "*[data-test^='add-to-cart']",
  btnRemove: "*[data-test^='remove']",
  addToCartText: "Add to cart",
  removeText: "Remove",
  shoppingCartBadge: "*[data-test='shopping-cart-badge']",
  productListLength: 6,
};

export class ProductListPage {
  addNDifferentToCart(n) {
    setCarSize(n);
    let randomInt;
    let randomList = [];
    cy.shouldExistBeVisibleAndHaveLength(
      elements.itemName,
      elements.productListLength
    );
    cy.shouldExistBeVisibleAndHaveLength(
      elements.itemDescription,
      elements.productListLength
    );
    cy.shouldExistBeVisibleAndHaveLength(
      elements.itemImg,
      elements.productListLength
    );
    cy.shouldExistBeVisibleAndHaveLength(
      elements.itemPrice,
      elements.productListLength
    );
    cy.shouldExistBeVisibleAndHaveLength(
      elements.btnAddToCart,
      elements.productListLength
    );
    for (let i = 0; i < elements.productListLength; i++) {
      cy.shouldExistBeVisibleAndNotBeEmpty(elements.itemName, i);
      cy.shouldExistBeVisibleAndNotBeEmpty(elements.itemDescription, i);
      cy.shouldExistAndBeVisible(elements.itemImg, i);
      cy.shouldExistBeVisibleAndNotBeEmpty(elements.itemPrice, i);
      cy.shouldExistBeVisibleAndHaveText(
        elements.btnAddToCart,
        elements.addToCartText,
        i
      );
    }
    if (n > elements.productListLength) {
      cy.log("There are not enough products");
    }
    do {
      randomInt = getRandomIntBetween1AndN(
        elements.productListLength - randomList.length
      );
      if (!randomList.includes(randomInt)) {
        randomList.push(randomInt);
      }
      if (
        randomList.length == elements.productListLength ||
        randomList.length == n
      ) {
        break;
      }
    } while (true);
    cy.log(randomList);
    for (let i = 0; i < randomList.length; i++) {
      if (i == 0) {
        cy.get(elements.btnRemove).should("not.exist");
        cy.get(elements.shoppingCartBadge).should("not.exist");
      }
      cy.get(elements.btnAddToCart).eq(randomList[i]).click();
      cy.get(elements.btnRemove).should("have.length", i + 1);
      cy.get(elements.shoppingCartBadge).should("have.text", i + 1);
    }
  }

  getElements() {
    return elements;
  }
}
