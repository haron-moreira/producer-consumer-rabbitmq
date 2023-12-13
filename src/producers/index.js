const amqp = require('amqplib');

class Queue {
    async add_on_queue(msisdn) {

        try {
            const connection = await amqp.connect('amqp://localhost');
            const channel = await connection.createChannel();
            const queue = 'q1';

            await channel.assertQueue(queue, {durable: false});
            channel.sendToQueue(queue, Buffer.from(msisdn.toString()));

            console.log(`[x] Número adicionado na fila: ${msisdn.toString()}`);

            setTimeout(() => {
                connection.close();
            }, 500);
        } catch (e) {
            console.log(e);
        }

    }

}


module.exports = Queue;