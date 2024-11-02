import { EreignisseAktionsmoeglichkeitenDTO } from '$src/useCases/lernzielReview/models/EreignisseAktionsmoeglichkeiten'

export const ereignisseAktionsmoeglichkeitenLz2004: EreignisseAktionsmoeglichkeitenDTO = {
    aktionsmoeglichkeiten: [{ type: 'kommentar', label: 'Kommentar erstellen' }],
    ereignisse: [
        {
            type: 'Original',
            data: {
                version: '1.3',
                zeitsemester: 'WiSe2019',
                operationalisierung: {
                    dimension: 'Wisssen/Kenntnisse (kognitiv)',
                    kognitionsdimension: 'Tiefe 4 - evaluieren',
                    verb: 'begründen',
                    verbId: 70,
                },
                text: 'Schutzmaßnahmen wie Beobachtung, Quarantäne, Duldung von medizinisch-prophylaktischen Maßnahmen (Impfungen) im Zusammenhang mit Einschränkungen von Grundrechten wie Freiheit der Person, körperliche Unversehrtheit, Versammlungsfreiheit nach IfSG und Inanspruchnahme von Personen und Sachen nach Katastrophenschutzgesetz begründen können.',
            },
        },
        {
            type: 'TextAenderung',
            data: {
                id: 240,
                phase: 'Review-Treffen',
                urheber: 'Peter Müller - SK - 03.02.2024, 10:30 Uhr',
                infoText: 'Änderungsvorschlag',
                operationalisierung: {
                    dimension: 'Wisssen/Kenntnisse (kognitiv)',
                    kognitionsdimension: 'Tiefe 4 - evaluieren',
                    verb: 'begründen',
                    verbId: 70,
                },
                text: 'Schutzmaßnahmen wie Beobachtung, Quarantäne im Zusammenhang mit Einschränkungen von Grundrechten wie Freiheit der Person, körperliche Unversehrtheit, Versammlungsfreiheit nach IfSG und Inanspruchnahme von Personen und Sachen nach Katastrophenschutzgesetz begründen können.',
            },
        },
        {
            type: 'AkzeptierenTextAenderung',
            data: {
                id: 231,
                phase: 'LVV',
                urheber: 'Helga Höfgen - LVV - 20.02.2024, 14:10 Uhr',
                infoText: 'Bestätigt',
                loeschbar: true,
            },
        },
    ],
}
