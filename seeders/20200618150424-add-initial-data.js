'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Breakfast',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name: 'Lunch',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name: 'Dinner',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name: 'Brunch',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);

    await queryInterface.bulkInsert('Recipes', [
      {
        name: 'One',
        review: 'Good',
        description: 'one description',
        url: 'http://one.com',
        like: 9,
        vegetarian: false,
        vegan: false,
        glutenfree: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Two',
        review: 'Good',
        description: 'two description',
        url: 'http://two.com',
        like: 2,
        vegetarian: false,
        vegan: false,
        glutenfree: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    );

    return await queryInterface.bulkInsert('RecipesCategories', [
      {
        recipesId: 1,
        CategoriesId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        recipesId: 1,
        CategoriesId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        recipesId: 2,
        CategoriesId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        recipesId: 1,
        CategoriesId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('RecipesCategories', null, {})
    await queryInterface.bulkDelete('Recipes', null, {})
    await queryInterface.bulkDelete('Categories', null, {})

  }
};
