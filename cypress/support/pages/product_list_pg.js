const elements = {
  btnAddToCart: "*[data-test^='add-to-cart']",
  productListLength: 6,
};

export class ProductListPage {
  addNDifferentToCart(n) {
    let randomInt = 0;
    let randomList = [];
    cy.get(elements.btnAddToCart).should(
      "have.length",
      elements.productListLength
    );
    if (n > elements.productListLength) {
      cy.log("There are not enough products");
    }
    do {
      randomInt = this.getRandomIntBetween1AndN(
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
    randomList.forEach((currentRandom) => {
      cy.get(elements.btnAddToCart).eq(currentRandom).click();
    });
  }

  getRandomIntBetween1AndN(n) {
    return Math.floor(Math.random() * n);
  }
}
