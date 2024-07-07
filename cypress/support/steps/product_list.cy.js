import { When } from "@badeball/cypress-cucumber-preprocessor";
import { ProductListPage } from "../pages/product_list.cy";

const productListPage = new ProductListPage();

When("the user adds {int} products to the car", (productQuantity) => {
  productListPage.addNDifferentToCart(productQuantity);
});
