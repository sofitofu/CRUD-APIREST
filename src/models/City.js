const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const City = sequelize.define('ciudades', {
    // Definimos las columnas aquí
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
    // Country Id
}, {
    // Deshabilitar timestamps
    timestamps: false,
  });




module.exports = City;