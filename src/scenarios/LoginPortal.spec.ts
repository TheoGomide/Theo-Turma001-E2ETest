import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import LoginPage from '../support/pages/LoginPage';

test.describe('Fazer Login no Portal Satc', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let loginPage: LoginPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.portalSatc')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto(BASE_URL);
  });

  test('Fazer Login', async () => {
    await loginPage.FazerLogin();
  });

  test('Fazer Login Com Campos Incorretos', async () => {
    await loginPage.FazerLoginComCamposIncorretos();
  });

  test('Fazer Login Sem Preencher os campos', async () => {
    await loginPage.FazerLoginSemOsCampos();
  });
});
