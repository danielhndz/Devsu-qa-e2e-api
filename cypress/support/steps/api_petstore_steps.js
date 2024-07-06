import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

const methods = {
  get: "GET",
  post: "POST",
  put: "PUT",
  delete: "DELETE",
};
const baseURL = "petstore.swagger.io/v2";
let user = {
  id: 0,
  username: "danielhndz",
  firstName: "firstName",
  lastName: "lastName",
  email: "email",
  password: "devsu",
  phone: "phone",
  userStatus: 0,
};

Then("the admin deletes the user", () => {
  cy.request({
    method: methods.delete,
    url: `${baseURL}/user/${user.username}`,
  }).then((res) => {
    basicCheckResponse(res);
    expect(res).to.have.property("body");
    expect(res.body.type).to.eq("unknown");
    expect(res.body.message).to.eq("0");
  });
});

Then("the admin searches for the updated user", () => {
  cy.request({
    method: methods.get,
    url: `${baseURL}/user/${user.username}`,
  }).then((res) => {
    cy.log("User should be up-to-date");
    basicCheckResponse(res);
    expect(res).to.have.property("body");
    expect(res.body).to.eq(user);
  });
});

When("the admin updates the first name and email of the user", () => {
  cy.request({
    method: methods.put,
    url: `${baseURL}/user/${user.username}`,
    body: {
      name: "firstNameUpdated",
      email: "emailUpdated",
    },
  }).then((res) => {
    basicCheckResponse(res);
    expect(res).to.have.property("body");
    expect(res.body.type).to.eq("unknown");
    expect(res.body.message).to.eq("0");
  });
});

Given("the admin searches for the created user", () => {
  cy.request({
    method: methods.get,
    url: `${baseURL}/user/${user.username}`,
  }).then((res) => {
    cy.log("User should exists");
    basicCheckResponse(res);
    expect(res).to.have.property("body");
    expect(res.body).to.eq(user);
  });
});

Given("the admin creates a user", () => {
  cy.request({
    method: methods.get,
    url: `${baseURL}/user/${user.username}`,
    failOnStatusCode: false,
  }).then((res) => {
    expect(res.status).to.eq(404);
    expect(res).to.have.property("headers");
    expect(res).to.have.property("body");
    expect(res.body.code).to.eq(1);
    expect(res.body.type).to.eq("error");
    expect(res.body.message).to.eq("User not found");
  });
  cy.request({
    method: methods.post,
    url: `${baseURL}/user`,
    body: [user],
    headers: {
      api_key: "special-key",
    },
  }).then((res) => {
    basicCheckResponse(res);
    expect(res).to.have.property("body");
    expect(res.body.message).to.not.be.empty;
    expect(res.body.type).to.eq("unknown");
    user.id = +res.body.message;
    cy.log(user);
  });
});

function basicCheckResponse(response) {
  cy.log(response);
  expect(response.status).to.eq(200);
  expect(response).to.have.property("headers");
}
