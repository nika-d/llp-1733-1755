import { EreignisseAktionsmoeglichkeitenDTO } from '$src/useCases/lernzielReview/models/EreignisseAktionsmoeglichkeiten'

export const ereignisseAktionsmoeglichkeitenLz3001: EreignisseAktionsmoeglichkeitenDTO = {
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
                text: 'Schwierigkeiten in der initialen Beziehungsaufnahme und im weiteren Gesprächsverlauf bei komplexen biopsychosozialen Störungsmustern reflektieren können.',
            },
        },
        {
            type: 'AkzeptierenUnveraendert',
            data: {
                id: 310,
                phase: 'Review-Treffen',
                urheber: 'Peter Müller - SK - 03.02.2024, 10:30 Uhr',
                infoText: 'Unverändert',
            },
        },
        {
            type: 'AkzeptierenUnveraendert',
            data: {
                id: 311,
                phase: 'LVV',
                urheber: 'Automatisch akzeptiert',
                infoText: 'Bestätigt',
            },
        },
        {
            type: 'AkzeptierenUnveraendert',
            data: {
                id: 312,
                phase: 'Beschluss SK',
                urheber: 'Automatisch akzeptiert',
                infoText: 'Bestätigt',
            },
        },
    ],
}
