### Aufgabe:

In diesen Tickets geht es um automatische Tests der Lernzielreview, genauer um Tests für Dinge, die im Drawer sind/passieren: 
* https://s-it-openproject.charite.de/work_packages/1733 -- Alfiras Ticket, Ziel ist gucken, ob alle LernzielDetails angezeigt werden. LernzielDetails nennen wir das, was in der Lernzielreview im Drawer gezeigt wird. 
* https://s-it-openproject.charite.de/work_packages/1755 -- Nikas Ticket, Ziel ist kurze Userflows im Drawer testen, do und undo.

Aufgabe ist, eine Liste von fehlenden Testfällen und/oder doppelt getesteten Dingen zu erstellen.

Auch falls du Inkonsistenzen in der Bennenung entdecken solltest, gerne Melden. Sowas könnte z.B. sein, dass der Dateiname nicht zum Inhalt der Tests passt. Sollte eigentlich nicht vorkommen, also falls überhaupt, dann sollte es sehr selten sein. 

### Material für die Aufgabe: 

Hast du alles hier. :) 

Beispiel, das du gestern gelesen hast: 

https://github.com/nika-d/llp-1733-1755/blob/main/%24test/playwright/lernzielreview/aktionen/Kommentieren.spec.ts 

Wenn du online im Browser arbeitest, dann hast du die farbliche Hervorherbung im Code. Um die offline zu haben, bräuchtest du extra Apps. 
Du kannst dir die ganzen Dateien auch herunterladen und offline Arbeiten. Dann siehst du die Ordnerstruktur vllt übersichtlicher. 
Ich denke aber, online wird erstmal bequemer für dich sein. 

### Überblick, über die ganzen Dateien: 

Wichtig für dich sind *.spec.ts-Dateien . 

Außerdem sind auch Testdaten und Fixtures+Interceptions dabei, die sind Randinfo, kann nützlich sein, muss aber nicht. 

### Tests:

Test-Dateien sind die *.spec.ts, also fast alles in $test/playwright/lernzielreview/[aktionen|LernzielDetails]. 

### Testdaten: 

Alles in $test/data . Vermutlich wirst du das selten brauchen, um zu identifizieren, welche Testcases fehlen. Also eher nur so für den Fall. Alle Daten müssten potenziell relevant für die LernzielReview sein, aber längst nicht alle müssen auch wirklich in den Tests genutzt werden. Die Lernziel-Ids in den Tests sind die selben wie in den Testdaten, so kannst du den Bezug finden, auf welchen Daten ein Test arbeitet. 

Die Testdaten können, aber müssen nicht komplett realistisch sein. Es kann sein, dass dort auch fachliche Fehler drin sind, sowas dann bitte ignorieren, so gut es geht, oder melden, wenns nicht geht, sie zu ignorieren. 

### Fixtures+Interceptions: 

Die *.ts Dateien in $test/playwright und Unterverzeichnissen sind sogenannte fixtures und/oder interceptions. Die brauchst du erstmal nicht im Detail anzugucken. Eigentlich könnten davon nur die Benennungen, möglicherweise auch die "Zwischenüberschriften" innerhalb der Dateien, für dich nützlich sein, deswegen habe ich sie dazugetan. Nur als Randinfo: 

* Fixture: Hilfsmethode für Tests, z.B. Drawer öffnen, MultipleChoiceFilter-Optionen auswählen und ähnliches.
* * Interception: Backend immitieren, also so tun, als ob ein Backend antworten würde, z.B. indem bestimmte Testdaten aus Dateien geladen werden oder indem Testdaten direkt in der spec.ts-Datei drinstehen, wie die 1000 und die 12345, nach denen du gestern gefragt hast. 


-----------

Falls du den Code downloaden möchtest: 
<img width="1411" alt="Bildschirmfoto 2024-11-02 um 09 14 26" src="https://github.com/user-attachments/assets/135d7808-b655-4ecf-8246-667ef858bd14">
