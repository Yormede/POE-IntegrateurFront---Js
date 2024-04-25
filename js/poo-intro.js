class Voiture {
    constructor(marque, modele) {
        this._marque = marque;
        this._modele = modele;
        this._vitesse = null;
        this._options = [];
        
        get getModele() {
            return this._modele;
        };
        get getMarque() {
            return this._marque;
        };
        get getVitesse() {
            return this._vitesse;
        };
        get getOptions() {
            return this._options;
        };
    }
}

const firstGov = new Voiture("Ford", "Mustang");

console.log(firstGov);
console.log(firstGov.constructor.name);
console.log(firstGov._marque);
console.log(firstGov._modele);
// console.log();
// console.log();