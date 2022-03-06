import express from "express";
import colaboradores from "./src/controllers/colaboradores-controller.js";
import empresas from "./src/controllers/empresas-controller.js";
import users from "./src/controllers/users-controller.js"
import authMeddleware from "./src/middlewarers/authMiddleware.js";
import login from "./src/controllers/controle-login.js"

const routes = express.Router();

routes.get("/colaboradores", colaboradores.findAll);
routes.get('/colaboradores/:id', colaboradores.findColaboradorByCpf);
routes.post('/colaboradores', colaboradores.addColaborador);
routes.put('/colaboradores/:id', colaboradores.updateColaborador);
routes.delete('/colaboradores/:id', colaboradores.deleteColaborador);


routes.get("/empresas", empresas.findAll);
routes.get('/empresas/:id', empresas.findEmpresaByCnpj);
routes.post('/empresas', empresas.addEmpresa);
routes.put('/empresas/:id', empresas.updateEmpresa);
routes.delete('/empresas/:id', empresas.deleteEmpresa);


routes.get('/users', users.findAll);
routes.get('/users/:id', users.findUserById);
routes.post('/users', users.registerUser);
routes.put('/users/:id', users.updateUser);
routes.delete('/users/:id', users.deleteUser);
routes.post('/autentica', users.autenticate);

routes.use(authMeddleware)
routes.get('/login',login.get)


export { routes as default };
