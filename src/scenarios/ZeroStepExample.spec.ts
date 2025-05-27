import { test } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test.skip('Login com zerostep', async ({ page }) => {
  await page.goto('https://www1.satc.edu.br/portais/acesso/public/#/');

  const aiArgs = { page, test };
  await ai('Selecione o campo Matrícula na sessão do aluno', aiArgs);
  await ai('Digite 202222220', aiArgs);
  await ai('Selecione o campo Senha na sessão do aluno', aiArgs);
  await ai('Digite 1234', aiArgs);
  await ai('Click no botão de entrar na sessão do aluno', aiArgs);
});
