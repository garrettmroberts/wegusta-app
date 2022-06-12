const db = require('../db');
const User = require('../models/userModel');

module.exports = {
  createUser: async (req, res) => {
    db.collection("users").add(req.body)
    .then(dbResponse => res.status(201).json({ message: "Record saved successfully", data: dbResponse }))
    .catch(err => res.status(422).json(err));
  },

  findAll: (req, res) => {
    db.collection('users').get()
    .then(dbResponse => {
      const response = [];
      dbResponse.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
        const user = new User(
          doc.id,
          doc.data().authId,
          doc.data().color,
          doc.data().name
        );
        console.log(user)
        response.push(user);
      });
      res.status(200).json(response)
    }).catch(err => res.status(400).json({ message: err.message }))
  }
};
