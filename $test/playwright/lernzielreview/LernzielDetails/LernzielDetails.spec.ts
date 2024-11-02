// @ts-expect-error - linter cannot find @playwright/test
import { expect } from '@playwright/test'
import tags_lzr from '$test/data-testids/tags_lzr'
import { test, LernzielReviewTestFixtures } from '$test/playwright/lernzielreview/test'
import pageRoutes from '$test/pageRoutes'

test('Lernziel-Infos sind sichtbar', async ({ page, drawer }) => {
    await page.goto(pageRoutes.lernzielreview)
    await drawer.openForFirstRow()

    await expect(page.getByTestId(tags_lzr.DRAWER.HEADER)).toHaveText('M03, MW 1, Seminar 1:')
    await expect(page.getByTestId(tags_lzr.DRAWER.HEADER_TEXT)).toHaveText(
        'Molekulare und strukturelle Komponenten der extrazellulären Matrix und ihre Veränderung',
    )

    await expect(page.getByTestId(tags_lzr.DRAWER.REVIEW_CARD_TITLE)).toHaveText('Version: 2.1 - SoSe2021')
    await expect(page.getByTestId(tags_lzr.DRAWER.PHASE)).toHaveText('Original')

    await drawer.close()
})

test('Action Buttons sichtbar', async ({ page, drawer, LoadPageWithLzIds }: LernzielReviewTestFixtures) => {
    await LoadPageWithLzIds.interceptAndLoadPageWithLzIds(1000)
    await drawer.openDrawerForRowWithLernzielId(1000)

    await expect(page.locator('button:has-text("Kommentar erstellen")')).toBeVisible()
    await expect(page.locator('button:has-text("Unverändert akzeptieren")')).toBeVisible()
    await expect(page.locator('button:has-text("Löschung vorschlagen")')).toBeVisible()
    await expect(page.locator('button:has-text("Änderung vorschlagen")')).toBeVisible()
    await expect(page.locator('button:has-text("Neue Version freigeben")')).toBeVisible()

    await drawer.close()
})

test('Alte Versionen sichtbar', async ({ page, drawer, LoadPageWithLzIds }: LernzielReviewTestFixtures) => {
    await LoadPageWithLzIds.interceptAndLoadPageWithLzIds(1000)
    await drawer.openDrawerForRowWithLernzielId(1000)

    await page.getByTestId(tags_lzr.DRAWER.PANEL_ALTE_VERSIONEN).click()

    await expect(page.getByTestId(tags_lzr.DRAWER.REVIEW_CARD_TITLE)).toHaveCount(3)

    await expect(page.getByTestId(tags_lzr.DRAWER.REVIEW_CARD_TITLE).nth(0)).toHaveText('Version: 2.1 - SoSe2021')
    await expect(page.getByTestId(tags_lzr.DRAWER.REVIEW_CARD_TITLE).nth(1)).toHaveText('Version: 2.0 - WiSe2018')
    await expect(page.getByTestId(tags_lzr.DRAWER.REVIEW_CARD_TITLE).nth(2)).toHaveText('Version: 1.0 - WiSe2018')

    await expect(page.getByTestId(tags_lzr.DRAWER.REVIEW_CARD_CONTENT).nth(0)).toHaveText(
        'die beim systemischen Lupus erythematodes relevanten Angaben in Anamnese und Befunde bei der physischenkörperlichen Untersuchung benennen und zuordnen können.Operationalisierung:D Wissen / Kenntnisse (kognitiv)K erzeugenV zuordnen',
    )
    await expect(page.getByTestId(tags_lzr.DRAWER.REVIEW_CARD_CONTENT).nth(2)).toHaveText(
        'die beim systemischen Lupus erythematodes relevanten Angaben in Anamnese benennen können.Operationalisierung:D Wissen / Kenntnisse (kognitiv)K erinnernV benennen',
    )

    await drawer.close()
})
