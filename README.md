# javascript-en-francais

Il est temps de coder en français !

![La France](https://rawgit.com/chtefi/javascript-en-francais/master/France.png)

TEC. (WIP)

Ce projet utilise `sweet.js` pour faire la conversion à la volée vers le langage Javascript.
Seul des mots-clefs franco-français sont rajoutés.

Deux modes :

- un mode où seul les mots-clefs sont simplement remplacés par leur équivalent
- un mode où on parle pseudo-algorithme, en cours (vous savez, celui qu'on apprend dans les écoles ?)

## A FAIRE

- ajouter les quelques keywords manquant
- ajouter une syntaxe pseudo-algorithme complète

## Chargeur webpack

Il est possible de coder en français et de convertir à la volée en Javascript avec un chargeur webpack : [sweetjs-loader](https://github.com/jlongster/sweetjs-loader).

```js
loaders: [{
  test: /\.js$/, loader: 'sweetjs?modules[]=./macros.sjs,readers[]=reader-mod'
}]
```

## Exemple et terrain de jeu

[Sweet js playground](http://goo.gl/XeWJcX) (appuyer sur `Compile`)

Quasiment tous les mots-clefs sont traduits, il est possible de taper ce genre de programme :

```js

déclarer i = 13;

// try catch finally
essayer {
    déclarer i = 1/0;
} si ça plante (e) {
    console.log('boom')
} pour finir {
    i = 0;
}

// switch case default
en fonction de (i) {
    cas 1: arrêter;
    cas 2: arrêter;
    defaut: retourner 5;
}

// in
si ('document' est dans window) { i = 1; }

// ===
si (i vaut 3) { i = 0; }

// for
pour (i = 0; i < 10; i++) {
    console.log(i);
    si (i > 5) continuer
    sinon arrêter
}
pour i de 0 à 10 { console.log(i != faux); }

// while
tant que (i > 0) { i--; }
tant que i > 0 { i--; }

// if else
si (i > 10 == vrai) { i = 0 }
si i > 10 alors i = 0 fin si

si (type i == 'number') { i = 0; }
si type i == 'number' alors i = 0 fin si

// === null / === undefined
console.log(i est vide || i est indéfini)

// function, return, this
fonction fn(arg1) {
    retourner courant + arg2;
}
```

Se traduit bien en Javascript classique :

```js
var i = 13;
try {
    var // try catch finally
    i = 1 / 0;
} catch (e) {
    console.log('boom');
} finally {
    i = 0;
}
switch (// switch case default
    i) {
case 1:
    break;
case 2:
    break;
default:
    return 5;
}
if ('document' in window) {
    i = 1;
}
if (i === 3) {
    i = 0;
}
for (i = 0; i < 10; i++) {
    console.log(i);
    if (i > 5)
        continue;
    else
        break;
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
console.log(i === null || i === undefined);
function fn(arg1) {
    return this + arg2;
}
```
