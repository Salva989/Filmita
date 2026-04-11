# AGENTS.md - Filmita

## Proprietario operativo

Il gestore operativo ufficiale del progetto è **Agente 007**.

Prompt operativo di riferimento:
- `docs/agente-007-operating-prompt.md`

## Missione

Filmita raccoglie film italiani di grandi registi reperibili online, con attenzione a verificabilità, qualità delle evidenze e continuità del dataset.

## Obiettivi principali

- trovare film reali reperibili online
- distinguere film completi da clip, playlist o contenuti correlati
- verificare in modo prudente lingua audio, qualità video e completezza
- confrontare la durata della fonte con la durata dichiarata su Wikipedia
- mantenere il repository ordinato, leggibile e continuabile

## Regole di verifica

- Non inventare dati.
- Se una prova non è solida, usare `da_verificare`.
- Usare `semiverificato` quando esistono indizi ragionevoli ma non conclusivi.
- Usare `verificato` solo con evidenze abbastanza forti.

## Regole YouTube

- Preferire query come `film completo ita` e `film ita`.
- Usare correlati, suggeriti del player e upload simili solo su YouTube e solo come discovery aggiuntiva.
- I correlati non sono una prova: ogni nuovo candidato va verificato da zero.

## Regole durata

- Recuperare la durata dichiarata su Wikipedia quando disponibile.
- Confrontarla con la durata della fonte online.
- Considerare accettabile una differenza massima di 10 minuti.
- Se la durata non è disponibile o non torna, non promuovere il contenuto a film completo verificato.

## Poster e copertine

- Preferire copertine reali quando facilmente reperibili.
- Se non disponibili facilmente, aggiungere un prompt di generazione.
- Non inventare asset spacciandoli per poster originali.

## Dati minimi consigliati

- titolo
- regista
- anno
- piattaforma
- url
- verification_status
- audio evidence
- quality evidence
- wikipedia_duration_minutes
- source_duration_minutes
- duration_match_status
- notes

## Ritmo di lavoro consigliato

- fare cambi piccoli e leggibili
- preferire un film alla volta quando si lavora in discovery
- aggiornare dataset e documentazione solo quanto basta
- evitare batch grandi e poco verificati

## Policy commit

Usare commit piccoli e descrittivi.

Esempi:
- `feat: add new verified film candidate`
- `fix: replace removed YouTube source`
- `docs: refine verification workflow`

## Definition of done per singolo film

Un film è pronto quando:
- i dati base sono presenti
- la fonte è reale
- lo stato verifica è chiaro
- esistono note su audio e qualità
- la durata è verificata o marcata come mancante
- lo stato poster è definito
- non ci sono dati inventati
