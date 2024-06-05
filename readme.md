# VUE-EMAIL-LIST
- Attraverso l'apposita API di Boolean, usando axios, con chiamata GET a questo [indirizzo](https://flynn.boolean.careers/exercises/api/random/mail)
    - generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
### Bonus
- Far comparire gli indirizzi email solamente quando sono stati tutti generati.

## Human-Code
- creo una funzione che:
    - ripete per 10 volte:
        1. ricevo la mail generata dall API
        2. la aggiungo dentro ad un contenitore
- nel DOM poi:
    - genero per ogni elemento del contenitore un Li con dentro la mail
