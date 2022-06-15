class User {
  constructor(id, authId, color, name, phoneNumber) {
    this.id = id;
    this.authId = authId;
    this.color = color;
    this.name = name;
    this.phoneNumber = phoneNumber;
  }
}

module.exports = User;