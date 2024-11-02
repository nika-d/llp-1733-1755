// @ts-expect-error - linter cannot find @playwright/test
import { expect } from '@playwright/test'
import { test, LernzielReviewTestFixtures } from '$test/playwright/lernzielreview/test'
import undo from '$test/playwright/lernzielreview/aktionen/undo'
import uiTexts from '$src/common/uiTexts/lernzielReview'
import { delay } from '$test/vitest/utilsForVitestTests/delay'

const akzeptierenButtonLabel = 'Unverändert akzeptieren'

test.beforeEach(async ({ drawer, interceptions, LoadPageWithLzIds }: LernzielReviewTestFixtures) => {
    await LoadPageWithLzIds.interceptAndLoadPageWithLzIds(1000)

    await drawer.openForFirstRow()
    await interceptions.interceptLernzielAktion(1000, 'unveraendert')
    await interceptions.interceptReloadEinzelnesEreignis(1000, 'AkzeptierenUnveraendert', 12345)
    await drawer.getSelf().getByRole('button', { name: akzeptierenButtonLabel }).click()
    await delay(100)
})
test('do', async ({ drawer }: LernzielReviewTestFixtures) => {
    await expect(await drawer.getSelf().getByRole('button', { name: akzeptierenButtonLabel })).toHaveCount(0)
    await expect(await drawer.getSelf().getByRole('button', { name: uiTexts.EREIGNIS.UNDO })).toHaveCount(1)
})

test('undo', async ({ page, drawer, interceptions }: LernzielReviewTestFixtures) => {
    await interceptions.interceptUndoAktion(12345)
    await interceptions.interceptReloadInitialeEreignisseAktionsmoeglichkeiten(1000)
    await undo(page, drawer)
    await expect(drawer.getSelf().getByRole('button', { name: akzeptierenButtonLabel })).toHaveCount(1)
})
