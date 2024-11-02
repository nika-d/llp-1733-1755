import { EreignisseAktionsmoeglichkeitenDTO } from '$src/useCases/lernzielReview/models/EreignisseAktionsmoeglichkeiten'

export const ereignisseAktionsmoeglichkeitenLz3005: EreignisseAktionsmoeglichkeitenDTO = {
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
                text: 'die Vorzüge des Stillens und die protektiven Auswirkungen auf die Gesundheit der Mutter benennen können.',
            },
        },
        {
            type: 'Loeschen',
            data: {
                id: 350,
                phase: 'Review-Treffen',
                urheber: 'Petra Müller - SK - 03.02.2024, 10:30 Uhr',
                infoText: 'Löschvorschlag',
            },
        },
        {
            type: 'Loeschen',
            data: {
                id: 352,
                phase: 'LVV',
                urheber: 'Helga Höfgen - LVV - 10.02.2024, 10:21 Uhr',
                infoText: 'Bestätigt',
            },
        },
        {
            type: 'Loeschen',
            data: {
                id: 352,
                phase: 'Beschluss SK',
                urheber: 'Petra Müller - SK - 20.02.2024, 15:30 Uhr',
                infoText: 'Endgültig gelöscht',
                loeschbar: true,
            },
        },
    ],
}
