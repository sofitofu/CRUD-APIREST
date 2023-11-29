const City = require("./City");
const Country = require("./Country");

Country.hasMany(City, { foreignKey: 'pais_Id' })
City.belongsTo(Country, { foreignKey: 'pais_Id' })