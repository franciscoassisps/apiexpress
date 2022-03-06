import EmpresaRepository from "../models/empresa-model.js"

async function findAll(req, res) {
    try {
        const empresas = await EmpresaRepository.findAll();
        if (!empresas) {
            return res.status(400).send({ error: 'User not found' });
        }
        res.json(empresas);

    } catch (e) {
        return res.status.send({ error: 'Error in findAll Empresas' })
    }

}
async function findEmpresaByCnpj(req, res) {
    EmpresaRepository.findByPk(req.params.cnpj)
        .then((result) => res.json(result)).catch(error)
        .catch(error => { console.log('Erro na operacao findEmpresaByCnpj: ' + error.message) })
}

function addEmpresa(req, res) {
    EmpresaRepository.create(req.body).then((result) => res.json(result))
        .catch(error => { console.log('Erro na operacao addEmpresa: ' + error.message) })
};

async function updateEmpresa(req, res) {
    await EmpresaRepository.update({
        cnpj: req.body.cnpj,
        razao_social: req.body.razao_social,
        quantidade_func: req.body.quantidade_func,
        ramo: req.body.ramo,
    },
        {
            where: {
                cnpj: req.params.id
            }
        });

    EmpresaRepository.findByPk(req.params.cnpj)
        .then((result) => res.json(result))
        .catch(error => { console.log('Erro na operacao addEmpresa: ' + error.message) })
};

async function deleteEmpresa(req, res) {
    await EmpresaRepository.destroy({
        where: {
            cnpj: req.params.id
        }
    });

    EmpresaRepository.findAll().then((result) => res.json(result))
    .catch(error => { console.log('Erro na operacao addEmpresa: ' + error.message) })

};

export default { findAll, addEmpresa, findEmpresaByCnpj, updateEmpresa, deleteEmpresa }

