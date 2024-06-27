module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
    name: DataTypes.STRING
  });
  Property.associate = (models) => {
    Property.hasMany(models.Review, { foreignKey: 'propertyId' });
  };
  return Property;
};
