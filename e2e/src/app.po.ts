import { browser, element, by, WebDriver } from 'protractor';
const AxeBuilder = require('axe-webdriverjs');

export class AngularWorkshopPage {
  navigateTo() {
    return browser.get('/');
  }
  
  a11y(resultFn) {
    return AxeBuilder(WebDriver).analyze(resultFn)
  }
}
