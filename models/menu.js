// const { Model, DataTypes } = require("sequelize");
// const sequelize = require();

// class Menu extends Model { }

// Menu.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         // party_name: {
//         //     type: DataTypes.STRING,
//         //     allowNull: false,
//         // },
//         // party_date: {
//         //     type: DataTypes.DATE,
//         //     allowNull: false,
//         // },
//         user_id: {//party id
//             type: DataTypes.INTEGER,
//             references: {
//                 model: "user",
//                 key: "id",
//             },
//         },
//         food: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         drinks: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: "Menu",
//     }
// );

// module.exports = Menu;
