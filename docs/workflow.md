# Workflow di raccolta e verifica

## 1. Sorgente catalogo iniziale

Usare una lista autorevole di partenza, per esempio:
- Wikipedia, `100 film italiani da salvare`

Estrarre almeno:
- titolo
- regista
- anno

## 2. Discovery sulle piattaforme

Cercare ogni film su:
- YouTube
- Dailymotion
- Internet Archive

Query suggerite:
- `"TITOLO" "film completo"`
- `"TITOLO" REGISTA YouTube`
- `site:youtube.com "TITOLO" "film completo"`
- `site:dailymotion.com "TITOLO"`
- `site:archive.org "TITOLO" italiano`

## 3. Valutazione della rilevanza

Classificare il risultato come uno di questi:
- `full_film`
- `full_film_or_long_form_upload`
- `clip_or_related_entry`
- `playlist`
- `unclear`

Se non è chiaramente il film completo, non promuoverlo a verificato.

## 4. Verifica della lingua audio

Metodo migliore, in ordine di affidabilità:

1. ascolto manuale di 5-15 secondi del parlato
2. transcript automatico o sottotitoli auto-generati disponibili nella lingua corretta
3. metadata del titolo o descrizione che indicano esplicitamente italiano
4. snippet di ricerca coerente con upload in italiano

Se manca una prova sufficiente, usare:
- `status: uncertain`
- `verification_status: da_verificare`

## 5. Verifica qualità video

Metodo migliore, in ordine di affidabilità:

1. metadata tecnici del player o stream che indicano 720p, 1080p o simili
2. titolo o descrizione del video con indicazione HD o 1080p
3. file size o info container nel caso di file scaricabili
4. ispezione visiva manuale come supporto, non come unica prova

Se la prova non è robusta, usare stato incerto.

## 6. Poster e copertine

Ordine consigliato:
1. reperire una copertina reale affidabile
2. se non disponibile facilmente, impostare `poster.status` come mancante
3. salvare un prompt pronto per generazione con Nano Banana o `image_generate`

## 7. Stato di verifica

Valori consigliati:
- `verificato`
- `semiverificato`
- `da_verificare`

### Quando usare `verificato`
Solo con evidenza abbastanza solida sia su lingua che su qualità.

### Quando usare `semiverificato`
Quando ci sono indizi ragionevoli ma manca almeno una conferma forte.

### Quando usare `da_verificare`
Quando il risultato è promettente ma ambiguo, oppure sembra clip/entry correlata.

## 8. Evoluzione del sito

Step successivi utili:
- filtri e ricerca testuale
- badge per piattaforma e affidabilità
- pagina dettaglio film
- cronologia delle verifiche
- script semi-automatici per discovery e normalizzazione dati
