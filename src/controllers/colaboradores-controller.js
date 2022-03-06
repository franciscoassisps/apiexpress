import ColaboradorRepository from "../models/colaborador-model.js"
import { cpf } from "cpf-cnpj-validator"

const valida = cpf

async function findAll(req, res) {
  try {
    const colaboradorRepository = await ColaboradorRepository.findAll();
    if (!colaboradorRepository) {
      return res.status(400).send({ error: 'Colaborador not found' });
    }
    res.json(colaboradorRepository);
  } catch (e) {
    console.log(e);
  }

}

function findColaboradorByCpf(req, res) {
  ColaboradorRepository.findByPk(req.params.id)
    .then((result) => res.json(result))
    .catch(error => { console.log('Erro na operacao findColaboradorByCpf: ' + error.message) })
}

async function addColaborador(req, res) {
  try {
    const { cpf, email } = req.body;
    //const user = await ColaboradorRepository.findOne({ where: { email } })
    console.log('URRRUUEUTOAQUI', cpf, valida.isValid(cpf))
    if (!valida.isValid(cpf))
      return res.status(400).send({ error: 'Invalid cpf' });
    if (await ColaboradorRepository.findOne({ where: { cpf } }) || await ColaboradorRepository.findOne({ where: { email } }))
      return res.status(400).send({ error: "User already exists" });
    const colaborador = await ColaboradorRepository.create(
      {
        cpf: req.body.cpf,
        nome: req.body.nome,
        email: req.body.email,
        salario: req.body.salario,
        data_admissao: req.body.data_admissao,
        data_demissao: req.body.data_demissao
      }).then((colaborador) => res.json(colaborador))
  } catch (e) {
    console.log(e)
  }
};

async function updateColaborador(req, res) {
  try {
    await ColaboradorRepository.update({
      cpf: req.body.cpf,
      nome: req.body.nome,
      email: req.body.email,
      salario: req.body.salario,
      data_admissao: req.body.data_admissao,
      data_demissao: req.body.data_demissao
    },
      {
        where: {
          cpf: req.params.id
        }
      });

    ColaboradorRepository.findByPk(req.params.cpf)
      .then((result) => res.json(result))
  } catch (e) {
    console.log(e)
  }
};

async function deleteColaborador(req, res) {
  try {
    await ColaboradorRepository.destroy({
      where: {
        cpf: req.params.id
      }
    });

    ColaboradorRepository.findAll().then((result) => res.json(result));
  } catch (e) {
    console.log(e)
  }
};

export default { findAll, addColaborador, findColaboradorByCpf, updateColaborador, deleteColaborador }

