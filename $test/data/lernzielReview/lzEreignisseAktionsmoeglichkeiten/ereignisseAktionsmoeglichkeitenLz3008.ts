import { EreignisseAktionsmoeglichkeitenDTO } from '$src/useCases/lernzielReview/models/EreignisseAktionsmoeglichkeiten'

export const ereignisseAktionsmoeglichkeitenLz3008: EreignisseAktionsmoeglichkeitenDTO = {
    aktionsmoeglichkeiten: [{ type: 'kommentar', label: 'Kommentar erstellen' }],
    ereignisse: [
        {
            type: 'NeuesLernziel',
            data: {
                id: 380,
                phase: 'LVV',
                infoText: 'Neues Lernziel',
                urheber: 'Helga Höfgen - LVV - 10.02.2024, 10:21 Uhr',
                operationalisierung: {
                    dimension: 'Einstellungen (emotional/reflektiv)',
                    kognitionsdimension: null,
                    verb: 'bewusst werden (sich)',
                    verbId: 303,
                },
                text: 'für elterliche Gefühle von Verlust und Trauer sensibilisiert werden und sich der Wichtigkeit einer feinfühligen, aber eindeutigen Kommunikation mit Eltern, die ein Kind verloren haben oder deren Kind eine zum Tode führende Krankheit hat, bewusst werden. ',
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
