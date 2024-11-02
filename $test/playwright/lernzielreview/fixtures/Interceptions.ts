// @ts-expect-error - linter cannot find @playwright/test
import { Page } from '@playwright/test'
import URLs from '$src/useCases/lernzielReview/models/api/URLs'
import { domainId } from '$src/models/common/domainId'
import { ReviewVeranstaltungDTO } from '$src/useCases/lernzielReview/models/ReviewVeranstaltung'
import lernzielReviewData from '$test/fakeApi/routes/useCases/lernzielReview/lernzielReviewData'
import { ReviewEreignisApiDTO } from '$src/useCases/lernzielReview/models/ereignisse/ReviewEreignis'
import { aktionType } from '$src/useCases/lernzielReview/models/Aktionsmoeglichkeit'
import { InterceptWithFakeAPI } from '$test/playwright/intercepts/InterceptWithFakeAPI'

export class Interceptions extends InterceptWithFakeAPI {
    private reviewVeranstaltungen: ReviewVeranstaltungDTO[]

    constructor(protected readonly page: Page) {
        super(page)
    }

    async interceptLoadVeranstaltungenLVV(...reviewLernzieleIds: Array<domainId>) {
        this.reviewVeranstaltungen = lernzielReviewData.veranstaltungen.filter((veranstaltung) =>
            veranstaltung.reviewLernziele.some((lernziel) => reviewLernzieleIds.find((id) => lernziel.id === id)),
        )
        this.reviewVeranstaltungen.forEach(
            (veranstaltung) =>
                (veranstaltung.reviewLernziele = veranstaltung.reviewLernziele.filter((lernziel) =>
                    reviewLernzieleIds.find((id) => lernziel.id === id),
                )),
        )

        await this.page.route('**/' + URLs.veranstaltungenLvv + '**', (route) => {
            const request = route.request()
            if (request.method() === 'GET') {
                route.fulfill({ json: this.reviewVeranstaltungen })
                return
            }
            route.continue()
        })
    }

    async interceptReloadEinzelnesEreignis(
        lernzielId: domainId,
        reviewEreignisApiDTOType: ReviewEreignisApiDTO['type'],
        ereignisId: domainId,
        text?: string,
        title?: string,
    ): Promise<void> {
        const answer = {
            aktionsmoeglichkeiten: [],
            ereignisse: [
                {
                    type: reviewEreignisApiDTOType,
                    data: {
                        id: ereignisId,
                        phase: 'unwichtig für tests',
                        urheber: 'unwichtig für tests',
                        infoText: 'info text ' + reviewEreignisApiDTOType + ' ' + lernzielId,
                        text,
                        title,
                        loeschbar: true,
                    },
                },
            ],
        }

        await this.page.route('**/' + URLs.ereignisseAktionsmoeglichkeiten + '/' + lernzielId, (route) => {
            const request = route.request()
            if (request.method() === 'GET') {
                route.fulfill({ json: answer })
                return
            }
            route.continue()
        })
    }

    async interceptReloadInitialeEreignisseAktionsmoeglichkeiten(lernzielId: domainId): Promise<void> {
        await this.page.route('**/' + URLs.ereignisseAktionsmoeglichkeiten + '/' + lernzielId, (route) => {
            const request = route.request()
            if (request.method() === 'GET') {
                route.fulfill({ json: lernzielReviewData.ereignisseAktionsmoeglichkeiten.get(lernzielId) })
                return
            }
            route.continue()
        })
    }

    async interceptLernzielAktion(lernzielId: domainId, aktion: aktionType) {
        await this.page.route('**/' + URLs.lernzielAktion + '/' + lernzielId, (route) => {
            const request = route.request()
            if (request.postDataJSON().aktion != aktion)
                throw new Error(
                    'expected post with payload {aktion: ' +
                        aktion +
                        '} but it was ' +
                        JSON.stringify(request.postDataJSON()),
                )
            if (request.method() === 'POST') {
                route.fulfill()
                return
            }
            route.continue()
        })
    }

    async interceptUndoAktion(ereignisId: domainId) {
        await this.page.route('**/' + URLs.undoAktion + '/' + ereignisId, (route) => {
            const request = route.request()
            if (request.method() === 'POST') {
                route.fulfill()
                return
            }
            route.continue()
        })
    }
}
