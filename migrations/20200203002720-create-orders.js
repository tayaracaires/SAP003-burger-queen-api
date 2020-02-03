'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tablesId: {
        type: Sequelize.INTEGER,
        references: {model: 'tables', key: 'id'}
      },  
      clientName: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.DECIMAL
      },
      status: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.DATE
      },
      finalTime: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('orders');
  }
};