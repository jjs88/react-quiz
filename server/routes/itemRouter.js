const express = require('express');
const cachedItems = require('../data/items.json');
const fs = require('fs');
const util = require('util');
const fs_writeFile = util.promisify(fs.writeFile);

const itemRouter = express.Router();

const getItem = function (itemId) {
    return cachedItems.find(function (item) {
        return item.id === itemId || item.integerId === itemId;
    }) || {};
};

itemRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    const item = getItem(id);
    res.status(200).json(item);
});

//new POST route
itemRouter.post('/post', (req, res) => {
  //grab file and save data to obj
  const { id } = req.body;
  const obj = {
      id,
      isFav: true
  };
  const dir = __dirname + '/../data/favorites.json';
  





  fs_writeFile(dir, JSON.stringify(obj))
    .then(() => {
      console.log('works');
      fs.readFile(dir, 'utf8', (err, data) => {
        console.log(JSON.parse(data));
        res.send(data);
      })
    })
    .catch(err => console.log(err))

})

module.exports = itemRouter;
