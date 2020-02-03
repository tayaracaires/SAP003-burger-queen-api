'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    clientName: DataTypes.STRING,
    total: DataTypes.DECIMAL,
    status: DataTypes.STRING,
    time: DataTypes.DATE,
    finalTime: DataTypes.DATE
  }, {});
  orders.associate = function(models) {
    // orders.hasMany(models.orderitems);
  };
  return orders;
};