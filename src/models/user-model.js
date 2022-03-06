import { Sequelize } from "sequelize";
import db from "../db.js";
import bcrypt from "bcrypt"

export default db.define('users', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    }
},

    {
        hooks: {
            beforeCreate: user => {
                const salt = bcrypt.genSaltSync()
                user.set('password', bcrypt.hashSync(user.password, salt))
            }
        },

        classMethods: {
            isPassword: (encodedPassword, password) => bcrypt.compareSync(password, encodedPassword)
        }

    });

