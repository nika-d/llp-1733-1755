import { EreignisseAktionsmoeglichkeitenDTO } from '$src/useCases/lernzielReview/models/EreignisseAktionsmoeglichkeiten'

export const ereignisseAktionsmoeglichkeitenLz2000: EreignisseAktionsmoeglichkeitenDTO = {
    aktionsmoeglichkeiten: [{ type: 'kommentar', label: 'Kommentar erstellen' }],
    ereignisse: [
        {
            type: 'Original',
            data: {
                version: '1.0',
                zeitsemester: 'WiSe2016',
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
                id: 200,
                phase: 'Review-Treffen',
                urheber: 'Peter Müller - SK - 03.02.2024',
                infoText: 'Unverändert',
            },
        },
        {
            type: 'AkzeptierenUnveraendert',
            data: {
                id: 201,
                phase: 'LVV',
                urheber: 'Petra Meier - LVV - 04.02.2024',
                infoText: 'Bestätigt',
                loeschbar: true,
            },
        },
    ],
}
