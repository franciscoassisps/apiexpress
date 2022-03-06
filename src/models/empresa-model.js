import { Sequelize } from "sequelize";
import db from "../db.js";

export default db.define("empresas", {
  cnpj: {
    type: Sequelize.STRING,
    primaryKey: true,
    autoIncrement: false,
    allowNull: false,
    unique:true,
  },
  razao_social: {
    type: Sequelize.STRING,
  },
  quantidade_func: {
    type: Sequelize.INTEGER,
  },
  ramo:{
    type: Sequelize.STRING,
  },
});