module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    propertyId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    reviewText: DataTypes.TEXT,
    cleanlinessRate: DataTypes.INTEGER,
    accuracyRate: DataTypes.INTEGER,
    checkInRate: DataTypes.INTEGER,
    communicationRate: DataTypes.INTEGER,
    locationRate: DataTypes.INTEGER,
    valueRate: DataTypes.INTEGER
  });
  Review.associate = (models) => {
    Review.belongsTo(models.Property, { foreignKey: 'propertyId' });
  };
  return Review;
};
