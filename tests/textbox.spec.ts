import { test, expect } from '@playwright/test';
import { TextBoxPage, textBoxLocators } from '@pages/textbox/textBoxPage';
import { urls } from '@pages/urls';

test.describe('Text Box', () => {

  test('TC01 - submit all fields and verify output', {
    tag: ['@Staging', '@textbox'],
  }, async ({ page }) => {
    const textBoxPage = new TextBoxPage(page);
    await textBoxPage.open();

    await textBoxPage.fillAndSubmit({
      fullName:         'John Doe',
      email:            'john.doe@example.com',
      currentAddress:   '123 Main St, Springfield',
      permanentAddress: '456 Elm St, Shelbyville',
    });

    await expect(page.locator(textBoxLocators.outputBox)).toBeVisible();
    await expect(page.locator(textBoxLocators.outputName)).toContainText('John Doe');
    await expect(page.locator(textBoxLocators.outputEmail)).toContainText('john.doe@example.com');
    await expect(page.locator(textBoxLocators.outputCurrentAddress)).toContainText('123 Main St, Springfield');
    await expect(page.locator(textBoxLocators.outputPermanentAddress)).toContainText('456 Elm St, Shelbyville');
  });

  test('TC02 - fill full name only', {
    tag: ['@Staging', '@textbox'],
  }, async ({ page }) => {
    const textBoxPage = new TextBoxPage(page);
    await textBoxPage.open();
    await textBoxPage.fillFullName('Jane Smith');
    await expect(page.locator(textBoxLocators.fullNameInput)).toHaveValue('Jane Smith');
  });

  test('TC03 - fill email only', {
    tag: ['@Staging', '@textbox'],
  }, async ({ page }) => {
    const textBoxPage = new TextBoxPage(page);
    await textBoxPage.open();
    await textBoxPage.fillEmail('jane@example.com');
    await expect(page.locator(textBoxLocators.emailInput)).toHaveValue('jane@example.com');
  });

  test('TC04 - fill current address only', {
    tag: ['@Staging', '@textbox'],
  }, async ({ page }) => {
    const textBoxPage = new TextBoxPage(page);
    await textBoxPage.open();
    await textBoxPage.fillCurrentAddress('789 Oak Ave, Metropolis');
    await expect(page.locator(textBoxLocators.currentAddressInput)).toHaveValue('789 Oak Ave, Metropolis');
  });

  test('TC05 - fill permanent address only', {
    tag: ['@Staging', '@textbox'],
  }, async ({ page }) => {
    const textBoxPage = new TextBoxPage(page);
    await textBoxPage.open();
    await textBoxPage.fillPermanentAddress('321 Pine Rd, Gotham');
    await expect(page.locator(textBoxLocators.permanentAddressInput)).toHaveValue('321 Pine Rd, Gotham');
  });

  test('TC06 - submit with name and email only', {
    tag: ['@Staging', '@textbox'],
  }, async ({ page }) => {
    const textBoxPage = new TextBoxPage(page);
    await textBoxPage.open();
    await textBoxPage.fillFullName('Alice');
    await textBoxPage.fillEmail('alice@example.com');
    await textBoxPage.clickSubmit();
    await expect(page.locator(textBoxLocators.outputBox)).toBeVisible();
    await expect(page.locator(textBoxLocators.outputName)).toContainText('Alice');
  });

  test('TC07 - invalid email triggers error state', {
    tag: ['@Staging', '@textbox'],
  }, async ({ page }) => {
    const textBoxPage = new TextBoxPage(page);
    await textBoxPage.open();
    await textBoxPage.fillFullName('Bob');
    await textBoxPage.fillEmail('not-an-email');
    await textBoxPage.clickSubmit();
    await expect(page.locator(textBoxLocators.emailInput)).toHaveClass(/field-error/);
    await expect(page.locator(textBoxLocators.outputBox)).toBeHidden();
  });

});
