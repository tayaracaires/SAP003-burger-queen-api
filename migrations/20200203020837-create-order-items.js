'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orderItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {model:'products', key:'id'}
      },
      orderId: {
        type: Sequelize.INTEGER,
        references: {model:'orders', key:'id'}
      },
      options: {
        type: Sequelize.STRING
      },
      qtd: {
        type: Sequelize.INTEGER
      },
      productExtraId: {
        type: Sequelize.INTEGER,
        references: {model:'products', key:'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orderItems');
  }
};