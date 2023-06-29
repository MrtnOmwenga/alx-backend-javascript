export default class Building {
    constructor(sqft) {
	if (this.constructor !== Building && !this.evacuationWarningMessage) {
	    throw new Error("Class extending Building must override evacuationWarningMessage");
	}
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
}
