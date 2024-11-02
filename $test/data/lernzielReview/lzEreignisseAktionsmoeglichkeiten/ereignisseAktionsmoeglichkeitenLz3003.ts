import { EreignisseAktionsmoeglichkeitenDTO } from '$src/useCases/lernzielReview/models/EreignisseAktionsmoeglichkeiten'

export const ereignisseAktionsmoeglichkeitenLz3003: EreignisseAktionsmoeglichkeitenDTO = {
    aktionsmoeglichkeiten: [
        { type: 'beschliessenMitVersionierung', label: 'Abschluss: versionieren' },
        { type: 'kommentar', label: 'Kommentar erstellen' },
    ],
    ereignisse: [
        {
            type: 'Original',
            data: {
                version: '1.3',
                zeitsemester: 'WiSe2019',
                operationalisierung: {
                    dimension: 'Fertigkeiten (psychomotorisch, praktische Fertigkeiten gem. PO)',
                    kognitionsdimension: null,
                    verb: 'erheben',
                    verbId: 6,
                },
                text: 'mit der Anamnese Risikofaktoren für eine gestörte Schwangerschaftsentwicklung erheben können.',
            },
        },
        {
            type: 'TextAenderung',
            data: {
                id: 330,
                phase: 'Review-Treffen',
                urheber: 'Petra Müller - SK - 03.02.2024, 10:30 Uhr',
                infoText: 'Änderungsvorschlag',
                operationalisierung: {
                    dimension: 'Fertigkeiten (psychomotorisch, praktische Fertigkeiten gem. PO)',
                    kognitionsdimension: null,
                    verb: 'erheben',
                    verbId: 6,
                },
                text: 'mit der Anamnese Risikofaktoren für eine gestörte Schwangerschaftsentwicklung erheben können.',
            },
        },
        {
            type: 'AkzeptierenTextAenderung',
            data: {
                id: 331,
                phase: 'LVV',
                urheber: 'Helga Höfgen - LVV - 03.02.2024, 10:30 Uhr',
                infoText: 'Akzeptiert',
            },
        },
        {
            type: 'AkzeptierenTextAenderung',
            data: {
                id: 332,
                phase: 'Beschluss SK',
                urheber: 'Peter Müller - SK - 10.02.2024, 10:30 Uhr',
                infoText: 'Beschluss SK',
                loeschbar: true,
            },
        },
    ],
}
