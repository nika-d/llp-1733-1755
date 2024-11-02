import { EreignisseAktionsmoeglichkeitenDTO } from '$src/useCases/lernzielReview/models/EreignisseAktionsmoeglichkeiten'

export const ereignisseAktionsmoeglichkeitenLz3009: EreignisseAktionsmoeglichkeitenDTO = {
    aktionsmoeglichkeiten: [{ type: 'kommentar', label: 'Kommentar erstellen' }],
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
                text: 'Konzepte der präemptiven, prophylaktischen, kalkulierten Therapie sowie der Eskalation, Deeskalation, Beendigung der Therapie beschreiben können.',
            },
        },
        {
            type: 'Loeschen',
            data: {
                id: 390,
                phase: 'Review-Treffen',
                urheber: 'Petra Müller - SK - 03.02.2024, 10:30 Uhr',
                infoText: 'Löschvorschlag',
            },
        },
        {
            type: 'TextAenderung',
            data: {
                id: 391,
                phase: 'LVV',
                urheber: 'Thorsten Tebarz - LVV - 10.02.2024, 11:15 Uhr',
                infoText: 'Änderungsvorschlag',
                operationalisierung: {
                    dimension: 'Wisssen/Kenntnisse (kognitiv)',
                    kognitionsdimension: 'Tiefe 1 - erinnern',
                    verb: 'benennen',
                    verbId: 2,
                },
                text: 'Konzepte der präemptiven, prophylaktischen, kalkulierten Therapie sowie der Eskalation, Deeskalation, Beendigung der Therapie benennen können.',
            },
        },
        {
            type: 'AkzeptierenTextAenderung',
            data: {
                id: 392,
                phase: 'Beschluss SK',
                urheber: 'Petra Müller - SK - 20.02.2024, 15:30 Uhr',
                infoText: 'Beschluss SK',
                loeschbar: true,
            },
        },
    ],
}
