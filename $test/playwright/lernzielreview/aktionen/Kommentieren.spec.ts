// @ts-expect-error - linter cannot find @playwright/test
import { expect } from '@playwright/test'
import { test, LernzielReviewTestFixtures } from '$test/playwright/lernzielreview/test'
import undo from '$test/playwright/lernzielreview/aktionen/undo'
import uiTexts from '$src/common/uiTexts/lernzielReview'
import { delay } from '$test/vitest/utilsForVitestTests/delay'

const kommentieren = 'Kommentar erstellen'

test.beforeEach(async ({ page, drawer, interceptions, LoadPageWithLzIds }: LernzielReviewTestFixtures) => {
    await LoadPageWithLzIds.interceptAndLoadPageWithLzIds(1000)

    await drawer.openDrawerForRowWithLernzielId(1000)
    await interceptions.interceptLernzielAktion(1000, 'kommentar')
    await interceptions.interceptReloadEinzelnesEreignis(1000, 'Kommentar', 12345, 'schnick schnack', 'schnuck')
    await drawer.getSelf().getByRole('button', { name: kommentieren }).click()
    await page.getByRole('textbox').type('schnick schnack')
    await page.getByRole('button', { name: uiTexts.AKTION.SPEICHERN }).click()
    await delay(100)
})
test('do', async ({ drawer }: LernzielReviewTestFixtures) => {
    await expect(await drawer.getSelf().getByRole('button', { name: kommentieren })).toHaveCount(0)
    await expect((await drawer.getSelf()).getByRole('textbox')).toHaveCount(0)
    await expect(await drawer.getSelf()).toContainText('schnick schnack')
    await expect(await drawer.getSelf()).toContainText('schnuck')
})

test('undo', async ({ page, drawer, interceptions }: LernzielReviewTestFixtures) => {
    await interceptions.interceptUndoAktion(12345)
    await interceptions.interceptReloadInitialeEreignisseAktionsmoeglichkeiten(1000)
    await undo(page, drawer)
    await expect(await drawer.getSelf()).not.toHaveText('schnick schnack schnuck')
    await expect(await drawer.getSelf()).not.toHaveText('schnuck')
    await expect(drawer.getSelf().getByRole('button', { name: kommentieren })).toHaveCount(1)
})
