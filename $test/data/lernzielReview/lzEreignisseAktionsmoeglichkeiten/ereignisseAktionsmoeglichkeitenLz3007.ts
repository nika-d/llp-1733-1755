import { EreignisseAktionsmoeglichkeitenDTO } from '$src/useCases/lernzielReview/models/EreignisseAktionsmoeglichkeiten'

export const ereignisseAktionsmoeglichkeitenLz3007: EreignisseAktionsmoeglichkeitenDTO = {
    aktionsmoeglichkeiten: [{ type: 'kommentar', label: 'Kommentar erstellen' }],
    ereignisse: [
        {
            type: 'NeuesLernziel',
            data: {
                id: 370,
                phase: 'Review-Treffen',
                infoText: 'Neues Lernziel',
                urheber: 'Petra Müller - SK - 03.02.2024, 10:30 Uhr',
                operationalisierung: {
                    dimension: 'Wissen/Kenntnisse (kognitiv)',
                    kognitionsdimension: 'Tiefe 1 - erinnern',
                    verb: 'benennen',
                    verbId: 2,
                },
                text: 'die bei Patient*innen mit Fever Of Unknown Origin zu erwartenden spezifischen Angaben in der Anamnese und die Befunde bei der körperlichen Untersuchung benennen und zuordnen können.',
            },
        },
        {
            type: 'AkzeptierenTextAenderung',
            data: {
                id: 371,
                phase: 'LVV',
                urheber: 'Helga Höfgen - LVV - 10.02.2024, 10:21 Uhr',
                infoText: 'Akzeptiert',
            },
        },
        {
            type: 'AkzeptierenTextAenderung',
            data: {
                id: 372,
                phase: 'Beschluss SK',
                urheber: 'Petra Müller - SK - 20.02.2024, 15:30 Uhr',
                infoText: 'Beschluss SK',
                loeschbar: true,
            },
        },
    ],
}
