// @ts-expect-error - linter cannot find @playwright/test
import { expect } from '@playwright/test'
import { test, LernzielReviewTestFixtures } from '$test/playwright/lernzielreview/test'
import tags_lzr from '$test/data-testids/tags_lzr'
import uiTexts from '$src/common/uiTexts/lernzielReview'

const kommentarButtonLabel = 'Kommentar erstellen'
const akzeptierenButtonLabel = 'Unverändert akzeptieren'
const loeschenButtonLabel = 'Löschung vorschlagen'
const aenderungButtonLabel = 'Änderung vorschlagen'
const neueVersionButtonLabel = 'Neue Version freigeben'

test.beforeEach(async ({ drawer, LoadPageWithLzIds }: LernzielReviewTestFixtures) => {
    await LoadPageWithLzIds.interceptAndLoadPageWithLzIds(1000)
    await drawer.openDrawerForRowWithLernzielId(1000)
})

test('show card "Kommentar erstellen"', async ({ drawer }) => {
    await drawer.getAktionButtons().getByRole('button', { name: kommentarButtonLabel }).click()
    const actionCard = drawer.getAktuelleAktion()
    await expect(actionCard).toBeInViewport()
    await expect(actionCard.getByTestId(tags_lzr.DRAWER.REVIEW_CARD_TITLE)).toHaveText(kommentarButtonLabel)
    await expect(actionCard.getByLabel('')).toHaveText('')
    await expect(actionCard.getByRole('button', { name: uiTexts.AKTION.SPEICHERN })).toBeDisabled()
    await expect(actionCard.getByRole('button', { name: uiTexts.AKTION.ABBRECHEN })).not.toBeDisabled()
})

test('show card "Unverändert akzeptieren"', async ({ drawer }: LernzielReviewTestFixtures) => {
    await drawer.getAktionButtons().getByRole('button', { name: akzeptierenButtonLabel }).click()
    const ereignisCard = drawer.getCardFromEreignisseArea(1)
    await expect(ereignisCard.getByText('Unverändert')).toBeInViewport()
    await expect(ereignisCard.getByTestId(tags_lzr.DRAWER.PHASE)).toHaveText(uiTexts.EREIGNIS.RT_PHASE)
    await expect(ereignisCard.getByRole('button', { name: uiTexts.EREIGNIS.UNDO })).toBeInViewport()
})

test('show card "Löschung vorschlagen"', async ({ drawer }) => {
    await drawer.getAktionButtons().getByRole('button', { name: loeschenButtonLabel }).click()
    const ereignisCard = drawer.getCardFromEreignisseArea(1)
    await expect(ereignisCard.getByText('Löschung')).toBeInViewport()
    await expect(ereignisCard.getByTestId(tags_lzr.DRAWER.PHASE)).toHaveText(uiTexts.EREIGNIS.RT_PHASE)
    await expect(ereignisCard.getByRole('button', { name: uiTexts.EREIGNIS.UNDO })).toBeInViewport()
})

test('show card "Änderung vorschlagen"', async ({ drawer }) => {
    await drawer.getAktionButtons().getByRole('button', { name: aenderungButtonLabel }).click()
    const actionCard = drawer.getAktuelleAktion()
    await expect(actionCard.getByTestId(tags_lzr.DRAWER.REVIEW_CARD_TITLE)).toHaveText(aenderungButtonLabel)
    await expect(actionCard.getByLabel(uiTexts.TEXT_VORSCHLAG.LERNZIELTEXT)).toHaveText('')
    await expect(
        actionCard.getByRole('button', { name: uiTexts.DRAWER.OPERATIONALISIERUNG_HINZUFUEGEN }),
    ).toBeInViewport()
})

test('show card "Neue Version freigeben"', async ({ drawer }) => {
    await drawer.getAktionButtons().getByRole('button', { name: neueVersionButtonLabel }).click()
    const actionCard = drawer.getAktuelleAktion()
    await expect(actionCard.getByTestId(tags_lzr.DRAWER.REVIEW_CARD_TITLE)).toHaveText(neueVersionButtonLabel)
    await expect(actionCard.getByText(uiTexts.REVIEW_CARD.FREIGABE_TEXT)).toBeInViewport()
    await expect(actionCard.getByText(uiTexts.REVIEW_CARD.REDAKTIONELLE_AENDERUNGEN)).toBeInViewport()
    await expect(actionCard.getByText(uiTexts.REVIEW_CARD.INHALTLICHE_AENDERUNGEN)).toBeInViewport()
    await expect(actionCard.getByText(uiTexts.REVIEW_CARD.GRUNDLEGENDE_AENDERUNGEN)).toBeInViewport()
})
