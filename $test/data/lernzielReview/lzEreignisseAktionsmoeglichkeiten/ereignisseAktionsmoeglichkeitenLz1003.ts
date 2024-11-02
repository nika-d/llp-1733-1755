import { EreignisseAktionsmoeglichkeitenDTO } from '$src/useCases/lernzielReview/models/EreignisseAktionsmoeglichkeiten'

export const ereignisseAktionsmoeglichkeitenLz1003: EreignisseAktionsmoeglichkeitenDTO = {
    aktionsmoeglichkeiten: [{ type: 'kommentar', label: 'Kommentar erstellen' }],
    ereignisse: [
        {
            type: 'Original',
            data: {
                version: '1.0',
                zeitsemester: 'WiSe2019',
                operationalisierung: {
                    dimension: 'Wissen/Kenntnisse (kognitiv)',
                    kognitionsdimension: 'Tiefe 2 - verstehen',
                    verb: 'beschreiben',
                    verbId: 21,
                },
                text: 'die anatomischen Strukturen bei der Passage des Zwischenwirbelraums im Rahmen der Anlage einer Spinalanästhesie und einer Periduralanästhesie beschreiben können.',
            },
        },
        {
            type: 'Kommentar',
            data: {
                id: 195,
                phase: 'Vor Review',
                title: 'Iris Müller - SK - 08.02.2024, 11:12 Uhr',
                text: 'Das muss ersatzlos weg. Periduralanästhesie wird nicht mehr durchgeführt.',
            },
        },
        {
            type: 'Loeschen',
            data: {
                id: 196,
                phase: 'Review-Treffen',
                urheber: 'Peter Müller - SK',
                infoText: 'Löschung vorgeschlagen - 03.02.2024, 13:31 Uhr',
                loeschbar: true,
            },
        },
    ],
}
