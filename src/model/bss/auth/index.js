class Auth {

    async conecta() {

        const user = "user";
        const password = "password";
        const URL = "http://URL/auth";

        const form = {
            "email": user,
            "senha": password
        }

        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(form).toString()
        })

        const json_data = await response.json()

        console.log("Token gerado com sucesso: ",json_data.token)
        return json_data.token;
    }

}

module.exports = Auth;