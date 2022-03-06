import ColaboradorRepository from "../models/colaborador-model.js"

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
  ColaboradorRepository.findByPk(req.params.cpf)
    .then((result) => res.json(result))
    .catch(error => { console.log('Erro na operacao findColaboradorByCpf: ' + error.message) })
}

function addColaborador(req, res) {
  try {
    ColaboradorRepository.create({
      cpf: req.body.cpf,
      nome: req.body.nome,
      email: req.body.email,
      salario: req.body.salario,
      data_admissao: req.body.data_admissao,
      data_demissao: req.body.data_demissao
    }).then((result) => res.json(result))
  } catch (e) {
    console.log(e)
  }

};

async function autenticate(req, res) {
  const { cpf, email } = req.body
  const user = await ColaboradorRepository.findOne({ cpf, email });
  if (!user) {
    return res.status(400).send({ error: 'User not found' });
  }
}

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
          cpf: req.params.cpf
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
        cpf: req.params.cpf
      }
    });

    ColaboradorRepository.findAll().then((result) => res.json(result));
  } catch (e) {
    console.log(e)
  }
};

export default { findAll, addColaborador, findColaboradorByCpf, updateColaborador, deleteColaborador }

