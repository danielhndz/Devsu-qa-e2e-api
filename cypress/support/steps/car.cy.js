import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { CartPage } from "../pages/car.cy";

const cartPage = new CartPage();

Then("the user can see the purchase confirmation", () => {
  cartPage.verifyPurchaseConfirmationMsg();
});

When("the user completes the purchase", () => {
  cartPage.completePurchase();
});

When("the user fills out the purchase form", () => {
  cartPage.goToCheckout();
  cartPage.fillOutYourInfoForm();
});

When("the user visualizes the car", (productQuantity) => {
  cartPage.goToCart();
});
