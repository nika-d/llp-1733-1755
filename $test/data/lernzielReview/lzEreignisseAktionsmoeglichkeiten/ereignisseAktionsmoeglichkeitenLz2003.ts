import { EreignisseAktionsmoeglichkeitenDTO } from '$src/useCases/lernzielReview/models/EreignisseAktionsmoeglichkeiten'

export const ereignisseAktionsmoeglichkeitenLz2003: EreignisseAktionsmoeglichkeitenDTO = {
    aktionsmoeglichkeiten: [{ type: 'kommentar', label: 'Kommentar erstellen' }],
    ereignisse: [
        {
            type: 'Original',
            data: {
                version: '1.3',
                zeitsemester: 'WiSe2019',
                operationalisierung: {
                    dimension: 'Fertigkeiten (psychomotorisch, praktische Fertigkeiten gem. PO)',
                    kognitionsdimension: null,
                    verb: 'durchführen',
                    verbId: 203,
                },
                text: 'bei Patient*innen mit akuter Infektion eine allgemeine und auf akute Infektionserkrankungen fokussierte Anamnese (inklusive Reiseanamnese, Nahrungsmittelanamnese, Fragen nach Tierkontakten, Umgebungsinfektionen, Beruf, Immunsuppression) erheben und eine körperliche Untersuchung durchführen können.',
            },
        },
        {
            type: 'AkzeptierenUnveraendert',
            data: {
                id: 230,
                phase: 'Review-Treffen',
                urheber: 'Peter Müller - SK - 03.02.2024, 10:30 Uhr',
                infoText: 'Unverändert',
            },
        },
        {
            type: 'TextAenderung',
            data: {
                id: 231,
                phase: 'LVV',
                urheber: 'Helga Höfgen - LVV - 15.02.2024, 14:22 Uhr',
                infoText: 'Änderungsvorschlag',
                text: 'bei Patient*innen mit chronischer Infektion eine allgemeine und auf chronische Infektionserkrankungen fokussierte Anamnese (inklusive Reiseanamnese, Nahrungsmittelanamnese, Fragen nach Tierkontakten, Umgebungsinfektionen, Beruf, Immunsuppression) erheben und eine körperliche Untersuchung durchführen können.',
                operationalisierung: {
                    dimension: 'Fertigkeiten (psychomotorisch, praktische Fertigkeiten gem. PO)',
                    kognitionsdimension: null,
                    verb: 'durchführen',
                    verbId: 203,
                },
                loeschbar: true,
            },
        },
    ],
}
