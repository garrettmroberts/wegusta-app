const db = require('../db');
const User = require('../models/userModel');

module.exports = {
  createUser: async (req, res) => {
    const docRef = await db.collection('users').doc(req.body.phoneNumber)
    docRef.get().then(doc => {
      if (doc.exists) {
        res.status(400).json({ message: 'This phone number is already registered with another account.'})
      } else {
        db.collection("users").doc(req.params.id).set(req.body)
        .then(dbResponse => res.status(201).json({ message: "Record saved successfully", data: dbResponse }))
        .catch(err => res.status(422).json(err));
      }
    })
  },

  findAll: (req, res) => {
    db.collection('users').get()
    .then(dbResponse => {
      const response = [];
      dbResponse.forEach((doc) => {
        const user = new User(
          doc.id,
          doc.data().color,
          doc.data().name,
          doc.data().phoneNumber
        );
        response.push(user);
      });
      res.status(200).json(response)
    }).catch(err => res.status(400).json({ message: err.message }))
  },

  findUser: (req, res) => {
    db.collection('users').doc(req.params.id).get()
   .then(doc => {
     if (doc.exists) {
      const responseData = doc.data();
      const user = new User(
        doc.id,
        responseData.color,
        responseData.name,
        responseData.phoneNumber
      );
      res.status(200).json(user);   
    } else {
      res.status(400).json({ message: 'Id not associated with a known account'})
    }
   }).catch(err => res.status(400).json({ message: err.message }))
  },

  updateUser: (req, res) => {
    db.collection('users').doc(req.params.id).update(req.body)
    .then(dbResponse => {
      res.status(200).json({message: 'Fields updated successfully.'})
    }).catch(err => res.status(400).json({ message: err.message }))
  },

  deleteUser: (req, res) => {
    db.collection('users').doc(req.params.id).delete()
    .then(dbResponse => {
      res.status(200).json({ message: 'User deleted successfully,'})
    }).catch(err => res.status(400).json({ message: err.message }))
  }
};
