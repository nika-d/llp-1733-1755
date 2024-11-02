import { EreignisseAktionsmoeglichkeitenDTO } from '$src/useCases/lernzielReview/models/EreignisseAktionsmoeglichkeiten'

export const ereignisseAktionsmoeglichkeitenLz2002: EreignisseAktionsmoeglichkeitenDTO = {
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
                text: 'bei Patient*innen mit chronischer Infektion eine allgemeine und eine auf Infektionskrankheiten fokussierte Anamnese (inklusive Herkunft, Reiseanamnese, bekannte Erregerexposition, Risikoverhalten, Berufsanamese, vorbekannte Immundefekte, Vorerkrankungen sowie Allgemeinsymptome) und körperliche Untersuchung durchführen und den Befund dokumentieren können.',
            },
        },
        {
            type: 'AkzeptierenUnveraendert',
            data: {
                id: 220,
                phase: 'Review-Treffen',
                urheber: 'Peter Müller - SK - 03.02.2024, 10:30 Uhr',
                infoText: 'Unverändert',
            },
        },
        {
            type: 'Klaerungsbedarf',
            data: {
                id: 221,
                phase: 'LVV',
                urheber: 'Peter Müller (peter.mueller@charite.de) - LVV',
                infoText: 'Klärungsbedarf angemeldet - 10.02.2024, 13:31 Uhr',
                text:
                    'Könnte man das nicht anders schreiben,' +
                    '\nz.B. so:' +
                    '\n"bei Patient*innen mit chronischer Infektion eine allgemeine und eine auf Infektionskrankheiten fokussierte Anamnese (inklusive Herkunft, Reiseanamnese, bekannte Erregerexposition, Risikoverhalten, Berufsanamese, vorbekannte Immundefekte, Vorerkrankungen sowie Allgemeinsymptome) und körperliche Untersuchung durchführen und den Befund danach dokumentieren können."',
                loeschbar: true,
            },
        },
    ],
}
