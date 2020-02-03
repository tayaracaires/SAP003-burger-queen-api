'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    breakfast: DataTypes.BOOLEAN,
    isExtras: DataTypes.BOOLEAN,
    hasOptions: DataTypes.STRING
  }, {});
  products.associate = function(models) {
    // products.hasMany(models.orderitems)
  };
  return products;
};