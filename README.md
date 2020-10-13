# Mes Aides Publiques


## Lancer
`yarn init` => pour installer des dépandances  
`yarn run dev` ou `yarn run build` => pour lancer le sapper  
finalement navigé sur http://localhost:3000/  


## 2 Versions

on peut décommenter ou commenter la ligne 25 dans le ficher:  
src/routes/index.svelte  
```
.max-min-width-250{
    max-width: 250px;
    min-width: 250px;
}
```
↑ version 1 les cartes peuvent se coller

```
.max-min-width-250{
    max-width: 250px;
    /* min-width: 250px; */
} 

```
↑ version 2 toujours un espace minimum