import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class LoginElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getMatriculaField(): Locator {
    return this.page.locator('input[name="user1"]');
  }

  getSenhaField(): Locator {
    return this.page.locator('input[name="pass1"]');
  }

  getLoginButton(): Locator {
    return this.page.locator('button[class="btn btn-login"]');
  }
}
