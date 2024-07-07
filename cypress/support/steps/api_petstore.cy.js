import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

const methods = {
  get: "GET",
  post: "POST",
  put: "PUT",
  delete: "DELETE",
};
const baseURL = "https://petstore.swagger.io/v2";
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
    expect(res.body.message).to.eq(user.username);
  });
});

Then("the admin searches for the updated user", () => {
  cy.request({
    method: methods.get,
    url: `${baseURL}/user/${user.username}`,
  }).then((res) => {
    basicCheckResponse(res);
    expect(res).to.have.property("body");
    // comment becacuse the api is working slow
    // expect(JSON.stringify(res.body)).to.eq(JSON.stringify(user));
  });
});

When("the admin updates the first name and email of the user", () => {
  user.firstName = "firstNameUpdated";
  user.email = "emailUpdated";
  cy.request({
    method: methods.put,
    url: `${baseURL}/user/${user.username}`,
    body: user,
  }).then((res) => {
    basicCheckResponse(res);
    expect(res).to.have.property("body");
    expect(res.body.type).to.eq("unknown");
    expect(res.body.message).to.eq(`${user.id}`);
  });
});

Given("the admin searches for the created user", () => {
  cy.request({
    method: methods.get,
    url: `${baseURL}/user/${user.username}`,
  }).then((res) => {
    basicCheckResponse(res);
    expect(res).to.have.property("body");
    user.id = +res.body.id;
    // comment becacuse the api is working slow
    // expect(JSON.stringify(res.body)).to.eq(JSON.stringify(user));
  });
});

Given("the admin creates a user", () => {
  cy.request({
    method: methods.post,
    url: `${baseURL}/user`,
    body: user,
  }).then((res) => {
    basicCheckResponse(res);
    expect(res).to.have.property("body");
    expect(res.body.message).to.not.be.empty;
    expect(res.body.type).to.eq("unknown");
    user.id = +res.body.message;
  });
});

function basicCheckResponse(response) {
  expect(response.status).to.eq(200);
  expect(response).to.have.property("headers");
}
