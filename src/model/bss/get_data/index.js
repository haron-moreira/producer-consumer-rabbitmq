const Token = require("../auth")

class GetData {

    async get(msisdn) {
        const token = new Token();
        const URL = `http://URL/saldo/${msisdn}`;

        const response = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "token": await token.conecta()
            }
        })



        const json_data = await response.json()
        console.log(json_data)
        try {
            return json_data.resultado
        } catch (e) {
            console.log(e)
            return {
                "qtDadoRestante": "Undefined",
                "qtSmsRestante": "Undefined",
                "qtMinutoRestante": "Undefined",
                "dtPlanoExpira": "Undefined"
            }
        }

    }

}

module.exports = GetData;