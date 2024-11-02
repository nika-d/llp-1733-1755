// @ts-expect-error - linter cannot find @playwright/test
import type { Page } from '@playwright/test'
import uiTexts from '$src/common/uiTexts/lernzielReview'
import { Drawer } from '$test/playwright/fixturesAndSelectors/Drawer'

export default async function (page: Page, drawer: Drawer) {
    await drawer.getSelf().getByRole('button', { name: uiTexts.EREIGNIS.UNDO }).click()
    await page.getByRole('button', { name: 'OK' }).click()
}
