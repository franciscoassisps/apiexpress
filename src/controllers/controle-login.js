
function get(req, res) {
    res.send({ ok: true, user:req.userId})
}

export default {get}

