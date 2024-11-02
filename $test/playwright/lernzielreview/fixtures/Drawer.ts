import { domainId } from '$src/models/common/domainId'
import { testReviewVeranstaltungen } from '$test/data/lernzielReview/testReviewVeranstaltungen'
import { Drawer } from '$test/playwright/fixturesAndSelectors/Drawer'

export class LernzielReviewDrawer extends Drawer {
    async openDrawerForRowWithLernzielId(lernzielId: domainId) {
        const lernziel = testReviewVeranstaltungen
            .map((veranstaltung) => veranstaltung.reviewLernziele)
            .flat()
            .find((lz) => lz.id === lernzielId)
        const rowLocator = this.page.getByRole('row', { name: lernziel.text })
        await rowLocator.hover()
        await rowLocator.getByRole('button').click()
    }
}
