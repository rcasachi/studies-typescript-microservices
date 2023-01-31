import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['precise-sloth-13833-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'cHJlY2lzZS1zbG90aC0xMzgzMyQSkalUkViM5yxe-GpWF-I8cY8pXWahdOCGpX8',
          password:
            'VcvikSMo7uFZidbKOjssatJmGoEnadWbN7_ef6rGLtBn0JGDjuQRL3JIOufm1p-EV4Wxfw==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
