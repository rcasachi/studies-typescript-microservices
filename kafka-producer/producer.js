const { Kafka } = require("kafkajs");
const { randomUUID } = require("node:crypto");

async function bootstrap() {
  const kafka = new Kafka({
    clientId: 'kafka-producer',
    brokers: ['precise-sloth-13833-us1-kafka.upstash.io:9092'],
    sasl: {
      mechanism: 'scram-sha-256',
      username: 'cHJlY2lzZS1zbG90aC0xMzgzMyQSkalUkViM5yxe-GpWF-I8cY8pXWahdOCGpX8',
      password: 'VcvikSMo7uFZidbKOjssatJmGoEnadWbN7_ef6rGLtBn0JGDjuQRL3JIOufm1p-EV4Wxfw==',
    },
    ssl: true,
  });

  const producer = kafka.producer();

  await producer.connect();
  await producer.send({
    topic: 'notifications.send-notifications',
    messages: [
      {
        value: JSON.stringify({
          content: 'Nova solicitação de amizade',
          category: 'social',
          recipientId: randomUUID(),
        })
      }
    ]
  });

  await producer.disconnect();
}

bootstrap();