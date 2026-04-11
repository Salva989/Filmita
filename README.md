# Filmita

Filmita è un progetto iniziale per raccogliere film italiani di grandi registi reperibili online, partendo dalla lista Wikipedia **100 film italiani da salvare** e collegando, con prudenza, risultati trovati su piattaforme come YouTube, Dailymotion e Internet Archive.

## Obiettivo

Costruire un catalogo navigabile che mostri:
- titolo
- regista
- anno
- piattaforma
- link alla fonte
- evidenze disponibili su lingua audio e qualità video
- stato di verifica
- stato copertina/poster

## Stato attuale

Questa prima versione contiene:
- un dataset JSON iniziale con primi risultati reali
- una web app statica che legge il dataset e lo mostra con card
- prompt iniziali per generare copertine quando mancanti
- documentazione di workflow e limiti pratici

## Struttura progetto

- `index.html` pagina principale
- `styles.css` stile del sito
- `script.js` logica frontend
- `data/films.json` dataset iniziale
- `docs/workflow.md` workflow operativo per continuare discovery e verifica

## Come eseguire

Dato che il progetto è statico, basta servire la cartella con un web server semplice.

Esempi:

```bash
python3 -m http.server 8000
```

Poi apri:

```text
http://localhost:8000
```

## Modello dati

Ogni film include campi come:
- `verification_status`
- `audio_verification`
- `quality_verification`
- `source_url`
- `poster`
- `notes`

## Principi di verifica

Non inventare dati. Se una verifica non è robusta:
- segnare `da_verificare`
- spiegare l'evidenza raccolta
- indicare il metodo usato

## Prossimi passi consigliati

1. Ampliare discovery con query sistematiche per regista e titolo
2. Estrarre metadata più robusti dai player o dagli embed
3. Aggiungere poster reali quando reperibili da fonti affidabili
4. Distinguere meglio tra film completi, clip, playlist e upload dubbi
5. Introdurre filtri per regista, piattaforma e stato verifica

## Fonte ispiratrice iniziale

- Wikipedia: `100 film italiani da salvare`

## Nota importante

La reperibilità online cambia spesso e alcuni contenuti possono essere rimossi o sostituiti. Per questo il progetto è pensato come catalogo verificabile e continuabile, non come archivio definitivo.
