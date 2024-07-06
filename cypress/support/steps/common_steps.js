let carSize;

export function getCarSize() {
  return Cypress.env("carSize");
}

export function setCarSize(size) {
  Cypress.env("carSize", size);
}

export function getRandomIntBetween1AndN(n) {
  return Math.floor(Math.random() * n);
}
