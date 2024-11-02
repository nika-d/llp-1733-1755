// @ts-expect-error - linter cannot find @playwright/test
import { expect } from '@playwright/test'
import { test, LernzielReviewTestFixtures } from '$test/playwright/lernzielreview/test'
import undo from '$test/playwright/lernzielreview/aktionen/undo'
import uiTexts from '$src/common/uiTexts/lernzielReview'
import { delay } from '$test/vitest/utilsForVitestTests/delay'

const klaeren = 'Klärungsbedarf'

test.beforeEach(async ({ page, drawer, interceptions, LoadPageWithLzIds }: LernzielReviewTestFixtures) => {
    await LoadPageWithLzIds.interceptAndLoadPageWithLzIds(2001)

    await drawer.openDrawerForRowWithLernzielId(2001)
    await interceptions.interceptLernzielAktion(2001, 'klaerungsbedarf')
    await interceptions.interceptReloadEinzelnesEreignis(2001, 'Klaerungsbedarf', 12345, 'schnick schnack')
    await drawer.getSelf().getByRole('button', { name: klaeren }).click()
    await page.getByRole('textbox').type('schnick schnack')
    await page.getByRole('button', { name: uiTexts.AKTION.SPEICHERN }).click()
    await delay(100)
})
test('do', async ({ drawer }: LernzielReviewTestFixtures) => {
    await expect(await drawer.getSelf().getByRole('button', { name: klaeren })).toHaveCount(0)
    await expect(await drawer.getSelf().getByRole('textbox')).toHaveCount(0)
    await expect(await drawer.getSelf()).toContainText('schnick schnack')
})

test('undo', async ({ page, drawer, interceptions }: LernzielReviewTestFixtures) => {
    await interceptions.interceptUndoAktion(12345)
    await interceptions.interceptReloadInitialeEreignisseAktionsmoeglichkeiten(2001)
    await undo(page, drawer)
    await expect(await drawer.getSelf()).not.toHaveText('schnick schnack')
    await expect(drawer.getSelf().getByRole('button', { name: klaeren })).toHaveCount(1)
})
