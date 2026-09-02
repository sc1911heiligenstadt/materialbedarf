# 🛒 Materialbedarf

Trainerinnen und Trainer melden, was ihre Mannschaft braucht — neue Bälle,
Hütchen, ein Erste-Hilfe-Set. Die Verwaltung entscheidet über die Meldung und
verfolgt danach, wie weit Bestellung und Verteilung sind. Damit ersetzt die App
den Zuruf zwischendurch, bei dem nie klar war, ob sich jemand darum kümmert.

**➡️ [Materialbedarf öffnen](https://sc1911heiligenstadt.github.io/materialbedarf/)**

## Wie es gedacht ist

1. Wer etwas braucht, legt unter **Bedarf melden** eine **Neue Meldung** an — mit
   einer oder mehreren Positionen aus **Material und Menge**, dem Grund
   beziehungsweise Verwendungszweck und einer **Dringlichkeit** (normal oder
   dringend). Die Mannschaft kommt aus dem Trainerprofil; wer mehrere betreut,
   wählt sie aus.
2. Die Meldung landet bei der Verwaltung in den **offenen Meldungen**. Dort wird
   sie angenommen oder abgelehnt, kommentiert und der Stand fortgeschrieben.
3. Ist die Sache erledigt, wandert sie in den Reiter **Bearbeitet** — nachlesbar,
   aber weg aus der Arbeitsliste.

Der Weg ist fest: **Offen → Angenommen → Bestellt → Verteilt**, kein Schritt
lässt sich überspringen; *Abgelehnt* endet sofort. Eine eigene, noch offene
Meldung lässt sich **zurückziehen**.

## Was drin ist

| Reiter | Wofür |
|---|---|
| **Bedarf melden** | Neue Meldung anlegen und die eigenen Meldungen mit ihrem Stand sehen |
| **Bearbeitet** | Was schon entschieden ist — filterbar nach angenommen, abgelehnt, bestellt, verteilt — mit Export |
| **Verwaltung** | Alle offenen Meldungen bearbeiten, Stand setzen, kommentieren, Export |
| **Info** | Kurzbeschreibung, Änderungsliste und Datenschutzhinweis |

Beide Verwaltungsreiter haben einen **Export als Text oder PDF** — jeweils genau
die Meldungen, die gerade angezeigt werden.

## Benachrichtigung aufs Handy

Eine neue Meldung erreicht direkt die, die darüber entscheiden können; ist
entschieden, bekommt die meldende Person Bescheid. Die Nachricht nennt weder den
Bedarf noch das Ergebnis — das sieht man erst nach dem Antippen. Eingeschaltet
wird das in der Tools-Übersicht unter *Mein Konto*.

## Wichtig: nicht die Materialliste

Der Materialbedarf sagt, was **fehlt**. Was der Verein **hat**, steht in der
[Materialliste](https://github.com/sc1911heiligenstadt/Materialliste) — zwei
verschiedene Werkzeuge, die bewusst nicht dasselbe tun.

## Zugang

Die Anmeldung läuft über die [Tools-Übersicht](https://sc1911heiligenstadt.github.io/ToolsUebersicht/) — dort einmal anmelden, danach ist dieses Werkzeug offen.

Die Rechte gelten in drei Stufen: **Sehen** (die eigenen Meldungen ansehen; das
Melde-Formular erscheint gar nicht), **Bearbeiten** (eigenen Bedarf melden und
zurückziehen) und **Administrieren** (Reiter *Verwaltung* und *Bearbeitet*:
entscheiden, Stand setzen, kommentieren, löschen, exportieren). Wer welche Stufe
hat, legt die Tools-Übersicht fest. Der Reiter *Info* ist für alle sichtbar.

Die Trennung ist Absicht: Bedarf melden ist die tägliche Arbeit, über Geld
entscheiden ist es nicht.

## Lokal starten

Über den Eintrag `materialbedarf` in `E:\.claude\launch.json` — der Server läuft dann auf `http://localhost:8798/`.

## Technik

Vanilla JavaScript ohne Build-Schritt — die Dateien werden so ausgeliefert, wie sie im Repo liegen; ausgeliefert wird die einzelne Seite `index.html`. Veröffentlicht über GitHub Pages. Der PDF-Export entsteht über einen eigenen Druckbereich der Seite, ohne fremde Bibliothek. Die Daten liegen in der Vereins-Nextcloud; der Zugriff läuft ausschließlich über den Login-Worker der Tools-Übersicht, nie mit Zugangsdaten im Browser.

---

Ein Werkzeug des 1. SC 1911 Heiligenstadt. Alle Werkzeuge auf einen Blick: [Tools-Übersicht](https://sc1911heiligenstadt.github.io/ToolsUebersicht/) · Erklärungen im [Toolbox Wiki](https://sc1911heiligenstadt.github.io/Vereinswiki/).
