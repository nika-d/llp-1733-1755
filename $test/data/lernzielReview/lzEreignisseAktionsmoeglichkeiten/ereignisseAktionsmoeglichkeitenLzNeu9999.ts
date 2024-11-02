import { EreignisseAktionsmoeglichkeitenDTO } from '$src/useCases/lernzielReview/models/EreignisseAktionsmoeglichkeiten'

export const ereignisseAktionsmoeglichkeitenLzNeu9999: EreignisseAktionsmoeglichkeitenDTO = {
    aktionsmoeglichkeiten: [],
    ereignisse: [
        {
            type: 'NeuesLernziel',
            data: {
                id: 121,
                phase: 'Review-Treffen',
                urheber: 'Petra Meier - SK - 07.02.2024, 12:51 Uhr',
                infoText: 'Neues Lernziel',
                text: 'die Bedeutung der statistischen Analyse von Empfindlichkeitsprüfungen (Resistenzspektrum) am Beispiel der kalkulierten Chemotherapie erläutern können.',
                operationalisierung: {
                    dimension: 'Wissen/Kenntnisse (kognitiv)',
                    kognitionsdimension: 'Tiefe 2 - verstehen',
                    verb: 'erläutern',
                    verbId: 23,
                },
                loeschbar: true,
            },
        },
        {
            type: 'Kommentar',
            data: {
                id: 122,
                phase: 'LVV',
                title: 'Ilse Maier - LVV - 20.01.2024',
                text: 'Das finde ich sehr gelungen!',
                loeschbar: true,
            },
        },
    ],
}
