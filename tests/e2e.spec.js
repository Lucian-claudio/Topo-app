import { test, expect } from '@playwright/test';

test.describe('Tarefas app', () => {
  test('adiciona, marca e remove tarefa', async ({ page }) => {
    await page.goto('/');

    // Adicionar tarefa
    await page.fill('input[aria-label="Nova tarefa"]', 'Teste E2E');
    await page.click('button:has-text("Adicionar")');

    // Verificar que a tarefa apareceu
    await expect(page.locator('text=Teste E2E')).toBeVisible();

    // Marcar como concluída
    await page.check('input[type="checkbox"]');
    await expect(page.locator('span.task-text.done')).toHaveCount(1);

    // Remover tarefa
    await page.click('button:has-text("Remover")');
    await expect(page.locator('text=Teste E2E')).toHaveCount(0);
  });
});
