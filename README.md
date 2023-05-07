# Ghost E2E

End-to-end tests during automated testing in Ghost CMS v3.41.1

## Usage

### Cypress

1. Install Cypress with `npm i -g cypress`.
2. Go to Cypress path with `cd src/cypress_tests/`.
3. Run all test scenarios with: `cypress run --spec "cypress/e2e/scenarios/*cy.js"`.
4. Run only one scenario with: `cypress run --spec "cypress/e2e/scenarios/Scenario1.cy.js"`.
5. Alternatively, you can use `cypress open` and select this project to follow running instructions by using GUI.

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

-   **[MIT license](LICENSE)**
-   Copyright 2023 © Code Automators
