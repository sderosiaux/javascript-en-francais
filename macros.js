// TODO
// switch
// case
// break
// default
// do
// continue
// try catch finally
// in
// new
// instanceof
// delete
// with, void
// var

macro pour {
    rule { ($x:expr;$y:expr;$z:expr) } => { for($x;$y;$z) }
    rule { $x:ident de $y:expr à $z:expr } => { for(var $x = $y; $x < $y; $x++) }
}
macro si {
    rule { ($x:expr) } => { if($x) }
    rule { $x:expr alors $y:expr fin si } => { if ($x) { $y } }
}
macro sinon { rule { } => { else } }
macro tant {
    rule { que ($x:expr) } => { while($x) }
    rule { que $x:expr } => { while($x) }
}

macro type {
    rule { $x:ident } => { typeof $x }
    rule { $x:ident est } => { typeof $x == $y }
}
macro fonction { rule { $name($args ...) } => { function $name($args ...) } }
macro retourner {
    rule { $x:expr } => { return $x }
    rule { } => { return }
}

macro this { rule { } => { courant } }
macro vrai { rule { } => { true } }
macro faux { rule { } => { false } }
macro vide { rule { } => { null } }
macro indéfini { rule { } => { undefined } }
