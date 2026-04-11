# Procedura completa per spostare Filmita su un agente separato

## Obiettivo

Separare il progetto Filmita dal flusso principale, affidandolo a un agente dedicato che lavori in modo continuativo, ordinato e con regole chiare.

## Scopo dell'agente separato

L'agente dedicato deve occuparsi di:
- discovery dei film italiani online
- verifica prudente di lingua, qualità e completezza
- confronto durata fonte vs durata Wikipedia
- uso dei correlati solo su YouTube come discovery aggiuntiva
- aggiornamento dataset JSON
- miglioramento progressivo del sito
- documentazione dei limiti e delle evidenze

## Nome consigliato

- `agente-007`
oppure, se vuoi un nome ancora più esplicito:
- `filmita-agent`
- `filmita-investigator`

## Architettura consigliata

### 1. Repo dedicato: già presente
Usare il repository:
- `Salva989/Filmita`

### 2. Agente dedicato con missione chiara
L'agente deve avere:
- identità separata
- prompt operativo stabile
- regole di verifica permanenti
- autonomia sui task interni al repo
- escalation all'umano solo per decisioni ambigue o esterne

### 3. Documenti minimi da mantenere nel repo
Tenere nel repo Filmita questi file:
- `README.md`
- `docs/workflow.md`
- `docs/ideas.md`
- `docs/separate-agent-procedure.md`
- eventuale `AGENTS.md` locale del progetto

## Procedura pratica di separazione

### Fase 1. Definire il ruolo del nuovo agente
Prompt base consigliato:

```text
Sei l'agente dedicato al progetto Filmita. Ti occupi di trovare, verificare e organizzare film italiani reperibili online, con particolare attenzione a completezza del contenuto, lingua audio, qualità del video e tracciabilità delle evidenze. Non inventi dati. Se una verifica non è certa, la marchi come da verificare. Per YouTube puoi usare correlati e suggeriti solo come discovery aggiuntiva. Devi aggiornare il repository in modo ordinato, con commit chiari e documentazione minima ma utile.
```

### Fase 2. Spostare la memoria operativa dentro il repo
Conservare nel repo tutte le regole progettuali, così l'agente può ripartire bene anche in sessioni future.

Da mantenere aggiornati:
- workflow di discovery
- regole di verifica
- backlog idee
- eventuali convenzioni per naming, dataset e status

### Fase 3. Aggiungere un AGENTS.md locale al progetto
Creare nel repo Filmita un file `AGENTS.md` dedicato al progetto, contenente:
- missione del progetto
- cosa conta come prova forte
- cosa conta come prova debole
- regole YouTube
- regole durata
- struttura dati
- ritmo di lavoro consigliato

### Fase 4. Stabilire i task ricorrenti
Task tipici dell'agente separato:
- aggiungere 1 film nuovo verificato o semiverificato
- verificare una durata reale del player
- sostituire un link rotto con uno migliore
- cercare copertine reali o preparare prompt
- migliorare filtri e UI
- ripulire dataset e note

### Fase 5. Definire la politica di commit
Usare commit piccoli, chiari e frequenti.

Esempi:
- `feat: add verified YouTube candidate for Amarcord`
- `docs: refine duration matching workflow`
- `fix: replace removed YouTube source for La strada`

### Fase 6. Stabilire i limiti di autonomia
L'agente può fare da solo:
- ricerca
- verifica interna
- aggiornamenti dati
- miglioramenti UI semplici
- documentazione del workflow
- commit e push nel repo

L'agente deve fermarsi o chiedere conferma per:
- cambi radicali di struttura
- pubblicazione esterna non prevista
- uso di fonti dubbie o borderline
- automazioni aggressive non ancora approvate

## Modalità operative consigliate

### Modalità A. Agente dedicato permanente
Usare una sessione persistente dedicata al progetto Filmita.

Vantaggi:
- migliore continuità
- meno dispersione
- contesto più pulito

### Modalità B. Agente invocato a task
Usare l'agente solo quando c'è un task specifico.

Vantaggi:
- più controllo umano
- meno rumore

## Raccomandazione

Per Filmita conviene la **modalità permanente ma disciplinata**, con task piccoli e commit frequenti.

## Procedura operativa standard per ogni task

1. scegliere un solo obiettivo piccolo
2. fare discovery mirata
3. raccogliere evidenze
4. aggiornare JSON
5. aggiornare eventuale documentazione utile
6. validare che il sito continui a funzionare
7. fare commit
8. push

## Checklist di bootstrap per il nuovo agente

Quando il nuovo agente parte, deve leggere almeno:
- `README.md`
- `docs/workflow.md`
- `docs/ideas.md`
- eventuale `AGENTS.md` locale del repo
- dataset già presenti

## Struttura consigliata per AGENTS.md locale

Sezioni utili:
- missione
- regole di verifica
- regole YouTube
- regole durata
- policy sui poster
- policy sui commit
- definition of done

## Definition of done per un singolo film

Un film può considerarsi lavorato bene quando:
- ha titolo, regista, anno e piattaforma
- ha una fonte reale salvata
- ha almeno un livello di verifica esplicitato
- ha note su audio e qualità
- ha controllo durata fatto oppure marcato come mancante
- ha stato copertina definito
- non contiene dati inventati

## Evoluzione successiva

Quando il progetto cresce, l'agente separato può anche avere:
- script di normalizzazione dati
- strumenti di confronto automatico durate
- validatori JSON
- export multipiattaforma
- issue tracking dedicato

## Passo successivo concreto

Il prossimo miglioramento pratico è:
1. creare `Filmita/AGENTS.md`
2. scrivere lì le regole definitive del progetto
3. usare quel file come manuale operativo dell'agente separato
