import { EreignisseAktionsmoeglichkeitenDTO } from '$src/useCases/lernzielReview/models/EreignisseAktionsmoeglichkeiten'

export const ereignisseAktionsmoeglichkeitenLz3006: EreignisseAktionsmoeglichkeitenDTO = {
    aktionsmoeglichkeiten: [{ type: 'kommentar', label: 'Kommentar erstellen' }],
    ereignisse: [
        {
            type: 'Original',
            data: {
                version: '1.3',
                zeitsemester: 'WiSe2019',
                operationalisierung: {
                    dimension: 'Einstellungen (emotional/reflektiv)',
                    kognitionsdimension: null,
                    verb: 'erfahren',
                    verbId: 310,
                },
                text: 'die Bedeutung von Schmerzen für die Lebensqualität eines Menschen erfahren können.',
            },
        },
        {
            type: 'TextAenderung',
            data: {
                id: 360,
                phase: 'Review-Treffen',
                infoText: 'Änderungsvorschlag',
                urheber: 'Petra Müller - SK - 03.02.2024, 10:30 Uhr',
                operationalisierung: {
                    dimension: 'Einstellungen (emotional/reflektiv)',
                    kognitionsdimension: null,
                    verb: 'erfahren',
                    verbId: 310,
                },
                text: 'die Bedeutung von Schmerzen bzw.  deren Abwesenheit für die Lebensqualität eines Menschen erfahren können.',
            },
        },
        {
            type: 'Klaerungsbedarf',
            data: {
                id: 361,
                phase: 'LVV',
                urheber: 'Helga Höfgen - LVV - 10.02.2024, 10:21 Uhr',
                infoText: 'Klärungsbedarf',
                text: 'Kann die Bedeutung von Schmerzen für die Lebensqualität eines Menschen erfahren werden?',
            },
        },
        {
            type: 'Kommentar',
            data: {
                id: 362,
                phase: 'LVV',
                title: 'Thorsten Tebarz - LVV - 20.02.2024, 11:12 Uhr',
                text: 'Ja, das kann man schon. Bitte so beschließen',
            },
        },
        {
            type: 'AkzeptierenTextAenderung',
            data: {
                id: 363,
                phase: 'Beschluss SK',
                urheber: 'Petra Müller - SK - 20.02.2024, 15:30 Uhr',
                infoText: 'Beschluss SK',
                loeschbar: true,
            },
        },
    ],
}
