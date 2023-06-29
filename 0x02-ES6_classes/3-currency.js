export default class Currency {
  constructor(code, name) {
    if (typeof (code) === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string');
    }

    if (typeof (name) === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // name getter
  get name() {
    return this._name;
  }

  // name setter
  set name(newName) {
    if (typeof (newName) === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // code getter
  get code() {
    return this._code;
  }

  // code setter
  set code(newCode) {
    if (typeof (newCode) === 'string') {
      this._code = newCode;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  displayFullCurrency() {
    return `${this._name}(${this._code})`;
  }
}
