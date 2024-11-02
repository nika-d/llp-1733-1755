import { EreignisseAktionsmoeglichkeitenDTO } from '$src/useCases/lernzielReview/models/EreignisseAktionsmoeglichkeiten'

export const ereignisseAktionsmoeglichkeitenLz3002: EreignisseAktionsmoeglichkeitenDTO = {
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
                text: 'den makroskopischen (Leisten- und Felderhaut) und den mikroskopischen Aufbau der normalen Haut in Grundzügen beschreiben können (Schichten, Gewebe, Zellen und Strukturen wie Drüsen, Haare, Blutgefäße, Nervengewebe).',
            },
        },
        {
            type: 'Kommentar',
            data: {
                id: 320,
                phase: 'Vor Review',
                title: 'Helga Höfer - Lehrende/r - 08.11.2023, 11:12 Uhr',
                text: 'Man spricht heute nicht mehr von Felderhaut. Bitte im Review berücksichtigen',
            },
        },
        {
            type: 'TextAenderung',
            data: {
                id: 320,
                phase: 'Review-Treffen',
                urheber: 'Peter Müller - SK - 03.02.2024, 10:30 Uhr',
                infoText: 'Änderungsvorschlag',
                operationalisierung: {
                    dimension: 'Wissen/Kenntnisse (kognitiv)',
                    kognitionsdimension: 'Tiefe 2 - verstehen',
                    verb: 'beschreiben',
                    verbId: 21,
                },
                text: 'den makroskopischen (Leisten- und Hornhaut) und den mikroskopischen Aufbau der normalen Haut in Grundzügen beschreiben können (Schichten, Gewebe, Zellen und Strukturen wie Drüsen, Haare, Blutgefäße, Nervengewebe).',
            },
        },
        {
            type: 'Kommentar',
            data: {
                id: 321,
                phase: 'LVV',
                title: 'Thorsten Tebarz - LVV - 20.02.2024, 11:12 Uhr',
                text: 'Hornhaut ist zu allgemein.',
            },
        },
        {
            type: 'TextAenderung',
            data: {
                id: 322,
                phase: 'LVV',
                urheber: 'Thorsten Tebarz - LVV - 20.02.2024, 11:15 Uhr',
                infoText: 'Änderungsvorschlag',
                operationalisierung: {
                    dimension: 'Wissen/Kenntnisse (kognitiv)',
                    kognitionsdimension: 'Tiefe 2 - verstehen',
                    verb: 'beschreiben',
                    verbId: 21,
                },
                text: 'den makroskopischen (Leisten- und Unterhaut) und den mikroskopischen Aufbau der normalen Haut in Grundzügen beschreiben können (Schichten, Gewebe, Zellen und Strukturen wie Drüsen, Haare, Blutgefäße, Nervengewebe).',
            },
        },
        {
            type: 'TextAenderungMitVersionierung',
            data: {
                id: 322,
                phase: 'Beschluss SK',
                urheber: 'Peter Müller - SK - 03.02.2024, 10:30 Uhr',
                infoText: 'Beschluss SK',
                operationalisierung: {
                    dimension: 'Wissen/Kenntnisse (kognitiv)',
                    kognitionsdimension: 'Tiefe 2 - verstehen',
                    verb: 'beschreiben',
                    verbId: 21,
                },
                text: 'den makroskopischen (Oberhaut) und den mikroskopischen Aufbau der normalen Haut in Grundzügen beschreiben können (Schichten, Gewebe, Zellen und Strukturen wie Drüsen, Haare, Blutgefäße, Nervengewebe).',
                versionierungsGrad: 'inhaltlich',
                version: '1.4',
                loeschbar: true,
            },
        },
    ],
}
