import { domainId } from '$src/models/common/domainId'
import pageRoutes from '$test/pageRoutes'
import { Interceptions } from '$test/playwright/lernzielreview/fixtures/Interceptions'
// @ts-expect-error - linter cannot find @playwright/test
import { Page } from '@playwright/test'

export class LoadPageWithLzIds extends Interceptions {
    constructor(protected readonly page: Page) {
        super(page)
    }
    async interceptAndLoadPageWithLzIds(...lernzielIds: domainId[]) {
        await this.intercept()
        await this.interceptLoadVeranstaltungenLVV(...lernzielIds)
        await this.page.goto(pageRoutes.lernzielreview)
    }
}
