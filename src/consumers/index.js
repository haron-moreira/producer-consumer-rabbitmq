const amqp = require('amqplib');
const SmsSend = require("../model/bss/sms_sender")
const GetData = require("../model/bss/get_data")


async function receberMensagem() {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    const queue = 'q1';

    await channel.assertQueue(queue, { durable: false });
    console.log(`[*] Aguardando mensagens. Para sair, pressione CTRL+C`);

    await channel.consume(queue, async (mensagem) => {
        console.log(`[x] Recebido: ${mensagem.content.toString()}`);
        const sms = new SmsSend();
        const info = new GetData();
        const data = await info.get(mensagem.content.toString())

        await sms.send(mensagem.content.toString(), `Recarga concluida com sucesso!\n\nSeu saldo agora esta com os seguintes beneficios:\nDados: ${(parseFloat(data.qtDadoRestante) / 1000).toFixed(2).toString()} GB\nVoz: ${data.qtMinutoRestante} Minutos\nSMS: ${data.qtSmsRestante} Restantes\nValidos ate: ${data.dtPlanoExpira}\n\nAgradecemos por escolher nossos servicos.`)

    }, {noAck: true});
}

receberMensagem();