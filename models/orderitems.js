'use strict';
module.exports = (sequelize, DataTypes) => {
  const orderItems = sequelize.define('orderItems', {
    productId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    options: DataTypes.STRING,
    qtd: DataTypes.INTEGER,
    productExtraId: DataTypes.INTEGER
  }, {});
  orderItems.associate = function(models) {
  
  };
  return orderItems;
};