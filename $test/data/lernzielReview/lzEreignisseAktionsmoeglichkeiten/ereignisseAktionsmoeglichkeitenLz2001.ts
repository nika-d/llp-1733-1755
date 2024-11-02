import { EreignisseAktionsmoeglichkeitenDTO } from '$src/useCases/lernzielReview/models/EreignisseAktionsmoeglichkeiten'

export const ereignisseAktionsmoeglichkeitenLz2001: EreignisseAktionsmoeglichkeitenDTO = {
    aktionsmoeglichkeiten: [
        { type: 'unveraendert', label: 'Bestätigen' },
        { type: 'klaerungsbedarf', label: 'Klärungsbedarf' },
        { type: 'textaenderung', label: 'Neuen Lernzieltext vorschlagen' },
        { type: 'kommentar', label: 'Kommentar erstellen' },
    ],
    ereignisse: [
        {
            type: 'Original',
            data: {
                version: '1.0',
                zeitsemester: 'WiSe2022',
                operationalisierung: {
                    dimension: 'Einstellungen (emotional/reflektiv)',
                    kognitionsdimension: null,
                    verb: 'reflektieren',
                    verbId: 300,
                },
                text: 'Das Spektrum individueller Deutungen von Schmerz als Ressource für die multidimensionale Therapie beschreiben können.',
            },
        },
        {
            type: 'Kommentar',
            data: {
                id: 210,
                phase: 'Vor Review',
                title: 'Studentischer Kommentar - 01.12.2024, 15:10 Uhr',
                text: 'Finde ich sehr verständlich formuliert, eigentlich braucht man das Lernziel mit den Schutzmaßnahmen dann nicht mehr',
            },
        },
        {
            type: 'AkzeptierenUnveraendert',
            data: {
                id: 211,
                phase: 'Review-Treffen',
                urheber: 'Peter Müller - SK - 03.02.2024, 10:41 Uhr',
                infoText: 'Unverändert',
            },
        },
    ],
}
