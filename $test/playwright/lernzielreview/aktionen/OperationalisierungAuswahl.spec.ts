// @ts-expect-error - linter cannot find @playwright/test
import { expect } from '@playwright/test'
import pageRoutes from '$test/pageRoutes'
import { test } from '$test/playwright/lernzielreview/test'
import uiTexts from '$src/common/uiTexts/lernzielReview'
import tags_lzr from '$test/data-testids/tags_lzr'

const AKTUELLE_AKTION = tags_lzr.DRAWER.AKTUELLE_AKTION
async function beforeEachGetAktuelleAktionCard({ page, drawer, interceptions }) {
    await interceptions.interceptLoadVeranstaltungenLVV(1000)
    await page.goto(pageRoutes.lernzielreview)
    await drawer.openForFirstRow()

    await drawer.getSelf().getByText(uiTexts.REVIEW_CARD.AENDERUNG_VORSCHLAGEN).click()

    await expect(
        page.getByTestId(AKTUELLE_AKTION).getByTestId(tags_lzr.DRAWER.OPERATIONALISIERUNG.VIEW),
        'Operationalisierung view sollte sichtbar sein, weil Operationalisierung am Änderungsvorschlag ist von letzte Version kopiert',
    ).toBeAttached()
}

test.describe('öffnen', () => {
    test.beforeEach(async ({ page, drawer, interceptions }) => {
        await beforeEachGetAktuelleAktionCard({ page, drawer, interceptions })
    })
    test('durch Klick auf "Änderung vorschlagen"', async ({ page }) => {
        await page.getByTestId(AKTUELLE_AKTION).getByTestId(tags_lzr.DRAWER.OPERATIONALISIERUNG.EDIT).click()
    })
    test('durch Enter bei Lernzieltext', async ({ page }) => {
        await page.getByTestId(AKTUELLE_AKTION).getByLabel(uiTexts.TEXT_VORSCHLAG.LERNZIELTEXT).press('Enter')
    })
    test.afterEach(async ({ page }) => {
        await expect(
            page.getByTestId(tags_lzr.DRAWER.OPERATIONALISIERUNG.POPUP),
            'sollte angezeigt werden',
        ).toBeAttached()
    })
})

test('hinzufügen, ändern', async ({ page, drawer, interceptions }) => {
    await beforeEachGetAktuelleAktionCard({ page, drawer, interceptions })
    await page.getByTestId(AKTUELLE_AKTION).getByTestId(tags_lzr.DRAWER.OPERATIONALISIERUNG.EDIT).click()

    await page.getByRole('radio').filter({ hasText: 'benennen' }).click()

    await expect(
        page.getByTestId(tags_lzr.DRAWER.OPERATIONALISIERUNG.POPUP),
        'Hinzufügen: Sollte sich schließen nach Auswahl.',
    ).not.toBeAttached()

    await expect(
        page.getByTestId(AKTUELLE_AKTION).getByTestId(tags_lzr.DRAWER.OPERATIONALISIERUNG.VIEW),
        'Hinzufügen: View sollte ausgewähltes Verb zeigen.',
    ).toContainText('benennen')

    await page.getByTestId(AKTUELLE_AKTION).getByTestId(tags_lzr.DRAWER.OPERATIONALISIERUNG.EDIT).click()

    await expect(
        page.getByRole('radio').filter({ hasText: 'benennen' }),
        'Ändern: Zuvor ausgewähltes Verb sollte beim erneuten Öffnen der Operationalisierung ausgewählt sein.',
    ).toBeChecked()

    await page.getByRole('radio').filter({ hasText: 'definieren' }).click()

    await expect(
        page.getByTestId(AKTUELLE_AKTION).getByTestId(tags_lzr.DRAWER.OPERATIONALISIERUNG.VIEW),
        'Ändern: View sollte geändertes Verb zeigen.',
    ).toContainText('definieren')
})

test('Klick auf "Neues Lernziel hinzufügen"', async ({ page, interceptions }) => {
    await interceptions.interceptLoadVeranstaltungenLVV(1000)
    await page.goto(pageRoutes.lernzielreview)
    await page.getByRole('button', { name: uiTexts.LEHRVERANSTALTUNG.NEUES_LERNZIEL_BTN }).first().click()

    await expect(
        page.getByTestId(AKTUELLE_AKTION).getByTestId(tags_lzr.DRAWER.OPERATIONALISIERUNG.VIEW),
        'view sollte nicht sichtbar sein, weil noch keine Operationalisierung am Änderungsvorschlag vorhanden ist',
    ).not.toBeAttached()

    await page
        .getByTestId(tags_lzr.LEHRVERANSTALTUNG.NEUES_LERNZIEL_DIALOG.DIALOG_ID)
        .getByText(uiTexts.DRAWER.OPERATIONALISIERUNG_HINZUFUEGEN)
        .click()

    await expect(page.getByTestId(tags_lzr.DRAWER.OPERATIONALISIERUNG.POPUP), 'sollte angezeigt werden').toBeAttached()
})
