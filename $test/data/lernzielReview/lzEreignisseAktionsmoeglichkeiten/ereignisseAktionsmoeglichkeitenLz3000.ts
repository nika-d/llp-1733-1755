import { EreignisseAktionsmoeglichkeitenDTO } from '$src/useCases/lernzielReview/models/EreignisseAktionsmoeglichkeiten'

export const ereignisseAktionsmoeglichkeitenLz3000: EreignisseAktionsmoeglichkeitenDTO = {
    aktionsmoeglichkeiten: [{ type: 'kommentar', label: 'Kommentar erstellen' }],
    ereignisse: [
        {
            type: 'Original',
            data: {
                version: '1.3',
                zeitsemester: 'WiSe2019',
                operationalisierung: {
                    dimension: 'Wissen/Kenntnisse (kognitiv)',
                    kognitionsdimension: 'Tiefe 2 - verstehen',
                    verb: 'beschreiben',
                    verbId: 21,
                },
                text: 'Das Spektrum individueller Deutungen von Schmerz als Ressource für die multidimensionale Therapie beschreiben können.',
            },
        },
        {
            type: 'AkzeptierenUnveraendert',
            data: {
                id: 300,
                phase: 'Review-Treffen',
                urheber: 'Peter Müller - SK - 03.02.2024, 10:30 Uhr',
                infoText: 'Unverändert',
            },
        },
        {
            type: 'AkzeptierenUnveraendert',
            data: {
                id: 301,
                phase: 'Inge Meier',
                urheber: 'Inge Meier - LVV - ',
                infoText: 'Bestätigt',
            },
        },
        {
            type: 'AkzeptierenUnveraendert',
            data: {
                id: 302,
                phase: 'Beschluss SK',
                urheber: 'Automatisch akzeptiert',
                infoText: 'Bestätigt',
            },
        },
    ],
}
