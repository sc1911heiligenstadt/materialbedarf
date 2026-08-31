# 🛒 Materialbedarf

Trainerinnen und Trainer melden, was ihre Mannschaft braucht — neue Bälle,
Hütchen, ein Erste-Hilfe-Set. Die Verwaltung entscheidet über die Meldung und
verfolgt danach, wie weit Bestellung und Verteilung sind. Damit ersetzt die App
den Zuruf zwischendurch, bei dem nie klar war, ob sich jemand darum kümmert.

**➡️ [Materialbedarf öffnen](https://sc1911heiligenstadt.github.io/materialbedarf/)**

## Wie es gedacht ist

1. Wer etwas braucht, legt unter **Bedarf melden** eine **Neue Meldung** an —
   mit Grund beziehungsweise Verwendungszweck und einer **Dringlichkeit**.
2. Die Meldung landet bei der Verwaltung in den **offenen Meldungen**. Dort wird
   entschieden und der Stand fortgeschrieben.
3. Ist die Sache erledigt, wandert sie in den Reiter **Bearbeitet** — nachlesbar,
   aber weg aus der Arbeitsliste.

## Was drin ist

| Reiter | Wofür |
|---|---|
| **Bedarf melden** | Neue Meldung anlegen und die eigenen offenen Meldungen sehen |
| **Bearbeitet** | Was schon entschieden und abgeschlossen ist |
| **Verwaltung** | Alle offenen Meldungen bearbeiten, Stand setzen, Export |

## Wichtig: nicht die Materialliste

Der Materialbedarf sagt, was **fehlt**. Was der Verein **hat**, steht in der
[Materialliste](https://github.com/sc1911heiligenstadt/Materialliste) — zwei
verschiedene Werkzeuge, die bewusst nicht dasselbe tun.

## Zugang

Die Anmeldung läuft über die [Tools-Übersicht](https://sc1911heiligenstadt.github.io/ToolsUebersicht/) — dort einmal anmelden, danach ist dieses Werkzeug offen.

Die Rechte gelten in drei Stufen: **Sehen** (Meldungen ansehen), **Bearbeiten**
(eigenen Bedarf melden) und **Administrieren** (Reiter *Verwaltung*: entscheiden,
Stand setzen, exportieren). Wer welche Stufe hat, legt die Tools-Übersicht fest.

## Lokal starten

Über den Eintrag `materialbedarf` in `E:\.claude\launch.json` — der Server läuft dann auf `http://localhost:8798/`.

## Technik

Vanilla JavaScript ohne Build-Schritt — die Dateien werden so ausgeliefert, wie sie im Repo liegen. Veröffentlicht über GitHub Pages. Die Daten liegen in der Vereins-Nextcloud; der Zugriff läuft ausschließlich über den Login-Worker der Tools-Übersicht, nie mit Zugangsdaten im Browser.

---

Ein Werkzeug des 1. SC 1911 Heiligenstadt. Alle Werkzeuge auf einen Blick: [Tools-Übersicht](https://sc1911heiligenstadt.github.io/ToolsUebersicht/) · Erklärungen im [Toolbox Wiki](https://sc1911heiligenstadt.github.io/Vereinswiki/).
