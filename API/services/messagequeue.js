require('dotenv').config();
const amqplib = require('amqplib/callback_api');
const queue = 'api';

const RABBITMQ_URL = process.env.RABBITMQ_URL || 'amqp://localhost';

let retries = 5;

async function openConnection() {
  if (retries === 0) {
    console.log('Failed to connect after 5 attempts, please check your connection');
    return;
  } 

  amqplib.connect(RABBITMQ_URL, (err, conn) => {
    if (err) {
      console.log('Failed to connect, retrying in 3 seconds...');
      retries--;
      setTimeout(openConnection, 3000);
      return;
    }

    conn.createChannel((err, ch1) => {
      if (err) throw err;

      ch1.assertQueue(queue);

      ch1.consume(queue, (msg) => {
        if (msg !== null) {
          consumeMessage(msg);
          ch1.ack(msg);
        } else {
          console.log("Consumer cancelled by server");
        }
      });
    });
  });
}

function consumeMessage(msg) {
  const data = msg.content.toString();
  try {
    const json_data = JSON.parse(data);
    console.log(json_data);
  } catch (e) {
    console.log("Error while mail request from message bus: ", e)
  }
}

module.exports = { openConnection };