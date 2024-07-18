# :hammer_and_wrench: Devsu - QA Practical Exercises

## :pick: Daniel Hernández

<br/>

This project is the solution implemented for the `Devsu QA practical exercises`.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en) 18.x, 20.x, 22.x and above
- [npm](https://www.npmjs.com/)
- [Cypress](https://www.cypress.io/) `npm i -D cypress`
- [cypress-esbuild-preprocessor](https://github.com/bahmutov/cypress-esbuild-preprocessor) `npm i -D @bahmutov/cypress-esbuild-preprocessor esbuild`
- [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) `npm i -D @badeball/cypress-cucumber-preprocessor`
- [Allure](https://allurereport.org/docs/install/)
- [allure-cypress](https://allurereport.org/docs/cypress/) `npm i -D allure-cypress`

### Run

First, you need to clone this repo:

```bash
git clone git@github.com:danielhndz/devsu-qa-e2e-api.git
```

Then, you need to go to the project folder:

```bash
cd devsu-qa-e2e-api
```

Then, you need to install the dependencies, if you haven't already done so:

```bash
npm i -D
```

Then, you can run it with the Cypress GUI (the Allure reports will not be generated):

```bash
# both have the same result
npx cypress open
npm run cy:open
```

![running](../media/run.png?raw=true)

### E2E testing

After running it, select `E2E Testing`:

![selecting e2e testing](../media/select_e2e.png?raw=true)

Then select the browser and click on `Start E2E Testing in <browser>`:

![selecting browser](../media/select_browser.png?raw=true)

Then select the e2e feature file:

![selecting e2e feature file and running scenario](../media/e2e_demo.gif?raw=true)

### API testing

After running it, select `E2E Testing`:

![selecting e2e testing](../media/select_e2e.png?raw=true)

Then select the browser and click on `Start E2E Testing in <browser>`:

![selecting browser](../media/select_browser.png?raw=true)

Then select the api feature file:

![selecting api feature file and running scenario](../media/api_demo.gif?raw=true)

### Report

You must already have Allure installed to generate the testing report:

```bash
# both have the same result
npx cypress run
npm run cy:run
```

![running finished](../media/run_output.png?raw=true)

Then, you can generate Allure reports based on the `allure-results` folder generated in the previous step:

```bash
allure generate
```

![allure generate](../media/allure_generate.png?raw=true)

Then, you can open the reports generated on the `allure-report` folder in the previous step:

```bash
allure open
```

![allure open](../media/allure_open.png?raw=true)

## Final findings and thoughts

- Cypress can successfully automate E2E and API test flows for e-commerce sites such as saucedemo.com and petstore.swagger.io, I find it seems to produce flake-resistant tests as opposed to Selenium.
- Cypress ca be easily integrated with plugins, allowing Cucumber and POM for instance, to be implemented on a Cypress-based framework.
- I found an interesting and valuable opinion by [Filip Hric](https://filiphric.com/cucumber-in-cypress-a-step-by-step-guide), he says that keeping in mind that Cypress tests are executed inside the browser, the use of Cucumber (whose benefits are well known and so well appreciated from my point of view) implies using a black-box approach that "throws away all the power of Cypress", I agree with him, but I also think that the benefits that come with Cucumber are important and valuable enough to keep it, he also "still" believes that we can be successful even with this abstraction model.
- I also found that the saucedemo.com page has some HTML elements whose properties have values that seem a bit strange, with function calls in the middle of the value.
- Finally, I would also like to highlight the versatility that Cypress offers in the sense that we can develope and execute both types of tests, E2E and API, using the same automation framework.

## Built With

- [Cypress](https://www.cypress.io/) - JavaScript testing framework
- [cypress-esbuild-preprocessor](https://github.com/bahmutov/cypress-esbuild-preprocessor) (plugin) - Bundle Cypress specs using esbuild
- [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) (plugin) - This preprocessor aims to provide a developer experience and behavior similar to that of Cucumber, to Cypress.
- [Allure](https://allurereport.org/) - Simple. Fun. Language and Framework agnostic.
- [allure-cypress](https://allurereport.org/docs/cypress/) - Generate beautiful HTML reports using Allure Report and your Cypress tests.
- [Git](https://git-scm.com/) - Version Management

## Authors

- **Daniel Hernández** - _Initial work_ - [danielhndz](https://github.com/danielhndz)
- Last update: 07/06/2024

## License

This project is licensed under the GPLv3 License - see the [LICENSE.md](LICENSE.md) file for details
