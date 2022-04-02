const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.Group.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(400).json(err));
  },

  findGroup: (req, res) => {
    db.Group.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(404).json({
        code: 404,
        cause: 'Id is incorrect'
      }));
  },

  createGroup: (req, res) => {
    db.Group.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(400).json(err));
  },

  addUser: (req, res) => {
    db.Group.findByIdAndUpdate(req.params.groupId,
      { "$push": { "users": { _id: req.params.userId }}},
      { "new": true, "upsert": true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(400).json(err));
  }
};
