// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('astra is not defined')) {
    return false;
  }
});

if (typeof KeyboardEvent === "undefined") {
  window.KeyboardEvent = class {
    constructor(type, options) {
      return new Event(type, options);
    }
  };
}
Cypress.on('window:before:load', (win) => {
  if (typeof win.KeyboardEvent === 'undefined') {
    class FakeKeyboardEvent extends Event {
      constructor(type, options) {
        super(type, options);
        this.key = options?.key || "";
      }
    }
    win.KeyboardEvent = FakeKeyboardEvent;
  }
});

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('publicPath')) {
    return false;
  }
});

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('jetpackCarouselStrings')) {
    return false;
  }
});

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('$scope.imagesLoaded is not a function')) {
    return false;
  }
});


