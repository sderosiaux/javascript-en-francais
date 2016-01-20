// TODO
// do
// new
// instanceof
// delete
// with, void

macro pour {
    rule { ($x:expr;$y:expr;$z:expr) } => { for($x;$y;$z) }
    rule { $x:ident de $y:expr à $z:expr } => { for(var $x = $y; $x < $y; $x++) }
    rule { finir } => { finally }
}
macro si {
    rule { ($x:expr) } => { if($x) }
    rule { $x:expr alors $y:expr fin si } => { if ($x) { $y } }
    rule { ça plante } => { catch }
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

macro en { rule { fonction de } => { switch } }
macro cas { rule { } => { case } }
macro arrêter { rule { } => { break } }
macro defaut { rule { } => { default } }
macro continuer { rule { } => { continue } }

macro déclarer { rule { } => { var } }
macro courant { rule { } => { this } }
macro vrai { rule { } => { true } }
macro faux { rule { } => { false } }
macro vide { rule { } => { null } }
macro indéfini { rule { } => { undefined } }
macro est {
    rule { dans } => { in }
    rule { vide } => { === null }
    rule { indéfini } => { === undefined }
}
macro vaut {
    rule { } => { === }  
}

macro essayer { rule { } => { try } }
