'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        name: "Café Americano",
        price: 5,
        breakfast: true,
        isExtras: false,
        hasOptions: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Café com leite",
        price: 7,
        breakfast: true,
        isExtras: false,
        hasOptions: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Misto Quente",
        price: 10,
        breakfast: true,
        isExtras: false,
        hasOptions: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Suco Natural",
        price: 7,
        breakfast: true,
        isExtras: false,
        hasOptions: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hambúrguer Simples",
        price: 10,
        breakfast: false,
        isExtras: false,
        hasOptions: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hambúrguer Duplo",
        price: 15,
        breakfast: false,
        isExtras: false,
        hasOptions: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Batata Frita",
        price: 5,
        breakfast: false,
        isExtras: false,
        hasOptions: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Anéis de cebola",
        price: 5,
        breakfast: false,
        isExtras: false,
        hasOptions: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Água 500ml",
        price: 5,
        breakfast: false,
        isExtras: false,
        hasOptions: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Água 750ml",
        price: 7,
        breakfast: false,
        isExtras: false,
        hasOptions: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Refrigerante 500ml",
        price: 7,
        breakfast: false,
        isExtras: false,
        hasOptions: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Refrigerante 750ml",
        price: 10,
        breakfast: false,
        isExtras: false,
        hasOptions: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ovo",
        price: 1,
        breakfast: false,
        isExtras: true,
        hasOptions: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Queijo",
        price: 1,
        breakfast: false,
        isExtras: true,
        hasOptions: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};
