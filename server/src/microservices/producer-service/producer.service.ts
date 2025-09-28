import { Injectable } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory } from "@nestjs/microservices";
import { rabbitMQConfig } from "../rabbitmq.options";

@Injectable()
export class ProducerService {
  constructor(private client: ClientProxy) {
    this.client = ClientProxyFactory.create(rabbitMQConfig());
  }

  async sendMessage(pattern: string, data: any) {
    return this.client.send(pattern, data).toPromise();
  }
}
