# easyGene Interactive Demo v0.1

Statischer Website-Prototyp aus den vorhandenen easyGene-HTML-Screens.

## Inhalt

- `index.html` – Demo-Startseite
- `app/.../index.html` – routefähige Demo-Seiten
- `admin/.../index.html` – interne/Admin-Demo-Screens
- `styles.css` – Originaldesign
- `demo-interactions.css` – Hover-States, Cursor, Demo-Badge, Toasts
- `demo-interactions.js` – Pseudo-Interaktionen
- `assets/` – Logo
- `screens/` – PNG-Renderings als Referenz

## Wichtige Routen

- `/app/dashboard/`
- `/app/modules-core/`
- `/app/personal-overview/`
- `/app/genotypes/`
- `/app/interpretation/`
- `/app/interpretation/koffein/`
- `/app/overview/koffein/` alias
- `/app/recommendations/`
- `/app/biology/`
- `/app/snp-deep-dive/`
- `/app/analytics/`
- `/app/privacy-export/`
- `/app/cart/`
- `/admin/business/`

## Google Sites Empfehlung

Nicht die ZIP direkt in Google Sites hochladen. Besser:

1. Ordner bei Netlify, GitHub Pages oder Firebase Hosting veröffentlichen.
2. In Google Sites per „Full page embed“ oder normalem Link einbinden.
3. Für eine Landingpage nur den Demo-Link setzen; für einzelne Unterseiten jeweils die passende Route einbetten.

## Status

Dies ist bewusst keine echte App. Alle Daten sind Dummy-/Mockup-Daten. UI-Elemente haben Hover-States und Demo-Toasts; Hauptnavigation und einige Buttons sind echt verlinkt.


## v0.2 Ergänzung

- Root-Index professionalisiert: nur noch primäre Einstiege „Für Kunden“ und „Für Investoren“.
- Neuer Screen `/app/personal-plan/` für 30-Tage-Trainingsplan, Regenerations-/Nutrient-Kalender und geplante Wearable-/Kalender-Integrationen.
- Dashboard und Empfehlungen verlinken nun auf den Plan-/Kalender-Screen.
- Koffein- und Analytics-Screens bleiben als Deep-Dive-Seiten erhalten, stehen aber nicht mehr prominent auf der Startübersicht.


## v0.7 – Business Cockpit Erweiterung

Neu ergänzt:
- `admin/business/partner-pipeline/` – Partnersegmente, Partnerpakete, Minimum-Order-/Setup-Fee-Logik und Datenrechte.
- `admin/business/use-of-funds/` – indikative C5-Mittelverwendungslogik und 20Q-Aufbaupfad.
- `admin/business/due-diligence/` – Validierungs- und DD-Gates für CAC, Consent, B2B-LOIs, Labor, Legal/Data und Exit Terms.
- Business-Navigation und Reiter in `admin/business/`, `admin/business/mc-snapshot/` und `admin/business/umsatz-daten/` auf echte Links umgestellt.


## v0.8 – Validierungsstatus

Ergänzt im Investor Cockpit: kompakte Validierungsstatus-Kachel mit transparenter Trennung zwischen modellbasierter MC-Schätzung und noch offenen Real-World-Validierungspunkten (CAC/Channel, Opt-in/Consent, Partner-LOIs/Labor-SLA).

## v0.9 – Customer portal interaction polish

Geändert/neu:
- Dashboard: „Alle Module anzeigen“ führt jetzt zur Module/Core-Seite.
- Module/Core: Module hinzufügen, Core aktivieren, Tabs Module/Bundles/Geschenk & Partner, beliebte Module und Bundle-Buttons führen zum Warenkorb.
- Interpretation: Detox und Regeneration sind als eigene Detail-Screens ergänzt.
- Interpretation-Übersicht: Koffein, Detox und Regeneration sind direkt anklickbar.

Neue Routen:
- /app/interpretation/detox/
- /app/interpretation/regeneration/


## v1.0 – Persönliche Übersicht: ausklappbare Moduldetails
- `app/personal-overview/index.html` erweitert um klickbare Modul-Akkordeons.
- Jedes Modul öffnet ein farblich passendes Kurzprofil mit Mini-Metriken, Icons, Chips und Vertiefungslink.
- Keine echten medizinischen/diagnostischen Aussagen; Demo-/Lifestyle-Prototyp.


## v1.3 – Dual-View Dashboard

Neu:

- `app/dashboard/` bleibt als **Analyse / Optimierung** erhalten.
- `app/dashboard-coach/` ergänzt die neue **Alltag / Coach**-Ansicht.
- Beide Dashboards haben oben rechts einen Umschalter `Alltag / Coach | Analyse / Optimierung`.
- Admin-/Business-Bereich bleibt unverändert.

## v1.4 Coach Dashboard Visual Refresh
- `app/dashboard-coach/index.html` wurde stärker an den warmen Alltags-/Coach-Mockup-Stil angepasst.
- Neue Assets: `assets/coach_hero_overview.jpg`, `assets/coach_report_overview.jpg`.
- Analyse-/Optimierungsansicht bleibt unverändert unter `app/dashboard/`.

## v1.5 – Coach-Modul Ernährung

Neu hinzugefügt:

- `app/modules/ernaehrung/index.html` – Modul-Landingpage „Ernährung & Entzündungsbalance“ im Alltag-/Coach-Stil
- `app/modules/ernaehrung/wissenschaft/index.html` – Wissenschaftlicher Hintergrund zur Ernährung mit Koffeinmetabolismus, Gen/SNP-Details, Evidenz und Methodikgrenzen
- `assets/coach_hero_nutrition.jpg`
- `assets/coach_report_nutrition.jpg`
- `assets/coach_hero_nutrition_science.jpg`
- `assets/coach_report_nutrition_science.jpg`

Aktualisiert:

- `app/dashboard-coach/index.html` – Links zum Ernährungsmodul führen nun auf die neue Modul-Landingpage.

## v1.6 Coach-Modul Ernährung: Empfehlungen
Neu ergänzt:

- `app/modules/ernaehrung/empfehlungen/index.html`
- `app/modules/ernaehrung/index.html` verlinkt jetzt von den Ernährungstipps und „Empfehlungen starten“ auf die neue Empfehlungsseite.
- `app/modules/ernaehrung/wissenschaft/index.html` verweist im Reiter „Empfehlungen“ auf die neue Unterseite.

Neue Route:

```text
/app/modules/ernaehrung/empfehlungen/
```


## v1.7 Coach Module Expansion
Neu ergänzt: vollständige Coach-Modulstrecken für Detox, Training, Schlaf & Chronotyp, Mentale Resilienz sowie Haut & Skincare. Jede Modulstrecke enthält Überblick, Empfehlungen und Wissenschaft & Details. Dashboard-Coach-Links wurden auf die neuen Modulrouten aktualisiert.

Neue Routen:
- /app/modules/detox/
- /app/modules/detox/empfehlungen/
- /app/modules/detox/wissenschaft/
- /app/modules/training/
- /app/modules/training/empfehlungen/
- /app/modules/training/wissenschaft/
- /app/modules/schlaf-chronotyp/
- /app/modules/schlaf-chronotyp/empfehlungen/
- /app/modules/schlaf-chronotyp/wissenschaft/
- /app/modules/mentale-resilienz/
- /app/modules/mentale-resilienz/empfehlungen/
- /app/modules/mentale-resilienz/wissenschaft/
- /app/modules/haut-skincare/
- /app/modules/haut-skincare/empfehlungen/
- /app/modules/haut-skincare/wissenschaft/


## v1.8 Fokus-Auswahl und Gesundheit & Alltag
Neu: `app/fokus/`, `app/dashboard-health/`. Der Kundenportal-Einstieg kann auf `app/fokus/` zeigen. Lifestyle & Wohlbefinden nutzt `app/dashboard-coach/`; Gesundheit & Alltag nutzt `app/dashboard-health/`; Erweiterte Analyse & Details nutzt `app/dashboard/`.
