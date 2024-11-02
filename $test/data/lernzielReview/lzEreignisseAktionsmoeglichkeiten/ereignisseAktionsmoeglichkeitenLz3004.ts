import { EreignisseAktionsmoeglichkeitenDTO } from '$src/useCases/lernzielReview/models/EreignisseAktionsmoeglichkeiten'

export const ereignisseAktionsmoeglichkeitenLz3004: EreignisseAktionsmoeglichkeitenDTO = {
    aktionsmoeglichkeiten: [
        { type: 'beschliessenMitVersionierung', label: 'Aktuellen Text beschließen' },
        { type: 'textaenderungMitVersionierung', label: 'Text ändern und beschließen' },
        { type: 'loeschung', label: 'Endgültig löschen' },
        { type: 'kommentar', label: 'Kommentar erstellen' },
    ],
    ereignisse: [
        {
            type: 'Original',
            data: {
                version: '1.3',
                zeitsemester: 'WiSe2019',
                operationalisierung: {
                    dimension: 'Wisssen/Kenntnisse (kognitiv)',
                    kognitionsdimension: 'Tiefe 2 - verstehen',
                    verb: 'beschreiben',
                    verbId: 21,
                },
                text: 'Kulturell bedingte unterschiedliche Präsentationen von Schmerzen und Leiden beschreiben können.',
            },
        },
        {
            type: 'TextAenderung',
            data: {
                id: 340,
                phase: 'Review-Treffen',
                urheber: 'Petra Müller - SK - 03.02.2024, 10:30 Uhr',
                infoText: 'Änderungsvorschlag',
                operationalisierung: {
                    dimension: 'Wisssen/Kenntnisse (kognitiv)',
                    kognitionsdimension: 'Tiefe 2 - verstehen',
                    verb: 'beschreiben',
                    verbId: 21,
                },
                text: 'Kulturell und sprachlich bedingte unterschiedliche Präsentationen von Schmerzen und Leiden beschreiben können.',
            },
        },
        {
            type: 'AkzeptierenTextAenderung',
            data: {
                id: 341,
                phase: 'LVV',
                urheber: 'Helga Höfgen - LVV - 03.02.2024, 10:30 Uhr',
                infoText: 'Akzeptiert',
            },
        },
    ],
}
