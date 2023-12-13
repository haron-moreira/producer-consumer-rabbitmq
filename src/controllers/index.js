const Queue = require("../producers");

// src/controllers/indexController.js
const indexController = {};

indexController.postQueueItem = (req, res) => {
    try {
        const msisdn = req.body.msisdn
        const queue = new Queue;
        queue.add_on_queue(msisdn)
            .then(() => {
                console.log("Operação concluída com sucesso");
            })
            .catch((error) => {
                console.error("Erro durante a operação:", error);
            });

        res.status(201).send({"status": "OK"});

    } catch (e) {
        console.log(e);
        res.status(500).send({"status": "ERRO"})
    }

}

module.exports = indexController;