import { EreignisseAktionsmoeglichkeitenDTO } from '$src/useCases/lernzielReview/models/EreignisseAktionsmoeglichkeiten'

export const ereignisseAktionsmoeglichkeitenLz1000: EreignisseAktionsmoeglichkeitenDTO = {
    aktionsmoeglichkeiten: [
        { type: 'kommentar', label: 'Kommentar erstellen' },
        { type: 'unveraendert', label: 'Unverändert akzeptieren' },
        { type: 'loeschung', label: 'Löschung vorschlagen' },
        { type: 'textaenderung', label: 'Änderung vorschlagen' },
        { type: 'beschliessenMitVersionierung', label: 'Neue Version freigeben' },
    ],
    ereignisse: [
        {
            type: 'Original',
            data: {
                version: '2.1',
                zeitsemester: 'SoSe2021',
                operationalisierung: {
                    dimension: 'Wissen/Kenntnisse (kognitiv)',
                    kognitionsdimension: 'Tiefe 3 - analysieren',
                    verb: 'zuordnen',
                    verbId: 54,
                },
                text: 'die beim systemischen Lupus erythematodes relevanten Angaben in Anamnese und Befunde bei der körperlichen Untersuchung benennen und zuordnen können.',
            },
        },
    ],
}
