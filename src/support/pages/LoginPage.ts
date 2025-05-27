import { Page, expect } from '@playwright/test';
import BasePage from './BasePage';
import LoginElements from '../elements/LoginElements';

export default class LoginPage extends BasePage {
  readonly loginElements: LoginElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.loginElements = new LoginElements(page);
  }

  async FazerLogin(): Promise<void> {
    await this.loginElements.getMatriculaField().fill('202222220');
    await this.loginElements.getSenhaField().fill('023818');
    await this.loginElements.getLoginButton().first().click();
  }

  async FazerLoginComCamposIncorretos(): Promise<void> {
    await this.loginElements.getMatriculaField().fill('165498');
    await this.loginElements.getSenhaField().fill('65164');
    await this.loginElements.getLoginButton().first().click();
  }

  async FazerLoginSemOsCampos(): Promise<void> {
    await this.loginElements.getLoginButton().first().click();
  }
}
