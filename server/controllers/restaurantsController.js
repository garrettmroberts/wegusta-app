const axios = require('axios').default;
const db = require('../models');

module.exports = {
  findRestaurant: (req, res, next) => {
    const query = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=restaurant&inputtype=textquery&key=${process.env.G_MAPS_API_KEY}`;
    axios.get(query)
    .then(apiRes => {
      res.json(apiRes.data)})
    .catch(err => res.status(500).json(err))
  }
};
