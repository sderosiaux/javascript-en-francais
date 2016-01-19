# javascript-en-francais

Il est temps de coder en français !

WIP.

Utilise `sweet.js` pour faire la conversion à la volée en respectant le language javascript.
Seul des mots clefs français sont rajoutés.

Deux modes :

- un mode où seul les mots-clefs sont remplacés par leur équivalent
- un mode où on parle pseudo-algorithme (vous savez, celui qu'on apprend dans les écoles ?)

[Sweet js playground](http://goo.gl/ILIQRK)

Pour l'instant :

```js

pour (i = 0; i < 10; i++) { console.log(i); }
pour i de 0 à 10 { console.log(i != faux); }

pendant que (i > 0) { i--; }
pendant que i > 0 { i--; }

si (i > 10 == vrai) { i = 0 }
si i > 10 alors i = 0 fin si

si (type i == 'number') { i = 0; }
si type i == 'number' alors i = 0 fin si

console.log( 'toto' == vide || 'toto' == indéfini)

fonction fn(arg1) {
    retourner courant + arg2;
}
```

Se traduit en :

```js
for (i = 0; i < 10; i++) {
    console.log(i);
}
for (var i = 0; i < 0; i++) {
    console.log(i != false);
}
while (i > 0) {
    i--;
}
while (i > 0) {
    i--;
}
if (i > 10 == true) {
    i = 0;
}
if (i > 10) {
    i = 0;
}
if (typeof i == 'number') {
    i = 0;
}
if (typeof i == 'number') {
    i = 0;
}
console.log('toto' == null || 'toto' == undefined);
function fn(arg1) {
    return courant + arg2;
}
```
