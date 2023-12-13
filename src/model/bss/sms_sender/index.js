const Token = require("../auth")

class SmsSend {

    async send(msisdn, message) {
        const token = new Token();
        const URL = "http://URL/send";

        const response = await fetch(URL, {
            method: "POST",
            body: JSON.stringify({
                "message": message,
                "number": msisdn
            }),
            headers: {
                "Content-Type": "application/json",
                "token": await token.conecta()
            }
        })

        const json_data = await response.json()
        console.log(json_data)

    }


}

module.exports = SmsSend;