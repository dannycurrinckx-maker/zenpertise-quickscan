/*
 * sectors_master.js — enige bron van waarheid voor de ondersteunde sectoren.
 *
 * Wordt gebruikt door:
 *   - quickscan.html      (sectorkeuze bij de Quick Scan — enkel name/icon nodig)
 *   - intake_flow.html    (sectorkeuze + intakevragen in de browser)
 *   - generate_intake_docs.js (Node — zelfde sectoren + voorbeelddata voor de Word-generator)
 *
 * UMD-achtige export: werkt zowel als <script src="sectors_master.js"> in de
 * browser (window.ZenpertiseSectors) als via require() in Node.
 *
 * Nieuwe sector toevoegen? Enkel hier — de drie bestanden hierboven lezen
 * dit bestand uit, dus er is nergens anders meer iets te synchroniseren.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.ZenpertiseSectors = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  const SECTORS = {
    kine: {
      name: "Kinesist", icon: "🦵", desc: "Fysiotherapie-intake",
      docTitle: "Intakeformulier Kinesitherapie",
      questions: [
        { key: "naam", label: "Voor- en achternaam van de patiënt?" },
        { key: "geboortedatum", label: "Geboortedatum?" },
        { key: "telefoon", label: "Telefoonnummer?" },
        { key: "mutualiteit", label: "Mutualiteit en aansluitingsnummer?" },
        { key: "verwijzendeArts", label: "Naam van de verwijzende arts?" },
        { key: "diagnoseVoorschrift", label: "Diagnose/reden op het voorschrift?" },
        { key: "hoofdklacht", label: "Wat is de hoofdklacht (waar, welke aard)?" },
        { key: "ontstaan", label: "Is de klacht acuut of geleidelijk ontstaan?", quick: ["Acuut", "Geleidelijk"] },
        { key: "duurKlacht", label: "Hoe lang bestaat de klacht al?" },
        { key: "pijnscore", label: "Pijnscore van 0 (geen pijn) tot 10 (ondraaglijk)?" },
        { key: "medicatieAllergie", label: "Huidige medicatie en/of allergieën?" },
        { key: "doelBehandeling", label: "Wat is het doel van de behandeling (bv. terug sporten, pijnvrij bewegen)?" },
      ],
    },
    logo: {
      // Taak #341: was "🗣️" (SPEAKING HEAD + variation-selector U+FE0F) — datzelfde
      // patroon als het eerder gefixte 🩺-icoon bij Huisarts (taak #246): zonder de
      // variation-selector valt dit icoon terug op tekst-presentatie i.p.v. kleur-emoji op
      // sommige platformen/fonts, met inconsistente weergave tot gevolg. "💬" (SPEECH
      // BALLOON, één enkel codepoint, standaard emoji-presentatie) is thematisch even
      // passend voor logopedie en heeft dat risico niet.
      name: "Logopedist", icon: "💬", desc: "Logopedie-intake",
      docTitle: "Intakeformulier Logopedie",
      questions: [
        { key: "naam", label: "Voor- en achternaam van de patiënt?" },
        { key: "geboortedatum", label: "Geboortedatum?" },
        { key: "contactOuder", label: "Naam en telefoonnummer van ouder/voogd (indien minderjarig)?" },
        { key: "schoolOpleiding", label: "School of opleiding?" },
        { key: "verwijzendeArts", label: "Naam van de verwijzende arts of CLB?" },
        { key: "aardKlacht", label: "Aard van de klacht?", quick: ["Spraak/articulatie", "Taalontwikkeling", "Stotteren", "Stem", "Slikproblemen", "Leerproblemen (bv. dyslexie)"] },
        { key: "sindsWanneer", label: "Sinds wanneer is dit een aandachtspunt?" },
        { key: "gehoorGecontroleerd", label: "Is het gehoor al gecontroleerd?", quick: ["Ja", "Nee", "Niet gekend"] },
        { key: "eerdereLogopedie", label: "Eerdere logopedische behandeling gehad?" },
        { key: "doelBehandeling", label: "Wat is het doel van de behandeling?" },
      ],
    },
    dierenarts: {
      name: "Dierenarts", icon: "🐾", desc: "Consult-intake huisdier",
      docTitle: "Intakeformulier Dierenartsconsult",
      questions: [
        { key: "naamEigenaar", label: "Naam van de eigenaar?" },
        { key: "telefoon", label: "Telefoonnummer?" },
        { key: "naamDier", label: "Naam van het huisdier?" },
        { key: "diersoortRas", label: "Diersoort en ras?" },
        { key: "leeftijd", label: "Leeftijd (of geboortedatum) van het dier?" },
        { key: "gesteriliseerd", label: "Gecastreerd/gesteriliseerd?", quick: ["Ja", "Nee", "Niet gekend"] },
        { key: "redenBezoek", label: "Reden van het bezoek / klachten?" },
        { key: "sindsWanneer", label: "Sinds wanneer zijn deze klachten aanwezig?" },
        { key: "vaccinatiestatus", label: "Vaccinatiestatus up-to-date?", quick: ["Ja", "Nee", "Niet gekend"] },
        { key: "medicatieAllergie", label: "Huidige medicatie en/of allergieën?" },
        { key: "temperament", label: "Temperament van het dier (bv. angstig, bijtgevaar)?" },
      ],
    },
    tandarts: {
      name: "Tandarts", icon: "🦷", desc: "Tandheelkundige intake",
      docTitle: "Intakeformulier Tandheelkunde",
      questions: [
        { key: "naam", label: "Voor- en achternaam van de patiënt?" },
        { key: "geboortedatum", label: "Geboortedatum?" },
        { key: "telefoon", label: "Telefoonnummer?" },
        { key: "mutualiteit", label: "Mutualiteit en aansluitingsnummer?" },
        { key: "redenBezoek", label: "Reden van het bezoek?" },
        { key: "pijnklachten", label: "Pijnklachten? Zo ja, waar en sinds wanneer?" },
        { key: "laatsteBezoek", label: "Wanneer was het laatste tandartsbezoek?" },
        { key: "medischeAchtergrond", label: "Relevante medische achtergrond (bv. bloedverdunners, zwangerschap)?" },
        { key: "allergieen", label: "Allergieën (bv. verdoving, latex, antibiotica)?" },
        { key: "tandartsangst", label: "Ervaart u angst voor tandheelkundige behandelingen?", quick: ["Ja", "Een beetje", "Nee"] },
      ],
    },
    huisarts: {
      name: "Huisarts", icon: "🏥", desc: "Raadpleging-intake",
      docTitle: "Intakeformulier Huisartsconsult",
      questions: [
        { key: "naam", label: "Voor- en achternaam van de patiënt?" },
        { key: "geboortedatum", label: "Geboortedatum?" },
        { key: "telefoon", label: "Telefoonnummer?" },
        { key: "mutualiteit", label: "Mutualiteit en aansluitingsnummer?" },
        { key: "redenConsult", label: "Reden van de raadpleging / klacht?" },
        { key: "sindsWanneer", label: "Sinds wanneer heeft u deze klacht?" },
        { key: "medicatie", label: "Huidige medicatie?" },
        { key: "allergieen", label: "Allergieën?" },
        { key: "voorgeschiedenis", label: "Relevante medische voorgeschiedenis (bv. chronische aandoeningen, operaties)?" },
        { key: "dringendheid", label: "Hoe dringend is dit?", quick: ["Dringend (vandaag)", "Kan enkele dagen wachten", "Niet dringend"] },
        { key: "vormConsult", label: "Gewenste vorm van consult?", quick: ["Fysiek op de praktijk", "Telefonisch", "Huisbezoek"] },
      ],
    },
  };

  const SAMPLE_DATA = {
    kine: {
      naam: "Sofie Van Damme", geboortedatum: "14/03/1989", telefoon: "0478 22 11 09",
      mutualiteit: "CM — 123456789-01", verwijzendeArts: "Dr. P. Coppens",
      diagnoseVoorschrift: "Lage rugpijn met uitstraling naar linkerbeen",
      hoofdklacht: "Pijn onderrug, uitstralend naar linker bil en dijbeen",
      ontstaan: "Geleidelijk", duurKlacht: "circa 6 weken", pijnscore: "6/10",
      medicatieAllergie: "Ibuprofen bij pijnopstoten, geen bekende allergieën",
      doelBehandeling: "Terug pijnvrij kunnen lopen en joggen hervatten",
    },
    logo: {
      naam: "Milo Peeters", geboortedatum: "02/09/2019", contactOuder: "Els Peeters — 0472 33 44 55",
      schoolOpleiding: "Kleuterschool De Regenboog, 3de kleuterklas",
      verwijzendeArts: "CLB Beringen", aardKlacht: "Taalontwikkeling",
      sindsWanneer: "Sinds start kleuterschool, ongeveer 8 maanden",
      gehoorGecontroleerd: "Ja", eerdereLogopedie: "Neen",
      doelBehandeling: "Woordenschat en zinsbouw op leeftijdsniveau brengen",
    },
    dierenarts: {
      naamEigenaar: "Karel Maes", telefoon: "0471 90 12 34", naamDier: "Balto",
      diersoortRas: "Hond — Border Collie", leeftijd: "4 jaar",
      gesteriliseerd: "Ja", redenBezoek: "Kreupel aan linker voorpoot",
      sindsWanneer: "2 dagen", vaccinatiestatus: "Ja",
      medicatieAllergie: "Geen", temperament: "Vriendelijk, iets angstig bij vreemden",
    },
    tandarts: {
      naam: "Anke Willems", geboortedatum: "27/11/1995", telefoon: "0496 11 22 33",
      mutualiteit: "Partena — 987654321-02", redenBezoek: "Pijn bij kauwen rechts onderaan",
      pijnklachten: "Ja, rechter onderkaak, sinds 3 dagen",
      laatsteBezoek: "Ongeveer 2 jaar geleden", medischeAchtergrond: "Geen bijzonderheden",
      allergieen: "Penicilline", tandartsangst: "Een beetje",
    },
    huisarts: {
      naam: "Frank Van Loo", geboortedatum: "05/06/1972", telefoon: "0475 66 77 88",
      mutualiteit: "Liberale Mutualiteit — 456789123-03",
      redenConsult: "Aanhoudende hoest en vermoeidheid",
      sindsWanneer: "Ongeveer 10 dagen",
      medicatie: "Bloeddrukmedicatie (Amlodipine 5mg)",
      allergieen: "Geen bekende allergieën",
      voorgeschiedenis: "Hypertensie, geen operaties",
      dringendheid: "Kan enkele dagen wachten",
      vormConsult: "Fysiek op de praktijk",
    },
  };

  return { SECTORS: SECTORS, SAMPLE_DATA: SAMPLE_DATA };
});
