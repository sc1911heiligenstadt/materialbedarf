const APP_VERSION = "1.0";

// Was der Materialbedarf kann -- steht im Info-Reiter als Karte "Funktionen".
// WICHTIG: Das ist NICHT der Changelog. Hier steht der ZUSTAND ("eine offene
// Meldung laesst sich zurueckziehen"), dort die Aenderung ("eine offene Meldung
// laesst sich JETZT zurueckziehen"). Wer eine Funktion umbaut oder abschaltet,
// zieht diesen Text mit -- und ebenso E:\SC1911-Tools-Anleitung.txt, wo dasselbe
// ausfuehrlich steht.
const APP_FUNKTIONEN = [
  {
    title: "Bedarf melden",
    items: [
      "Trainerinnen und Trainer melden Materialbedarf mit einer oder mehreren Positionen aus Material und Menge, dazu Grund oder Verwendungszweck und die Dringlichkeit — normal oder dringend.",
      "Die Mannschaft kommt aus dem eigenen Trainerprofil. Wer mehrere betreut, wählt sie aus einer Liste; wer keine hat, meldet ohne Mannschaft.",
      "Die eigenen Meldungen bleiben unter „Meine Meldungen“ mit ihrem aktuellen Stand sichtbar.",
      "Eine noch offene Meldung lässt sich selbst zurückziehen."
    ]
  },
  {
    title: "Bedarf, nicht Bestand",
    items: [
      "Hier steht, was der Verein noch braucht. Was er bereits hat, steht in der Materialliste — das sind zwei verschiedene Werkzeuge.",
      "Eine Meldung ist nach dem Absenden nicht mehr weg: Sie liegt bei der Verwaltung, bis dort entschieden ist."
    ]
  },
  {
    title: "Der Weg einer Meldung",
    items: [
      "Der Weg ist fest: Offen → Angenommen → Bestellt → Verteilt. Kein Schritt lässt sich überspringen.",
      "„Bestellt“ heißt: beim Händler geordert. „Verteilt“ heißt: bei der Mannschaft angekommen.",
      "„Abgelehnt“ endet sofort, „Verteilt“ schließt den Vorgang ab — danach bleibt nur noch Löschen.",
      "Zu jeder Meldung kann ein Kommentar hinterlegt werden. Er bleibt bis zur Verteilung änderbar und wird mit jedem Schritt mitgespeichert."
    ]
  },
  {
    title: "Entscheiden und verfolgen",
    items: [
      "Der Reiter „Verwaltung“ zeigt ausschließlich die offenen Meldungen — was noch zu entscheiden ist, steht sofort im Blick.",
      "Entschiedene Meldungen stehen im Reiter „Bearbeitet“ und sind dort nach Status filterbar: alle, angenommen, abgelehnt, bestellt oder verteilt.",
      "Der Filter trennt bestellt und verteilt: Was noch beim Händler liegt, steht damit nicht zwischen dem Erledigten.",
      "Der weitere Stand einer angenommenen Meldung lässt sich in beiden Reitern setzen."
    ]
  },
  {
    title: "Export",
    items: [
      "Beide Verwaltungs-Reiter haben einen Export als Text oder PDF.",
      "Ausgegeben wird genau das, was gerade angezeigt wird — der gesetzte Filter gilt also auch für den Export."
    ]
  },
  {
    title: "Benachrichtigung aufs Handy",
    items: [
      "Eine neue Meldung erreicht direkt aufs Handy, wer sie freigeben oder ablehnen kann — statt liegen zu bleiben, bis jemand von sich aus nachsieht.",
      "Ist über eine Meldung entschieden worden, bekommt die meldende Person eine Nachricht. Wurde sie zwischenzeitlich schon von jemand anderem entschieden, geht keine zweite Nachricht raus.",
      "Die Nachricht nennt weder den gemeldeten Bedarf noch das Ergebnis — sie steht auf dem Sperrbildschirm. Was entschieden wurde, sieht man nach dem Antippen.",
      "Eingeschaltet wird das in der Tools-Übersicht unter „Mein Konto“, einzeln für dieses Werkzeug. Wer es nicht einschaltet, merkt keinen Unterschied."
    ]
  },
  {
    title: "Wer darf was",
    items: [
      "Sehen: die eigenen Meldungen. Das Melde-Formular erscheint nicht, eine Meldung anlegen geht nicht — auch nicht am Bildschirm vorbei.",
      "Bearbeiten: Bedarf melden und eigene offene Meldungen zurückziehen.",
      "Administrieren: annehmen, ablehnen, den weiteren Stand setzen, kommentieren, fremde Meldungen löschen und exportieren. Die Reiter „Verwaltung“ und „Bearbeitet“ sind nur auf dieser Stufe sichtbar.",
      "Die Trennung ist Absicht: Bedarf melden ist die tägliche Arbeit, über Geld entscheiden ist es nicht.",
      "Der Reiter „Info“ ist für alle sichtbar. Dort stehen eine Kurzbeschreibung, diese Funktionsliste und der Datenschutzhinweis des Vereins."
    ]
  },
  {
    title: "Daten und Speicherung",
    items: [
      "Gespeichert wird in der Vereins-Nextcloud über die zentrale Anmeldung der Tools-Übersicht — ein eigenes Passwort braucht es nicht.",
      "Ändern zwei Leute gleichzeitig denselben Stand, lädt die App den fremden Stand nach und trägt die eigene Änderung noch einmal ein.",
      "Am Handy bricht die Reiterleiste um, statt seitlich aus dem Bild zu laufen, und die Eingabefelder sind groß genug, dass der iPhone-Browser nicht ungefragt hineinzoomt."
    ]
  }
];

const APP_CHANGELOG = [
  {
    version: "1.1",
    groups: [
      {
        title: "Im Info-Reiter steht jetzt, was die App kann",
        items: [
          "Die Liste der Änderungen und die Versionsnummer sind aus dem Info-Reiter verschwunden.",
          "Stattdessen steht dort die Karte „Funktionen“: was die App kann, nach Themen geordnet.",
          "Was sich geändert hat, steht weiterhin in den Neuigkeiten auf der Startseite der Tools-Übersicht."
        ]
      }
    ]
  },
  {
    version: "1.0",
    groups: [
      {
        title: "Bedarf melden",
        items: [
          "Trainerinnen und Trainer melden Materialbedarf mit einer oder mehreren Positionen aus Material und Menge, dazu Grund oder Verwendungszweck und die Dringlichkeit — normal oder dringend.",
          "Die Mannschaft kommt aus dem eigenen Trainerprofil. Wer mehrere betreut, wählt sie aus einer Liste.",
          "Die eigenen Meldungen bleiben unter „Meine Meldungen“ mit ihrem aktuellen Stand sichtbar.",
          "Eine noch offene Meldung lässt sich zurückziehen."
        ]
      },
      {
        title: "Entscheiden",
        items: [
          "Der Reiter „Verwaltung“ zeigt ausschließlich die offenen Meldungen — was noch zu entscheiden ist, steht sofort im Blick.",
          "Entschiedene Meldungen stehen im Reiter „Bearbeitet“ und sind dort nach Status filterbar: alle, angenommen, abgelehnt, bestellt oder verteilt.",
          "Der weitere Stand einer angenommenen Meldung lässt sich in beiden Reitern setzen.",
          "Zu jeder Meldung kann ein Kommentar hinterlegt werden.",
          "Beide Reiter haben einen Export als Text oder PDF — jeweils genau die Meldungen, die gerade angezeigt werden."
        ]
      },
      {
        title: "Der Weg einer Meldung",
        items: [
          "Nach der Annahme hat eine Meldung zwei weitere Stationen: „Bestellt“, sobald das Material geordert ist, und „Verteilt“, sobald es bei der Mannschaft angekommen ist.",
          "Der Weg ist fest: Offen → Angenommen → Bestellt → Verteilt. Kein Schritt lässt sich überspringen; „Abgelehnt“ endet sofort.",
          "„Verteilt“ schließt den Vorgang ab — danach bleibt nur noch Löschen.",
          "Der Filter im Reiter „Bearbeitet“ trennt zwischen bestellt und verteilt: was noch beim Händler liegt, steht damit nicht zwischen dem Erledigten.",
          "Der Kommentar bleibt bis zur Verteilung änderbar und wird mit jedem Schritt mitgespeichert."
        ]
      },
      {
        title: "Benachrichtigung aufs Handy",
        items: [
          "Eine neue Meldung erreicht direkt aufs Handy, wer sie freigeben oder ablehnen kann — statt liegen zu bleiben, bis jemand von sich aus nachsieht.",
          "Ist über eine Meldung entschieden worden, bekommt die meldende Person eine Nachricht.",
          "Die Nachricht nennt weder den gemeldeten Bedarf noch das Ergebnis — sie steht auf dem Sperrbildschirm. Was entschieden wurde, sieht man nach dem Antippen.",
          "Eingeschaltet wird das in der Tools-Übersicht unter „Mein Konto“, einzeln für dieses Werkzeug. Wer es nicht einschaltet, merkt keinen Unterschied.",
          "Wurde eine Meldung zwischenzeitlich schon von jemand anderem entschieden, geht keine zweite Nachricht raus."
        ]
      },
      {
        title: "Wer darf was",
        items: [
          "Sehen: die eigenen Meldungen. Das Melde-Formular erscheint nicht, eine Meldung anlegen geht nicht — auch nicht am Bildschirm vorbei.",
          "Bearbeiten: Bedarf melden und eigene offene Meldungen zurückziehen.",
          "Administrieren: annehmen, ablehnen, den weiteren Stand setzen, kommentieren, fremde Meldungen löschen und exportieren. Die Reiter „Verwaltung“ und „Bearbeitet“ sind nur auf dieser Stufe sichtbar.",
          "Die Trennung ist Absicht: Bedarf melden ist die tägliche Arbeit, über Geld entscheiden ist es nicht.",
          "Der Reiter „Info“ ist für alle sichtbar. Dort stehen eine Kurzbeschreibung, diese Änderungsliste und der Datenschutzhinweis des Vereins."
        ]
      },
      {
        title: "Bedienung am Handy",
        items: [
          "Die Reiterleiste bricht am Handy um, statt seitlich aus dem Bild zu laufen — auch die hinteren Reiter sind auf schmalen Bildschirmen erreichbar.",
          "Eingabefelder sind groß genug, dass der iPhone-Browser beim Antippen nicht ungefragt in die Seite hineinzoomt."
        ]
      },
      {
        title: "Daten & Speicherung",
        items: [
          "Gespeichert wird in der Vereins-Nextcloud über die zentrale Anmeldung der Tools-Übersicht — ein eigenes Passwort braucht es nicht.",
          "Ändern zwei Leute gleichzeitig denselben Stand, lädt die App den fremden Stand nach und trägt die eigene Änderung noch einmal ein."
        ]
      }
    ]
  }
];
