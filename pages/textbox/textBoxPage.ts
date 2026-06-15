import { Page } from '@playwright/test';
import { BasePage } from '../basePage';
import { urls } from '../urls';

export class TextBoxPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.goto(urls.textBox);
  }

  async fillAndSubmit(data: {
    fullName: string;
    email: string;
    currentAddress: string;
    permanentAddress: string;
  }) {
    await this.page.locator(textBoxLocators.fullNameInput).fill(data.fullName);
    await this.page.locator(textBoxLocators.emailInput).fill(data.email);
    await this.page.locator(textBoxLocators.currentAddressInput).fill(data.currentAddress);
    await this.page.locator(textBoxLocators.permanentAddressInput).fill(data.permanentAddress);
    await this.page.locator(textBoxLocators.submitButton).click();
  }

  async fillFullName(name: string) {
    await this.page.locator(textBoxLocators.fullNameInput).fill(name);
  }

  async fillEmail(email: string) {
    await this.page.locator(textBoxLocators.emailInput).fill(email);
  }

  async fillCurrentAddress(address: string) {
    await this.page.locator(textBoxLocators.currentAddressInput).fill(address);
  }

  async fillPermanentAddress(address: string) {
    await this.page.locator(textBoxLocators.permanentAddressInput).fill(address);
  }

  async clickSubmit() {
    await this.page.locator(textBoxLocators.submitButton).click();
  }
}

export const textBoxLocators = {
  fullNameInput:        '#userName',
  emailInput:           '#userEmail',
  currentAddressInput:  '#currentAddress',
  permanentAddressInput:'#permanentAddress',
  submitButton:         '#submit',
  outputBox:            '#output',
  outputName:           '#output #name',
  outputEmail:          '#output #email',
  outputCurrentAddress: '#output #currentAddress',
  outputPermanentAddress:'#output #permanentAddress',
};

export const textBoxTexts = {
  invalidEmail: 'Please enter a valid email address',
};
