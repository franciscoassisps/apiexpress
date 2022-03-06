import UserRepository from "../models/user-model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import authConfig from "../config/authConfig.js"

function genarateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    })
}

async function autenticate(req, res) {
    const { email, password } = req.body;
    const user = await UserRepository.findOne({ where: { email, password } });
    if (!user) {
        return res.status(400).send({ error: 'User not found' });
    }
    if (await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Invalid password' });
    user.password = undefined;
    res.send({
        user, token: genarateToken({ id: user.id })
    });
}

async function findAll(req, res) {
    try {
        const user = await UserRepository.findAll({ attributes: { exclude: ['password'] } });
        if (!user) {
            return res.status(400).send({ error: 'User not found' });
        }
        res.json(user);
    } catch (e) {
        return res.status(400).send({ error: 'error in operacion findAll' });
    }

}
function findUserById(req, res) {
    UserRepository.findByPk(req.params.id)
        .then((result) => res.json(result))
        .catch(error => { console.log('Erro na operacao findUserById: ' + error.message) })
}

async function registerUser(req, res) {
    const { email } = req.body;
    if (await UserRepository.findOne({ where: { email } }))
        return res.status(400).send({ error: "User already exists" })
        const user = await UserRepository.create(req.body)
        user.password = undefined;
        
        res.send({
            user, token: genarateToken({ id: user.id })
        });


};

async function updateUser(req, res) {
    try {
        await UserRepository.update({
            nome: req.body.nome,
            email: req.body.email,
            password: req.body.password,
        },
            {
                where: {
                    id: req.params.id
                }
            });

        UserRepository.findByPk(req.params.id)
            .then((result) => res.json(result))
    } catch (e) {
        console.log(e)
    }
};

async function deleteUser(req, res) {
    try {
        await UserRepository.destroy({
            where: {
                id: req.params.id
            }
        });

        UserRepository.findAll().then((result) => res.json(result));
    } catch (e) {
        console.log(e)
    }
};

export default { findAll, registerUser, autenticate, findUserById, updateUser, deleteUser }
