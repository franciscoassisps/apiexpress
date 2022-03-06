import EmpresaRepository from "../models/empresa-model.js"

async function findAll(req, res) {
    const empresas = await EmpresaRepository.findAll();
    res.json(empresas);
}
function findEmpresaByCnpj(req, res) {
    EmpresaRepository.findByPk(req.params.cnpj)
        .then((result) => res.json(result))
}

function addEmpresa(req, res) {
    EmpresaRepository.create({
        cnpj: req.body.cnpj,
        razao_social: req.body.razao_social,
        quantidade_func: req.body.quantidade_func,
        ramo: req.body.ramo,
    }).then((result) => res.json(result))
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
};

async function deleteEmpresa(req, res) {
    await EmpresaRepository.destroy({
        where: {
            cnpj: req.params.id
        }
    });

    EmpresaRepository.findAll().then((result) => res.json(result));
};

export default { findAll, addEmpresa, findEmpresaByCnpj, updateEmpresa, deleteEmpresa }

