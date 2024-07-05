Feature: saucedemo.com

  Background:
    Given the user logs in with standard_user and secret_sauce as credentials

  Scenario: Purchase flow
    When the user adds 2 products to the car
    And the user visualizes the car
    And the user fills out the purchase form
    And the user completes the purchase
    Then the user can see the purchase confirmation