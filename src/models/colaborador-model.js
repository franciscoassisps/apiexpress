import { Sequelize } from "sequelize";
import db from "../db.js";

export default db.define("colaboradores", {
    cpf: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    salario: {
        type: Sequelize.INTEGER.UNSIGNED,
    },
    data_admissao: {
        type: Sequelize.DATEONLY
    },
    data_demissao: {
        type: Sequelize.DATEONLY
    },
});