// @ts-expect-error - linter cannot find @playwright/test
import { expect } from '@playwright/test'
import tags_lzr from '$test/data-testids/tags_lzr'
import { test } from '$test/playwright/lernzielreview/test'
import pageRoutes from '$test/pageRoutes'

test('wird angezeigt', async ({ page, drawer, interceptions }) => {
    await interceptions.interceptLoadVeranstaltungenLVV(1000)
    await page.goto(pageRoutes.lernzielreview)
    await drawer.openForFirstRow()
    const originalCard = drawer.getCardFromEreignisseArea(0)
    await expect(originalCard.getByTestId(tags_lzr.DRAWER.OPERATIONALISIERUNG.VIEW)).toBeVisible()
    await expect(originalCard).toContainText(
        'D Wissen/Kenntnisse (kognitiv)' + 'K Tiefe 3 - analysieren' + 'V zuordnen',
    )
})
