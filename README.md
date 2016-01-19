# javascript-en-francais

Il est temps de coder en français !

WIP.

Utilise `sweet.js` pour faire la conversion à la volée en respectant le language javascript.
Seul des mots clefs français sont rajoutés.

Deux modes :

- un mode où seul les mots-clefs sont remplacés par leur équivalent
- un mode où on parle pseudo-algorithme (vous savez, celui qu'on apprend dans les écoles ?)

[Sweet js playground]("http://sweetjs.org/browser/editor.html#//%20TODO%0A//%20switch%0A//%20case%0A//%20break%0A//%20default%0A//%20do%20%0A//%20continue%0A//%20try%20catch%20finally%0A//%20in%0A//%20new%0A//%20instanceof%0A//%20delete%0A//%20with,%20void%0A//%20var%0A%0Amacro%20pour%20%7B%0A%20%20%20%20rule%20%7B%20($x:expr;$y:expr;$z:expr)%20%7D%20=%3E%20%7B%20for($x;$y;$z)%20%7D%0A%20%20%20%20rule%20%7B%20$x:ident%20de%20$y:expr%20%C3%A0%20$z:expr%20%7D%20=%3E%20%7B%20for(var%20$x%20=%20$y;%20$x%20%3C%20$y;%20$x++)%20%7D%0A%7D%0Amacro%20si%20%7B%0A%20%20%20%20rule%20%7B%20($x:expr)%20%7D%20=%3E%20%7B%20if($x)%20%7D%0A%20%20%20%20rule%20%7B%20$x:expr%20alors%20$y:expr%20fin%20si%20%7D%20=%3E%20%7B%20if%20($x)%20%7B%20$y%20%7D%20%7D%0A%7D%0Amacro%20sinon%20%7B%20rule%20%7B%20%7D%20=%3E%20%7B%20else%20%7D%20%7D%0Amacro%20pendant%20%7B%0A%20%20%20%20rule%20%7B%20que%20($x:expr)%20%7D%20=%3E%20%7B%20while($x)%20%7D%0A%20%20%20%20rule%20%7B%20que%20$x:expr%20%7D%20=%3E%20%7B%20while($x)%20%7D%0A%7D%0A%0Amacro%20type%20%7B%0A%20%20%20%20rule%20%7B%20$x:ident%20%7D%20=%3E%20%7B%20typeof%20$x%20%7D%0A%20%20%20%20rule%20%7B%20$x:ident%20est%20%7D%20=%3E%20%7B%20typeof%20$x%20==%20$y%20%7D%0A%7D%0Amacro%20fonction%20%7B%20rule%20%7B%20$name($args%20...)%20%7D%20=%3E%20%7B%20function%20$name($args%20...)%20%7D%20%7D%0Amacro%20retourner%20%7B%0A%20%20%20%20rule%20%7B%20$x:expr%20%7D%20=%3E%20%7B%20return%20$x%20%7D%0A%20%20%20%20rule%20%7B%20%7D%20=%3E%20%7B%20return%20%7D%0A%7D%0A%0Amacro%20this%20%7B%20rule%20%7B%20%7D%20=%3E%20%7B%20courant%20%7D%20%7D%0Amacro%20vrai%20%7B%20rule%20%7B%20%7D%20=%3E%20%7B%20true%20%7D%20%7D%0Amacro%20faux%20%7B%20rule%20%7B%20%7D%20=%3E%20%7B%20false%20%7D%20%7D%0Amacro%20vide%20%7B%20rule%20%7B%20%7D%20=%3E%20%7B%20null%20%7D%20%7D%0Amacro%20ind%C3%A9fini%20%7B%20rule%20%7B%20%7D%20=%3E%20%7B%20undefined%20%7D%20%7D%0A%0A%0A%0Apour%20(i%20=%200;%20i%20%3C%2010;%20i++)%20%7B%20console.log(i);%20%7D%0Apour%20i%20de%200%20%C3%A0%2010%20%7B%20console.log(i%20!=%20faux);%20%7D%0A%0Apendant%20que%20(i%20%3E%200)%20%7B%20i--;%20%7D%0Apendant%20que%20i%20%3E%200%20%7B%20i--;%20%7D%0A%0Asi%20(i%20%3E%2010%20==%20vrai)%20%7B%20i%20=%200%20%7D%0Asi%20i%20%3E%2010%20alors%20i%20=%200%20fin%20si%0A%0Asi%20(type%20i%20==%20'number')%20%7B%20i%20=%200;%20%7D%0Asi%20type%20i%20==%20'number'%20alors%20i%20=%200%20fin%20si%0A%0Aconsole.log(%20'toto'%20==%20vide%20%7C%7C%20'toto'%20==%20ind%C3%A9fini)%0A%0Afonction%20fn(arg1)%20%7B%0A%20%20%20%20retourner%20courant%20+%20arg2;%0A%7D")

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
