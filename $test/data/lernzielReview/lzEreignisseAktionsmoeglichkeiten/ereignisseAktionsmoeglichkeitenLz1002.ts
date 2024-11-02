import { EreignisseAktionsmoeglichkeitenDTO } from '$src/useCases/lernzielReview/models/EreignisseAktionsmoeglichkeiten'

export const ereignisseAktionsmoeglichkeitenLz1002: EreignisseAktionsmoeglichkeitenDTO = {
    aktionsmoeglichkeiten: [{ type: 'kommentar', label: 'Kommentar erstellen' }],

    ereignisse: [
        {
            type: 'Original',
            data: {
                version: '3.1',
                zeitsemester: 'SoSe2021',
                operationalisierung: {
                    dimension: 'Wissen/Kenntnisse (kognitiv)',
                    kognitionsdimension: 'Tiefe 2 - verstehen',
                    verb: 'erläutern',
                    verbId: 23,
                },
                text: 'die drei prinzipiellen Wirkkomponenten einer Allgemeinanästhesie und die zugehörigen Substanzklassen sowie deren hämodynamische Nebenwirkungen erläutern können.',
            },
        },
        {
            type: 'TextAenderung',
            data: {
                id: 172,
                phase: 'Review-Treffen',
                urheber: 'Peter Müller (peter.mueller@charite.de) - SK',
                infoText: 'Änderungsvorschlag',
                text: 'die fünf prinzipiellen Wirkkomponenten einer Allgemeinanästhesie und die zugehörigen Substanzklassen sowie deren hämodynamische Nebenwirkungen erläutern können.',
                operationalisierung: {
                    dimension: 'Wissen/Kenntnisse (kognitiv)',
                    kognitionsdimension: 'Tiefe 2 - verstehen',
                    verb: 'erläutern',
                    verbId: 23,
                },
                loeschbar: true,
            },
        },
    ],
}
