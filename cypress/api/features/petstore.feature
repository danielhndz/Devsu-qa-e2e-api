Feature: petstore.swagger.io

  Scenario: User life cycle
    Given the admin creates a user
    And the admin searches for the created user
    When the admin updates the first name and email of the user
    Then the admin searches for the updated user
    And the admin deletes the user