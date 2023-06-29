export default class Building {
    constructor(sqft) {
	this._sqft = sqft;
    }

    // sqft getter
    get sqft() {
	return this._sqft;
    }

    // sqfr setter
    set sqfg(newSQFT) {
	this._sqft = newSQFT;
    }

    evacuationWarningMessage() {
	throw new Error("Class extending Building must override evacuationWarningMessage");
    }
}
