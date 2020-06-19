var express = require('express');
var router = express.Router();
const db = require('../models');

//finds all recipes
router.get('/recipes', function (req, res, next) {
  db.Recipes.findAll({
    include: [{
      model: db.Categories,
      through: {
        attributes: [],
      }
    }]
  })
    .then(data => {
      res.json(data);
    })
});
//finds one recipe by primary key
router.get('/recipes/:id', (req, res) => {
  db.Recipes.findByPk(req.params.id, {
    include: [{
      model: db.Categories,
      through: {
        attributes: [],
      }
    }]
  })
    .then(data => {
      res.json(data);
    })
})
//adds one recipe to the db
router.post('/recipes', (req, res) => {
  const { name, review, description, url, like, vegetarian, vegan, glutenfree, categories } = req.body;
  if (!name) { res.status(400).json({ error: 'name field is required' }) }
  if (!review) { res.status(400).json({ error: 'review field is required' }) }
  if (!url) { res.status(400).json({ error: 'url field is required' }) }

  db.Recipes.create({
    name: name,
    review: review,
    description: description || '',
    url: url,
    like: like || 0,
    vegetarian: vegetarian || false,
    vegan: vegan || false,
    glutenfree: glutenfree || false,
    Categories: categories,
  })
    .then(recipe => {
      return recipe.addCategories(categories)
        .then(categories => {
          res.status(201).json(recipe); //201 status is being created
        })
    })
    .catch(error => {
      if (error.name === 'SequelizeForeignKeyConstraintError') {
        res.json({ error: 'could not find all categories' });
      } else {
        res.json({ error: 'Server Error' });
        console.log(error);
      }
    })
})

//deletes a recipe
router.delete('/recipes/:id', (req, res) => {
  db.Recipes.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(number => {
    if (number > 0) {
      res.status(204).json({});
    } else {
      res.json({error: `could not find recipe with id: ${req.params.id}`})
    }
  })


})


module.exports = router;
