'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipes = sequelize.define('Recipes', {
    name: DataTypes.TEXT,
    review: DataTypes.TEXT,
    description: DataTypes.TEXT,
    url: DataTypes.TEXT,
    like: DataTypes.INTEGER,
    vegetarian: DataTypes.BOOLEAN,
    vegan: DataTypes.BOOLEAN,
    glutenfree: DataTypes.BOOLEAN
  }, {});
  Recipes.associate = function (models) {
    Recipes.belongsToMany(models.Categories, {
      through: 'RecipesCategories',
      foreignKey: 'recipesId',
      otherKey: 'CategoriesId',
    });
  };
  return Recipes;
};