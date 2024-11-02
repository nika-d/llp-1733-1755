import { Interceptions } from '$test/playwright/lernzielreview/fixtures/Interceptions'
import { test as base, TestFixtures } from '$test/playwright/fixturesAndSelectors/test'
import { LernzielReviewDrawer } from '$test/playwright/lernzielreview/fixtures/Drawer'
import { LoadPageWithLzIds } from '$test/playwright/lernzielreview/fixtures/LoadPageWithLzIds'

export type LernzielReviewTestFixtures = TestFixtures & {
    interceptions: Interceptions
    drawer: LernzielReviewDrawer
    LoadPageWithLzIds: LoadPageWithLzIds
}

export const test = base.extend({
    interceptions: async ({ page }, use) => {
        await use(new Interceptions(page))
    },
    drawer: async ({ page }, use) => {
        await use(new LernzielReviewDrawer(page))
    },
    LoadPageWithLzIds: async ({ page }, use) => {
        await use(new LoadPageWithLzIds(page))
    },
})
