import { EreignisseAktionsmoeglichkeitenDTO } from '$src/useCases/lernzielReview/models/EreignisseAktionsmoeglichkeiten'

export const ereignisseAktionsmoeglichkeitenLz1001: EreignisseAktionsmoeglichkeitenDTO = {
    aktionsmoeglichkeiten: [{ type: 'kommentar', label: 'Kommentar erstellen' }],
    ereignisse: [
        {
            type: 'Original',
            data: {
                version: '1.1',
                zeitsemester: 'WiSe2022',
                operationalisierung: {
                    dimension: 'Einstellungen (emotional/reflektiv)',
                    kognitionsdimension: null,
                    verb: 'reflektieren',
                    verbId: 300,
                },
                text: 'auf Grundlage der Ergebnisse von Anamnese und körperlicher Untersuchung bei chronischen Infektionserkrankungen eine Arbeitsdiagnose formulieren können.',
            },
        },
        {
            type: 'Kommentar',
            data: {
                id: 152,
                phase: 'Vor Review',
                title: 'Ingeborg Meier - LVV - 20.01.2024, 09:30 Uhr',
                text: 'Das macht keinen Sinn. Infektionskrankheiten sollten hier nicht erwähnt werden.',
                loeschbar: false,
            },
        },

        {
            type: 'Kommentar',
            data: {
                id: 153,
                phase: 'Review-Treffen',
                title: 'Peter Müller - SK - 03.02.2024, 10:30 Uhr',
                text: 'Ursprünglicher Text soll nach Diskussion genau so beibhalten werden',
                loeschbar: true,
            },
        },

        {
            type: 'AkzeptierenUnveraendert',
            data: {
                id: 154,
                phase: 'Review-Treffen',
                urheber: 'Peter Müller - SK - 03.02.2024, 10:41 Uhr',
                infoText: 'Unverändert',
                loeschbar: true,
            },
        },
    ],
}
